import {React,useState} from 'react'
import Nav from '../common/Nav'

const BMR = () => {

const [agebod , setAgeBod] =useState(0);
const [heightbod , setHeightBod] =useState(0);
const [weightbod , setWeightBod] = useState(0);
// const [messagebmr , setMessageBmr] =useState('');
const [bmrbod ,setBmrBod]= useState('');
const [gender , setGender]=useState('male'); 

 let calcbmr = (e) => {
    e.preventDefault();

    if (weightbod === 0 || heightbod === 0) {
      alert('Please enter valid height and weight');
    } else {
      let bmrResult = 0;

      if (gender === 'male') {
        bmrResult = 10 * weightbod + 6.25 * heightbod - 5 * agebod + 5;
      } else if (gender === 'female') {
        bmrResult = 10 * weightbod + 6.25 * heightbod - 5 * agebod - 161;
      } else {
        alert('Please select a gender');
      }

      setBmrBod(bmrResult.toFixed(2)); // Set the BMR result with two decimal places
    }
}
let reloadBmr=()=>{
  window.location.reload()
}

  return (
    <div>
    <Nav/>
      <div className="main-bmr-div">

        <div className="containerse">
        <h3>BMR Calculator</h3>
            <form action="" onSubmit={calcbmr} className='form-data-bmr'>
                <div className="age">
               <label htmlFor="Age">Age</label>
               <input type="text" name="" id="" value={agebod} onChange={(e)=>{setAgeBod(e.target.value)}}/>
                </div>
                <div className="gender mt-2">
                    <label htmlFor="Gender">Gender</label>
                    <input type="radio" id="male" name="fav_language" value="male" onChange={(e)=>{setGender(e.target.value)}}/>
                    <label htmlFor="Male">Male</label>
                    <input type="radio" id="female" name="fav_language" value="female" onChange={(e)=>{setGender(e.target.value)}}/>
                    <label htmlFor="Female">Female</label>
                </div>
               
                    <div className="height mt-2">Heigth
                        <input type="text" name="" id="" value={heightbod} onChange={(e)=>{setHeightBod(e.target.value)}}/>
                    </div>
                    <div className="weigth mt-2">Weight
                        <input type="text" name="" id="" value={weightbod} onChange={(e)=>{setWeightBod(e.target.value)}} />
                    </div>
                   
              <div className="but mt-3 ">
              <div className="sub">
              <button type='submit' >Sumbit</button>
              </div>
                <div className="relo">
                <button type='submit' onClick={reloadBmr}>Reload</button>
                </div>
              </div>
              <div className="bmr-result mt-4">
                Your BMR is {bmrbod}
                {/* <p>{messagebmr}</p> */}
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default BMR
