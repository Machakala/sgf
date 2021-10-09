import React from "react";
// import Calendar from 'react-calendar';
import { Row, Col, Container } from "react-bootstrap";
import 'react-calendar/dist/Calendar.css';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import data from "../data";

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
                {data.OpenEvents.map((OpenEvents) => (
                    <div key={OpenEvents._id}>
                        <div className="eventopen">
                            <subtittle className="about1">
                                {OpenEvents.name}
                            </subtittle>
                            <Container fluid>
                                <Row >
                                    <Col bg="light">
                                        <Button variant="dark"><Link to="/Eventregister"> {OpenEvents.action}</Link></Button>
                                    </Col>
                                    <Col>
                                        {OpenEvents.Location}
                                    </Col>
                                    <Col>
                                        <img
                                            className='col-1a'
                                            src={OpenEvents.image}
                                            alt={OpenEvents.name}
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                ))}
                {data.ClosedEvents.map((ClosedEvents) => (
                    <div key={ClosedEvents._id}>
                        <div className="eventover">
                            <subtittle className="about1">
                                {ClosedEvents.name}
                            </subtittle>
                            <Container fluid>
                                <Row >
                                    <Col bg="light">
                                        <Button variant="dark" onClick={Regover}>{ClosedEvents.action}</Button>
                                    </Col>
                                    <Col>
                                        {ClosedEvents.Location}
                                    </Col>
                                    <Col>
                                        <img
                                            className='col-1a'
                                            src={ClosedEvents.image}
                                            alt={ClosedEvents.name}
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                ))}


            </div>

        </div >

    );
}

export default EventScreen;