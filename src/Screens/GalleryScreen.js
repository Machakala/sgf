import React from "react";
import { Card } from "react-bootstrap";
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import data from "../data";

function GalleryScreen() {
    return (
        <div className='Gallery'>
            <div className="card1" >
                {data.GalleryPixs.map((GalleryPixs) => (
                    <div key={GalleryPixs._id}>
                        <Card.Img variant="top"
                            className='GalleryCard'
                            src={GalleryPixs.image}
                            alt={GalleryPixs.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GalleryScreen;