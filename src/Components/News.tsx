import React from 'react'
import {Link} from "react-router-dom"

function News() {
    return (
        <div>
            
<section className="w3l-price-2" id="news">
    <div className="price-main py-5">
        <div className="container py-md-3">
             <div className="pricing-style-w3ls row py-md-5">
              <div className="pricing-chart col-lg-6">
                <h3 className="">Our Speciality Course</h3>
                <div className="tatest-top mt-md-5 mt-4">
                        <div className="price-box btn-layout bt6">
                            <div className="grid grid-column-2">
                                    <div className="column-6">
                                            <img src="assets/images/certifiedcloudprofessional.jpg" alt="" className="img-fluid"/>
                                        </div>
                                <div className="column1">
                                   
                                    <div className="job-info">
                                        <h6 className="pricehead"><a href="#">TPCS Cloud Master program </a></h6>
                                        {/* <h5>April 25, 2020</h5> */}
                                        <p>
                                            TechPledge Cloud Architect Master’s Program will build your Microsoft Core Service Admin, Linux Admin, 
                                            Azure Cloud Architect , AWS Cloud Admin with DevOps Expertise from ground up  to Kickstart Career
                                        </p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div className="price-box btn-layout bt6 top-middle-1">
                            <div className="grid grid-column-2">
                                    <div className="column-6">
                                            <img src="assets/images/certified-oracle-admin.jpg" alt="" className="img-fluid"/>
                                        </div>
                                <div className="column1">
                                   <div className="job-info">
                                        <h6 className="pricehead"><a href="#">	
                                        TPCS Oracle Database Professional</a></h6>
                                       {/* <h5>March 25, 2020</h5> */}
                                       <p>
                                           TechPledge Oracle DBA course at a unique level in all aspects Technical as well real time oriented. Our core
                                           ideology is to  nurture each Oracle DBA aspirants should be much strong in concepts as well must be opt in handling  
                                           real time issues
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="price-box btn-layout bt6">
                            <div className="grid grid-column-2">
                                        <div className="column-6">
                                            <img src="assets/images/certified-devops-prof.jpg" alt="" className="img-fluid"/>
                                        </div>
                                <div className="column1">
                                  
                                    <div className="job-info">
                                        <h6 className="pricehead"><a href="#">	
                                        TPCS DevOps Professional  </a></h6>
                                        {/* <h5>February 25, 2020</h5> */}
                                        <p>
                                            At the TechPledge we provide  the training which is always updated inline with the DevOps Skills required by the 
                                            industry and recommended by Various DevOps Organization
                                        </p>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="text-right mt-4">
                        <a href={`assets/images/speciality.pdf`} className="btn btn-secondary btn-theme2">View All </a>
                      </div>
                    </div>
                    <div className="w3l-faq-page col-lg-6 pl-3 pl-lg-5 mt-lg-0 mt-5">
                        <h3 className="">TechPledge Job Assist</h3>
                        <div className="events-top mt-md-5 mt-4">
                            <div className="events-top-left">
                            <img src="assets/images/special-team.jpg" alt="" className="img-fluid"/>
                                    {/* <div className="icon-top">
                                        <h3>20</h3>
                                        <p>Nov</p>
                                        <span>2020</span>
                                    </div> */}
                            </div>
                            <div className="events-top-right">
                                <h6 className="pricehead">
                                    <a href="#">Permanent Placement</a>
                                </h6>
                                    <p className="mb-2 mt-3">
                                        Our specialized team provide Permanent Recruitment workforce solutions with proven expertise in recruiting, assessing and 
                                        qualifying candidates for permanent openings. 
                                    </p>
                                    {/* <li>07:00 - 10:00 </li>
                                    <li className="melb">Melbourne, Australia</li> */}
                            </div>
                        </div>
                        <div className="events-top mt-4">
                            <div className="events-top-left">
                            <img src="assets/images/special-team-assit.jpg" alt="" className="img-fluid"/>
                                    {/* <div className="icon-top">
                                        <h3>25</h3>
                                        <p>Nov</p>
                                        <span>2020</span>
                                    </div> */}
                            </div>
                            <div className="events-top-right">
                                <h6 className="pricehead">
                                    <a href="#">	Contract Placement </a>
                                    </h6>
                                    <p className="mb-2 mt-3">
                                        We Provide the assistance for candidate to get placed  as Contract employee in companies for specific job role. We do make the clear agreement with candidate and will pay the agreed remuneration within 7 days of getting payment from the client.
                                    </p>
                                    {/* <li>07:00 - 10:00 </li>
                                    <li className="melb">Melbourne, Australia</li> */}
                            </div>
                        </div>
                        <div className="text-right mt-4">
                          {/* <a className="btn btn-secondary btn-theme2" href="#"> View All</a> */}

                      
                          <Link className="btn btn-secondary btn-theme2 mt-md-5 mt-4" to="./JobAssistance" >View All</Link>
                          
                        </div>
                      </div>
            </div>
        </div>
    </div>
</section>
        </div>
    )
}

export default News
