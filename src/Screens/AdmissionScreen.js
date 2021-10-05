import React from "react";
import { Link } from 'react-router-dom';
import Nur from '../sgffiles/admission/addmissionnur.png';
import PL from '../sgffiles/admission/admissionpl.png';
import pry from '../sgffiles/admission/addmissionpry.png';
import { Button } from 'react-bootstrap';

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
                    <Button variant="outline-dark" >
                        <Link to='/Primaryregister' >
                            Primary
                        </Link>
                    </Button>


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
                    <Button variant="outline-dark" >
                        <Link to='/Nurseryregister' >
                            Nursery
                        </Link>
                    </Button>

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
                    <Button variant="outline-dark" >
                        <Link to='/Privatelessonregister' >
                            Private Lesson
                        </Link>
                    </Button>

                </div>
            </div >
        </div>
    );
}

export default AdmissionScreen;