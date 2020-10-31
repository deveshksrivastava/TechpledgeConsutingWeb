import React from 'react'
import Cards from '../Cards';
import {Link} from "react-router-dom"

function MicrosoftCertificationsCard() {
    return (
        <div>
          <section className="w3l-contact-breadcrum">
            <div className="breadcrum-bg py-sm-5 py-4">
              <div className="container py-lg-3">
                <h2>Microsoft  Certification</h2>
                <p><Link to="/" >Home</Link> / Certification</p>
              </div>
            </div>
          </section>
          <section className="w3l-content-with-photo-4">
              <div id="content-with-photo4-block" > 
                  <div className="container py-md-5">
                      <div className="cwp4-two row">
                          <div className="cwp4-text col-lg-6">
                          <p>TechPledge Certification Based Training is especially curated program where candidate will provide the training on 
                            Live Environment and all essential skills like hands on experience of various Microsoft Technologies. Top Year 2021 
                            Updated Microsoft Online Courses help you to reach your goal with 100% Guaranteed
                          TechPledge  Offers Various  levels of Microsoft  Training with Hands-On Live Projects and Certifications for different 
                          roles in cloud environments.
                          </p>
                          <p><b>The Below Certification designed as per unique specialty a person need to prove their credential.</b></p>
                              <ul className="cont-4">
                                  <li><span className="fa fa-check"></span>Testimonials: Proven Success: 92%.Success in Exam.</li>
                                  <li><span className="fa fa-check"></span>Our Trainer are Veterans  & Experts from Industry. </li>
                                  <li><span className="fa fa-check"></span>Individualized, Customized Traning</li>
                                  <li><span className="fa fa-check"></span>1 on 1 Industry Mentorship</li>
                              </ul>
                          </div>
                          <div className="cwp4-image col-lg-6 pl-lg-5 mt-lg-0 mt-5">
                              <img src="assets/images/topic/Microsoft Certification.png" className="img-fluid" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section>
            <div>
   
            </div>
          </section>
             <section className="w3l-features-1">
          <div className="features py-4">
                  <div className="container pb-5">
                      <h4>Microsoft Productivity Certification</h4>
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Microsoft Messaging`} certificate={`MCSA-Messaging`} examcode={`MS-70-345`} tranhrs={`36 Hr`} exmpre={` 6 Hr`} price={`588`} pdfURL={`assets/images/Microsoft Certification/EXchange2016.pdf`} />
                          </div>
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Microsoft Teams`} certificate={`MCSA-0365 Teams`} examcode={`MS-700`} tranhrs={`26 Hr`} exmpre={`4 Hr`} price={`406`} pdfURL={`assets/images/Microsoft Certification/MS-Team.pdf`} />
                          </div>
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>						 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Microsoft SharePoint`} certificate={`MCSA-SharePoint`} examcode={`MS-70-339`} tranhrs={`36 Hr`} exmpre={` 6 Hr`} price={`588`} pdfURL={`assets/images/Microsoft Certification/MS-SharePoint.pdf`} />
                          </div>
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>						 
                        </div>	
                      </div>  
                      <hr />
                      <h4>Microsoft Platform Certification</h4>
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Microsoft Server Admin`} certificate={`MCSA-Core Infra`} examcode={`MS-70-740/41`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`588`} pdfURL={`assets/images/Microsoft Certification/MCSA-2019.pdf`} />
                          </div>
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>						 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Microsoft SQL DBA`} certificate={`MCSA-Database`} examcode={`MS-70-764`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`588`} pdfURL={`assets/images/Microsoft Certification/MCDBA-SQL2019.pdf`} />
                          </div>
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>						 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Microsoft Azure Admin`} certificate={`Azure Administrator`} examcode={`AZ-103/104`} tranhrs={`36 Hr`} exmpre={` 6 Hr`} price={`588`} pdfURL={`assets/images/Microsoft Certification/AZ-104.pdf`} />
                          </div>
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>						 
                        </div>	
                      </div>  
                      <hr/>
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Azure Architect-Infra`} certificate={`Azure Solutions Arch`} examcode={`AZ-300/301`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`605`} pdfURL={`assets/images/Microsoft Certification/AZ-300.pdf`} />
                          </div>	
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Developing Solutions Az`} certificate={`Azure Solutions Arch`} examcode={`AZ-203`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`705`} pdfURL={`assets/images/Microsoft Certification/AZ-203.pdf`} />
                          </div>
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>						 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Azure Security Engineer`} certificate={`Azure Security Engineer`} examcode={`AZ-500`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`705`} pdfURL={`assets/images/Microsoft Certification/AZ-500.pdf`} />
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
                              <Cards title={`Implement Data Solutions`} certificate={`Azure Data Solutions`} examcode={`Azure Data Solutions`} tranhrs={`DP-200`} exmpre={`36 Hr`} price={`705`} pdfURL={`assets/images/Microsoft Certification/DP-200.pdf`} />
                          </div>
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>						 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Design Data Solutions`} certificate={`Azure Data Solutions`} examcode={`Azure Data Solutions`} tranhrs={`DP-201`} exmpre={`36 Hr`} price={`705`} pdfURL={`assets/images/Microsoft Certification/DP-201.pdf`} />
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
                                  <p><b>Microsoft Certification & Exams</b></p>
                                  <p>
                                    Microsoft Certification is generally gained by IT professionals to demonstrate Microsoft cloud expertise and possess 
                                    technical knowledge on Microsoft cloud. The IT pros need to pass one or more exams that Amazon  Offers .
                                    To Know What is Microsoft Certifications Contact us at info@techpledgeconsulting.com
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

export default MicrosoftCertificationsCard
