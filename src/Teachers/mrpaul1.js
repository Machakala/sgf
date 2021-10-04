import React from "react";
import { Link } from 'react-router-dom';


function mrpaul1() {
    return (
        <div className='teacherprofile'>
            <div>
                MR paul1<br />
            </div>
            <button>
                <Link to='/Management'> Go back...</Link>
            </button>
        </div>
    );
}

export default mrpaul1;