import React, { useState } from 'react';
import Layout from '../../components/shared/Layout';
import Nav from 'react-bootstrap/Nav';
import { Row, Col, Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import API from '../../services/API';
import './Profile.css';

import { Toast ,ToastContainer} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [email, setEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [show, setShow] = useState(false);
    const [message,setMessage] = useState("")

    const changePassword = async (e, email) => {
        setEmail(user.email);
        console.log(user.email);
        e.preventDefault();
        try {
            const { data } = await API.post("/donor/change-password", { email, currentPassword, newPassword });
            console.log(data);
            if (data?.success) {
                setShow(true)
                setMessage(data.message)
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout>
            <ToastContainer
          className="p-3"
          position={'top-center'}
          style={{ zIndex: 100 }}
        >
        <Toast bg='danger' onClose={() => setShow(false)} show={show} delay={10000} autohide animation>
          
          <Toast.Body className='text-white p-4'>{message}</Toast.Body>
        </Toast>
        </ToastContainer>
            <Tab.Container id="fill-tab-example" defaultActiveKey="myProfile" fill justify className="mb-3">
                <Row className='text-center'>
                    <Nav variant="pills" className="profile-nav mt-3 justify-content-center">
                        <Nav.Item>
                            <Nav.Link eventKey="myProfile">My profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="changePassword">Change Password</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="changeEmail">Change Email</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="removeAccount">Remove Online Account</Nav.Link>
                        </Nav.Item>
                       
                    </Nav>
                </Row>
                <Row>
                    <Tab.Content>
                        <Tab.Pane eventKey="myProfile">
                            <Form className="section-container">
                                <h3>Personal Information</h3>
                                <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control placeholder={user.firstName} disabled />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control placeholder={user.lastName} disabled />
                                </Form.Group>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="dateOfBirth">Date Of Birth</Form.Label>
                                    <Row>
                                        <Col sm>
                                            <Form.Select id="dateOfBirth" disabled>
                                                <option>02</option>
                                            </Form.Select>
                                        </Col>
                                        <Col sm>
                                            <Form.Select id="dateOfBirth" disabled>
                                                <option>Feb</option>
                                            </Form.Select>
                                        </Col>
                                        <Col sm>
                                            <Form.Select id="dateOfBirth" disabled>
                                                <option>1997</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>Login ID</Form.Label>
                                    <Form.Control placeholder={user.email} disabled />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control placeholder={user.email} disabled />
                                </Form.Group>
                                    </Row>
                                
                                
                                
                                <h3>Contact Information</h3>
                                <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control placeholder={user.phoneNumber} disabled />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control placeholder={user.email} disabled />
                                </Form.Group>
                                    </Row>
                                
                            </Form>
                        </Tab.Pane>
                        <Tab.Pane eventKey="changePassword">
                            <Form onSubmit={(e) => changePassword(e, user.email)} className="section-container">
                                <h3>Update My Password</h3>
                                <Form.Control
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={user.email}
                                    readOnly hidden
                                />
                                <Form.Label htmlFor="currentPassword">Current Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="currentPassword"
                                    name="currentPassword"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    aria-describedby="passwordHelpBlock"
                                />
                                <Form.Label htmlFor="newPassword">New Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="newPassword"
                                    name="newPassword"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    aria-describedby="passwordHelpBlock"
                                />
                                <Form.Label htmlFor="repeatPassword">Repeat Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="repeatPassword"
                                    aria-describedby="passwordHelpBlock"
                                />
                                <Form.Text id="passwordHelpBlock" muted>
                                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                                </Form.Text>
                                <Button type="submit" className="btn-submit">Save Changes</Button>
                            </Form>
                        </Tab.Pane>
                        <Tab.Pane eventKey="changeEmail">
                            <Form className="section-container">
                                <h3>Change Email</h3>
                                <p>You are currently logged in with your {user.role} account <b>{user.email}</b></p>
                                <Form.Label htmlFor="newEmail">New email</Form.Label>
                                <Form.Control
                                    type="email"
                                    id="newEmail"
                                    placeholder="New email"
                                />
                                <Form.Label htmlFor="confirmNewEmail">Confirm new email</Form.Label>
                                <Form.Control
                                    type="email"
                                    id="confirmNewEmail"
                                    placeholder="Confirm new email"
                                />
                                <p>An email will be sent to <b>{user.email}</b> in order to confirm this change.</p>
                                <Button type="submit" className="btn-submit">Send Confirmation</Button>
                            </Form>
                        </Tab.Pane>
                        <Tab.Pane eventKey="removeAccount">
                            <div className="section-container">
                                <h3>Remove Online Account</h3>
                                <p>
                                    Are you sure you would like to delete your online account?
                                    <br /><br />
                                    Your donor profile remains active, but you will no longer be able to login to the application.
                                </p>
                                <Button type="button" className="btn-delete">Delete Account</Button>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="eligibilityQuiz">
                            <div className="section-container">
                                <h3>Eligibility Quiz</h3>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Row>
            </Tab.Container>
        </Layout>
    );
};

export default Profile;
