import React from 'react'
import {Link} from "react-router-dom"

function PermanentPositionPlacements() {
    return (
        <div>
        <section className="w3l-contact-breadcrum">
            <div className="breadcrum-bg py-sm-5 py-4">
              <div className="container py-lg-3">
                <h2>Permanent Position – Placements  </h2>
                <p><Link to="/" >Home</Link> / Permanent Position – Placements</p>
              </div>
            </div>
          </section>
            <section className="w3l-features-1">
                <div className="features py-12">
                    <div className="container pb-5">
                        <div className="fea-gd-vv row ">	
                            <div className="float-lt feature-gd col-lg-10 col-sm-6">	
                                <div className="icon-info"> <br /><br />
                                <h1>Permanent Position – Placements</h1>
                                <p>TechPledge JobAssist Is the program which bridge between the companies who looking for right 
                                talent and the employee who is prepared 
                                to full fill the responsibility through TechPledge Training program and customer experience.</p>

                                <p>Our specialized team provide Permanent Recruitment workforce solutions with proven 
                                expertise in recruiting, assessing and qualifying candidates for permanent openings. 
                                Our process delivers on-the-job success for the long term. Our Expert Career Co-Ordinator  
                                work effortlessly to help companies recognize and place the right talent, by providing exclusively 
                                screened and qualified candidates for every domain in IT  and Industry. Our time proven practice 
                                and best in class recruiters ensure that our clients get the best talent at any level within the 
                                fastest turnaround time.</p>

                                <p>We  can proudly say there is  high success rate in getting the candidates joined
                                 after the offer is made. Our expert recruiters are having years of experience in making 
                                 sure that they find right candidate for each client, as every client is unique. Techpledge 
                                 JobAssist  provides services for Permanent Staffing in UK,  Canada, Australia,  India and the 
                                 Middle East.</p>
                                 <br />
                                    <img src="./assets/images/offerplc.png" alt="" height="350px"  width="650px" />
                                </div>					 
                            </div>	
                        </div>  
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PermanentPositionPlacements
