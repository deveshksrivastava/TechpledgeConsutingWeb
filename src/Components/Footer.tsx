import React from 'react'
import {Link} from "react-router-dom"
function Footer() {
    const topFunction = () =>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <div>
            <section className="w3l-footer-29-main">
             <div className="footer-29">
                    <div className="container">
                        <div className="d-grid grid-col-4 footer-top-29">
                            <div className="footer-list-29 footer-1">
                                <h6 className="footer-title-29">Contact Us</h6>
                                <ul>
                                    <li><p><span className="fa fa-map-marker"></span>1st Floor, Gopal Krishna Complex, #45/3, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025</p></li>
                                    <li><a href="tel:+7-800-999-800"><span className="fa fa-phone"></span> +(91)-767-6703-141</a></li>
                                    <li><a href="mailto:info@techpledgeconsulting.com" className="mail"><span className="fa fa-envelope-open-o"></span>  info@techpledgeconsulting.com</a></li>
                                </ul>
                                <div className="main-social-footer-29">
                                    <a href="https://www.facebook.com/TechPledgeConsulting/" className="facebook"><span className="fa fa-facebook"></span></a>
                                    <a href="https://twitter.com/TechPledgeInfo" className="twitter"><span className="fa fa-twitter"></span></a>
                                    <a href="https://www.youtube.com/channel/UCHIORKl7PAuMhAA-uS6CEFw" className="youtube"><span className="fa fa-youtube"></span></a>
                                    <a href="#google-plus" className="google-plus"><span className="fa fa-google-plus"></span></a>
                                    <a href="https://www.linkedin.com/company/techpledge-consulting-services/" className="linkedin"><span className="fa fa-linkedin"></span></a>
                                </div>
                            </div>
                            <div className="footer-list-29 footer-2">
                                <ul>
                                    <h6 className="footer-title-29">Featured Links</h6>
                                    <li><a href="/Career">Careers</a></li>
                                    <li><a href={`assets/images/speciality.pdf`}>Speciality </a></li>
                                    <li><Link to="/PrivacyPolicy" >Privacy-Policy</Link></li>
                                    <li><Link to="/PricingPolicy" >Refund-Policy</Link></li>
                                    <li><Link to="/TermsCondition" >Terms&Conditions</Link></li>
                                </ul>
                            </div>
                            <div className="footer-list-29 footer-3">
                                
                                <h6 className="footer-title-29">Newsletter </h6>
                                <form action="#" className="subscribe" method="post">
                                    <input type="email" name="email" placeholder="Email" aria-required/>
                                    <button><span className="fa fa-envelope-o"></span></button>
                                </form>
                        <p>Subscribe and get our weekly newsletter</p>
                        <p>We'll never share your email address</p>
                        
                            </div>
                            <div className="footer-list-29 footer-4">
                                <ul>
                                    <h6 className="footer-title-29">Quick Links</h6>
                                    <li><Link  to="/" >Home</Link></li> 
                                    <li><Link to="/about" >About</Link></li>
                                    <li><Link to="/Services" >Services</Link></li>
                                    <li><Link to="contact" >Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-grid grid-col-2 bottom-copies">
                            <p className="copy-footer-29">© 2020. All rights reserved techpledge consulting services</p>
                            <ul className="list-btm-29">
                                    <li><a href="#link">Privacy policy</a></li>
                                    <li><a href="#link">Terms of service</a></li>
                                </ul>
                        </div>
                    </div>
                </div>
                <button onClick={topFunction} id="movetop" title="Go to top">
                    <span className="fa fa-angle-up"></span>
                </button>

                </section>
                {/* // </section> */}
        </div>
    )
}

export default Footer
