import React from 'react'
import {Link} from "react-router-dom"

function ContractPositionPlacements() {
    return (
        <div>
        <section className="w3l-contact-breadcrum">
            <div className="breadcrum-bg py-sm-5 py-4">
              <div className="container py-lg-3">
                <h2>Contract Position  </h2>
                <p><Link to="/" >Home</Link> / Contract Position</p>
              </div>
            </div>
          </section>
          <section className="w3l-content-with-photo-4">
				<div id="content-with-photo4-block" className="pt-5"> 
					<div className="container py-md-5">
						<div className="cwp4-two row">
							<div className="cwp4-text col-lg-6">
                            <h1>Contract Position – Placements </h1>
                               <p>TechPledge JobAssist Is the program which bridge between the companies who looking for right talent and the 
                                employee who is prepared to full fill the responsibility through TechPledge Training program and customer 
                                experience.</p>
                                
                                <p>We Provide the assistance for candidate to get placed as contract employee in  companies  for specific job role . 
                                We have an updated and well-maintained repository of candidates who are willing to work on a temporary basis 
                                and can handle diverse roles.</p>
                                
                                <p>We do make the clear agreement with candidate and will pay the agreed remuneration within 7 days of getting
                                 payment from the client.</p>
                                
                                <p>We have an excellent track record of having provided contract manpower to a large number of industries. All 
                                of them have benefited. They continue to take manpower from us on temporary basis as and when required.</p>
                                
                                <p>Techpledge JobAssist  provides services for Contract Staffing in UK,  Canada, Australia,  India and the Middle 
                                    East.</p>
							</div>
							<div className="cwp4-image col-lg-6 pl-lg-5 mt-lg-0 mt-5">
								<img src="assets/images/x3.png" className="img-fluid" alt="" />
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

export default ContractPositionPlacements
