import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/css/LandingPage.css'
import heroImg from '../Images/ice-cream-hero.jpg'
import iceCream1 from '../Images/ice_cream1.jpg'
import iceCream2 from '../Images/ice_Cream2.png'
import iceCreamTruck from '../Images/Ice_Cream_Truck.jpg'

function LandingPage() {
  //scroll function for arrow on hero page
  let scrollToView = () => {
    document.getElementById('pageWrapper').scrollIntoView({behavior:'smooth'})
  }
  return (
    <>
      {/* hero img area */}
    <div className='heroImg' style={{backgroundImage: `url(${heroImg})`}}>
      <h2>The home of scandinavias best ice cream</h2>
      <div className='arrow' onClick={scrollToView}>
      <div className='arrowRight'></div>
      <div className='arrowLeft'></div>
      </div>
    </div>
    <div className='pageWrapper' id='pageWrapper'>

      {/*grid 2-1-2 */}
      <div className='contentContainer'>
        <div className='firstRow'>
          <div className='firstRowImg' style={{backgroundImage: `url(${iceCream1})`}} ></div>
          <div className='firstRowText'>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam est, mollis nec risus non, lacinia malesuada nibh. Sed ac pellentesque velit. Nam posuere commodo. </p>
                <Link to="/menu">
                  <button className='infoBtn'>MENU</button>    
                </Link>
          </div>
        </div>
        <div className='secondRow'>
          <div className='secondRowImg' style={{backgroundImage: `url(${iceCream2})`}}>
            <p>ENJOY</p>
            <h2>Gluten and dairy free options</h2>
            <Link to="/menu">
              <button>MENU</button>
            </Link>
          </div>
        </div>
        <div className='thirdRow'>
          <div className='thirdRowText'>
            <p>We can also bring our ice cream food truck to your special event! Just get in touch and we can figure something out</p>
              <Link to="/contact">
                <button className='infoBtn'>CONTACT US</button>
              </Link>
          </div>
          <div className='thirdRowImg' style={{backgroundImage: `url(${iceCreamTruck})`}}></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LandingPage