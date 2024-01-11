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
    <p className="card-text">
    BMI stands for Body Mass Index, a measurement used to estimate an individual's body fat based on their height and weight. It's a commonly used screening tool to categorize adults into different weight categories and assess potential health risks associated with weight.</p>
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
    <p className="card-text">
    BMR stands for Basal Metabolic Rate, which represents the amount of energy (calories) your body requires to maintain basic physiological functions while at rest. These functions include maintaining body temperature, circulating blood, & breathing.</p>
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
    <p className="card-text">
    Calories are a measure of energy derived from food and beverages that the body uses for various physiological functions, including digestion, and physical activity. It's a unit of measurement that quantifies the amount of energy provided by food.</p>
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
