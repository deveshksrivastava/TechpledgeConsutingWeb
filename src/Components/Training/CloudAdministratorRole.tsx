import React from 'react'
import CardsTranning from '../CardsTranning';

function CloudAdministratorRole() {
    return (
        <div>
             <section className="w3l-features-1">
          <div className="features py-4">
                  <div className="container pb-5">
                  <h4>Cloud Administrator Role</h4>
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              {/* <Cards topic1={`Skills and Experiance`} /> */}
                              <CardsTranning title={`Azure Support Engineer`} certificate={`Azure Cloud Support Engineer`} examcode={`AZ-900`} tranhrs={`26 Hr`} exmpre={`6 Hr`} price={`516`} pdfURL={`assets/images/Cloud Administratoer/AZ-900.pdf`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`Azure Cloud Administrator`} certificate={`Azure Cloud Administrator`} examcode={`AZ-104`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`588`} pdfURL={`assets/images/Cloud Administratoer/AZ-104.pdf`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`AWS Support Engineer`} certificate={`AWS Cloud Support Engineer`} examcode={`SOA-C01`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`516`} pdfURL={`assets/images/Cloud Administratoer/AWS-Practitioner.pdf`} />
                          </div>					 
                        </div>	
                      </div>  
                      <hr />
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`Cloud Administrator Role`} certificate={`AWS Cloud Administrator`} examcode={`SAA-C01`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`588`} pdfURL={`assets/images/Cloud Administratoer/AWS-SysOps.pdf`} />
                          </div>					 
                        </div>	
                       
                      </div>  
                      <hr/>
                     
                      
                  </div>
          </div>
     
     </section>
        </div>
    )
}

export default CloudAdministratorRole
