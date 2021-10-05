import React from "react";
import { Link, Switch, Route } from 'react-router-dom';
import HomeScreen from "./Screens/HomeScreen";
import AboutUsScreen from "./Screens/AboutUsScreen";
import AdmissionScreen from "./Screens/AdmissionScreen";
import ManagementScreen from "./Screens/ManagementScreen";
import EventScreen from "./Screens/EventScreen.js";
import ContactScreen from "./Screens/ContactScreen";
import auntyameh from "./Teachers/auntyameh";
import mrokafor from "./Teachers/mrokafor";
import kdauda from "./Teachers/kdauda";
import oowadimbola from "./Teachers/oowadimbola";
import monuoha from "./Teachers/monuoha";
import apaul from "./Teachers/apaul";
import Primaryregister from "./Admissionforms/Primaryregister";
import Nurseryregister from "./Admissionforms/Nurseryregister";
import Privatelessonregister from "./Admissionforms/Privatelessonregister";
import Eventregister from "./Components/Eventregister";
import sgf from './sgffiles/sgflogo2.png';
function App() {
  return (
    <div className="grid-container">

      <header>
        <nav className='row'>

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
        </nav>
      </header>

      <Switch>
        <Route exact path="/" >
          <HomeScreen />
        </Route>
        <Route exact path="/Admission" >
          <AdmissionScreen />
        </Route>
        <Route exact path="/Management" >
          <ManagementScreen />
        </Route>
        <Route exact path="/Event" >
          <EventScreen />
        </Route>
        <Route exact path="/Contact" >
          <ContactScreen />
        </Route>
      </Switch>
      <main>
        <Route path="/AboutUs" component={AboutUsScreen}></Route>
        <Route path="/auntyameh" component={auntyameh}></Route>
        <Route path="/MROKAFOR" component={mrokafor}></Route>
        <Route path="/kdauda" component={kdauda}></Route>
        <Route path="/oowadimbola" component={oowadimbola}></Route>
        <Route path="/monuoha" component={monuoha}></Route>
        <Route path="/apaul" component={apaul}></Route>
        <Route path="/Primaryregister" component={Primaryregister}></Route>
        <Route path="/Nurseryregister" component={Nurseryregister}></Route>
        <Route path="/Privatelessonregister" component={Privatelessonregister}></Route>
        <Route path="/Eventregister" component={Eventregister}></Route>

      </main>
      <footer>
        <div className='footer-row'>
          <div><></>
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

    </div >

  );
}

export default App;
