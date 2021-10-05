import React from "react";
import { Link } from "react-router-dom";

function HomeScreen(props) {

    return (
        <div>
            <div className='home'>
                <div className='homewords'>
                    <h1 className='homewords1'>Director's Message:  </h1>
                    <div className='homewords2'>
                        I warmly welcome you to SGF Private Nursery/Primary School, the school of your DREAM. SGF identifies with the individual needs of every Child as a talented gift from God. At SGF every Child is trained to recognize and achieve his/her fullest potential. To reach their destination of excellence, every Child needs a good foundation. By the grace of God, SGF emphasizes and balances the Moral, Social, Emotional, Physical and intellectual development of each Child.
                        <div className='homebutton'>
                            <button className='homebutton1'><Link to="/contact"> Contact Us</Link></button>

                            <button className='homebutton2'><Link to="/event"> Upcoming events</Link></button>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomeScreen;