import  {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import './App.css';
import FirstPage from './component/FirstPage'
import Tools from './component/Tools';
import './common/Common.css'
import BMI from './component/BMI';
import BMR from './component/BMR';
import Calorie from './component/Calorie';
import AboutUs from './component/AboutUs';
import UpperBody from './component/UpperBody';
import LowerBody from './component/LowerBody';
import Cardio from './component/Cardio';
import Workout from './component/Workout';
import Challenges from './component/Challenges';
import Minute20 from './component/Minute20';
import BodyLanguage from './component/BodyLanguage';
import LoginPage from './component/Login'
function App() {
  return (
   <>
   {/* <FirstPage/> */}
   <BrowserRouter>
  <Routes>
  <Route path="/" element={<FirstPage />} />
          <Route path="/Tools" element={<Tools />}/>
          <Route path="/Challenges" element={<Challenges />}/>
          <Route path="/Minute20" element={<Minute20 />}/>
          <Route path="/BodyLanguage" element={<BodyLanguage />}/>
            <Route path="/Calorie" element={<Calorie />} />
            <Route path="/BMI" element={<BMI />} />
            <Route path="/BMR" element={<BMR />} />
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/UpperBody' element={<UpperBody/>}/>
          <Route path='/LowerBody' element={<LowerBody/>}/>
          <Route path='/Cardio' element={<Cardio/>}/>
          <Route path='/Workout' element={<Workout/>}/>
          <Route path='/Login' element={<LoginPage/>}/>
  </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
