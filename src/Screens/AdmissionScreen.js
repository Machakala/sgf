import React from "react";
import { Link } from 'react-router-dom';
import Nur from '../sgffiles/admission/addmissionnur.png';
import PL from '../sgffiles/admission/admissionpl.png';
import pry from '../sgffiles/admission/addmissionpry.png';
function AdmissionScreen() {
    return (
        <div className='Admission'>
            <tittle className="about1">
                ADMISSION
            </tittle>
            <div className="card" >
                <div >
                    <img className="medium"
                        src={pry}
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
                        src={Nur}
                        alt='Nursery'
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
                        src={PL}
                        alt='private-lesson'
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