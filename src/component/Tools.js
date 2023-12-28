import React from 'react'
import {Link, Outlet } from 'react-router-dom'
import Nav from '../common/Nav'
import '../common/Common.css';
import Footer from '../common/Footer';
// import BMI from '../component/BMI'
import ToolImg1 from '../img/ToolsImg1.jpg'
import ImgBmi from '../img/BMI.jpg'
import ImgBmr from '../img/BMR.jpg'
import ImgCalorie from '../img/CALORIE.jpg'

const Tools = () => {
  return (
    <div style={{overflowX:"hidden"}}>
    <Nav/>
    <div className="poster-tools">
        <img src={ToolImg1} alt="" />
      </div>
      <div className="container mt-5">
      <div className="row">
      
      <div className="col-md-4 tool-mid">
      <Link to='/BMI' className='textnone'>
  <div className="card tool-mid-wids">
  <img src={ImgBmi} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">BMI</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/BMI" className="btn btn-primary textnone">Go somewhere</Link>
  </div>
</div>
    </Link>
  </div>
  <div className="col-md-4 tool-mid">
  <Link to='/BMR' className='textnone'>
<div className="card tool-mid-wids">
  <img src={ImgBmr} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">BMR</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/BMR" className="btn btn-primary textnone">Go somewhere</Link>
  </div>
</div>
 </Link>
  </div>
  <div className="col-md-4 tool-mid">
  <Link to='/Calorie' className='textnone'>
 <div className="card tool-mid-wids">
  <img src={ImgCalorie} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Calories</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/Calorie" className="btn btn-primary textnone">Go somewhere</Link>
  </div>
</div>
</Link>
  </div>
</div>
      </div>

<Footer/>
      </div>
  )
}

export default Tools
