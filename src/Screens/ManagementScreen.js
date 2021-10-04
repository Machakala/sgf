import React, { useState } from "react";

function ManagementScreen(props) {
    const [showText, setShowText] = useState(true)
    const [showText1, setShowText1] = useState(false)

    const teacher1 = (e) => {
        props.history.push('/auntyameh');
    }
    const teacher2 = (e) => {
        props.history.push('/MROKAFOR');
    }
    const teacher3 = (e) => {
        props.history.push('/mrpaul1');
    }
    const teacher4 = (e) => {
        props.history.push('/mrpaul2');
    }
    const teacher5 = (e) => {
        props.history.push('/mrpaul3');
    }
    const teacher6 = (e) => {
        props.history.push('/mrpaul4');
    }
    const Text = () =>
        <div className='TEXTWORD'>
            <div className='TEXTWORD1'>
                <div>
                    HEAD TEACHER(AUNTY AMEH)
                </div>
                <br />
                <div className='description'>
                    Born at Kaduna, Mary Lemechi formally Mary Ameh attended Government Model Secondary School Mina Niger State and graduated in the year 2000. She later furthered her Education at College of Education Kastina Alla in Benue state where she obtained her NCE in Physical and Health Education in 2006. She attended various seminars and training programs including Citizenship and Leadership training in 2005, Longman Seminar in Effective teaching of English language and Mathematics in 2009
                    Born at Kaduna, Mary Lemechi formally Mary Ameh attended Government Model Secondary School Mina Niger State and graduated in the year 2000. She later furthered her Education at College of Education Kastina Alla in Benue state where she obtained her NCE in Physical and Health Education in 2006. She attended various seminars and training programs including Citizenship and Leadership training in 2005, Longman Seminar in Effective teaching of English language and Mathematics in 2009
                    Born at Kaduna, Mary Lemechi formally Mary Ameh attended Government Model Secondary School Mina Niger State and graduated in the year 2000. She later furthered her Education at College of Education Kastina Alla in Benue state where she obtained her NCE in Physical and Health Education in 2006. She attended various seminars and training programs including Citizenship and Leadership training in 2005, Longman Seminar in Effective teaching of English language and Mathematics in 2009
                    Born at Kaduna, Mary Lemechi formally Mary Ameh attended Government Model Secondary School Mina Niger State and graduated in the year 2000. She later furthered her Education at College of Education Kastina Alla in Benue state where she obtained her NCE in Physical and Health Education in 2006. She attended various seminars and training programs including Citizenship and Leadership training in 2005, Longman Seminar in Effective teaching of English language and Mathematics in 2009

                </div>
                <br />
                <button onClick={teacher1}> Read more...</button>
            </div>
            <br />
            <div div className='TEXTWORD2'>
                <div >
                    MR OKAFOR
                </div>
                <br />
                <div className='description'>
                    Born at Kaduna, Mary Lemechi formally Mary Ameh attended Government Model Secondary School Mina Niger State and graduated in the year 2000. She later furthered her Education at College of Education Kastina Alla in Benue state where she obtained her NCE in Physical and Health Education in 2006. She attended various seminars and training programs including Citizenship and Leadership training in 2005, Longman Seminar in Effective teaching of English language and Mathematics in 2009
                </div>
                <br />
                <button onClick={teacher2}> Read more...</button>
            </div>
        </div>
        ;

    const Text1 = () =>
        <div className='TEXTWORD'>
            <div className='TEXTWORD1'>
                <div>
                    Mr Paul Ameh1
                </div>
                <br />
                <div className='description'>
                    Born at Kaduna, Mary Lemechi formally Mary Ameh attended Government Model Secondary School Mina Niger State and graduated in the year 2000. She later furthered her Education at College of Education Kastina Alla in Benue state where she obtained her NCE in Physical and Health Education in 2006. She attended various seminars and training programs including Citizenship and Leadership training in 2005, Longman Seminar in Effective teaching of English language and Mathematics in 2009
                </div>
                <br />
                <button onClick={teacher3}> Read more...</button>
            </div>
            <br />
            <div div className='TEXTWORD2'>
                <div >
                    Mr Paul Ameh2
                </div>
                <br />
                <div className='description'>
                    Born at Kaduna, Mary Lemechi formally Mary Ameh attended Government Model Secondary School Mina Niger State and graduated in the year 2000. She later furthered her Education at College of Education Kastina Alla in Benue state where she obtained her NCE in Physical and Health Education in 2006. She attended various seminars and training programs including Citizenship and Leadership training in 2005, Longman Seminar in Effective teaching of English language and Mathematics in 2009
                </div>
                <br />
                <button onClick={teacher4}> Read more...</button>
            </div>
            <br />
            <div className='TEXTWORD1'>
                <div>
                    Mr Paul Ameh3
                </div>
                <br />
                <div className='description'>
                    Born at Kaduna, Mary Lemechi formally Mary Ameh attended Government Model Secondary School Mina Niger State and graduated in the year 2000. She later furthered her Education at College of Education Kastina Alla in Benue state where she obtained her NCE in Physical and Health Education in 2006. She attended various seminars and training programs including Citizenship and Leadership training in 2005, Longman Seminar in Effective teaching of English language and Mathematics in 2009
                </div>
                <br />
                <button onClick={teacher5}> Read more...</button>
            </div>
            <br />
            <div div className='TEXTWORD2'>
                <div >
                    Mr Paul Ameh4
                </div>
                <br />
                <div className='description'>
                    Born at Kaduna, Mary Lemechi formally Mary Ameh attended Government Model Secondary School Mina Niger State and graduated in the year 2000. She later furthered her Education at College of Education Kastina Alla in Benue state where she obtained her NCE in Physical and Health Education in 2006. She attended various seminars and training programs including Citizenship and Leadership training in 2005, Longman Seminar in Effective teaching of English language and Mathematics in 2009
                </div>
                <br />
                <button onClick={teacher6}> Read more...</button>
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