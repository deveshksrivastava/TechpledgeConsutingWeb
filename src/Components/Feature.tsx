import React from 'react'
import {Link} from "react-router-dom"


function Feature() {
    return (
        <div>
			{/* <section class="w3l-feature-3" id="features">
				<div class="grid top-bottom mb-lg-5 pb-lg-5">
					<div class="container">
						
						<div class="middle-section grid-column text-center">
						
						</div>
					</div>
				</div>
			</section> */}
            
			<section className="w3l-feature-3" id="features">
				<div className="grid top-bottom mb-lg-5 pb-lg-5">
					<div className="container">
						<div className="middle-section grid-column text-center">
							<div className="three-grids-columns">
								<span className="fa fa-laptop"></span>
								<h4> Role Based Training</h4>
								<p>
									TechPledge Role Base Training is especially curated program where candidate will provide the training on Live Environment and all essential skills like hands on experience of various monitoring tool, helpdesk tool , automation tool which is mostly used by company.
								</p>
								{/* <a href="services.html" className="btn btn-secondary btn-theme3 mt-4">Read More </a> */}
								<Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="/about" >Read More</Link>
							</div>
							<div className="three-grids-columns">
								<span className="fa fa-users"></span>
								<h4>
									Customized ​Learning
								</h4>
								<p>
									We are from industry , we know the requirements of Industry . Our Empanel Industry leaders Working with you to identify best suited career opportunities for you and Help you define your value proposition. We Lay out a Career Path and help you adhere to your timelines and goals.
								</p>
								{/* <a href="services.html" className="btn btn-secondary btn-theme3 mt-4">Read More </a> */}
								<Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="/about" >Read More</Link>
							</div>
							<div className="three-grids-columns">
								<span className="fa fa-book"></span>
								<h4>Job Placements</h4>
								<p>
									TechPledge JobAssist Is the program which bridge between the companies who looking for right talent and the employee through TechPledge Training program and customer experience . Techpledge JobAssist  provides services for Permanent Staffing in  UK , USA , C anada , Middle East and India.
								</p>
								{/* <a href="services.html" className="btn btn-secondary btn-theme3 mt-4">Read More </a> */}
								{/* <Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="/" >Read More</Link> */}
								<Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="./JobAssistance" >Read More	</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
        </div>
    )
}

export default Feature
