import React, { Component } from "react";
//import React, {useState} from 'react';
import {Carousel} from "react-bootstrap";
//import MushroomsImg from '../assets/pexels-visually.jpg';
import ded from './ded.jpg';
import dede from './dede.jpg';
//import PeaceImg from '../assets/peace.jpg';
class CarouselBoxHk extends Component{
    render() {
        return (
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ded}
				alt="ded"/>
                <Carousel.Caption>
                    <h3>ded image</h3>
                    <p> Дід.</p>
                </Carousel.Caption>
				
            </Carousel.Item>
				<Carousel.Item>
                <img
                className="d-block w-100"
                src={dede}
				alt="dede"/>
                <Carousel.Caption>
                    <h3>dede image</h3>
                    <p> Дід номер 2</p>
                </Carousel.Caption>
            </Carousel.Item>
			
            </Carousel>
        );
    }
}
export default CarouselBoxHk;
