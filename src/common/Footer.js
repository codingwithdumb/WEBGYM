import React from 'react'
import './Common.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <div className="footer-main mt-3">
      <div className="row">
        <div className="col-md-3 text-center">
          <h4>Fit & Sexy</h4>
          <p>Aligarh , Uttar Pradesh</p>
          <p>fitandsexy@gmail.com</p>
          <p>45145245 / 123545855</p>
        </div>
        <div className="col-md-3 text-center">
          <h4>Menu</h4>
          <p><Link to='/'>Home</Link></p>
          <p><Link to='#'>Exercises</Link></p>
          <p><Link to='/Workout'>Workouts</Link></p>
          <p><Link to='/Tools'>Tools</Link></p>
        </div>
        <div className="col-md-3 text-center">
          <h4>Tools</h4>
          <p><Link to='/BMI'>BMI</Link></p>
          <p><Link to='/BMR'>BMR</Link></p>
          <p><Link to='/Calorie'>CALORIES</Link></p>
        </div>
        <div className="col-md-3 hidden-fotter">
        <h4>Working Hours</h4>
        <p>Monday-Saturday</p>
        <p>5.30AM-9.30PM</p>
        <p>Sunday</p>
        <p>6AM-1PM</p>
        </div>
      </div>
      
      </div>
      
    </div>
  )
}

export default Footer
