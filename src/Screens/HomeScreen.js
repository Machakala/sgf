import React from "react";
import { Carousel } from 'react-bootstrap';
import SGF from '../sgffiles/SGF.jpg';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import ANI1 from '../sgffiles/aniverssary/ani1.jpg';
function HomeScreen(props) {

    return (
        <div className='home'>
            <div className="row no-gutters">
                <div className="col-12 col-sm-6 col-md-8">
                    <div className='homewords' >
                        <h1 className='homewords1'>Director's Message:  </h1>
                        <div className='homewords2'>
                            I warmly welcome you to SGF Private Nursery/Primary School, the school of your DREAM.SGF identifies with the individual needs of every Child as a talented gift from God.At SGF every Child is trained to recognize and achieve his/her fullest potential.To reach their destination of excellence, every Child needs a good foundation.By the grace of God, SGF emphasizes and balances the Moral, Social, Emotional, Physical and intellectual development of each Child.
                            <div className='homebutton'>
                                <Button className='homebutton1' variant="outline-success" ><Link to="/contact"> Contact Us</Link></Button>
                                <Button className='homebutton2' variant="outline-success" ><Link to="/event">Upcoming events</Link></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <Carousel >
                        <Carousel.Item>
                            <img
                                className="d-block w-100 Smallimage "
                                src={ANI1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 Smallimage"
                                src={SGF}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;