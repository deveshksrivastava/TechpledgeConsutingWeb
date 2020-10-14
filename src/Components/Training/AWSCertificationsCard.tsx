import React from 'react'
import Cards from '../Cards';

function AWSCertificationsCard() {
    return (
        <div>
             <section className="w3l-features-1">
          <div className="features py-4">
                  <div className="container pb-5">
                  <h4>AWS Platform Certification</h4>
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`AWS SysOps Admin`} certificate={`AWS SysOps Admin`} examcode={`AWS-SOA-C01`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`588`} pdfURL={`AWS-SysOps.pdf`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`AWS SA Associates`} certificate={`AWS SA Associates`} examcode={`AWS-SAA-C01`} tranhrs={`36 Hr`} exmpre={`4 Hr`} price={`605`} pdfURL={`AWS-SolArch.pdf`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`AWS SA Professional`} certificate={`AWS SA Professional`} examcode={`AWS-SAP-C01`} tranhrs={`42 Hr`} exmpre={`6 Hr`} price={`628`} pdfURL={`AWS-SolArch.pdf`} />
                          </div>					 
                        </div>	
                      </div>  
                      <hr />
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`AWS Practitioner`} certificate={`AWS Practitioner`} examcode={`AWS-CP-C01`} tranhrs={`28 Hr`} exmpre={`6 Hr`} price={`$628`} pdfURL={`AWS-SolArch.pdf`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`AWS Security Eng`} certificate={`AWS Security Eng`} examcode={`AWS-SCS-C01`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`$628`} pdfURL={`AWS-Security.pdf`} />
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

export default AWSCertificationsCard
