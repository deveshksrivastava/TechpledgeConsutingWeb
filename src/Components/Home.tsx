import React from 'react'
import Header from './Header';
import Slider from './Slider';
import Feature from './Feature';
import Form12 from './Form12';
import Specifications from './Specifications';
import Testimonials from './Testimonials';
import News from './News';
import AboutMain from './AboutMain';
import Course from './Course';
function Home() {
    return (
        <div>
                <Slider />
                {/* <Feature />   */}
                <AboutMain />
                {/* Apply for scolership */}
                <Course /> 
                {/* Find a course */}
                <Form12 />
                {/* 60 Professionla Instructor */}
                <Specifications />
                {/*  */}
                <Testimonials />
                <News/>
        </div>
    )
}

export default Home
