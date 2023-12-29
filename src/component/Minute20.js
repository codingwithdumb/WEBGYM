import React from "react";
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import Abs20min from "../img/20-min/abs-20-min.jpg";
import bicep20min from "../img/20-min/bicep-20-min.jpg";
import carbs20min from "../img/20-min/carbs-20-min.jpg";
import back20min from "../img/20-min/back-20-min.jpg";
import chest20min from "../img/20-min/chest-20-min.jpg";
import shoulder20min from "../img/20-min/shoulder-20-min.jpg";
import tricep20min from "../img/20-min/tricep-20-min.jpg";
import forarm20min from "../img/20-min/forarm-20-min.jpg";
import leg20min from "../img/20-min/leg-20-min.jpg";

const Minute20 = () => {
  return (
    <div>
      <Nav />
      <div className="main-div-of-20">
        <div className="header mt-3">20-Minute Workouts</div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4 tool-mid">
              <div className="card fixHeightmin" style={{ width: "18rem" }}>
                <img src={Abs20min} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Abs</h5>
                  <p className="card-text">
                    "Six-pack abs" refers to a highly defined set of abdominal
                    muscles that create a visibly toned and sculpted midsection.
                    This term is used to describe a specific aesthetic
                    appearance of the abdominal muscles when they are prominent.{" "}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 tool-mid">
              <div className="card fixHeightmin" style={{ width: "18rem" }}>
                <img src={bicep20min} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Biceps</h5>
                  <p className="card-text">
                    The biceps brachii, commonly known as the biceps, is a
                    prominent muscle located in the upper arm. It is a
                    two-headed muscle, consisting of a long head and a short
                    head.{" "}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 tool-mid">
              <div className="card fixHeightmin" style={{ width: "18rem" }}>
                <img src={carbs20min} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Calf</h5>
                  <p className="card-text">
                    The calf muscles are located on the back of the lower leg
                    and consist primarily of two muscles: the gastrocnemius and
                    the soleus. These muscles play a crucial role in various
                    movements, including walking, running, and jumping.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 tool-mid">
              <div className="card fixHeightmin" style={{ width: "18rem" }}>
                <img src={back20min} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Back</h5>
                  <p className="card-text">
                    The human back is a complex structure composed of bones,
                    muscles, ligaments, and tendons that provide support,
                    stability to the upper body.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 tool-mid">
              <div className="card fixHeightmin" style={{ width: "18rem" }}>
                <img src={chest20min} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Chest</h5>
                  <p className="card-text">
                    The chest refers to the front part of the upper body between
                    the neck and the abdomen. Most notably the pectoralis major
                    and pectoralis minor, which play significant roles in upper
                    body movements and stability.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 tool-mid">
              <div className="card fixHeightmin" style={{ width: "18rem" }}>
                <img src={shoulder20min} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Shoulder</h5>
                  <p className="card-text">
                    The shoulder is a complex and highly mobile joint that
                    connects the upper arm bone (humerus), the collarbone
                    (clavicle), and the shoulder blade (scapula). It consists of
                    several key components, including bones, muscles, tendons,
                    and ligaments.{" "}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 tool-mid">
              <div className="card fixHeightmin" style={{ width: "18rem" }}>
                <img src={tricep20min} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Tricep</h5>
                  <p className="card-text">
                    The triceps brachii, commonly known as the triceps, is a
                    large muscle located at the back of the upper arm. It is
                    made up of three heads, hence the name "triceps".{" "}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 tool-mid">
              <div className="card fixHeightmin" style={{ width: "18rem" }}>
                <img src={forarm20min} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Forearm</h5>
                  <p className="card-text">
                    The forearm is the region of the upper limb between the
                    elbow and the wrist. It comprises various muscles, bones,
                    tendons, and nerves that enable movement and control in the
                    hand and wrist.{" "}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 tool-mid">
              <div className="card fixHeightmin" style={{ width: "18rem" }}>
                <img src={leg20min} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Legs</h5>
                  <p className="card-text">
                    The legs are an essential part of the human body's lower
                    extremities, comprising various muscles, bones, tendons, and
                    ligaments that support movement, stability, and
                    weight-bearing functions.{" "}
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
      <Footer />
    </div>
  );
};

export default Minute20;
