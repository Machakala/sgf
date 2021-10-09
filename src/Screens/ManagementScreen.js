import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

function ManagementScreen(props) {
    const [showText, setShowText] = useState(true)
    const [showText1, setShowText1] = useState(false)


    const Text = () =>
        <div className='TEXTWORD'>
            <div className='TEXTWORD1'>
                <div>
                    (HEAD TEACHER) AUNTY AMEH
                </div>
                <br />
                <div className='description'>
                    Born at Kaduna, Mary Lemechi formally Mary Ameh attended Government Model Secondary School Mina Niger State and graduated in the year 2000. She later furthered her Education in 2006 at College of Education Kastina Alla, Benue where she obtained her NCE in Physical and Health Education.</div>
                <br />
                <Button variant="dark" ><Link to="/auntyameh"> Read more...</Link></Button>

            </div>
            <br />
            <div div className='TEXTWORD2'>
                <div >
                    (Proprietor) Mr. Okafor Onyekwelu
                </div>
                <br />
                <div className='description'>
                    From Anambra State of Nigeria, Mr. Okafor, a Chartered Accountant and Tax Practitioner started his Civil Servant Career in 1981 as a Clerk in Lagos with the present Transmission Company of Nigeria.                </div>
                <br />
                <Button variant="dark" ><Link to="/MROKAFOR"> Read more...</Link></Button>

            </div>
        </div >
        ;

    const Text1 = () =>
        <div className='TEXTWORD'>
            <div className='TEXTWORD1'>

                <div>
                    (Educationist) Mrs. Kemi Dauda
                </div>
                <br />
                <div className='description'>
                    She Is a warm dynamic educationist and researcher from Oyo state of Nigeria. She attended University of Ilorin in Kwara State of Nigeria where she obtained her B.Sc. (Hons) in Economic Education in 1999.

                </div>
                <br />
                <Button variant="dark" ><Link to="/kdauda"> Read more...</Link></Button>

            </div>
            <br />
            <div div className='TEXTWORD2'>

                <div >
                    (Effective Administrator) Mr. Olurotimi Owadimbola
                </div>
                <br />
                <div className='description'>
                    From Ondo State of Nigeria, Mr. Owadimbola attended Offa Polytechnic Offa in Kwara State of Nigeria where he got Higher National Diploma in Business Administration.

                </div>
                <br />
                <Button variant="dark" ><Link to="/oowadimbola"> Read more...</Link></Button>

            </div>
            <br />
            <div
                className='TEXTWORD1'>
                <div>
                    (Seasoned Educationist) Mrs. Maria Onuoha
                </div>
                <br />
                <div className='description'>
                    A seasoned Educationist, Mrs. Onuoha from Imo state of Nigeria attended National institute of Moral and religious Education Akoka, Lagos where she obtained her Nigeria Certificate of Education (NCE) in 1997.

                </div>
                <br />
                <Button variant="dark" ><Link to="/monuoha"> Read more...</Link></Button>

            </div>
            <br />
            <div div className='TEXTWORD2'>
                <div >
                    (Database Administrator) Mr. Adeoye Paul
                </div>
                <br />
                <div className='description'>
                    Mr. Adeoye,from Ogun state of Nigeria, is a dynamic self-driven and motivated Database Administrator. He attended Federal Polytechnic, Offa in kwara state where he obtained his Higher National Diploma In 1999.

                </div>
                <br />
                <Button variant="dark" ><Link to="/apaul"> Read more...</Link></Button>
            </div>

        </div>
        ;

    const handleclick = (e) => {
        e.preventDefault();
        setShowText(true);
        setShowText1(false);

    }
    const handleclick1 = (e) => {
        e.preventDefault();
        setShowText(false);
        setShowText1(true);
    }
    return (
        <div className='management'>
            <tittle className="about1">
                MANAGEMENT
            </tittle>
            <div className='management1' >
                <h2 className='management1a' onClick={handleclick}>Management Team</h2>
                <h2 className='management1b' onClick={handleclick1}>Staff</h2>
            </div>
            {showText ? <Text /> : null}
            {showText1 ? <Text1 /> : null}
        </div >
    );
}
export default ManagementScreen;