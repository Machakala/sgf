import React from "react";

function HomeScreen(props) {
    const handleContact = (e) => {
        props.history.push('/contact')
    }
    const handleEvent = (e) => {
        props.history.push('/event')
    }
    return (
        <div>
            <div className='home'>
                <div className='homewords'>
                    <h1 className='homewords1'>Director's Message:  </h1>
                    <div className='homewords2'>
                        I warmly welcome you to SGF Private Nursery/Primary School, the school of your DREAM. SGF identifies with the individual needs of every Child as a talented gift from God. At SGF every Child is trained to recognize and achieve his/her fullest potential. To reach their destination of excellence, every Child needs a good foundation. By the grace of God, SGF emphasizes and balances the Moral, Social, Emotional, Physical and intellectual development of each Child.
                        <div>
                            <button
                                className='homebutton'
                                onClick={handleContact}>
                                Contact US
                            </button>
                            <button
                                className='homebutton2'
                                onClick={handleEvent}>
                                Upcoming Event
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomeScreen;