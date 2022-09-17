import React from 'react'
import '../Components/css/Contact.css'
import backgroud from '../Images/ice-cream-hero.jpg'
import email from '../Images/Email.png'
import phone from '../Images/Phone.png'

import GoogleMapsApi from '../Components/GoogleMapsApi'

//imports for validation 
import useForm from '../Components/useForm'
import validate from '../Components/ValidateForm'

function Contact(submitForm) {
  const {handleChange, values, handleSubmit, errors} = useForm(validate);


  return (
      <div className='formContainer' style={{backgroundImage: `url(${backgroud})`}}>
          <div className='left'>
            <div className='topText'>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam est, 
                  mollis nec risus non, lacinia malesuada nibh. Sed ac pellentesque velit. Nam posuere commodo.</h2> 
            </div>
            <div className='contactInfo'>
              <div className='phoneInfo'>
                <img src={phone} alt='phone'></img>
                <p>Tel: 070-xxxxxxx</p>
              </div>
              <div className='emailInfo'>
                <img src={email} alt='mail'></img>
                <p>Email: lorem.ipsum@gmail.com</p>
              </div>
              <p id='lastInfo'>Or get in touch with us at one of our store locations</p>
            </div>
            <div className='googleMaps'>
              <GoogleMapsApi/>
            </div>
          </div>
          <div className='right'>
            <h2>Contact us</h2>
            <form id='contactForm' className='contactForm' onSubmit={handleSubmit}>
              <div>
                <input type='text' placeholder='Name' name='name' value={values.name} onChange={handleChange}></input>
                {errors.name && <p>{errors.name}</p>}
              </div>
              <div>
                <input type='email' placeholder='Email' name='email' value={values.email} onChange={handleChange}></input>
                {errors.email && <p>{errors.email}</p>}
              </div>
              <div>
                <input type='text' placeholder='Subject' name='subject' value={values.sunject} onChange={handleChange}></input>
                {errors.subject && <p>{errors.subject}</p>}
              </div>
              <div>
                <textarea placeholder='Message' name='message' value={values.message} onChange={handleChange}></textarea>
                {errors.message && <p>{errors.message}</p>}
              </div>
              <div className='formButton'>
              <button type="submit">Send Message</button>
              {errors.success && <h3>{errors.success}</h3>}
              </div>
            </form>
          </div>
      </div>

  )
}

export default Contact