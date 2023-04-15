import {React, useState} from 'react'
import axios from 'axios'
import './form.css'

const Form = () => {
  const [Hotel , SetHotel] = useState(({
    'Hotel_Name':'',
    'Address':'',
    'Amenities':'',
    'Budget':'',
   
}));
const [message, setmessage] = useState(''); 

const{Hotel_Name,Address,Amenities,Budget} = Hotel ;

const handlChange = (e)=>{
  SetHotel({...Hotel , [e.target.name]:e.target.value})
}

const submitForm=async(e)=>{
  e.preventDefault(); 

  await axios.post('http://localhost:4000/newuser/add',Hotel)
  .then((result)=>{
    setmessage('successfully added')
    console.log(result);
  }).catch((err)=>{
  
    alert(err);
  })
}
  return (
    <div>   
        
        <div className="form">
      <h3>Add new user here.....</h3>

      <div className="message_visible text-center col-md-12"><h2>{message}</h2></div>
        <div className="form_container">
        <form onSubmit={e=>{submitForm(e)}}>
  <div class="form-group">
    <label for="hotel1">Hotel Name</label>
    <input class="form-control" id="hotel1" aria-describedby="emailHelp" name="Hotel_Name" value={Hotel_Name}
   onChange={e=>handlChange(e)}  placeholder="Enter Hotel name"/>
  </div>
  <div class="form-group">
    <label for="Address">Address</label>
    <input  class="form-control" id="Address"name='Address' value={Address} onChange={e=>handlChange(e)} placeholder="Enter hotel address"/>
  </div>
  <div class="form-group">
    <label for="Amenities">Amenities</label>
    <input  class="form-control" id="amenities"name='Amenities' value={Amenities} onChange={e=>handlChange(e)} placeholder="Enter Amentities"/>
  </div>
  <div class="form-group">
    <label for="Budget">Budget</label>
    <input type='number' class="form-control" id="Budget"name='Budget' value={Budget} onChange={e=>handlChange(e)} placeholder="Enter Budget in numeric"/>
  </div>
  <div class="form-group">
    <label for="image">image upload</label>
    <input class="form-control" type="file" id="myFile" name="filename"/>
  </div>
  <div className="button" style={{marginTop:'1rem'}}>
  <button type="submit" class="btn btn-primary">Edit</button>
  </div>
  
</form>
        </div>
        </div>
    </div>
  )
}

export default Form