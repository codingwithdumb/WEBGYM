import React from 'react'
import Nav from '../common/Nav'
import Footer from '../common/Footer'
import Beopen from '../img/bodyLanguage/openbe.jpg'
import voicebe from '../img/bodyLanguage/voicebe.jpg'
import eyebe from '../img/bodyLanguage/eyebe.jpg'
import demonbe from '../img/bodyLanguage/demonbe.jpg'
import smilebe from '../img/bodyLanguage/smilebe.jpg'
import Bepresent from '../img/bodyLanguage/presentbe.jpg'

const BodyLanguage = () => {
  return (
    <>
      <Nav/>
      <div className="main-div-bodylang">
        <div className="header">
        <span>B</span>
        <span>o</span>
        <span>d</span>
        <span>y</span>
        <span></span>
        <span></span>
        <span>L</span>
        <span>a</span>
        <span>n</span>
        <span>g</span>
        <span>u</span>
        <span>a</span>
        <span>g</span>
        <span>e</span>
        </div>
        <div className="container">
 <div className="row">
          <div className="col-md-4 tool-mid">
<div className="card fixHeightmin" style={{width: '18rem'}}>
  <img src={Beopen} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Be Open</h5>
    <p className="card-text">As a personal trainer, your body language should always be open.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
          <div className="col-md-4 tool-mid">
          <div className="card fixHeightmin" style={{width: '18rem'}}>
  <img src={Bepresent} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Always Be Present </h5>
    <p className="card-text">Being fully present and focused on your client is a crucial part of having good body language for personal trainers. </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
          <div className="col-md-4 tool-mid ">
          <div className="card fixHeightmin" style={{width: '18rem'}}>
  <img src={voicebe} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Project Your Voice</h5>
    <p className="card-text">As well as your physical movements and positions, an equally important element of body language is the voice.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-4 tool-mid" >
          <div className="card fixHeightmin" style={{width: '18rem'}}>
  <img src={eyebe} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Make Eye Contact With</h5>
    <p className="card-text">Eye contact is important in almost all interactions, so is an essential part of personal trainer body language.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
     </div>
            <div className="col-md-4 tool-mid">
            <div className="card fixHeightmin" style={{width: '18rem'}}>
  <img src={demonbe} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Demonstrate Exercises</h5>
    <p className="card-text">Another good way to demonstrate good body language as a personal trainer is to always perform demonstrations.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
 </div>
            <div className="col-md-4 tool-mid">
            <div className="card fixHeightmin" style={{width: '18rem'}}>
  <img src={smilebe} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Smile!</h5>
    <p className="card-text">It may sound obvious, but smiling is an often overlooked aspect of having good body language as a personal trainer.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
        </div>
      
        </div>
       
      </div>
      <Footer/>
    </>
  )
}

export default BodyLanguage
