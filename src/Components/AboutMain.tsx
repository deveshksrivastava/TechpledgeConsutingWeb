import React from 'react'
import {Link} from "react-router-dom"

function AboutMain() {
    return (
        <div>
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
