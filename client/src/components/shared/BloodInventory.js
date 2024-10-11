import React,{useEffect,useState} from 'react'
import BloodIcon from '../../images/icon-inventory-drop.svg'
import RedBloodIcon from '../../images/icon-inventory-drop-nomask.svg'
import './BloodInventory.css';
import API from '../../services/API';
const BloodInventory = () => {

    const [bloodGroups,setBloodGroups] = useState([])
  const getInventory = async () =>{
    console.log("res")
    const res = await API.get("/admin/get-inventory-home")
    if(res){
      console.log(res)
        setBloodGroups(res.data.currentResult)
    }
}
useEffect(()=>{
    getInventory()
},[])
  return (
    <div className='container'>
        <ul className='row'>
            {
                bloodGroups.map((b) =>(
                    <li className='col-md inventory-level'>
                        <div className='inventory-toggle'>
                        <img src={BloodIcon} className='inventory-image'/>
                        <div class="inventory-level-mask filling" style={{height: b.bloodPercent+"%"}}>
                            </div>
                        {/* <div class="inventory-gradient full"></div> */}
                        <span  class="inventory-percent-target">{b.stock.unit}<br/>units</span>
                        </div>
                        
                        <figure>
                            <figcaption className='pt-4 text-center fw-bold'>{b.stock.bloodGroup}</figcaption>
                        </figure>
                        
                    </li>
                ))
            }
            
        </ul>
      
    </div>
  )
}

export default BloodInventory
