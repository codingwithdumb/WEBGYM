import React from "react";
import Nav from "../common/Nav";
import Footer from "../common/Footer";

const LowerBody = () => {
  return (
    <div>
      <Nav />
      <div className="main-div-lower">
        <div className="header">Lower Body Exercise</div>
        <div className="inner-body-div">
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Squat</h5>
                    <p className="card-text">
                      The squat is a compound, full-body exercise that primarily
                      targets the lower body muscles, including the quadriceps,
                      hamstrings, glutes, and calves. It's considered one of the
                      most fundamental and effective exercises for building
                      lower body strength and muscle mass.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Barbell squat</h5>
                    <p className="card-text">
                      The barbell squat is a compound exercise that targets
                      multiple muscle groups in the lower body, primarily
                      focusing on the quadriceps, hamstrings, glutes, and lower
                      back. It's considered one of the most effective exercises
                      for building lower body strength and muscle mass.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Deadlift</h5>
                    <p className="card-text">
                      The deadlift is a fundamental compound exercise that
                      targets multiple muscle groups, primarily focusing on the
                      lower back, glutes, hamstrings, quadriceps, and forearms.
                      It's considered one of the most effective exercises for
                      building overall strength and developing posterior chain
                      muscles.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Sumo squat</h5>
                    <p className="card-text">
                      The sumo squat is a variation of the traditional squat
                      exercise, where the stance and positioning resemble that
                      of a sumo wrestler's wide-legged stance. This exercise
                      primarily targets the lower body muscles, including the
                      quadriceps, hamstrings, glutes, and inner thighs.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Goblet squat</h5>
                    <p className="card-text">
                      The goblet squat is a lower body exercise that primarily
                      targets the quadriceps, glutes and hamstrings. It's an
                      effective compound movement that can be performed using a
                      dumbbell or kettlebell, holding the weight in front of
                      your chest, resembling the appearance of holding a goblet.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Calf raises</h5>
                    <p className="card-text">
                      Calf raises are exercises designed to specifically target
                      the calf muscles, including the gastrocnemius and soleus
                      muscles, located in the lower part of the leg. These
                      exercises primarily focus on the muscles responsible for
                      plantar flexion, .
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Front squat</h5>
                    <p className="card-text">
                      The front squat is a compound strength-training exercise
                      that targets several muscle groups, primarily the
                      quadriceps, glutes, and core muscles, while also engaging
                      the upper back and shoulders.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Hip thrust</h5>
                    <p className="card-text">
                      The hip thrust is a lower body exercise that primarily
                      targets the glutes (buttocks) while also engaging the
                      hamstrings and lower back muscles. It's considered one of
                      the most effective exercises for glute activation and
                      strengthening.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Bent knee calf raises</h5>
                    <p className="card-text">
                      {" "}
                      This exercise involves bending the knees to isolate and
                      target the soleus muscles more effectively compared to
                      regular standing calf raises, which primarily engage the
                      gastrocnemius muscle.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LowerBody;
