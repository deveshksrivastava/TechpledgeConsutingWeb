import React from 'react'
import CardsTranning from '../CardsTranning';
import {Link} from "react-router-dom"

function AzureCloudArchitectRole() {
    return (

        <div>
          <section className="w3l-contact-breadcrum">
            <div className="breadcrum-bg py-sm-5 py-4">
              <div className="container py-lg-3">
                <h2>Cloud Architect Role</h2>
                <p><Link to="/" >Home</Link> / Certification</p>
              </div>
            </div>
          </section>
          <section className="w3l-content-with-photo-4">
              <div id="content-with-photo4-block" > 
                  <div className="container py-md-5">
                      <div className="cwp4-two row">
                          <div className="cwp4-text col-lg-6">
                          <p>
                          TechPledge Job  Based Training is especially curated program where candidate will provide the training on Live Environment and all essential skills like hands on experience of various Architect tool, Security  tool , Costing tool which is mostly used by company.. Top Year 2021 Updated Architect Level Online Courses help you to reach your goal with 100% Guaranteed
TechPledge  Offers Various  levels of Solution Architect Training with Hands-On Live Projects and Certifications for different roles in cloud environments
                          </p>

                     
                          <p><b>The Below Certification designed as per unique specialty a person need to prove their credential. </b></p>
                              {/* <ul className="cont-4">
                                  <li><span className="fa fa-check"></span>Testimonials: Proven Success: 92%.Success in Exam.</li>
                                  <li><span className="fa fa-check"></span>Our Trainer are Veterans  & Experts from Industry. </li>
                                  <li><span className="fa fa-check"></span>Individualized, Customized Traning</li>
                                  <li><span className="fa fa-check"></span>1 on 1 Industry Mentorship</li>
                              </ul> */}
                          </div>
                          <div className="cwp4-image col-lg-6 pl-lg-5 mt-lg-0 mt-5">
                              <img src="assets/images/topics/CloudArchitect.jpg" className="img-fluid" alt="" />

                          </div>
                      </div>
                  </div>
              </div>
          </section>
        
          
            <section className="w3l-features-1">
          <div className="features py-4">
                  <div className="container pb-5">
                  <h4>Cloud Architect Role</h4>
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`Azure Cloud Architect`} certificate={`Azure Cloud Architect`} examcode={`AZ-301/303`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`$588`} pdfURL={`assets/images/Cloud Architect/AZ-300.pdf`} />
                          </div>
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>						 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                            <CardsTranning title={`AWS Cloud Architect`} certificate={`AWS Cloud Architect`} examcode={`SAP-C01`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`628`} pdfURL={`assets/images/Cloud Architect/AWS-SolArch.pdf`} />
                          </div>
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>						 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`Azure Database Architect`} certificate={`Azure Database Architect`} examcode={`MS 70-473`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`705`} pdfURL={`assets/images/Cloud Architect/Azure-SQL.pdf`} />
                          </div>
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>						 
                        </div>	
                      </div>  
                      <hr />
                     
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`AWS Cloud Security Architect`} certificate={`AWS Cloud Security Architect`} examcode={`SCS-C01`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`705`} pdfURL={`assets/images/Cloud Architect/AWS-Security.pdf`} />
                          </div>		
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>				 
                        </div>
                       	
                     
                      </div>  
                      <hr/>
                      <div id="content-with-photo4-block" > 
                          <div className="container py-md-5">
                              <div className="cwp4-two row">
                                  <div className="cwp4-text col-lg-12">
                                  <p><b>TechPledge  Certification & Exams</b></p>
                                  <p>
                                      TechPledge  Certification is Accredited by all major Global Companies around the world. 
                                      It increases the value of your resume and you can attain leading job posts with the help of this certification in 
                                      leading MNC’s of the world. The certification is only provided after successful completion of our training and 
                                      practical based projects.
                                  </p>
                                  <p><b>Azure Certification & Exams</b></p>
                                  <p>
                                    Azure Certification is generally gained by IT professionals to demonstrate Azure cloud expertise and possess 
                                    technical knowledge on Azure cloud. The IT pros need to pass one or more exams that Amazon  Offers .
                                    To Know What is Azure Certifications Contact us at info@techpledgeconsulting.com
                                    </p>
                                    
                                  </div>
                                
                              </div>
                          </div>
                      </div>
                      
                  </div>
          </div>
     
     </section> 
        </div>
    )
}

export default AzureCloudArchitectRole
