
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Form from './form/Form'
import Navbar from './navbar/Navbar';
import Home from './Homepage/Home';
import Viewlist from './form/viewlist/Viewlist';
import Edit from './form/Edit_student/Edit';

const App = () => {
  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
       <Route path="/admin/add" element={<Form/>}/>
       <Route path="/" element={<Viewlist/>}/>
       <Route path="/edit-hotel/:id" element={<Edit/>}/>
        </Routes>
        </BrowserRouter>
        </>
    
    
  )
}

export default App