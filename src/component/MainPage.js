import React from 'react'
import {Link} from 'react-router-dom'
import MainImg1 from '../img/mainimg1.jpg'
import challengesImg from '../img/Challenege.jpg'
import BodyLangImg from '../img/body language.jpg'
import MintImg from '../img/20-Minute.jpg'
const MainPage = () => {
  return (
    <div>
    <div className="img-part">
    <div className="main-imgg">
        <img src={MainImg1}alt="" />
      <div className="text-up mt-5 px-5">
      <h2 >FIT&SEXY</h2>
      <p>No Pain No Gain !! <br /> Sweat is Sweet !!</p>
      <div class="center-div mt-5">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        View More
    </div>
      </div>
    </div>
    <div className="weloce-to-div mt-5">
        <h2>WELCOME TO FIT & SEXY</h2>
        <p className='mt-3'>Hello world, we are Building Training Center</p>
        <p>
        "Welcome to fit and sexy" <br />can be interpreted as an invitation or a greeting related to achieving fitness and<br /> a desirable physical appearance. It suggests a focus on improving one's health, fitness level, and overall attractiveness.</p>
    </div>
    <hr />
    <div className="container">
    <div className="spot-light">
    <div className="row komana">
        <div className="col-md-4">
        <Link to='/Challenges' className='textdeduct'>
        <div className="carding-data">
        <div class="card" style={{width: "18rem"}}>
  <img src={challengesImg} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Our Challenges</h5>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
        </div>
        </Link>
       </div>
        <div className="col-md-4 ">
        <Link to='/Minute20' className='textdeduct'>
        <div className="carding-data">
        <div class="card" style={{width: "18rem"}}>
  <img src={MintImg} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">20-Minute Workout</h5>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
        </div>
        </Link>
        </div>
        <div className="col-md-4 ">
        <Link to='/BodyLanguage' className='textdeduct'>
        <div className="carding-data">
        <div class="card" style={{width: "18rem"}}>
  <img src={BodyLangImg} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Body Language</h5>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
        </div>
        </Link>
        </div>
    </div>
    </div>
    </div>
    
    </div>
    </div>
  )
}

export default MainPage
