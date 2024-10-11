import React, { useState } from 'react'
import Layout from '../../components/shared/Layout'
import {Form,Row,Col,Button} from 'react-bootstrap'
import API from '../../services/API';
import { useNavigate } from 'react-router-dom';

const RequestBlood = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const bloodGroups = ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"]
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [city, setCity ] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [bloodGroup,setBloodGroup] = useState("")
    const [gender,setGender] =useState("")

    const navigate = useNavigate();
    const sendRequest = async(e) =>{
        e.preventDefault();
        const name = user.firstName + " " + user.lastName;
        const email = user.email;
        const userId = user._id;
        const res = await API.post("/consumer/request-blood", {userId,name,email,city,phoneNumber,bloodGroup,gender})
        if(res){
            alert(res.data.message)
            navigate('/requests');
        }
    }
  return (
    <Layout>
        <Form onSubmit={sendRequest}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name={name}  value={user.firstName + " "+ user.lastName} onChange={(e) => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name={email} value={user.email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
      </Row>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control type='text' name={city} onChange={(e) => setCity(e.target.value)}/>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type='number' name={phoneNumber} value={user.phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
      </Form.Group>

    </Row>
      

      <Row className="mb-3">
        

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Blood Group</Form.Label>
          <Form.Select defaultValue="Choose..." name={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
            <option>Choose...</option>
            {bloodGroups.map((b)=> (
                <option value={b}>{b}</option>
            ))}
            
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Gender</Form.Label>
          <Form.Select defaultValue="Choose..." name={gender} onChange={(e) => setGender(e.target.value)}>
            <option>Choose...</option>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
            <option value={"Null"}>Prefer Not To Say</option>
          </Form.Select>
        </Form.Group>
      </Row>

      

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Layout>
  )
}

export default RequestBlood
