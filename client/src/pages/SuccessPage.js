import React, { useEffect } from 'react'
import Layout from '../components/shared/Layout'
import Success from '../images/success.png'
import { useNavigate } from 'react-router-dom'

const SuccessPage = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(() => navigate('/'),10000)
    })
  return (
    <Layout>
        <div className='text-center'>
        <img src={Success} height={850} width={1100} alt='success-page'></img>
        </div>
      
    </Layout>
  )
}

export default SuccessPage
