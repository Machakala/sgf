import React from "react";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function monuoha() {
    return (
        <div className='teacherprofile'>
            <div>
                MRS. MARIA ONUOHA
                <br />
                Seasoned Educationist<br />
                A seasoned Educationist, Mrs. Onuoha from Imo state of Nigeria attended National institute of Moral and religious Education Akoka, Lagos where she obtained her Nigeria Certificate of Education (NCE) in 1997.

                She also obtained other Certificates and Diplomas like Certificate
                of Professional Studies in Education from University of Lagos in 1991, Teachers Grade II Certificate in 1983. She attended various seminars, workshops and Conferences in Education related Courses.
                Before her statutory retirement in 2016, Mrs. Onuoha Meritoriously taught in various private and Public Schools in Lagos State holding positions as Class Teacher, assistant Head Teacher and Head Teacher.
            </div>
            <Button variant="outline-dark" >
                <Link to="/Management">
                    Go back...
                </Link>
            </Button>
        </div>
    );
}

export default monuoha;