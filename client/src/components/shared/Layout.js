import React from 'react';
import NavBarComponent from './Nav';
import Footer from './Footer';
import '../../pages/styles.css';
import SidebarMenu from './Sidebar';

const Layout = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className='header'>
        <NavBarComponent />
      </div>  
      <div className='main-content'>
        {
          user ? (
            <div className='content row'>
              <div className='col-lg-3' style={{width: "20% !important"}}>
                <SidebarMenu />
              </div>
              <div className='col-lg-9'>
                <div className='container mt-5'>

                {children}
                </div>
              </div>
            </div>
          ) : (
            <div className='content'>
              {children}
            </div>
          )
        }
      </div>
      {
          user ? (
          <></>
                    ) : (
          <div className='footer'>
                  <Footer />
                </div>
                    )
                  }
    </>
  );
};

export default Layout;
