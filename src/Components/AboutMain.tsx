import React from 'react'
import {Link} from "react-router-dom"

function AboutMain() {
    return (
        <div>
			<section className="services-12" id="course">
                <div className="form-12-content">
                    <div className="container">
                        <div className="grid grid-column-2 ">
                            
                            <div className="column1">
                                <div className="heading">
                                    <h3 className="head text-white">Software Development Services</h3>
									<h4>We build Apps that build your bussiness</h4>
                                    {/* <h4>Fall 2019 applications are now open</h4> */}
                                    <p className="my-3 text-white"> 
										Counted among Top App Development Companies, we provide Website and App development services to our clients spreading all across the globe. Our Website and App Development Services using React Native are proficient in adding new features and optimize it to improve performance and provides tailor-made products to blend advanced functionality with off-the-shelf products.

                                    </p>
                                </div>
                                </div>
                                <div className="column2">
                                <Link className="btn btn-secondary btn-theme2 mt-3" to="/Services" >Know More</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w3l-index1" id="about">
				<div className="calltoaction-20  py-5 editContent">
					<div className="container py-md-3">
					
						<div className="calltoaction-20-content row">
							<div className="column center-align-self col-lg-6 pr-lg-5">
								<h5 className="editContent">Pledge For Responsible Tech</h5>
								<p className="more-gap editContent">
								TechPledge where Technologists meet to create the Responsible Technologists. We Born from with the tech industry. We at TechPledge  committed  to driving a new direction in technology. It and should remain seen as our promise to ensure responsible and sustainable tech leadership, because we believe that with technical skills responsibility also follow.
								</p>
							<p className="more-gap editContent">We at TechPledge, understand that the whole idea is not about the choice between using and not using technology  "The challenge is to use it rightly".
							</p>
								<p className="more-gap editContent">
									The Trainers at TechPledge are veterans of the IT industries with more than 25+ Years of experience. Once you get associated with TechPledge, you   get regular mentor ship for interview, certification and career enhancement , apart from in-depth training.  We help you  take your skills to next level. 
								</p>
										{/* <a className="btn btn-secondary btn-theme2 mt-3" href="about.html"> Read More</a> */}
										<Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="/about" >Read More</Link>
							</div>
							<div className="column ccont-left col-lg-6">
								<img src="assets/images/g1.jpg" className="img-responsive" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</section>
		
        </div>
    )
}

export default AboutMain
