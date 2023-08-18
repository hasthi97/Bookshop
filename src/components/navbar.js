import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (

    <div className='Modify'>
        <nav>
            <label className='logo'>BOOKHUB.LK</label>
                <ul>
                       <li><Link to="/homepage">Home</Link></li>
                       <li><Link to="/addnewstudent">Add New Book</Link></li>
                       <li><Link to="#">Book List</Link></li>
                       <li><Link to="#">Delete Book</Link></li>
                </ul>

        </nav>
  </div> 
  )
}

export default Navbar