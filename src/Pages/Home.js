import React from 'react';
import Slider from '../Components/Slider';
import Marquee from '../Components/Marquee';
import Carousel from '../Components/Carousel';
import Plan from '../Components/Plan';
import HappyStories from '../Components/HappyStories';

const Home = () => {
    return (
        <>
            <Slider />
            <Marquee />
            <Carousel />
            <Plan />
            <HappyStories /> 
        </>
    )
}

export default Home
