import { useState } from 'react';
import {Carousel} from 'react-bootstrap';
import Clock from './clock';
import CustomDate from './customDate';


const ClockApp = () => {

    return (
        <div className='container'>
            <Carousel variant='dark' className='mt-5'>
                <Carousel.Item>
                    <CustomDate />
                </Carousel.Item>
                <Carousel.Item>
                    <Clock />
                </Carousel.Item> 
            </Carousel>
        </div>
    );
};

export default ClockApp;