import React from 'react'
import CardsTranning from '../CardsTranning';
import {Link} from "react-router-dom"

function CloudDataAnalystRole() {
    return (
        <div>
          <section className="w3l-contact-breadcrum">
            <div className="breadcrum-bg py-sm-5 py-4">
              <div className="container py-lg-3">
                <h2>Cloud Data Analyst Role</h2>
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
                          TechPledge Job  Based Training is especially curated program where candidate will provide the training on Live Environment and all essential skills like hands on experience of various Analytics Tool, ETL , Data Storage Ststemm which is mostly used by company.. Top Year 2021 Updated Analyst  Level Online Courses help you to reach your goal with 100% Guaranteed
            TechPledge  Offers Various  levels of Data Analyst Training with Hands-On a Live Projects and Certifications for different roles in cloud environments.

                          </p>

                            <p><b>The Below Certification designed as per unique specialty a person need to prove their credential. </b></p>
                              {/* <ul className="cont-4" >
                                  <li><span className="fa fa-check"></span>Testimonials: Proven Success: 92%.Success in Exam.</li>
                                  <li><span className="fa fa-check"></span>Our Trainer are Veterans  & Experts from Industry. </li>
                                  <li><span className="fa fa-check"></span>Individualized, Customized Traning</li>
                                  <li><span className="fa fa-check"></span>1 on 1 Industry Mentorship</li>
                              </ul> */}
                          </div>
                          <div className="cwp4-image col-lg-6 pl-lg-5 mt-lg-0 mt-5">
                              <img src="assets/images/topics/DataAnalystRole.jpg" className="img-fluid" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </section>

             <section className="w3l-features-1">
          <div className="features py-4">
                  <div className="container pb-5">
                  <h4>Cloud Data Analyst Role</h4>
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`AWS Big Data Analyst`} certificate={`AWS Big Data Analyst`} examcode={`BDS-C00`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`628`} pdfURL={`assets/images/Data Analyst Role/AWSBigData.pdf`} />
                          </div>
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>						 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`Data Science - Python`} certificate={`Data Science Analyst- Python`} examcode={`TP-DS-01`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`628`} pdfURL={`assets/images/Data Analyst Role/DataSc-Phy.pdf`} />
                          </div>	
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`Data Science - R`} certificate={`Data Science Analyst- R`} examcode={`TP-DS-02`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`628`} pdfURL={`assets/images/Data Analyst Role/Datascience-R.pdf`} />
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
                              <CardsTranning title={`Azure Database Architect`} certificate={`Azure Database Architect`} examcode={`examcode`} tranhrs={`MS 70-473`} exmpre={`6 Hr`} price={`605`} pdfURL={`assets/images/Data Analyst Role/Azure-SQL.pdf`} />
                          </div>	
                          <div className="divEnrollnow" >
                            <button type="button" className="btn buttonEnrollNow">Enroll Now</button>
                          </div>					 
                        </div>	
        
                      </div>  
                      <hr/>
                     
                  </div>
          </div>
     
           </section>
           <section className="w3l-features-1">
                <div className="container pb-5">
                  <p><b>Job Based Training</b></p>
                          <p>Every Candidate get  trained on Different Job Profile Like Helpdesk , System Admin, Cloud Admin , Architect , Software Dev , Database Analyst, Linux System Admin etc based on their interest , expectance and Profile .</p>
                          <p><b>Customer Immersion Program </b></p>
                          <p>6 Hours Live walkthrough of  complete Live Production Infrastructure with full setup of Tools and services  like 
                            <b> AD, Microsoft  SQL , MySQL, Microsoft  Exchange, File Server , System Center , SharePoint , Veritas Backup , Ticketing Tool , ADFS  and   DevOps Tool  Like Jenkins , Ansible , Docker , AWS Code Deploy , AWS Code Pipeline , AWS Code Deploy and AWS CLI </b>and Development Environment with Maven, Visual Studio and Python. 
                                The Complete Setups is using 100 of PowerShell & Linux Script with 237 CI/CD scripts (Jason, Yamal) and based on VMware and Hyper-V private Cloud .
                          </p>
                </div>
            </section>
        </div>
    )
}

export default CloudDataAnalystRole
