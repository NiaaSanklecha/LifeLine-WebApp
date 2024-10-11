import React from 'react';
import NavBarComponent from '../components/shared/Nav';
import Footer from '../components/shared/Footer';
import BannerComponent from '../components/shared/Banner';
import './styles.css'
import { useSelector } from 'react-redux';
import Layout from '../components/shared/Layout';
import Spinner from '../components/shared/Spinner';
import FlipCard from '../components/shared/FlipCard';
// Import images from the src folder
import center1Image from '../images/centre1.jpg';
import center2Image from '../images/centre2.jpg';
import center3Image from '../images/centre3.jpg';
import plasmaDonationImage from '../images/plasma.jpg';
import bloodDonationImage from '../images/donate.jpg';
import donor1Image from '../images/donor1.png';
import donor2Image from '../images/donor2.png';
import donor3Image from '../images/donor3.png';
import donor4Image from '../images/donor4.png';
import BloodInventory from '../components/shared/BloodInventory';

// Example individual data
const individuals = [
  {
    frontImage: donor1Image,
    frontTitle: 'Alice Johnson',
    backContent: 'Alice has donated blood 15 times and has helped save over 45 lives.'
  },
  {
    frontImage: donor2Image,
    frontTitle: 'Jane Smith',
    backContent: 'Jane regularly donates plasma and supports numerous patients with blood disorders.'
  },
  {
    frontImage: donor3Image,
    frontTitle: 'Jack Ryan',
    backContent: 'Jack has been a consistent donor, participating in several drives and blood donation events.'
  },
  {
    frontImage: donor4Image,
    frontTitle: 'Bob Brown',
    backContent: 'Bob actively donates plasma and assists in organizing local donation campaigns.'
  }
];
const Home = () => {
 const {loading,error} = useSelector(state=> state.auth)
  return (
    <>
    
    {error && <span>{alert(error)}</span>}
    {loading ? (
      <Spinner />
    ) : (
      <>
      <div className='header'>
        <NavBarComponent />
      </div>
      <div className='main-content'>
      <div className='content'>
      <header className="bg-primary text-white text-center py-5 mb-4 custom-header">
            <div className="container">
              <h1 className="display-4">Welcome to LifeLine</h1>
              <p className="lead">Find nearby donor centers and filter by blood type availability</p>
            </div>
          </header>
          
      

      {/* New section for flip cards */}
      <section className="individuals-section py-5">
            <div className="container">
              <h2 className="text-center mb-4">Meet Our Contributors</h2>
              <div className="row">
                {individuals.map((person, index) => (
                  <div className="col-md-3" key={index}>
                    <FlipCard 
                      frontImage={person.frontImage} 
                      frontTitle={person.frontTitle} 
                      backContent={person.backContent} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="ways-to-donate-section py-5">
          <div className="container">
          <h2 className="text-center mb-4">Blood Inventory</h2>
          <p className="text-center mb-4">
          We manage the national supply of blood products for all the provinces and territories. Many variables can impact our inventory such as weather, holidays or tragic events. Below is an overview of our inventory levels across all blood types.
              </p>
            <BloodInventory/>
            </div>
            </section>
          


          <section className="management-centers-section py-5">
            <div className="container">
              <h2 className="text-center mb-4">Blood Bank Management Centers</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-4">
                    <img src={center1Image} className="card-img-top" alt="Center 1"/>
                    <div className="card-body">
                      <h5 className="card-title">Cambridge Blood Services</h5>
                      <p className="card-text">Location: Cambridge Memorial Hospital</p>
                      <p className="card-text">Services: Blood Donation, Plasma Donation</p>
                      <a href="#" className="btn btn-outline-primary">Learn More</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4">
                    <img src={center2Image} className="card-img-top" alt="Center 2"/>
                    <div className="card-body">
                      <h5 className="card-title">Kitchener-Waterloo Centre</h5>
                      <p className="card-text">Location: Fairway Road</p>
                      <p className="card-text">Services: Blood Donation, Platelet Donation</p>
                      <a href="#" className="btn btn-outline-primary">Learn More</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4">
                    <img src={center3Image} className="card-img-top" alt="Center 3"/>
                    <div className="card-body">
                      <h5 className="card-title">Guelph Blood Centre</h5>
                      <p className="card-text">Location: Near Cresent Parkway</p>
                      <p className="card-text">Services: Blood Donation, Stem Cell Donation</p>
                      <a href="#" className="btn btn-outline-primary">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* New section for plasma and blood donation */}
          <section className="donation-services-section py-5">
            <div className="container">
              <h2 className="text-center mb-4">Donation Services</h2>
              <div className="row">
                <div className="col-md-6 d-flex">
                  <div className="card mb-4 flex-fill">
                    <img src={plasmaDonationImage} className="card-img-top" alt="Plasma Donation"/>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">Plasma Donation</h5>
                      <p className="card-text">Plasma donation helps save lives by providing the critical blood component used for various treatments and therapies. Follow these steps for plasma donation:</p>
                      <ol>
                        <li>Check eligibility and health criteria.</li>
                        <li>Schedule an appointment at a donation center.</li>
                        <li>Prepare by hydrating and eating a healthy meal before your appointment.</li>
                        <li>Complete the donation process, which takes about 1-2 hours.</li>
                        <li>Enjoy refreshments and rest after donating.</li>
                      </ol>
                      <div className="mt-auto">
                        <a href="#" className="btn btn-outline-primary">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex">
                  <div className="card mb-4 flex-fill">
                    <img src={bloodDonationImage} className="card-img-top" alt="Blood Donation"/>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">Blood Donation</h5>
                      <p className="card-text">Blood donation is a simple act that can save up to three lives. Here are the steps to donate blood:</p>
                      <ol>
                        <li>Verify eligibility based on health and travel history.</li>
                        <li>Make an appointment at a blood donation center.</li>
                        <li>Stay hydrated and eat a balanced meal before donating.</li>
                        <li>The donation process takes about 10-15 minutes, plus time for health checks and rest.</li>
                        <li>Relax and have a snack after donating to replenish your energy.</li>
                      </ol>
                      <div className="mt-auto">
                        <a href="#" className="btn btn-outline-primary">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ways-to-donate-section py-5">
            <div className="container">
              <h2 className="text-center mb-4">Ways to Donate</h2>
              <p className="text-center mb-4">
                Your support makes a significant impact. Here are several ways you can contribute to our cause:
              </p>
              <div className="text-center mb-4">
                <a href="#" className="btn btn-danger btn-lg">View All Ways to Donate</a>
              </div>
              <div className="row text-center">
                <div className="col-md-4 mb-3">
                  <a href="#financial-donations" className="btn btn-outline-primary btn-block">Financial Donations</a>
                </div>
                <div className="col-md-4 mb-3">
                  <a href="#donate-as-partner" className="btn btn-outline-primary btn-block">Donate as a Partner</a>
                </div>
                <div className="col-md-4 mb-3">
                  <a href="#volunteering" className="btn btn-outline-primary btn-block">Volunteering</a>
                </div>
              </div>
              <div className="text-center mt-4">
                <a href="#recognition-program" className="btn btn-outline-secondary">Information on Recognition Program</a>
              </div>
            </div>
            {/* Blood droplet animations */}
            <div className="blood-droplet"></div>
            <div className="blood-droplet"></div>
            <div className="blood-droplet"></div>
            <div className="blood-droplet"></div>
            <div className="blood-droplet"></div>
          </section>
      <BannerComponent />
        </div>
      </div>
      <div className='footer'>
                  <Footer />
                </div>
      
    </>
    )}
    </>
  );
};

export default Home;