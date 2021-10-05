import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import grad from '../sgffiles/2019 Graduation graduants      seated (1).jpg';
function EventScreen(props) {
    const [dateState, setDateState] = useState()
    const KEEPDATE = (e) => {
        setDateState(e);
        props.history.push('/Eventregister')
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
    const handleclick = (e) => {
        setShowText(true);
    }
    const Regover = (e) => {
        setShowText(false);
        window.alert('Registration is Over');
    }
    const Regopen = (e) => {
        handleclick();

    }
    return (
        <div >
            <tittle className="home">
                EVENT
            </tittle>
            <br />
            <div className="event">
                <div className="eventopen">
                    <subtittle className="about1">
                        Graduation
                    </subtittle>
                    <div className='col-2'>
                        <div className='col-1'>
                            <div className='col-12'>
                                <div >
                                    <button onClick={Regopen}> Register</button>
                                </div>
                                {showText ? <Text /> : null}
                            </div>
                            <div>
                                Location:ogba
                            </div>
                        </div>
                        <div className='col-1a'>
                            <img
                                className='col-1a'
                                src={grad}
                                alt='{events.name}'
                            />
                        </div>
                    </div>
                </div>
                <div className="eventover" >
                    <subtittle className="about1">
                        birthday
                    </subtittle>
                    <div className='col-2'>
                        <div className='col-1'>
                            <div className='col-12'>
                                <div>
                                    <button onClick={Regover}>Closed</button>
                                </div>
                            </div>
                            <div>
                                Location:ogba
                            </div>
                        </div>
                        <div className='col-1a'>
                            <img
                                src='{events.image}'
                                alt='{events.name}'
                            />
                        </div>
                    </div>
                </div>

            </div >
        </div>

    );
}

export default EventScreen;