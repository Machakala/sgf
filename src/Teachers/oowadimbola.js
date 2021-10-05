import React from "react";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function oowadimbola() {
    return (
        <div className='teacherprofile'>
            <div>
                MR. OLUROTIMI OWADIMBOLA
                <br />
                Effective Administrator<br />
                From Ondo State of Nigeria, Mr. Owadimbola attended Offa Polytechnic Offa in Kwara State of Nigeria where he got Higher National Diploma in Business Administration.

                As an effective administrator, Mr. Owadimbola has a good knowledge of the workings in the Nigerian Educational environment, the associated challenges and the appropriate strategies of addressing such challenges in line with best practices expected of any responsible School operation in
                Nigeria.
            </div>
            <Button variant="outline-dark" >
                <Link to="/Management">
                    Go back...
                </Link>
            </Button>
        </div>
    );
}

export default oowadimbola;