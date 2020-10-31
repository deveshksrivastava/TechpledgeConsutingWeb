import React from 'react'
import CardsTranning from '../CardsTranning';
import {Link} from "react-router-dom"

function ServerAdministratorRole() {
    return (
        <div>
          <section className="w3l-contact-breadcrum">
            <div className="breadcrum-bg py-sm-5 py-4">
              <div className="container py-lg-3">
                <h2>Server Administrator  Certification</h2>
                <p><Link to="/" >Home</Link> / Certification</p>
              </div>
            </div>
          </section>
             <section className="w3l-features-1">
          <div className="features py-4">
                  <div className="container pb-5">
                  <h4>Server Administrator Role</h4>
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`Microsoft Engineer`} certificate={`Microsoft System Engineer`} examcode={`MS-70-740/41`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`588`} pdfURL={`assets/images/System Administration Role/MCSA-2019.pdf`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`VMware Administrator`} certificate={`VMware System Administrator`} examcode={`1V0-701`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`605`} pdfURL={`assets/images/System Administration Role/VMware-vSphere.pdf`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`Linux Administrator`} certificate={`Linux System Administrator`} examcode={`RHCSA-EX200`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`588`} pdfURL={`assets/images/System Administration Role/Linux Admin.pdf`} />
                          </div>					 
                        </div>	
                      </div>  
                      <hr />
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`Messaging Administrator`} certificate={`Messaging Administrator`} examcode={`MS-70-345`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`588`} pdfURL={`assets/images/System Administration Role/EXchange2016.pdf`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`Team Administrator`} certificate={`Microsoft Team Administrator`} examcode={`MS 700`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`588`} pdfURL={`assets/images/System Administration Role/MS-Team.pdf`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`SharePoint Administrator`} certificate={`SharePoint Administrator`} examcode={`MS 70-339`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`588`} pdfURL={`assets/images/System Administration Role/MS-SharePoint.pdf`} />
                          </div>					 
                        </div>	
                      </div>  
                      <hr/>
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`Server Administrator Role`} certificate={`VMware System Administrator`} examcode={`1V0-701`} tranhrs={`36 Hr`} exmpre={`6 hr`} price={`705`} pdfURL={`assets/images/System Administration Role/VMware-vSphere.pdf`} />
                          </div>					 
                        </div>	
                       
                      </div>  
                      
                  </div>
          </div>
     
     </section>
        </div>
    )
}

export default ServerAdministratorRole
