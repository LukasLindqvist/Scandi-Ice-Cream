import React from 'react'
import '../Components/css/Menu.css'
//import images
import iceCreamCone from '../Images/ice_cream_menu 1.png'
import watermelon from '../Images/watermelon 2.png'
import orange from '../Images/orange 1.png'

function Menu() {
  return (
    <div className='menuWrapper'>
      <img src={iceCreamCone} id='iceCreamCone' alt='iceCreamCone'></img>
      <img src={watermelon} id='watermelon' alt='watermelon'></img>
      <img src={orange} id='orange' alt='orange'></img>
      <div className='menu'>
        <h1>MENU</h1>
        <div className='mainMenu'>
          <h2>LOREM IPSUM</h2>
          <p>Lorem Ipsum   ........... 5$</p>
          <p>Lorem Ipsum   ........... 5$</p>
          <p>Lorem Ipsum   ........... 5$</p>
          <p>Lorem Ipsum   ........... 5$</p>
          <p>Lorem Ipsum   ........... 5$</p>
        </div>
        <div className='miniMenus'>
          <div className='miniMenu'>
            <h2>LOREM IPSUM</h2>
            <p>Lorem Ipsum   ........... 5$</p>
            <p>Lorem Ipsum   ........... 5$</p>
            <p>Lorem Ipsum   ........... 5$</p>
            <p>Lorem Ipsum   ........... 5$</p>
            <p>Lorem Ipsum   ........... 5$</p>
          </div>
          <div className='miniMenu'>
            <h2>LOREM IPSUM</h2>
            <p>Lorem Ipsum   ........... 5$</p>
            <p>Lorem Ipsum   ........... 5$</p>
            <p>Lorem Ipsum   ........... 5$</p>
            <p>Lorem Ipsum   ........... 5$</p>
            <p>Lorem Ipsum   ........... 5$</p>
          </div>
          <div className='miniMenu'>
            <h2>LOREM IPSUM</h2>
            <p>Lorem Ipsum   ........... 5$</p>
            <p>Lorem Ipsum   ........... 5$</p>
            <p>Lorem Ipsum   ........... 5$</p>
            <p>Lorem Ipsum   ........... 5$</p>
            <p>Lorem Ipsum   ........... 5$</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Menu