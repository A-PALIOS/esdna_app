import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BuildingMetricsTable = ({ buildingMetrics }) => {
  const itemsPerPage = 25;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = buildingMetrics.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(buildingMetrics.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getColorClass2 = (value, metricname) => {
    // Define color cases based on metricname
    switch (metricname) {
      case 'PM10':
        return{
          label: value < 50 ?'Χαμηλή': 'Υψηλή',
          className: value < 50 ? 'green-text' : 'red-text' 
      };
      case 'PM2.5':
        return{
          label: value < 20 ?'Χαμηλή': 'Υψηλή',
          className: value < 20 ? 'green-text' : 'red-text' 
      };
      case 'SO2':
        return{
          label: value < 125 ?'Χαμηλή': 'Υψηλή',
          className: value < 50 ? 'green-text' : 'red-text' 
      };
      case 'CO':
        return{
          label: value < 10 ?'Χαμηλή': 'Υψηλή',
          className: value < 10 ? 'green-text' : 'red-text' 
      };
      case 'NO2':
        return{
          label: value < 40 ?'Χαμηλή': 'Υψηλή',
          className: value < 40 ? 'green-text' : 'red-text' 
      };
  
      case 'TSP':
        return {
          label:value < 50 ? 'Χαμηλή' : value >= 50 && value <= 80 ? 'Μέτρια' : 'Υψηλή',
          className: value < 50 ? 'green-text' : value >= 50 && value <= 80 ? 'yellow-text' : 'red-text'
      };
      case 'TEQ PCDD/Fs':
        return {
          label:value < 42 ? 'Χαμηλή' : value >= 42 && value <= 150 ? 'Μέτρια' : 'Υψηλή',
          className: value < 42 ? 'green-text' : value >= 42 && value <= 150 ? 'yellow-text' : 'red-text'
      };
      case 'TEQ PCBS':
        return {
          label:value < 10 ? 'Χαμηλή' : value >= 10 && value <= 40 ? 'Μέτρια' : 'Υψηλή',
          className: value < 10 ? 'green-text' : value >= 10 && value <= 40 ? 'yellow-text' : 'red-text'
      };
      case 'ind PCBs':
        return {
          label:value < 60 ? 'Χαμηλή' : value >= 60 && value <= 180 ? 'Μέτρια' : 'Υψηλή',
          className: value < 60 ? 'green-text' : value >= 60 && value <= 180 ? 'yellow-text' : 'red-text'
      };
      case 'NO':
        return {
          label:value < 10 ? 'Χαμηλή' : value >= 10 && value <= 50 ? 'Μέτρια' : 'Υψηλή',
          className: value < 10 ? 'green-text' : value >= 10 && value <= 50 ? 'yellow-text' : 'red-text'
      };
      case 'OC/EC':
        return {
          label:value < 50 ? 'Χαμηλή' : value >= 50 && value <= 80 ? 'Μέτρια' : 'Υψηλή',
          className: value < 50 ? 'green-text' : value >= 50 && value <= 80 ? 'yellow-text' : 'red-text'
      };
      // Add more cases as needed
      default:
        return { label: 'Άγνωστο', className: 'black-text' }; // Default label and class name
    }
  };

  return (
    <div className="box">
      <h1>Building Metrics:</h1>
      <table className='table is-stripped is-fullwidth'>
        <thead>
          <tr>
            <th>No</th>
            <th>Building Name</th>
            <th>Metric Name</th>
            <th>Metric Value</th>
            <th>Concentration</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((buildingMetric, index) => (
            <tr key={uuidv4()}>
              <td>{index + 1 + indexOfFirstItem}</td>
              <td>{buildingMetric.building.name}</td>
              <td>{buildingMetric.metric.name}</td>
              <td>{buildingMetric.value}</td>
              <td>
                <span className={getColorClass2(buildingMetric.value, buildingMetric.metric.name).className}>
                  {getColorClass2(buildingMetric.value, buildingMetric.metric.name).label}
                </span>
              </td>
              <td>{buildingMetric.year}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <style jsx>{`
        .pagination {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }

        .pagination button {
          margin: 0 5px;
          padding: 5px 10px;
          cursor: pointer;
          border: 1px solid #ccc;
          background-color: #fff;
        }

        .pagination button.active {
          background-color: #007bff;
          color: #fff;
          border: 1px solid #007bff;
        }

        .pagination button:disabled {
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default BuildingMetricsTable;
