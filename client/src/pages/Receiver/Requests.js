import React,{useState,useEffect} from 'react'
import Layout from '../../components/shared/Layout'
import API from '../../services/API'
import { Table,Modal,Button,Form,Row,Col,Toast,ToastContainer } from 'react-bootstrap'
import ToastBox from '../../components/shared/Toast'

const Requests = () => {
    const user =  JSON.parse(localStorage.getItem("user"))
    const [requestList, setRequestList] = useState([])
    const getRequestList = async () =>{
        let userId = user._id
        console.log(userId)
        const res = await API.get("/consumer/requests", {params: {id:userId}})
        if(res.data.requests){
            setRequestList(res.data.requests)
            console.log(res.data.requests)
        }
    }
    useEffect(()=>{
        getRequestList()
},[])

const [show, setShow] = useState(false);
const bloodGroups = ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"]
    const [name,setName] = useState(user.firstName + " "+ user.lastName)
    const [email,setEmail] = useState(user.email)
    const [unit, setUnit ] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [bloodGroup,setBloodGroup] = useState("")
    const [gender,setGender] =useState("")

    const sendRequest = async(e) =>{
      e.preventDefault();
     
      const userId = user._id;
      const res = await API.post("/consumer/request-blood", {userId,name,email,unit,phoneNumber,bloodGroup,gender})
      if(res){
        setShow(false)
        setShowMessage(true)
        setMessage(res.data.message)
          getRequestList()
      }
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showMessage, setShowMessage] = useState(false);
    const [message,setMessage] = useState("")
  const cancelRequest = async(requestId) =>{
     
      const res = await API.delete("/consumer/delete-request",{params: {id:requestId}})
      if(res.data.success){
        setShowMessage(true)
        setMessage(res.data.message)
        getRequestList()
      }
  }
  return (
    <Layout>
      <ToastContainer
          className="p-3"
          position={'top-center'}
          style={{ zIndex: 100 }}
        >
        <Toast bg='danger' onClose={() => setShowMessage(false)} show={showMessage} delay={10000} autohide animation>
          
          <Toast.Body className='text-white p-4'>{message}</Toast.Body>
        </Toast>
        </ToastContainer>
      <Button variant="primary" onClick={handleShow}>
        New Request
      </Button>

      <Modal size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Form onSubmit={sendRequest} >
        <Modal.Header closeButton>
          <Modal.Title>New Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name={name}  value={name} onChange={(e) => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name={email} value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
      </Row>
    <Row className="mb-3">
    
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type='number' name={phoneNumber} value={user.phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
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
        <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Quantity (in units)</Form.Label>
        <Form.Control type='text' name={unit} onChange={(e) => setUnit(e.target.value)}/>
      </Form.Group>
       
      </Row>

      

      
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
        Submit
      </Button>
        </Modal.Footer>
        </Form>
      </Modal>
      <Table striped bordered hover>
             <thead>
               <tr>
                 <th>#</th>
                 <th>Consumer</th>
                 <th>Blood Group</th>
                 <th>Quantity</th>
                 <th>Status</th>
                 <th>Action</th>
               </tr>
             </thead>
             {requestList.map((request,index)=>(
             <tbody>
               <tr>
                 <td>{index+1}</td>
                 <td>{request.name}</td>
                 <td>{request.bloodGroup}</td>
                 <td>{request.unit || 1}</td>
                 <td>{request.status}</td>
                 <td><Button onClick={() => cancelRequest(request._id)}>Cancel Request</Button></td>
               </tr>
              
             </tbody>
             ))}
           </Table>
    </Layout>
  )
}

export default Requests
