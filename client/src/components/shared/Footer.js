import React from 'react';

import Logo from '../../lifeline_logo.png';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
  
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
     
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
     
    <div>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
     
  </section>
   
  <section className="">
    <div className="container text-center text-md-start mt-5">
      
      <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            <img src={Logo} alt='LifeLine' height="50"/>
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
       
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Laravel</a>
          </p>
        </div>
        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
           
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
         
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
           
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
         
      </div>
       
    </div>
  </section>
 
  <div className="text-center p-4">
  © Copyright 2024 Canadian Blood Services. All Rights Reserved.
  </div>
  
</footer>
 
    /* <footer className="bg-white text-dark py-5">
      <div className="container text-center">
        <h5 className="text-uppercase mb-3">1 888 2 DONATE</h5>
        <p className="mb-4">(1-888-236-6283)</p>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p>We acknowledge that the work of Canadian Blood Services spans many Territories and Treaty areas across the country. We recognize the land and waters that have inspired our work and offer gratitude to those Indigenous peoples on whose territory we work, live and play.</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <h6 className="text-uppercase mb-3">Footer Menu</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">Publications and reports</a></li>
              <li><a href="#" className="text-dark">Media</a></li>
              <li><a href="#" className="text-dark">Corporate policies</a></li>
              <li><a href="#" className="text-dark">Privacy/Legal</a></li>
              <li><a href="#" className="text-dark">Site Map</a></li>
              <li><a href="#" className="text-dark">Contact us</a></li>
              <li><a href="#" className="text-dark">Respect</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="text-uppercase mb-3">Canadian Blood Services</h6>
            <p>Acknowledges the funding of provincial, territorial and federal governments. The views expressed in this document are those of Canadian Blood Services and do not necessarily reflect those of governments.</p>
            <p>Charitable Registration No. 870‍ 157‍ 641‍ RR0001</p>
          </div>
        </div>
        <div className="mt-4">
          <p>© Copyright 2024 Canadian Blood Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer> */
    

  );
};

export default Footer;
