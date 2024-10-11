import React,{useEffect, useState} from 'react'
import { Toast,ToastContainer } from 'react-bootstrap';

const ToastBox = ({setShowValue,message}) => {
    const [show, setShow] = useState(setShowValue);
    useEffect(()=>{
        console.log("show",setShowValue)
    },[setShowValue])
  return (
    
    <ToastContainer
          className="p-3"
          position={'top-center'}
          style={{ zIndex: 100 }}
        >
        <Toast bg='danger' onClose={() => setShow(false)} show={show} delay={5000} autohide animation>
          
          <Toast.Body className='text-white p-4'>{message}</Toast.Body>
        </Toast>
        </ToastContainer>
  )
}

export default ToastBox
