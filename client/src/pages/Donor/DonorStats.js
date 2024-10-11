import React from 'react';
import Layout from '../../components/shared/Layout';
import { Card, Col, Row, Button } from 'react-bootstrap';
import './DonorStats.css';

const DonorStats = () => {
  // Sample data
  const stats = {
    totalDonations: 1245,
    totalDonors: 980,
    upcomingAppointments: 15
  };

  return (
    <Layout>
      <div className="donor-stats">
        <h2 className="stats-heading">Donor Statistics</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          <Col>
            <Card className="stats-card">
              <Card.Body>
                <Card.Title>Total Donations</Card.Title>
                <Card.Text className="stats-value">{stats.totalDonations}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="stats-card">
              <Card.Body>
                <Card.Title>Total Donors</Card.Title>
                <Card.Text className="stats-value">{stats.totalDonors}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="stats-card">
              <Card.Body>
                <Card.Title>Upcoming Appointments</Card.Title>
                <Card.Text className="stats-value">{stats.upcomingAppointments}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Button className="btn-view-details" onClick={() => alert('View more details clicked')}>
          View Details
        </Button>
      </div>
    </Layout>
  );
};

export default DonorStats;
