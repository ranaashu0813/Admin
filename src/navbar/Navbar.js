import React from 'react'

const Navbar = () => {
  return (
    <>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
  <a class="navbar-brand" href="#">Sibilize</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/admin/add">Add Student</a>
      </li>
     
      <li class="nav-item">
        <a class="nav-link" href="/">View List</a>
      </li>
    </ul>
 
  </div>
</nav>
    
    </>
  )
}

export default Navbar