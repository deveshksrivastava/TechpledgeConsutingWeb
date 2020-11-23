import React, { useEffect } from 'react'
import Slider from './Slider';
import Feature from './Feature';
import Form12 from './Form12';
import Specifications from './Specifications';
import Testimonials from './Testimonials';
import News from './News';
import AboutMain from './AboutMain';
import Course from './Course';
const Home: React.SFC = props => {

    useEffect(() => {
        // refreshPage()
        // alert("I m locading")
    }, [])


    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div>
            <Slider name="slider" />
            <Feature />
            <AboutMain />
            {/* Apply for scolership */}
            <Course />
            {/* Find a course */}
            <Form12 />
            {/* 60 Professionla Instructor */}
            <Specifications />
            {/*  */}
            <Testimonials />
            <News />
        </div>
    )
}

export default Home
