import Home from './Pages/Home.jsx'
import Destinations from './Pages/Destinations.jsx'
import Packages from './Pages/Packages.jsx'
import Favorites from './Pages/Favorites.jsx'
import ProductDetails from './Pages/ProductDetails.jsx'
import Login from './Pages/Login.jsx'
import BestPicks from './Pages/BestPicks.jsx'
import SignUp from './Pages/SignUp.jsx'
import Profile from './Pages/Profile.jsx'
import PicksDetails from './Pages/PicksDetails.jsx'
import Booking from './Pages/Booking.jsx'
import ContinentDetail from './Pages/ContinentDetail.jsx'
import CountryDetail from './Pages/CountryDetail.jsx'
import Checkout from './Pages/Checkout.jsx'
import EditProfile from './Pages/EditProfile.jsx'
import ChangePassword from './Pages/ChangePassword.jsx'
import AdminDashboard from './Pages/AdminDashboard.jsx'
import VerifyEmail from "./Pages/VerifyEmail.jsx";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
import ResetPassword from "./Pages/ResetPassword.jsx";
import Chatbot from './Components/Chatbot/Chatbot';
import FAQ from "./Pages/FAQ.jsx";
import {Routes,Route, BrowserRouter} from 'react-router-dom';

function App(){
 
  return (
  <BrowserRouter>
  <Routes>
    <Route  path="/" element={<Home />}/>
    <Route path="/verify-email" element={<VerifyEmail />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/reset-password" element={<ResetPassword />} />
    <Route  path="/Destinations" element={<Destinations />}/>
    <Route  path="/Packages" element={<Packages />}/>
    <Route  path="/Favorites" element={<Favorites />}/>
    <Route  path="/ProductDetails" element={<ProductDetails />}/>
    <Route  path="/BestPicks" element={<BestPicks />}/>
    <Route  path="/PicksDetails" element={<PicksDetails />}/>
    <Route  path="/Booking" element={<Booking />}/>
    <Route  path="/ContinentDetail" element={<ContinentDetail/>}/>
    <Route  path="/CountryDetail" element={<CountryDetail />}/>
    <Route  path="/checkout" element={<Checkout />}/>
    <Route  path="/Profile" element={<Profile  />}/>
    <Route  path="/editprofile" element={<EditProfile />}/>
    <Route path="/changepassword" element={<ChangePassword />} />
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
    <Route path="/Faq" element={<FAQ />} />
    <Route path="/Login" element={<Login />} />
    <Route  path="/SignUp" element={<SignUp />}/>
  </Routes>
    <Chatbot />
  </BrowserRouter>
);


  
}

export default App;