import React, { useState } from 'react';
import { handleLogin, handleRegister } from '../services/authService';
import NavBarComponent from '../components/shared/Nav';
import Footer from '../components/shared/Footer';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import Spinner from '../components/shared/Spinner';
import { Button } from 'react-bootstrap';
import './Login.css'; // 

const Login = () =>  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [postalCode, setPostalcode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(true);
  const [showToast,setShowToast] = useState(false)

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
  }

  const checkIfPasswordsMatch = (pass1, pass2) => {
    return pass1 === pass2;
  }
  const handlerRegisterClick = (event) =>{
    event.preventDefault();
    const res= handleRegister(event, firstName, lastName, email, password, dateOfBirth, role, postalCode, phoneNumber);
    console.log(res)
  }

  const { loading, error } = useSelector(state => state.auth);

  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? <Spinner/> : (
        <>
          <NavBarComponent/>
          <div className="login-page-background">
            <div className="login-container">
              {!isRegistering ? (
                <Form onSubmit={(e) => {
                  
                  if (checkIfPasswordsMatch(password, confirmPassword)) {
                    handlerRegisterClick(e)
                  } else {
                    alert("Passwords don't match.");
                  }
                }}>
                  <h2>Register</h2>
                  <Form.Group className="form-group">
                    <Form.Label className="form-label">First Name</Form.Label>
                    <Form.Control className="form-control" value={firstName} name='firstName' type='text' onChange={(e) => setFirstName(e.target.value)} required />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Last Name</Form.Label>
                    <Form.Control className="form-control" type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Email</Form.Label>
                    <Form.Control className="form-control" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Date Of Birth</Form.Label>
                    <Form.Control className="form-control" type="date" name="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Phone Number</Form.Label>
                    <Form.Control className="form-control" type="number" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Postal Code</Form.Label>
                    <Form.Control className="form-control" type="text" name="postalCode" value={postalCode} onChange={(e) => setPostalcode(e.target.value)} required />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Password</Form.Label>
                    <Form.Control className="form-control" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Confirm Password</Form.Label>
                    <Form.Control className="form-control" type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Role</Form.Label>
                    <Form.Select className="form-control" aria-label="Default select example" name='role' value={role} onChange={(e) => setRole(e.target.value)}>
                      <option>Select</option>
                      <option value="donor">Donor</option>
                      <option value="receiver">Receiver</option>
                    </Form.Select>
                  </Form.Group>
                  <Button className="btn btn-primary" type='submit'>Register</Button>
                  <p>Already have an account? <a className="toggle-register" onClick={toggleRegister}>Click Here</a></p>
                </Form>
              ) : (
                <Form onSubmit={(event) => {
                  event.preventDefault();
                  handleLogin(event, email, password, role);
                }}>
                  <h2>Login</h2>
                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Email</Form.Label>
                    <Form.Control className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Password</Form.Label>
                    <Form.Control className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Role</Form.Label>
                    <Form.Select className="form-control" aria-label="Default select example" name='role' value={role} onChange={(e) => setRole(e.target.value)}>
                      <option>Select</option>
                      <option value="donor">Donor</option>
                      <option value="receiver">Consumer</option>
                      <option value="admin">Admin</option>
                    </Form.Select>
                  </Form.Group>
                  <Button className="btn btn-primary" type='submit'>Login</Button>
                  <p>Don't have an account? <a className="toggle-register" onClick={toggleRegister}>Click Here</a></p>
                </Form>
              )}
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Login;
