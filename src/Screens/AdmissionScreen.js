import React from "react";
import { Link } from 'react-router-dom';
import sgf from '../sgffiles/contact.png';
import sgf1 from '../sgffiles/admission/admission menu.png';
import sgf2 from '../sgffiles/admission/private lesson with booking.png';
function AdmissionScreen() {
    return (
        <div className='Admission'>
            <tittle className="about1">
                ADMISSION
            </tittle>
            <div className="card" >
                <div >
                    <img className="medium"
                        src={sgf}
                        alt='primary'
                    />
                </div>
                <div className="card-body" >
                    <Link to='/Primaryregister' >
                        <h2> Primary </h2>
                    </Link>
                </div>
            </div >
            <div className="card" >
                <div >
                    <img className="medium"
                        src={sgf1}
                        alt='primary'
                    />
                </div>
                <div className="card-body" >
                    <Link to='/Nurseryregister' >
                        <h2> Nursery </h2>
                    </Link>
                </div>
            </div >
            <div className="card" >

                <div >
                    <img className="medium"
                        src={sgf2}
                        alt='primary'
                    />
                </div>
                <div className="card-body" >
                    <Link to='/Privatelessonregister' >
                        <h2> Private Lesson</h2>
                    </Link>
                </div>
            </div >
        </div>
    );
}

export default AdmissionScreen;