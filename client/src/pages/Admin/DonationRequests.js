import React, {useState,useEffect} from 'react'
import Layout from '../../components/shared/Layout'
import API from '../../services/API'
import { Button, Table, Toast ,ToastContainer} from 'react-bootstrap'
const DonationRequests = () => {
    const [show, setShow] = useState(false);
    const [message,setMessage] = useState("")
    const [donationRequestList, setDonationRequestList] = useState([])
    const [upcomingDonationList, setUpcomingDonationList] = useState([])
    const getDonationRequestList = async () =>{
        
        const res = await API.get("/admin/get-donation-request-list")
        if(res){
            setDonationRequestList(res.data.currentResult)
            setUpcomingDonationList(res.data.pendingResult)
            console.log(res.data.currentResult)
        }
    }
    useEffect(()=>{
        getDonationRequestList()
},[])

const approve = async(id,bloodGroup,unit) =>{
    const res = await API.post("/admin/add-to-stocks",{id,bloodGroup,unit})
    if(res.data.success){

        setShow(true)
        setMessage(res.data.message)
        getDonationRequestList()
    }
}
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
        {donationRequestList.length > 0 ? (
            <>
        <Table striped bordered hover>
             <thead>
               <tr>
                 <th>#</th>
                 <th>Donated Date</th>
                 <th>Donor Name</th>
                 <th>Blood Group</th>
                  <th>Quantity</th>
                 <th>Action</th>
               </tr>
             </thead>
             {donationRequestList.map((donationRequest,index)=>(
             <tbody>
               <tr>
                 <td>{index+1}</td>
                 <td>{donationRequest.appointmentDate}</td>
                 <td>{donationRequest.userId.firstName} {donationRequest.userId.lastName}</td>
                <td>{donationRequest.bloodGroup}</td>
                 <td>{donationRequest.unit || 1}</td>
                 <td>
                    {
                        
                    }
                    <Button onClick={() => approve(donationRequest._id,donationRequest.bloodGroup,2)}>Approve</Button><Button>Reject</Button></td>
               </tr>
              
             </tbody>
             ))}
           </Table>
           </>
          ) : (
            <p>No donations</p>
           )}
           {upcomingDonationList.length > 0 && (
            <>
            <h2>Upcoming Donations</h2>
           <Table striped bordered hover>
             <thead>
               <tr>
                 <th>#</th>
                 
                 <th>Appointment Date</th>
                 <th>Appointment Time</th>
                 <th>Action</th>
               </tr>
             </thead>
             {upcomingDonationList.map((donationRequest,index)=>(
             <tbody>
               <tr>
                 <td>{index+1}</td>
                 
                 <td>{donationRequest.appointmentDate}</td>
                 <td>{(donationRequest.appointmentTime).toString().substring(0,5)}</td>
                 <td>
                    No action needed</td>
               </tr>
              
             </tbody>
             ))}
           </Table>
           </>
           )}
             
      
    </Layout>
  )
}

export default DonationRequests
