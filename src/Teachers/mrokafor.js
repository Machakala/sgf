import React from "react";
import { Link } from 'react-router-dom';


function mrokafor() {
    return (
        <div className='teacherprofile'>
            <div>
                MR OKAFOR<br />
                Born at Kaduna, Mary Lemechi formally Mary Ameh attended Government Model Secondary School Mina Niger State and graduated in the year 2000. She later furthered her Education at College of Education Kastina Alla in Benue state where she obtained her NCE in Physical and Health Education in 2006. She attended various seminars and training programs including Citizenship and Leadership training in 2005, Longman Seminar in Effective teaching of English language and Mathematics in 2009
                She was employed as a class teacher in November, 2012. Before her appointment as the Head Teacher in April, 2019 Mary Lemechi had thought various classes. She won the Best teacher’s award for three years. She loves the Children and her children never left calling her “aunty Ameh” till today.
                Mary attended Lagos State Ministry of Education Workshop on New Curriculum implementation in 2016. In November 2018, she attended training program in the modern and effective teaching of Phonic and Diction. In 2019 she attended Evans Brothers Publishers Workshop
            </div>
            <button>

                <Link to='/Management'> Go back...</Link>
            </button>
        </div>
    );
}

export default mrokafor;