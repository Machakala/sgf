import React from "react";
import { Link } from 'react-router-dom';


function mrokafor() {
    return (
        <div className='teacherprofile'>
            <div>
                MR. OKAFOR ONYEKWELU
                <br />
                Proprietor<br />
                From Anambra State of Nigeria, Mr. Okafor, a Chartered Accountant and Tax Practitioner started his Civil Servant Career in 1981 as a Clerk in Lagos with the present Transmission Company of Nigeria.

                He graduated from Yaba College of Technology Yaba in Accountancy in 1987 and The Polytechnic Ibadan in 2012 also in Accountancy and obtained his OND and HND respectively.

                Mr. Okafor started holding leadership positions in the Company in 1986. He was a team player, self-motivated and goal oriented. Mr. Okafor attended many courses, trainings workshops, seminars and Conferences of various levels of management He climbed the public ladder of progression for thirty five years He was statutorily retired in 2016. He was however retained as a consultant for additional two and half years.
            </div>
            <button>

                <Link to='/Management'> Go back...</Link>
            </button>
        </div>
    );
}

export default mrokafor;