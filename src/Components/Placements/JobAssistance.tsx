import React from 'react'
import {Link} from "react-router-dom"

function JobAssistance() {
    return (
        <div>
        <section className="w3l-contact-breadcrum">
            <div className="breadcrum-bg py-sm-5 py-4">
              <div className="container py-lg-3">
                <h2>Job Assist Program </h2>
                <p><Link to="/" >Home</Link> / Job Assist Placement</p>
              </div>
            </div>
          </section>

          			{/* <!-- content-with-photo4 block --> */}
			<section className="w3l-content-with-photo-4">
				<div id="content-with-photo4-block" className="pt-5"> 
					<div className="container py-md-5">
						<div className="cwp4-two row">
							<div className="cwp4-text col-lg-6">
								<h3>TechPledge Job Assist Program</h3>
								<p>TechPledge Job Assist Program is an additional subscription based services where candidate get complete 
                                hand-holding till they get hired in their dream job position . To get enroll in this program please get in touch
                                 with you respective coordinator . This Kit can be subscribed at Nominal fee of $150</p>
								<ul className="cont-4">
									<li><span className="fa fa-check"></span>Testimonials: Proven Success: 92%.Success in Exam.</li>
									<li><span className="fa fa-check"></span>Our Trainer are Veterans  & Experts from Industry. </li>
									<li><span className="fa fa-check"></span>Individualized, Customized Traning</li>
									<li><span className="fa fa-check"></span>1 on 1 Industry Mentorship</li>
								</ul>
                                <br />
                                <h4>TechPledge Interview Preparation Kit</h4>
                                <p>This Tech Interview Preparation Kit is the one-stop solution for everything you need to crack the interview of 
                                top companies.</p>

                                <p>In this Tech Interview Preparation Kit, we have curated the content in the following categories:</p>
                                <ul className="cont-4">
                                    <li><span className="fa fa-check"></span>Prepare your Introduction story</li>
                                    <li><span className="fa fa-check"></span>Prepare your cover letter</li>
                                    <li><span className="fa fa-check"></span>Prepare your Resume</li>
                                    <li><span className="fa fa-check"></span>Prepare your LinkedIn</li>
                                    <li><span className="fa fa-check"></span>Get ready for common questions</li>
                                    <li><span className="fa fa-check"></span>Prepare your cheat sheet</li>
                                    <li><span className="fa fa-check"></span>Publish your resume</li>
                                    <li><span className="fa fa-check"></span>Connect with HR Consultant</li>
                                    <li><span className="fa fa-check"></span>Connect With Company HR Manager</li>
                                    <li><span className="fa fa-check"></span>Get set ready</li>
                                </ul>

                                <p> Start your preparation with this Interview Preparation Kit and crack the interview</p>
							</div>
							<div className="cwp4-image col-lg-6 pl-lg-5 mt-lg-0 mt-5">
								<img src="assets/images/s9.jpg" className="img-fluid" alt="" />
                                <br />
                                <br />
                                <p>TechPledge Job Assist Program is an additional subscription based services where candidate get complete 
                                    hand-holding till they get hired in their dream job position . To get enroll in this program please get in touch
                                    with you respective coordinator . This Kit can be subscribed at Nominal fee of $150</p>
                                    
                                    <br />
                                    <img src="./assets/images/offerplc.png" alt="" height="350px"  width="650px" />
							</div>
						</div>
					</div>
				</div>
			</section>
            <section className="w3l-features-1">
                <div className="features py-12">
                    <div className="container pb-5">
                        <div className="fea-gd-vv row ">	
                            <div className="float-lt feature-gd col-lg-10 col-sm-6">	
                                <div>
                                  {/* ------------------ */}
                                </div>					 
                            </div>	
                        </div>  
                    </div>
                </div>
            </section>
        </div>
    )
}

export default JobAssistance
