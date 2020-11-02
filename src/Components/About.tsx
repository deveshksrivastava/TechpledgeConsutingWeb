import React from 'react'
import {Link} from "react-router-dom"

function About() {
    return (
        <div>
			<section className="w3l-about-breadcrum">
			<div className="breadcrum-bg py-sm-5 py-4">
				<div className="container py-lg-3">
				<h2>About Us</h2>
				<p><Link to="/" >Home</Link> / About</p>
				</div>
			</div>
			</section>
			{/* <!-- content-with-photo4 block --> */}
			<section className="w3l-content-with-photo-4">
				<div id="content-with-photo4-block" className="pt-5"> 
					<div className="container py-md-5">
						<div className="cwp4-two row">
							<div className="cwp4-text col-lg-6">
								<h3>About Our Organisation</h3>
								<p>TechPledge is founded with  a promise to make Tech a force for good and ensure responsible and sustainable Tech leadership. It’s more then an organization created and a commitment to driving a new direction in technology.</p>
								<p>TechPledge where Technologists meet to create the Responsible Technologists. We Born from with the tech industry. We at TechPledge  committed  to driving a new direction in technology. It and should remain seen as our promise to ensure responsible and sustainable tech leadership, because we believe that with technical skills responsibility also follow. </p>
								<p>
									TechPledge Consulting Services Pvt Ltd has been Founded in year 2015 as a Business, Training & IT consulting firm and incorpoarted in the year 2016, under the dymanic leadership of our CEO Mrs. Jaya Shanker. We are helping businesses accelerate to achieve their maximum and build valuable relationships across global networks. Our innovative technology, customized training and quality consulting simplifies complexities and gives freedom to facilitate and implement a successful business process.
								</p>
								<p>
										We at TechPledge, understand that the whole idea is not about the choice between using and not using technology  "The challenge is to use it rightly". <br /><br />
										As technology has advanced, so too has training and TechPledge is always on top of it. Knowing about the tools and trends in training technology is not just our job. It’s our passion. We love to learn about new technology, and we love talking about how you can use it. We do all the technology you need so you can focus more on your business.
								</p>
							
								<ul className="cont-4">
									<li><span className="fa fa-check"></span>Testimonials: Proven Success: 92%.Success in Exam.</li>
									<li><span className="fa fa-check"></span>Our Trainer are Veterans  & Experts from Industry. </li>
									<li><span className="fa fa-check"></span>Individualized, Customized Traning</li>
									<li><span className="fa fa-check"></span>1 on 1 Industry Mentorship</li>
								</ul>
							</div>
							<div className="cwp4-image col-lg-6 pl-lg-5 mt-lg-0 mt-5">
								<img src="assets/images/g4.jpg" className="img-fluid" alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- content-with-photo4 block --> */}
			<section className="w3l-features-1">
				{/* <!-- /features --> */}
					<div className="features py-4">
						<div className="container pb-5">
						
						<div className="fea-gd-vv row ">	
						<div className="float-lt feature-gd col-lg-4 col-sm-6">	
								<div className="icon-info">
									<h5>CAREER ADVISORS</h5>
									<p>
									Our Empanel Industry leaders Working with you to Lay out a Career Path and help you adhere with your timelines and goals.We also provide Job Placement assistance with our TechPledge Job Assist program.
									</p>
								</div>
								
							</div>	
							<div className="float-mid feature-gd col-lg-4 col-sm-6 mt-sm-0 mt-4">	
								
								<div className="icon-info">
									<h5>JOB BASED TRAINING</h5>
									<p>
									Every Candidate has been trained on Different Job Profile Like Helpdesk , System Admin,Cloud Admin , Architect , Software Dev , Database Analyst, Linux System Admin  etc.
									</p>
															
								</div>
						</div> 
							<div className="float-rt feature-gd col-lg-4 col-sm-6 mt-lg-0 mt-4">	
								
								<div className="icon-info">
									<h5>CERTIFICATION</h5>
									<p>
									With our in-depth training ,Practice,Rigorous preparations 92% students get the exam cleared in very first attempt with 75% average passing marks.
									</p>
								</div>
						</div>	 
							
					</div>  
					</div>
				</div>
			{/* <!-- //features --> */}
			</section>
			<section className="w3l-feature-2">
					<div className="grid top-bottom py-5">
						<div className="container py-md-5">
							<div className="heading text-center mx-auto">
								<h3 className="head">Why Choose TechPledge As Your Learning Partner</h3>
								<p className="my-3 head"> TechPledge Consulting is not like traditional training institute who's responsibility only limited to delivery the Syllabus and not like Aggregators who’s connect you with contracted or freelance trainer , we are the group of professional who  committed to give right direction to career and go out of the box to enable you to deliver your professional goal.</p>
								
							</div>
							<div className="middle-section row mt-5 pt-3">
								<div className="three-grids-columns col-lg-3 col-sm-6 text-center">
									<div className="icon"> <span className="fa fa-graduation-cap" aria-hidden="true"></span></div>
									<h4>Job Oriented Content </h4>
									<p>Our Job Role based Training will enable  you to  deliver what is  expected from you and that is too with much ease. </p>
								</div>
								<div className="three-grids-columns col-lg-3 col-sm-6 mt-sm-0 mt-5 text-center">
									<div className="icon"> <span className="fa fa-user" aria-hidden="true"></span></div>
									<h4>Training by Professional</h4>
									<p>Our Trainers are not trainers by professions but are veterans and experts from industry, but drive with the passion of imparting their knowledge and experience</p>
								</div>
								<div className="three-grids-columns col-lg-3 col-sm-6 mt-lg-0 mt-5 text-center">
									<div className="icon"> <span className="fa fa-book" aria-hidden="true"></span></div>
									<h4> Global Training Approach</h4>
									<p>We follow the best adopted global approach of training  , that's why our examples are simple, practical labs are easy to execute and lectures are easy to understand.</p>
								</div>
								<div className="three-grids-columns col-lg-3 col-sm-6 mt-lg-0 mt-5 text-center">
									<div className="icon"> <span className="fa fa-bed" aria-hidden="true"></span></div>
									<h4>Flexible Timing</h4>
									<p>We are very flexible with our timing. We operate round the clock across geography . So you can join us at your convenience and comfort.</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			<section className="teams-1">
			<section className="teams text-center py-5" id="team">
					<div className="container py-xl-5 py-lg-3">
						<div className="heading text-center mx-auto">
							<h3 className="head">Our Skilled Instructors</h3>
							<p className="my-3 head"> The each members of our Managements broad, itself come with more than two decades of industry experience .Our Instructors , who  are not trainers by professions but are veterans and experts from industry but drive with the passion of imparting their knowledge and experience.</p>
						</div>
						<div className="row inner-sec-w3ls-w3pvt-aminfo pt-5 mt-3">
							<div className="col-lg-2 col-sm-7">
								<div className="team-grid text-center">
									<div className="team-img">
										<img className="img-fluid rounded" src="assets/images/t1.jpg" alt="" />
									</div>
									<div className="team-info">
										<h4>Shruti Sinha</h4>
										<ul className="d-flex justify-content-center py-3 social-icons">
											<li className="effect-soc-team1">
												<a href="#">
													<span className="fa fa-facebook-f"></span>
												</a>
											</li>
											<li className="effect-soc-team2">
												<a href="#">
													<span className="fa fa-twitter"></span>
												</a>
											</li>
											<li className="effect-soc-team3">
												<a href="#">
													<span className="fa fa-google-plus"></span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-sm-7 top-tem">
								<div className="team-grid text-center">
									<div className="team-img">
										<img className="img-fluid rounded" src="assets/images/t2.jpg" alt="" />
									</div>
									<div className="team-info">
										<h4>Christian Anyanwu</h4>
										<ul className="d-flex justify-content-center py-3 social-icons">
											<li className="effect-soc-team1">
												<a href="#">
													<span className="fa fa-facebook-f"></span>
												</a>
											</li>
											<li className="effect-soc-team2">
												<a href="#">
													<span className="fa fa-twitter"></span>
												</a>
											</li>
											<li className="effect-soc-team3">
												<a href="#">
													<span className="fa fa-google-plus"></span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-sm-7  mt-sm-0 mt-5">
								<div className="team-grid text-center">
									<div className="team-img">
										<img className="img-fluid rounded" src="assets/images/t3.jpg" alt="" />
									</div>
									<div className="team-info">
										<h4>Poornima Arun</h4>
										<ul className="d-flex justify-content-center py-3 social-icons">
											<li className="effect-soc-team1">
												<a href="#">
													<span className="fa fa-facebook-f"></span>
												</a>
											</li>
											<li className="effect-soc-team2">
												<a href="#">
													<span className="fa fa-twitter"></span>
												</a>
											</li>
											<li className="effect-soc-team3">
												<a href="#">
													<span className="fa fa-google-plus"></span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-sm-7 top-tem">
								<div className="team-grid text-center">
									<div className="team-img">
										<img className="img-fluid rounded" src="assets/images/t4.jpg" alt="" />
									</div>
									<div className="team-info">
										<h4>Bipeen Sinha</h4>
										<ul className="d-flex justify-content-center py-3 social-icons">
											<li className="effect-soc-team1">
												<a href="#">
													<span className="fa fa-facebook-f"></span>
												</a>
											</li>
											<li className="effect-soc-team2">
												<a href="#">
													<span className="fa fa-twitter"></span>
												</a>
											</li>
											<li className="effect-soc-team3">
												<a href="#">
													<span className="fa fa-google-plus"></span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-sm-7  mt-sm-0 mt-5">
								<div className="team-grid text-center">
									<div className="team-img">
										<img className="img-fluid rounded" src="assets/images/t5.jpg" alt="" />
									</div>
									<div className="team-info">
										<h4>Aditi Srivastava</h4>
										<ul className="d-flex justify-content-center py-3 social-icons">
											<li className="effect-soc-team1">
												<a href="#">
													<span className="fa fa-facebook-f"></span>
												</a>
											</li>
											<li className="effect-soc-team2">
												<a href="#">
													<span className="fa fa-twitter"></span>
												</a>
											</li>
											<li className="effect-soc-team3">
												<a href="#">
													<span className="fa fa-google-plus"></span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-sm-7 top-tem">
								<div className="team-grid text-center">
									<div className="team-img">
										<img className="img-fluid rounded" src="assets/images/t6.jpg" alt="" />
									</div>
									<div className="team-info">
										<h4>Berlin Donald</h4>
										<ul className="d-flex justify-content-center py-3 social-icons">
											<li className="effect-soc-team1">
												<a href="#">
													<span className="fa fa-facebook-f"></span>
												</a>
											</li>
											<li className="effect-soc-team2">
												<a href="#">
													<span className="fa fa-twitter"></span>
												</a>
											</li>
											<li className="effect-soc-team3">
												<a href="#">
													<span className="fa fa-google-plus"></span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/* <div className="col-lg-2 col-sm-7  mt-sm-0 mt-5">
								<div className="team-grid text-center">
									<div className="team-img">
										<img className="img-fluid rounded" src="assets/images/t7.jpg" alt="" />
									</div>
									<div className="team-info">
										<h4>Devesh Srivastava</h4>
										<ul className="d-flex justify-content-center py-3 social-icons">
											<li className="effect-soc-team1">
												<a href="#">
													<span className="fa fa-facebook-f"></span>
												</a>
											</li>
											<li className="effect-soc-team2">
												<a href="#">
													<span className="fa fa-twitter"></span>
												</a>
											</li>
											<li className="effect-soc-team3">
												<a href="#">
													<span className="fa fa-google-plus"></span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</section>
				</section>
		
		</div>
    )
}

export default About
