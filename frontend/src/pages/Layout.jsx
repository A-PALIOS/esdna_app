import React from 'react';
import Navbar from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { SidebarNew } from '../components/SidebarNew';
const Layout = ({children}) => {
  return (
    <React.Fragment>
        <Navbar/>
        <div className="columns mt-6 " style={{minHeight:"100vh",backgroundColor:"#06603a"}}>
            {/* <div className="column is-one-fifth"> */}
                {/* <Sidebar/> */}
                <SidebarNew/>
            {/* </div> */}
            <div className="column has-background-light">
                <main>{children}</main>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Layout