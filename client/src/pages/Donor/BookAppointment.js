import React, { useEffect } from 'react'
import Layout from '../../components/shared/Layout'
import { Button, Form, FormControl, FormGroup,Dropdown, ButtonGroup,Row,Col, InputGroup, ButtonToolbar,Stack, Card ,ListGroup, CardGroup} from 'react-bootstrap';
import { useState } from 'react';
import MultiStepProgressBar from '../../components/shared/MultiStepProgressBar';
import API from '../../services/API';
import DatePicker from 'react-datepicker';
import { useSelector } from 'react-redux';
import "../styles.css"
import './BookAppointment.css';
import './Profile.css';
import AsyncSelect from 'react-select/async'


const BookAppointment = () => {
  const [page, setPage] = useState("locationsearch");
  const user =  JSON.parse(localStorage.getItem("user"))
  const [location,setLocation] = useState([])
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [bloodGroup,setBloodGroup] = useState("")
  const [bloodUnit,setBloodUnit] = useState()

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("locationsearch");
        break;
      case "2":
        setPage("donorcenter");
        break;
      case "3":
        setPage("dateandtime");
        break;
      case "4":
        setPage("reviewandbook")
        break;
      case "5":
        alert("Booking completed")
      default:
        setPage("1");
    }
  };

  const LocationSearch = ({onButtonClick}) => {
    const [searchResult, setSearchResult] = useState([])
    const [key,setKey] = useState("")
    let temp ;
    const addLocation = () => {
      
      setLocation(key)
      
    };
  
    const onChange = searchResult =>{
      setSearchResult(searchResult)
      setKey(searchResult.value)
    }
    const loadOptions = async (inputText,callback) =>{
      console.log("load")
      
      const res = await API.get("/donor/search-location",{params: {key:inputText,limit:5}})
      
     const json =  res.data.results
     
        callback(
          json.map(i => ({label: i+", ON",value : i}))
        )
        setSearchResult(json)
        
    }
    return(
      <div className=''>
       
        <AsyncSelect  value={searchResult} onChange={onChange} loadOptions={loadOptions} className='pt-5'></AsyncSelect>
        <Button size='lg' onClick={() => { addLocation(); onButtonClick("donorcenter");}} className='btn btn-danger m-3 float-end'>Search</Button>
        </div>
    )
  }
  const DonorCenter = ({onButtonClick}) => {
    const [centerList,setCenterList] = useState([])
    
      const searchCenters = async() =>{
        try{
          if(!location.trim()){
            setCenterList([])
            return 
          }
          const res = await API.get("/donor/search-center",{params: {key:location,limit:5}})
          if(res){
            setCenterList(res.data.results)
            console.log(res.data.results)
            return
          }
          

        }catch(error){
          console.log(error)
        }
      }
    useEffect(()=>{
      searchCenters()
    }, [])

    const onSelectingCenter = async(centerId) =>{
      setLocation([centerId])
    }
    return(
      <div className='pt-5'>
        <Row xs={1} md={2} className="g-4">
          {centerList.map((center)=>(
            <Col >
          <Card>
            
            <Card.Body>
              
              <Row>
              <Card.Text as={Col} xs={9}>
              <Card.Title>{center.centerName}</Card.Title>
               {center.centerAddress}
              </Card.Text>
              <Card.Text as={Col} className='align-middle'>
              <Button onClick={() => {onSelectingCenter(center);  onButtonClick("dateandtime");}} className='btn btn-danger btn-md'>Select</Button>
              </Card.Text>
              </Row>
              
            </Card.Body>
          </Card>
        </Col>
          ))}
        
        </Row>
       
        
      </div>
    )
  }
  const DateAndTime = ({onButtonClick}) => {
    const bloodGroups = ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"]
    const today = new Date()
    today.setDate(today.getDate()+1)
    const [selectedDate,setSelectedDate] = useState(new Date(today))
    let minTime = new Date(today.getFullYear(),today.getMonth(),today.getDate(),10,0,0,0)
let maxTime = new Date(today.getFullYear(),today.getMonth(),today.getDate(),15,0,0,0)
const onChange = (date) =>{
  console.log(date)
  setSelectedDate(new Date(date))
  minTime = new Date(selectedDate.getFullYear(),selectedDate.getMonth(),selectedDate.getDate(),10,0,0,0)
   maxTime = new Date(selectedDate.getFullYear(),selectedDate.getMonth(),selectedDate.getDate(),15,0,0,0)
}
    const handleDateSelect = () =>{
      
      setAppointmentDate(new Date(selectedDate).toDateString())
     setAppointmentTime(new Date(selectedDate).toTimeString())
    }
    
    return(
      <div>
       <Row className='mt-4'>
        
       <Form.Group as={Col} controlId="formGridState"  >
          <Form.Label>Blood Group</Form.Label>
          <Form.Select defaultValue="Choose..." name="bloodGroup" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
            <option>Choose...</option>
            {bloodGroups.map((b)=> (
                <option value={b}>{b}</option>
            ))}
            
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col}  >
          <Form.Label>Quantity (in units)</Form.Label>
          <Form.Control type='number' name='unit' value={bloodUnit} onChange={(e) => setBloodUnit(e.target.value)}/>
        </Form.Group>
        </Row> 
        <Row className='text-center'>

          <Col lg={11} className='mt-4'>

          <DatePicker 
      selected={selectedDate}
      onChange={onChange}
      minDate={today}
      inline
      showTimeSelect  
      maxTime={maxTime}
      minTime={minTime}
      timeIntervals={15}
         
    /> 
    <Button onClick={() => {handleDateSelect(); onButtonClick("reviewandbook"); }} className='btn btn-danger btn-lg m-3'>Select Appointment</Button>
          </Col>
          
        </Row>
       
      
      </div>
    )
  }
  const ReviewAndBook = ({onButtonClick}) => {
    console.log(user)
    const BookAppointment = async () => { 
      
      let userId = user._id
      let locationId ="";
    {location.map((center)=>(
      locationId = center._id
    ))}
    try {
      const res = await API.post("/donor/book-appointment",{userId,locationId,appointmentDate,appointmentTime,bloodGroup})
      if(res){
        nextPage("complete")
      }else{
        alert("Something went wrong. Please try again")
        nextPage("locationsearch")
      }
    } catch (error) {
      console.log(error)
    }
      
    }
    return(
      <div><CardGroup>
      {location.map((center)=>(
      
      <Card>
        
        <Card.Body>
          <Card.Title>{center.centerName}</Card.Title>
          <Row>x
          <Card.Text as={Col}>
           {center.centerAddress}
          </Card.Text>
          <Card.Text as={Col}>
          
          </Card.Text>
          </Row>
          
        </Card.Body>
      </Card>
   
   
      ))}
     <Card>
      <Card.Text>
      {appointmentDate.toString()}
      </Card.Text>
      <Card.Text>
      {appointmentTime.toString().substring(0,5)}
      </Card.Text>
     
     </Card>
    </CardGroup>
        <Button onClick={() =>{ BookAppointment()}} >Book Appointment</Button>
      </div>
    )
  }
  const CompleteBooking = ({onButtonClick}) => {
   
    return(
      <div>
        <h2>Appointment booked</h2>
      </div>
    )
  }
  return (
    <Layout>
      
        <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
      {
        {
          locationsearch: <LocationSearch onButtonClick={nextPage} />,
          donorcenter: <DonorCenter onButtonClick={nextPage} />,
          dateandtime : <DateAndTime onButtonClick={nextPage} />,
          reviewandbook : <ReviewAndBook onButtonClick={nextPage}/>,
          complete : <CompleteBooking/> 
          
        }[page]
      }
    </Layout>
  )
}

export default BookAppointment
