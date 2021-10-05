import React from "react";
// import Calendar from 'react-calendar';
import { Row, Col, Container } from "react-bootstrap";
import 'react-calendar/dist/Calendar.css';
import { Link } from "react-router-dom";
import grad from '../sgffiles/2019 Graduation graduants      seated (1).jpg';
import yearParty from '../sgffiles/End of year Party Pupils enjoying    with Father Chrismass in one of the end of year Party.jpg';
import { Button } from 'react-bootstrap';

//import Eventregister from "../Components/Eventregister";

function EventScreen(props) {
    /*
    const [dateState, setDateState] = useState()

    const KEEPDATE = (e) => {
        setDateState(e);
        props.history.push({ Eventregister })

    }
    const [showText, setShowText] = useState(false)
    const Text = () =>
        <div className='col-12a'>
            <Calendar
                value={dateState
                }
                onClickDay={KEEPDATE}
            />
        </div>
        ;
    */
    /*
const handleclick = (e) => {
    setShowText(true);
}
{//showText ? <Text /> : null}*/

    const Regover = (e) => {
        //        setShowText(false);
        window.alert('Registration is Over');
    }
    /*
    const Regopen = (e) => {
        handleclick();
    }
    */
    return (
        <div >
            <tittle className="about1">
                EVENT
            </tittle>
            <br />
            <div className="event">
                <div className="eventopen">
                    <subtittle className="about1">
                        Graduation
                    </subtittle>
                    <Container fluid>

                        <Row >
                            <Col bg="light">
                                <Button variant="outline-success"><Link to="/Eventregister"> REGISTER</Link></Button>
                            </Col>
                            <Col>
                                Location: School
                            </Col>
                            <Col>
                                <img
                                    className='col-1a'
                                    src={grad}
                                    alt='graduants'
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="eventover" >
                    <subtittle className="about1">
                        End Of The Year Party
                    </subtittle>
                    <Row>
                        <Col >
                            <Button variant="outline-success" onClick={Regover}>Closed</Button>
                        </Col>
                        <Col>
                            Location: School
                        </Col>
                        <Col>
                            <img
                                className='col-1a'
                                src={yearParty}
                                alt='end of the year party'
                            />
                        </Col>
                    </Row>
                </div>

            </div >
        </div >

    );
}

export default EventScreen;