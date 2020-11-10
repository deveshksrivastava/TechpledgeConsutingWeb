import React from 'react'
import {Link} from "react-router-dom"

function OffshoreHiringPlacements() {
    return (
        <div>
        <section className="w3l-contact-breadcrum">
            <div className="breadcrum-bg py-sm-5 py-4">
              <div className="container py-lg-3">
                <h2>Contract Position  </h2>
                <p><Link to="/" >Home</Link> / Offshore Hiring</p>
              </div>
            </div>
          </section>
                    			{/* <!-- content-with-photo4 block --> */}
                                <section className="w3l-content-with-photo-4">
				<div id="content-with-photo4-block" className="pt-5"> 
					<div className="container py-md-5">
						<div className="cwp4-two row">
							<div className="cwp4-text col-lg-6">
                            <h1>Offshore Hiring – Placements </h1>
                                <p>TechPledge JobAssist Is the program which bridge between the companies who looking for right talent and the employee 
                                    who is prepared to full fill the responsibility through TechPledge Training program and customer experience.</p>

                                    <p>We provide staffing support  for a number of offshore roles including Cloud Specialist in Azure and AWS ,Database DBA, 
                                        Infrastructure Engineer, DevOps Consultant,  Software Developers , System Support Engineer  amongst many others.</p>

                                    <p>We do A selection test of the candidate is directed by the business or approved representative .We also encourage our  
                                        clients can likewise set up for the choice and testing of the candidate.</p>

                                    <p>Once the candidate got selected, our offshore service companies make him acquainted with the fluctuated parts of the
                                        employment through an induction program. In this program, they  told about the official  practices, work culture of 
                                        association, wellbeing issues and work laws for that particular nation.</p>

                                    <p>Techpledge JobAssist  provides services for Contract Staffing in <b>UK,  Canada, Australia,  India </b>and the <b>Middle East.</b></p>
                                    <br />
							</div>
							<div className="cwp4-image col-lg-6 pl-lg-5 mt-lg-0 mt-5">
								<img src="assets/images/x2.png" className="img-fluid" alt="" />
                                <br />
                                <br />
                                {/* <p>TechPledge Job Assist Program is an additional subscription based services where candidate get complete 
                                    hand-holding till they get hired in their dream job position . To get enroll in this program please get in touch
                                    with you respective coordinator . This Kit can be subscribed at Nominal fee of $150</p> */}
                                    
                                    <br />
                                    
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
                                <div className="icon-info"> <br /><br />
                                    <img src="./assets/images/offerplc.png" alt="" height="450px"  width="120%" />
                                </div>					 
                            </div>	
                        </div>  
                    </div>
                </div>
            </section>
           
        </div>
    )
}

export default OffshoreHiringPlacements
