import React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from "./Screens/HomeScreen";
import AboutUsScreen from "./Screens/AboutUsScreen";
import AdmissionScreen from "./Screens/AdmissionScreen";
import ManagementScreen from "./Screens/ManagementScreen";
import EventScreen from "./Screens/EventScreen.js";
import ContactScreen from "./Screens/ContactScreen";
import auntyameh from "./Teachers/auntyameh";
import mrokafor from "./Teachers/mrokafor";
import mrpaul1 from "./Teachers/mrpaul1";
import mrpaul2 from "./Teachers/mrpaul2";
import mrpaul3 from "./Teachers/mrpaul3";
import mrpaul4 from "./Teachers/mrpaul4";
import Primaryregister from "./Admissionforms/Primaryregister";
import Nurseryregister from "./Admissionforms/Nurseryregister";
import Privatelessonregister from "./Admissionforms/Privatelessonregister";
import Eventregister from "./Components/Eventregister";
import sgf from './sgffiles/sgflogo2.png';
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <div className='row'>
            <div>
              <Link to="/" className='brand'>
                <img className='header-image' src={sgf} alt='school logo' />
                <p>SGF SCHOOLS</p>
              </Link>
            </div>
            <div>
              <Link to="/AboutUs">About Us</Link>
              <Link to="/Admission"> Admission</Link>
              <Link to="/Management">Management </Link>
              <Link to="/Event">Event </Link>
              <Link to="/Contact"> Contact</Link>
            </div>
          </div>
        </header>
        <main>
          <Route path="/AboutUs" component={AboutUsScreen}></Route>
          <Route path="/Admission" component={AdmissionScreen}></Route>
          <Route path="/Management" component={ManagementScreen}></Route>
          <Route path="/Event" component={EventScreen}></Route>
          <Route path="/Contact" component={ContactScreen}></Route>
          <Route path="/auntyameh" component={auntyameh}></Route>
          <Route path="/MROKAFOR" component={mrokafor}></Route>
          <Route path="/mrpaul1" component={mrpaul1}></Route>
          <Route path="/mrpaul2" component={mrpaul2}></Route>
          <Route path="/mrpaul3" component={mrpaul3}></Route>
          <Route path="/mrpaul4" component={mrpaul4}></Route>
          <Route path="/Primaryregister" component={Primaryregister}></Route>
          <Route path="/Nurseryregister" component={Nurseryregister}></Route>
          <Route path="/Privatelessonregister" component={Privatelessonregister}></Route>
          <Route path="/Eventregister" component={Eventregister}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          Thank you

        </main>
        <footer>
          <div className='footer-row'>
            <div>
              <Link to="/">
                <img className='footer-image' src='\images\logofav.ico' alt='hmtechlogo' />
              </Link>
            </div>
            <div>
              <Link to="/AboutUs">AboutUs</Link>
              <Link to="/Admission"> Admission</Link>
              <Link to="/Management">Management </Link>
              <Link to="/Event">Event </Link>
              <Link to="/Contact"> Contact</Link>
            </div>
          </div>
        </footer>
      </div>

    </BrowserRouter>

  );
}

export default App;
