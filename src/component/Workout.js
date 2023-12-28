import React from 'react'
import Nav from '../common/Nav'
import Footer from '../common/Footer'

const Workout = () => {
  return (
    <div>
      <Nav/>
      <div className="main-workout-page">
      <div className="main-workout-dp">
        <img src="" alt="" />
      </div>
      <div className="container mt-5">
      <div className="row">
            <div className="col-md-4">
           <div className="card" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Upper Body</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

            </div>
            <div className="col-md-4">
          <div className="card" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Lower Body</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

            </div>
            <div className="col-md-4">
            <div className="card" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Cardio </h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

            </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default Workout
