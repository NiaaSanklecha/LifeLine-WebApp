import React, { useEffect, useState } from 'react';
import Layout from '../components/shared/Layout';
import { Card, Row, Col } from 'react-bootstrap';
import API from '../services/API';
import './Dashboard.css'; // Create this CSS file for styling

const Dashboard = () => {
    const [metrics, setMetrics] = useState({
        totalDonors: 0,
        totalAppointments: 0,
        recentActivities: []
    });

    /* useEffect(() => {
        const fetchMetrics = async () => {
            try {
                const response = await API.get('/dashboard/metrics'); // Adjust the endpoint based on your API
                setMetrics(response.data);
            } catch (error) {
                console.error('Error fetching dashboard metrics', error);
            }
        };
        fetchMetrics();
    }, []); */

    return (
        <Layout>
            {/* <div className="dashboard-container">
                <h2>Dashboard</h2>
                <Row className="mb-4">
                    <Col md={4}>
                        <Card className="metric-card">
                            <Card.Body>
                                <Card.Title>Total Donors</Card.Title>
                                <Card.Text className="metric-value">{metrics.totalDonors}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="metric-card">
                            <Card.Body>
                                <Card.Title>Total Appointments</Card.Title>
                                <Card.Text className="metric-value">{metrics.totalAppointments}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="metric-card">
                            <Card.Body>
                                <Card.Title>Recent Activities</Card.Title>
                                <ul className="activity-list">
                                    {metrics.recentActivities.length > 0 ? (
                                        metrics.recentActivities.map((activity, index) => (
                                            <li key={index}>{activity}</li>
                                        ))
                                    ) : (
                                        <li>No recent activities</li>
                                    )}
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div> */}
            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-line fa-3x text-danger"></i>
                            <div class="ms-3">
                                <p class="mb-2">Today Sale</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-bar fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Total Sale</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-area fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Today Revenue</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i class="fa fa-chart-pie fa-3x text-primary"></i>
                            <div class="ms-3">
                                <p class="mb-2">Total Revenue</p>
                                <h6 class="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
