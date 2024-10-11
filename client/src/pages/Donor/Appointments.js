import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/shared/Layout'
import API from '../../services/API'
import { Button, Table,ToastContainer,Toast } from 'react-bootstrap'
import './Appointments.css';

const Appointments = () => {
  const [show, setShow] = useState(false);
    const [message,setMessage] = useState("")
    const user =  JSON.parse(localStorage.getItem("user"))
    const [appointmentList, setAppointmentList] = useState([])
    const getAppointmentList = async () =>{
        let userId = user._id
        console.log(userId)
        const res = await API.get("/donor/get-appointment-list", {params: {id:userId}})
        if(res){
            setAppointmentList(res.data.appointment)
            console.log(res.data.appointment)

        }
    }
    useEffect(()=>{
        getAppointmentList()
},[])

const cancelAppointment = async(appointmentId) =>{
  console.log(appointmentId)
    const res = await API.delete("/donor/delete-appointment",{params: {id:appointmentId}})
    if(res.data.success){
      setShow(true)
      setMessage(res.data.message)
      getAppointmentList()
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
             <Table striped bordered hover>
             <thead>
               <tr>
                 <th>#</th>
                 <th>Center</th>
                 <th>Appointment Date</th>
                 <th>Appointment Time</th>
                 <th>Action</th>
               </tr>
             </thead>
             {appointmentList.map((appointment)=>(
             <tbody>
               <tr>
                 <td>1</td>
                 <td>{appointment.locationId.centerName}<br/>{appointment.locationId.centerAddress} </td>
                 <td>{appointment.appointmentDate}</td>
                 <td>{(appointment.appointmentTime).toString().substring(0,5)}</td>
                 <td><Button onClick={() => cancelAppointment(appointment._id)}>Cancel</Button></td>
               </tr>
              
             </tbody>
             ))}
           </Table>
          
    </Layout>
  )
}

export default Appointments
