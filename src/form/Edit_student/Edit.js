import {React, useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'
import  './edit.css'
const Edit = () => {
    const history = useNavigate(); 
const {id} = useParams();
    const [Hotel , SetHotel] = useState(({
        'Hotel_Name':'',
        'Address':'',
        'Amenities':'',
        'Budget':'',
       
    }));
    const [message, setmessage] = useState(''); 
    
    const{Hotel_Name,Address,Amenities,Budget} = Hotel ;


const submitForm=async(e)=>{
    e.preventDefault(); 
  
 await axios.put('http://localhost:4000/newuser/update/'+id,Hotel)
    .then((result)=>{
      setmessage('successfully added')
   history('/')
    }).catch((err)=>{
    
      alert('something went wrong');
    })
  }
  useEffect(()=>{
    loadHotel(); 
},
[]
)

const handlChange = (e)=>{
    SetHotel({...Hotel , [e.target.name]:e.target.value})
  }

const loadHotel = async()=>{
    const result = await axios.get('http://localhost:4000/newuser/'+id);
    SetHotel(result.data);
    
    
}

  return (
  <>
    <div className="form">
      <h3>EDIT.....</h3>
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
    <input  class="form-control" id="Address"name='Address'  value={Address}  onChange={e=>handlChange(e)}
    placeholder="Enter hotel address"/>
  </div>
  <div class="form-group">
    <label for="Amenities">Amenities</label>
    <input  class="form-control" id="amenities"name='Amenities' value={Amenities}onChange={e=>handlChange(e)}
     placeholder="Enter Amentities"/>
  </div>
  <div class="form-group">
    <label for="Budget">Budget</label>
    <input type='number' class="form-control" id="Budget" name='Budget' value={Budget} onChange={e=>handlChange(e)}
    placeholder="Enter Budget in numeric"/>
  </div>
  <div class="form-group">
    <label for="image">image upload</label>
    <input class="form-control" type="file" id="myFile" name="filename"/>
  </div>
  <div className="button" style={{marginTop:'1rem'}}>
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  
</form>
        </div>
        </div>
  
  </>
  )
}
export default Edit