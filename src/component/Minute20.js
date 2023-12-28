import React from 'react'
import Nav from '../common/Nav'
import Footer from '../common/Footer'
import Abs20min from '../img/20-min/abs-20-min.jpg'
import bicep20min from '../img/20-min/bicep-20-min.jpg'
import carbs20min from '../img/20-min/carbs-20-min.jpg'
import back20min from '../img/20-min/back-20-min.jpg'
import chest20min from '../img/20-min/chest-20-min.jpg'
import shoulder20min from '../img/20-min/shoulder-20-min.jpg'
import tricep20min from '../img/20-min/tricep-20-min.jpg'
import forarm20min from '../img/20-min/forarm-20-min.jpg'
import leg20min  from '../img/20-min/leg-20-min.jpg'

const Minute20 = () => {
  return (
    <div>
      <Nav/>
      <div className="main-div-of-20">
        <div className="header mt-3">
            20-Minute Workouts
        </div>
        <div className="container">
        <div className="row mt-5">
            <div className="col-md-4 tool-mid">
          <div className="card fixHeightmin" style={{width: '18rem'}}>
  <img src={Abs20min} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Abs</h5>
    <p className="card-text">They provide back and torso stability and they allow the safe and effective movement of the upper and lower body. </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
     </div>
            <div className="col-md-4 tool-mid">
            <div className="card fixHeightmin" style={{width: '18rem'}}>
  <img src={bicep20min} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Biceps</h5>
    <p className="card-text">This exercise targets the biceps and can increase serious strength and size to the entire muscle when done correctly. </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
 </div>
            <div className="col-md-4 tool-mid">
            <div className="card fixHeightmin" style={{width: '18rem'}}>
  <img src={carbs20min} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Carbs</h5>
    <p className="card-text">Carbs are essential for replenishing glycogen (a form of carbohydrate stored in your muscles) after exercise.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-4 tool-mid">
          <div className="card fixHeightmin" style={{width: '18rem'}}>
  <img src={back20min} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Back</h5>
    <p className="card-text">The deadlift remains the king of all back exercises, as the movement incorporates lat and core stabilization along with engaging your entire posterior chain.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
     </div>
            <div className="col-md-4 tool-mid">
            <div className="card fixHeightmin" style={{width: '18rem'}}>
  <img src={chest20min} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Chest</h5>
    <p className="card-text">The chest. In the human body, the region of the thorax between the neck and diaphragm in the front of the body is called the chest.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
 </div>
            <div className="col-md-4 tool-mid">
            <div className="card fixHeightmin" style={{width: '18rem'}}>
  <img src={shoulder20min} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Shoulder</h5>
    <p className="card-text">Standing, hold dumbbells with your palms facing each other. Bend your torso forward, forming a 45-degree angle with the floor. </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-4 tool-mid">
          <div className="card fixHeightmin" style={{width: '18rem'}}>
  <img src={tricep20min} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Tricep</h5>
    <p className="card-text">Extend your arms straight overhead, bend them at the elbows, and lower the dumbbells behind your head. (If this is too difficult with a weight in each hand, just hold one weight between both hands.) </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
     </div>
            <div className="col-md-4 tool-mid">
            <div className="card fixHeightmin" style={{width: '18rem'}}>
  <img src={forarm20min} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Formarm</h5>
    <p className="card-text">These forearm exercises improve grip strength and make it easier to lift, carry and hold things. </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
 </div>
            <div className="col-md-4 tool-mid">
            <div className="card fixHeightmin" style={{width: '18rem'}}>
  <img src={leg20min} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Legs</h5>
    <p className="card-text">
Exercising the legs makes you speedier on the track and speeds up your metabolism. To summarize, the leg exercises benefits are: Maintains good body symmetry. </p>
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

export default Minute20
