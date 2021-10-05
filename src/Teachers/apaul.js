import React from "react";
import { Link } from 'react-router-dom';

function apaul() {
    return (
        <div className='teacherprofile'>
            <div>
                MR. ADEOYE PAUL
                <br />
                Database Administrator
                <br />
                Mr. Adeoye,from Ogun state of Nigeria, is a dynamic self-driven and motivated Database Administrator. He attended Federal Polytechnic, Offa in kwara state where he obtained his Higher National Diploma In 1999.

                He further obtained a Post Graduate Diploma in Information Technology from National Open University in 2012.

                His reliability and ability to adapt to any new situation have made him goal achiever. As a researcher, he has carried out and submitted various projects that had effectively contributed in decision making of the Companies where he had worked.
            </div>
            <button>
                <Link to='/Management'> Go back...</Link>
            </button>
        </div>
    );
}

export default apaul;