import React from 'react'
import SelfDefeImg from '../img/SelfDefence.jpg'
import ProgressImg from '../img/Progress.jpg'
import WorkoutImg from '../img/Workout.jpg'
import NutritionImg from '../img/Nutrition.jpg'
const Whychoose = () => {
  return (
    <div>
    <div className="container">
    <div className="main-chose mt-5">
      <h3>Why Choose Us</h3>
    <div className="row mt-5">
        <div className="col-md-3 fixing">
        <div class="card" style={{width: "18rem;"}}>
  <img src={SelfDefeImg} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Self Defence</h5>
    <p class="card-text">A man who is attacked or believes that he is about to be attacked may use such force as is both necessary and reasonable in order to defend himself.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        <div className="col-md-3 fixing">
        <div class="card" style={{width: "18rem;"}}>
  <img src={ProgressImg}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Progression</h5>
    <p class="card-text">Progression is the series and sequences of mathematics algebra that are related to numbers and algebraic operations. </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        <div className="col-md-3 fixing">
        <div class="card" style={{width: "18rem;"}}>
  <img src={WorkoutImg} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Workout</h5>
    <p class="card-text"> Training of the body to improve health and fitness. Different types have different purposes, including aerobics for heart and respiratory function </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        <div className="col-md-3 fixing">
        <div class="card" style={{width: "18rem;"}}>
  <img src={NutritionImg} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Nutrition</h5>
    <p class="card-text">Nutrition is the process of consuming, absorbing, and using nutrients needed by the body for growth, development, and maintenance of life. </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
    </div>
      </div>
    </div>
    
    </div>
  )
}

export default Whychoose
