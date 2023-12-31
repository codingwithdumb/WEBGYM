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
    <p className="card-text">
    Being open generally refers to having an open-minded and receptive attitude towards various ideas, experiences, perspectives, and people. It involves a willingness to listen, learn, adapt.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
          <div className="col-md-4 tool-mid">
          <div className="card fixHeightmin" style={{width: '18rem'}}>
  <img src={Bepresent} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Always Be Present </h5>
    <p className="card-text">
    It is a guiding principle that encourages individuals to live in the moment, be fully engaged in their current experiences, and focus their attention on the present. </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
          <div className="col-md-4 tool-mid ">
          <div className="card fixHeightmin" style={{width: '18rem'}}>
  <img src={voicebe} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Project Your Voice</h5>
    <p className="card-text">"Projecting your voice" refers to speaking loudly and clearly so that your voice carries well and reaches a larger audience without the aid of amplification devices. It's a technique used to ensure that your voice is strong, audible.</p>
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
    <h5 className="card-title">Making Eye Contact </h5>
    <p className="card-text">
   The act of visually connecting with another person by looking directly into their eyes during a conversation or interaction.
    
    </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
     </div>
            <div className="col-md-4 tool-mid">
            <div className="card fixHeightmin" style={{width: '18rem'}}>
  <img src={demonbe} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Demonstrate Exercises</h5>
    <p className="card-text">Demonstrating exercises typically involves visually showing and explaining physical movements or workout routines. This demonstration can occur in various settings, such as fitness classes.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
 </div>
            <div className="col-md-4 tool-mid">
            <div className="card fixHeightmin" style={{width: '18rem'}}>
  <img src={smilebe} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Smile!</h5>
    <p className="card-text">
    A smile is a facial expression characterized by turning up the corners of the mouth, often accompanied by an upward movement of the lips.</p>
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
