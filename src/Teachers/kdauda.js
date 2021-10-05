import React from "react";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function kdauda() {
    return (
        <div className='teacherprofile'>
            <div>
                MRS. KEMI DAUDA
                <br />
                Educationist<br />
                She Is a warm dynamic educationist and researcher from Oyo state of Nigeria. She attended University of Ilorin in Kwara State of Nigeria where she obtained her B.Sc. (Hons) in Economic Education in 1999.

                She also obtained Diploma in Computer studies from Pacific Computer
                and Management College Calabar, Cross River state in year 2000. Mrs. Dauda has worked in various
                Managerial capacities.


            </div>
            <Button variant="outline-dark" >
                <Link to="/Management">
                    Go back...
                </Link>
            </Button>
        </div>
    );
}

export default kdauda;