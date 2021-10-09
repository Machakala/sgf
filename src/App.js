import React from "react";
import { Link, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import HomeScreen from "./Screens/HomeScreen";
import AboutUsScreen from "./Screens/AboutUsScreen";
import AdmissionScreen from "./Screens/AdmissionScreen";
import ManagementScreen from "./Screens/ManagementScreen";
import GalleryScreen from "./Screens/GalleryScreen"
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

        <Navbar bg="success" variant="dark" expand="lg" sticky="top" fixed="top" >
          <Container className="justify-content-end">
            <Navbar.Brand as={Link} to={"/"}>
              <img className='header-photo' src={sgf} alt='school logo' />
              SGF SCHOOLS
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" >

              </Nav>
              <Nav>
                <Nav.Link as={Link} to={"/AboutUs"}>About Us</Nav.Link>
                <Nav.Link as={Link} to={"/Admission"}>Admission</Nav.Link>
                <Nav.Link as={Link} to={"/Management"}>Management</Nav.Link>
                <Nav.Link as={Link} to={"/Gallery"}>Gallery</Nav.Link>
                <Nav.Link as={Link} to={"/Event"}>Event</Nav.Link>
                <Nav.Link as={Link} to={"/Contact"}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

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
        <Route exact path="/Gallery" >
          <GalleryScreen />
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
        <Navbar bg="success" variant="dark" expand="sm">
          <Container className="justify-content-center">
            <Nav>
              <Nav.Link as={Link} to={"/AboutUs"}>About Us</Nav.Link>
              <Nav.Link as={Link} to={"/Admission"}>Admission</Nav.Link>
              <Nav.Link as={Link} to={"/Management"}>Management</Nav.Link>
              <Nav.Link as={Link} to={"/Gallery"}>Gallery</Nav.Link>
              <Nav.Link as={Link} to={"/Event"}>Event</Nav.Link>
              <Nav.Link as={Link} to={"/Contact"}>Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </footer>
    </div>


  );
}

export default App;
