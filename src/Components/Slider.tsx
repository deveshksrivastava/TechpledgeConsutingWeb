import React from 'react'
import {Link} from "react-router-dom"

function Slider() {
    return (
       
           
        <section className="w3l-main-slider" id="home">
            <div>
                {/* <!-- main-slider --> */}
                <div className="companies20-content">        
                    <div >
                            {/* <div className="item">
                                <li>
                                <div className="slider-info banner-view bg bg2" data-selector=".bg.bg2">
                                    <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg mx-auto text-center">
                                        <h5>Better Education For A Better World</h5>
                                        <a className="btn btn-secondary btn-theme2 mt-md-5 mt-4" href="services.html">Read More</a>
                                        </div>
                                        
                                    </div>
                                    </div>
                                </div>
                                </li>
                            </div>
                            <div className="item">
                                <li>
                                <div className="slider-info  banner-view banner-top1 bg bg2" data-selector=".bg.bg2">
                                    <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg mx-auto text-center">
                                        <h5>Explore The World Of Our Graduates</h5>
                                        <a className="btn btn-secondary btn-theme2 mt-md-5 mt-4" href="services.html">Read More</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </li>
                            </div>
                            <div className="item">
                                <li>
                                <div className="slider-info banner-view banner-top2 bg bg2" data-selector=".bg.bg2">
                                    <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg mx-auto text-center">
                                        <h5>Exceptional People, Exceptional Care</h5>
                                        <a className="btn btn-secondary btn-theme2 mt-md-5 mt-4" href="services.html">Read More</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </li>
                            </div> */}
                            <div className="item">
                                <li>
                 
                                <div className="slider-info banner-view banner-top3 bg bg2" data-selector=".bg.bg2">
                                    <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg mx-auto text-center">
                                        <h4>Explore The World Of Technology</h4>
                                        <b>Training and App Development</b><br/>
                                        <Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="/" >Read More</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </li>
                            </div>
                    </div>
                </div>
        
            </div>
            </section>
    )
}

export default Slider
