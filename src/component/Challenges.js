import React from 'react'
import Nav from '../common/Nav'
import Chale1 from '../img/Challenges/Challenge-Abs-30.jpg'
import Chale2 from '../img/Challenges/Challenge-Cardio-30.jpg'
import Chale3 from '../img/Challenges/Challenge-Leg-30.jpg'
import Footer from '../common/Footer'


const Challenges = () => {
  return (
    <div>
      <Nav/>
      <div className="main-div-chsllenges">
      <div className="header-chale">
        Challenges Of The Day<u/>
      </div>
      <div className="container">
      <div className="row mt-5">
            <div className="col-md-4 challe-img tool-mid">
                <img src={Chale1} alt="" />
            </div>
            <div className="col-md-4 challe-img tool-mid">
                <img src={Chale2} alt="" />
            </div>
            <div className="col-md-4 challe-img tool-mid">
                <img src={Chale3} alt="" />
            </div>
        </div>
      </div>
       
      </div>
      <Footer/>
    </div>
  )
}

export default Challenges
