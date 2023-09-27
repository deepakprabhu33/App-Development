import Dashboard from './Components/Dashboard';
import Login from './Components/login';
import ProfileDetails from './Components/profileDetails.js';
import Signup from './Components/signup';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Admission from './Components/Admission';
import Home from './Components/Home';
import AcademicDetails from './Components/Academic';
import FAQ from './Components/faq';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsAndConditions from './Components/Terms';
import ContactUs from './Components/ContactUs';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/profile' element={<ProfileDetails/>}></Route>
        <Route path='/application' element={<Admission />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/academic' element={<AcademicDetails />}></Route>
        <Route path='/faq' element={<FAQ />}></Route>
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />}></Route>
        <Route path='/Terms' element={<TermsAndConditions/>}></Route>
        <Route path='/ContactUs' element={<ContactUs />}></Route>
        <Route path='/profileDetails' element={<ProfileDetails />}></Route>




      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
