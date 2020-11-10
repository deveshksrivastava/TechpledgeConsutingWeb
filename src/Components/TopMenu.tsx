import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom"
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
                                                <li><Link to="contact">&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;USA</Link></li>
                                                <li><Link to="contact">Canada</Link></li>
                                                <li><Link to="contact">India</Link></li>
                                                <li><Link to="contact">UK</Link></li>
                                                <li><Link to="contact">Australia</Link></li>
                                                <li><Link to="contact">Nigeria</Link></li>
                                                <li><Link to="contact">Tanzania</Link></li>
                                                <li><Link to="contact">Singapore</Link></li>
                                                <li><Link to="contact">Saudi</Link></li>
                                                <li><Link to="contact">UAE</Link></li>
                                                <li><Link to="contact">Oman</Link></li>
                                                <li><Link to="contact">Georgia</Link></li>
                                                <li><Link to="contact">Others</Link></li>
                                            </ul>
                                        </li>
                                </div>
                                <div className="social-top col-md-2 col-3">
                                    {/* <a href="contact.html" className="btn btn-secondary btn-theme4"></a> */}
                                    <Link to="/Career" className="btn btn-secondary btn-theme4" >Careers</Link>
                                </div>
                            </header>
                     </div>
                </div>
            </section>
        </div>
    )
}

export default TopMenu
