import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import Dashboard from './pages/dashboard.js';
import ProtectedRoutes from './components/routes/ProtectedRoutes.js';
import AddDonorCenters from './pages/AddDonorCenters.js';
import BookAppointment from './pages/Donor/BookAppointment.js';
import Profile from './pages/Donor/Profile.js';
import DonorStats from './pages/Donor/DonorStats.js';
import Appointments from './pages/Donor/Appointments.js';
import RequestBlood from './pages/Receiver/RequestBlood.js';
import Requests from './pages/Receiver/Requests.js';
import Inventory from './pages/Admin/Inventory.js';
import DonationRequests from './pages/Admin/DonationRequests.js';
import BloodRequests from './pages/Admin/BloodRequests.js';
import Donation from './pages/Donation.js';
import SuccessPage from './pages/SuccessPage.js';

function App() {
  return (
    <div>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/add-donor-centers" element={<AddDonorCenters />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/donor-stats" element={<DonorStats />} />
        <Route path="/request-blood" element={<RequestBlood />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/login" element={<Login />} />
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/donation-requests' element={<DonationRequests/>}/>
        <Route path='/blood-requests' element={<BloodRequests/>}/>
        <Route path="/dashboard" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
        <Route path='/donate-money' element={<Donation/>}/>
        <Route path='/success' element={<SuccessPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
