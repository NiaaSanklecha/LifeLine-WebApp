import React, {useState,useEffect} from 'react'
import Layout from '../../components/shared/Layout'
import API from '../../services/API'
import BloodDrop from '../../images/blood_drop.png'

const Inventory = () => {
  const [bloodGroups,setBloodGroups] = useState([])
  const getInventory = async () =>{
    console.log("res")
    const res = await API.get("/admin/get-inventory")
    if(res){
      console.log(res)
        setBloodGroups(res.data.result)
    }
}
useEffect(()=>{
    getInventory()
},[])
    //const bloodGroups = ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"]
  return (
    <Layout>
        <div className='container mb-3'>
      <div class="row">
        {
            bloodGroups.map((bloodgroup) =>(
<div class="col-xl-3 col-md-6 col-12 mb-4 mt-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between p-md-1">
              <div class="d-flex flex-row">
                <div class="align-self-center">
                  <img src={BloodDrop} className='me-3 drop' width={40} height={50} style={{position: "absolute", left:"18px",top:"-17px"}}/>
                </div>
                <div class="align-self-center pt-1">
                  <h3>{bloodgroup.bloodGroup}</h3>
                  
                </div>
              </div>
              <div class="align-self-center">
                <h2 class=" mb-0">{bloodgroup.unit}</h2>
                <p class="mb-0">unit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
            ))
        }
      
      </div>
      </div>
    </Layout>
  )
}

export default Inventory
