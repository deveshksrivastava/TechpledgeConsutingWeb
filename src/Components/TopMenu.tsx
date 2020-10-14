import React from "react";
import ReactDOM from "react-dom";

function TopMenu() {
    return (
        <div>
            <section className="w3l-top-menu-1">
                <div className="top-hd">
                    <div className="container">
                            <header className="row top-menu-top">
                                <div className="accounts col-md-9 col-6">
                                        <li className="top_li"><span className="fa fa-phone"></span><a href="tel:+(91)-767-6703-141">+(91)-767-6703-141</a> </li>
                                        <li className="top_li1"><span className="fa fa-envelope-o"></span> <a href="mailto:education-mail@support.com" className="mail"> info@techpledgeconsulting.com</a>	</li>
                                </div>
                                <div className="accounts col-md-1 col-3">
                                        <li id="lang-switcher">
                                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Country</a>
                                            <ul className="dropdown-menu" >
                                                <li><a href="/about-us.html">&nbsp;&nbsp; &nbsp;Canada</a></li>
                                                <li><a href="/fr/about-us.html">USA</a></li>
                                                <li><a href="/about-us.html">India</a></li>
                                                <li><a href="/fr/about-us.html">Nigeria</a></li>
                                                <li><a href="/fr/about-us.html">Tanzania</a></li>
                                                <li><a href="/fr/about-us.html">Saudi</a></li>
                                                <li><a href="/fr/about-us.html">UAE</a></li>
                                            </ul>
                                        </li>
                                </div>
                                <div className="social-top col-md-2 col-3">
                                    <a href="contact.html" className="btn btn-secondary btn-theme4">Apply Now</a>
                                </div>
                            </header>
                     </div>
                </div>
            </section>
        </div>
    )
}

export default TopMenu
