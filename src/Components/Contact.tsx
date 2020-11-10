import React from 'react'
import {Link} from "react-router-dom"

function Contact() {
    const topFunction = () =>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    

    const mapStyles = {
        frameborder:0,
        allowfullscreen:""
      };
    return (
        <div>
            {/* <!-- Top Menu 1 --> */}
                <section className="w3l-contact-breadcrum">
                <div className="breadcrum-bg py-sm-5 py-4">
                    <div className="container py-lg-3">
                    <h2>Contact Us</h2>
                    <p><Link to="/" >Home</Link> / Contact</p>
                    </div>
                </div>
                </section>
                {/* <!-- contact --> */}
                <section className="w3l-contacts-12" id="contact">
                    <div className="contact-top pt-5">
                        <div className="container py-md-3">
                            
                            <div className="row cont-main-top">
                            
                                {/* <!-- contact address --> */}
                                <div className="contact col-lg-4">
                                    <div className="cont-subs">
                                        <div className="cont-add">
                                            

                                      
                                        <div className="cont-add-rgt">
                                            <div className="cont-add-lft">
                                                <span className="fa fa-map-marker" aria-hidden="true"></span>
                                            </div>
                                            <p><img src="assets/images/indiaflag.png" height="60px" width="80px" className="img-responsive" alt=""/></p>
                                            <h4>Address:</h4>
                                            <p className="contact-text-sub">
                                            TechPledge Consulting Service Pvt. LTD 1st Floor, Gopal Krishna Complex, #45/3, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025
                                            </p>
                                            
                                            <br />
                                            <hr></hr>
                                            <div className="cont-add-lft">
                                                <span className="fa fa-map-marker" aria-hidden="true"></span>
                                            </div>
                                            <p><img src="assets/images/american-flag.png" height="60px" width="80px" className="img-responsive" alt=""/></p>
                                            <h4>Address:</h4>
                                            <p className="contact-text-sub">
                                                TechPledge Consulting Service LLC, 9550 forest lane Dallas TX 75243 suite 462, Dallas Texas, Zip Code 75243, +19294945455
                                            </p>
                                         
                                        </div>
                                      
                                    </div>
                                        <div className="cont-add add-2">
                                            
                                        <div className="cont-add-rgt">
                                            <h4>Email:</h4>
                                            <a href="mailto:info@example.com">
                                                <p className="contact-text-sub"> info@techpledgeconsulting.com </p>
                                            </a>
                                        </div>
                                        <div className="cont-add-lft">
                                            <span className="fa fa-envelope" aria-hidden="true"></span>
                                    </div>
                                    </div>
                                        <div className="cont-add">
                                        
                                            <div className="cont-add-rgt">
                                                <h4>Phone:</h4>
                                                <a href="tel:+7-800-999-800">
                                                    <p className="contact-text-sub">(+91)-767-6703-141</p>
                                                </a>
                                            </div>
                                            <div className="cont-add-lft">
                                                <span className="fa fa-phone" aria-hidden="true"></span>
                                        </div>
                                        </div>
                                        <div className="cont-add add-3">
                                        
                                            <div className="cont-add-rgt">
                                                <h4>Find Us On</h4>
                                                <div className="main-social-1 mt-2">
                                                    <a href="https://www.facebook.com/TechPledgeConsulting/" className="facebook"><span className="fa fa-facebook"></span></a>
                                                    <a href="https://twitter.com/TechPledgeInfo" className="twitter"><span className="fa fa-twitter"></span></a>
                                                    <a href="https://www.youtube.com/channel/UCHIORKl7PAuMhAA-uS6CEFw" className="youtube"><span className="fa fa-youtube"></span></a>
                                                    <a href="#google-plus" className="google-plus"><span className="fa fa-google-plus"></span></a>
                                                    <a href="https://www.linkedin.com/company/techpledge-consulting-services/" className="linkedin"><span className="fa fa-linkedin"></span></a>
                                                </div>
                                            </div>
                                            <div className="cont-add-lft">
                                            
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- //contact address -->
                                <!-- contact form --> */}
                                <div className="contacts12-main col-lg-8 mt-lg-0 mt-5">
                                    <div className="elfsight-app-07b19e41-d0d0-4101-8a10-2fb0634c9391"></div>
                                    {/* <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="main-input">
                                        <div className="top-inputs d-grid">
                                            <input type="text" placeholder="Name" name="w3lName" id="w3lName" aria-required />
                                            <input type="email" name="email" placeholder="Email" id="w3lSender" aria-required />
                                                {/* <select name="Country" placeholder="Country" id="Country"  >
                                                    <option value="USA">USA</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="India">India</option>
                                                    <option value="UK">UK</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Nigeria">Nigeria</option>
                                                    <option value="Tanzania">Tanzania</option>
                                                    <option value="Singapore">Singapore</option>
                                                    <option value="Saudi">Saudi</option>
                                                    <option value="UAE">UAE</option>
                                                    <option value="Oman">Oman</option>
                                                    <option value="Georgia">Georgia</option>
                                                    <option value="Others">Others</option>
                                            </select> 
                                        </div>

           
                                        
                                         <select name="Course" placeholder="Course" id="Course"  className="form-control-lg  d-grid">
                                                <option value="Course">Course</option>
                                                <option value="AWS">AWS</option>
                                                <option value="AZURE">AZURE</option>
                                                <option value="DevOps">DevOps</option>
                                                <option value="Servers">Servers</option>
                                                <option value="Language">Language</option>
                                                <option value="Database">Database</option>
                                                <option value="Others">Others</option>
                                        </select>
                                        <input type="text" placeholder="Phone Number" name="w3lName" id="w3lName" aria-required />
                                        <textarea placeholder="Message" name="w3lMessage" id="w3lMessage" aria-required></textarea>
                                        <div className="text-right">
                                            <button type="submit" className="btn btn-theme2">Submit Now</button>
                                        </div>
                                    </form> */}
                                </div>
                                {/* <!-- //contact form --> */}
                            </div>
                        </div>
                        <hr></hr>
                    {/* <!-- /features --> */}
                        <div className="features py-4">
                            <div className="container pb-5">
                            
                            <div className="fea-gd-vv row ">	
                            <div className="float-lt feature-gd col-lg-4 col-sm-6">	
                                    <div className="icon-info">
                                        <h5><img src="assets/images/englandflag.png" height="60px" width="80px" className="img-responsive" alt=""/></h5>
                                        <h6>
                                        info@techpledgeconsulting.uk<br/>
                                        call:  44 - 808 - 196 - 8097
                                        </h6>
                                    </div>
                                    
                                </div>	
                                <div className="float-mid feature-gd col-lg-4 col-sm-6 mt-sm-0 mt-4">	
                                    
                                    <div className="icon-info">
                                        <h5 ><img src="assets/images/canadaflag.png" height="60px" width="80px" className="img-responsive" alt=""/></h5>
                                        <h6>
                                        info@techpledgeconsulting.ca<br/>
                                        call:  1- 888 - 535 - 2354
                                        </h6>
                                                                
                                    </div>
                            </div> 
                                <div className="float-rt feature-gd col-lg-4 col-sm-6 mt-lg-0 mt-4">	
                                    
                                    <div className="icon-info">
                                        <h5><img src="assets/images/american-flag.png" height="60px" width="80px" className="img-responsive" alt=""/></h5>
                                        <h6>
                                        info@techpledgeconsulting.us <br />
                                        WhatsApp: +1 (848) - 467 - 6424<br />
                                        Call: +1 929 - 494 - 5455
                                        </h6>
                                    </div>
                            </div>	 
                                
                        </div>  
                        </div>
                    </div>
                        {/* <!-- map --> */}
                        <div className="map">
                        {/* https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0509269720237!2d77.59974021461191!3d12.968593090857846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167e50651a95%3A0xe89b7930a5edac16!2sTechpledge%20Consulting%20Services!5e0!3m2!1sen!2sin!4v1602768205925!5m2!1sen!2sin"
                                ></iframe>
                                {/* frameborder="0" 
                                allowfullscreen="" */}
                        </div>
                        {/* <!-- //map --> */}
                    </div>
                </section>
    
       </div>
    )
}

export default Contact
