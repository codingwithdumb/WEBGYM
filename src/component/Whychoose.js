import React from "react";
import SelfDefeImg from "../img/SelfDefence.jpg";
import ProgressImg from "../img/Progress.jpg";
import WorkoutImg from "../img/Workout.jpg";
import NutritionImg from "../img/Nutrition.jpg";
const Whychoose = () => {
  return (
    <div>
      <div className="container">
        <div className="main-chose mt-5">
          <h3>Why Choose Us</h3>
          <div className="row mt-5">
            <div className="col-md-3 fixing">
              <div class="card" style={{ width: "18rem;" }}>
                <img src={SelfDefeImg} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Self Defence</h5>
                  <p class="card-text">
                    It refers to techniques, strategies, and skills
                    employed to protect oneself from physical harm. It
                    involves a range of practices aimed at preventing, avoiding,
                    or neutralizing threats posed by attackers or potential
                    assailants.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 fixing">
              <div class="card" style={{ width: "18rem;" }}>
                <img src={ProgressImg} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Progression</h5>
                  <p class="card-text">
                    It refers to the act or process of advancing,
                    improving. It can be applied across different areas,
                    including education, career, fitness. Progression often
                    involves gradual growth, development.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 fixing">
              <div class="card" style={{ width: "18rem;" }}>
                <img src={WorkoutImg} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Workout</h5>
                  <p class="card-text">
                    It refers to a
                    training session designed to improve fitness, strength,
                    endurance, flexibility. Workouts can be tailored to various
                    fitness goals, such as weight loss, muscle building,
                    cardiovascular fitness.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 fixing">
              <div class="card" style={{ width: "18rem;" }}>
                <img src={NutritionImg} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Nutrition</h5>
                  <p class="card-text">
                    It refers to the process by which the body utilizes
                    food to sustain life, grow, repair tissues, and maintain
                    overall health. It involves the intake of nutrients through
                    food, which are essential for proper functioning.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
