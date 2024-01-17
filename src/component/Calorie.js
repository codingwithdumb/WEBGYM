import {React,useState} from 'react'
import Nav from '../common/Nav'
import BmrBack1 from '../img/BMR FINDER BACKGROUND IMG.jpg' 

const Calorie = () => {

const [ageCalo,setAgeCalo]=useState();
const [heightCalo,setHeightCalo]=useState();
const [weightCalo,setWeightCalo]=useState();
const [gender , setGender]=useState(''); 
const [activity, setActivity]=useState();
const [calorie, setCalorie]=useState();

let calCalorie=(e)=>{
     e.preventDefault();
if (weightCalo === 0 || heightCalo === 0) {
  alert('Please enter valid height and weight');
} 
  else {
      let caloriesActivity = 0;
      let resultCalorie = 0;

      if (gender === 'male') {
        caloriesActivity = 10 * weightCalo + 6.25 * heightCalo - 5 * ageCalo + 5;
      } else if (gender === 'female') {
        caloriesActivity = 10 * weightCalo + 6.25 * heightCalo - 5 * ageCalo - 161;
      } else {
        alert('Please select a gender');
      }
if(activity=='Sedentary: little or no exercise'){
    resultCalorie=caloriesActivity*1.2;
}
else if(activity=='Exercise 1-3 times/week'){
    resultCalorie=caloriesActivity*1.375;
}
else if(activity=='Exercise 4-5 times/week'){
    resultCalorie=caloriesActivity*1.55;
}
else if(activity=='Daily exercise or intense exercise 3-4 times/week'){
    resultCalorie=caloriesActivity*1.725;
}
else if(activity=='Intense exercise 6-7 times/week'){
    resultCalorie=caloriesActivity*1.9;
}

setCalorie(resultCalorie.toFixed(2)); // Set the BMR result with two decimal places
}
}
  return (
    <div>
    <Nav/>
      <div className="main-calories-calc">
      <div className="inner-calo">
      <div className="header">
            Calories Calculator
        </div>
        <div className="form-cal">
            <form action="" onSubmit={calCalorie}>
            <div className="age-div">
            <label htmlFor="Age">Age</label>
                <input type="text" name="age" id="age" value={ageCalo} onChange={(e)=>{setAgeCalo(e.target.value)}}/>
            </div>
               <div className="gender-div mt-2">
               <label htmlFor="Gender">Gender</label>
                <input type="radio" name="male" id="male" value='male' checked={gender==='male'} onChange={()=>setGender('male')} />
                <label htmlFor="male">Male</label>
                <input type="radio" name="male" id="female" value='female' checked={gender==='female'} onChange={()=>setGender('female')} />
                <label htmlFor="female">Female</label>
               </div>
                <div className="height-calo mt-2">
                    <label htmlFor="">Height</label>
                    <input type="text" name="height" id="height" value={heightCalo} onChange={(e)=>{setHeightCalo(e.target.value)}}/>
                </div>
                <div className="weight-calo mt-2">
                    <label htmlFor="weight">Weight</label>
                    <input type="text" name="weight" id="weight" value={weightCalo} onChange={(e)=>{setWeightCalo(e.target.value)}} />
                </div>
                <div className="activity-option mt-2">
                <select name="options"  id="options"value={activity} onChange={(e)=>setActivity(e.target.value)}>
                
                <option value="Activity Level">Activity Level</option>
                <option value="Sedentary: little or no exercise">Sedentary: little or no exercise</option>
                <option value="Exercise 1-3 times/week">Exercise 1-3 times/week</option>
                <option value="Exercise 4-5 times/week">Exercise 4-5 times/week</option>
                <option value="Daily exercise or intense exercise 3-4 times/week">Daily exercise or intense exercise 3-4 times/week	</option>
                <option value="Intense exercise 6-7 times/week">Intense exercise 6-7 times/week</option>
                
            </select>
                </div>
             
                <div className="btn-div-calo mt-2">
                    <button>Submit</button>
                    <button>Reload</button>
                </div>
                <div className="result-calorie mt-2">
                    Your Calories Need {calorie}
                </div>
            </form>
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default Calorie
