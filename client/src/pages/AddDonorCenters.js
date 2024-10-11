import React, { useState } from 'react'
import {handleAddCenter} from '../services/authService' 

const AddDonorCenters = () => {
    const [city, setCity] = useState("");
    const [centerName,setCenterName] = useState("");
    const [centerAddress,setCenterAddress] = useState("");


  return (
    <div>
      <form onSubmit={(event)=>{
                return handleAddCenter(event,city,centerName,centerAddress)
              }}>
                <h2>Add Centers</h2>
                
                <label>
                  City:
                  <input type="text" name="city"  value={city} onChange={(e) => setCity(e.target.value)} required />
                </label>
                <br />
                <label>
                  Blood Center Name:
                  <input type="text" name="centerName" value={centerName} onChange={(e) => setCenterName(e.target.value)} required />
                </label>
                <br />
                <label>
                  Blood Center Address:
                  <input type="text" name="centerAddress" value={centerAddress} onChange={(e) => setCenterAddress(e.target.value)} required />
                </label>
        <br/>
                <button type="submit">Add</button>
                
              </form>
    </div>
  )
}

export default AddDonorCenters
