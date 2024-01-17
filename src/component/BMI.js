import {React,useState} from 'react'
import Nav from '../common/Nav';
import BmrBack1 from '../img/BMR FINDER BACKGROUND IMG.jpg' 
const BMI = () => {

const [weightBody,setWeigthBody]=useState(0);
const [heightBody,setHeigthBody]=useState(0);
const [bmiBody,setBmiBody]=useState('');
const [message,setMessage]=useState('');

//logic
let CalcBmi =(e)=>{
e.preventDefault();
if(weightBody == 0 || heightBody == 0){
alert("Please enter the valid heigth and weigth")
}
else{
    let bmi=(weightBody/heightBody/heightBody*10000)
    setBmiBody(bmi.toFixed(1))

    if(bmi<15){
        setMessage(`You are under weight`)
    }
    else if(bmi>=18.5 && bmi<25){
        setMessage(`you are healthy weight`)
    }
    else if(bmi>=30 && bmi<40){
        setMessage(`you are obese weight`)
    }
    else{
setMessage(`you are over weight`)
    }
}
}
//reload logic

let reload =()=>{
    window.location.reload()
}

  return (
    <div>
   <Nav/>
    <div className="bmi-main-div ">
    <div className="containers">
        <div className="header">BMI Calculator</div>
        <form action="" onSubmit={CalcBmi}>
        <div className="form-data">
            <div className="weight">
                Weight (kgs)
                <div className="input-type">
                    <input type="text" name="weight" id="weight" value={weightBody} onChange={(e)=>setWeigthBody(e.target.value)} placeholder='Enter the Body Weigth' />
                </div>
            </div>
            <div className="height">
                Heights (Cms)
                <div className="input-type">
                    <input type="text" name="hright" id="height" value={heightBody} onChange={(e)=>setHeigthBody(e.target.value)} placeholder='Enter the Body Height' />
                </div>
            </div>
            <div className="btn">
                <button type='submit'>Sumbit</button>
            </div>
        <div className="btn">
            <button type='submit' onClick={reload}>Reload</button>
        </div>
        <div className="result">
            Your BMI is:{bmiBody}
            <p>{message}</p>
        </div>
        </div>
        </form>
       
      </div>
    </div>
     
    </div>
  )
}

export default BMI
