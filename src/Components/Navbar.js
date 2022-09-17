import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
        <Link to="/Scandi-Ice-Cream">
          <p>Scandi Ice Cream</p>
        </Link>
      <ul>
        <Link to="/contact">
          <li>Contact</li>
        </Link>                
        <Link to="/menu">
          <li>Menu</li>
        </Link>
        <Link to="/Scandi-Ice-Cream">
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  )
}
export default Navbar