import React from 'react';
import './banner.css'; // Ensure to create this CSS file for styling
import { Link } from 'react-router-dom';

const BannerComponent = () => {
  return (
    <div className="banner custom-banner">
      <div className="banner-content">
        <h2>Show your support with a donation of your choice. This will only take a minute.</h2>
        <p>But we'll be forever grateful.</p>
        <Link to={"/donate-money"} className="btn btn-light btn-lg">Donate</Link>
      </div>
    </div>
  );
};

export default BannerComponent;
