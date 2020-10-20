import React from 'react'
import CardsTranning from '../CardsTranning';

function AzureCloudArchitectRole() {
    return (
        <div>
            <section className="w3l-features-1">
          <div className="features py-4">
                  <div className="container pb-5">
                  <h4>Cloud Architect Role</h4>
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`Azure Cloud Architect`} certificate={`Azure Cloud Architect`} examcode={`AZ-301/303`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`$588`} pdfURL={`assets/images/Cloud Architect/AZ-300.pdf`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                            <CardsTranning title={`AWS Cloud Architect`} certificate={`AWS Cloud Architect`} examcode={`SAP-C01`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`628`} pdfURL={`assets/images/Cloud Architect/AWS-SolArch.pdf`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`Azure Database Architect`} certificate={`Azure Database Architect`} examcode={`MS 70-473`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`705`} pdfURL={`assets/images/Cloud Architect/Azure-SQL.pdf`} />
                          </div>					 
                        </div>	
                      </div>  
                      <hr />
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`AWS Cloud Security Architect`} certificate={`AWS Cloud Security Architect`} examcode={`SCS-C01`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`705`} pdfURL={`assets/images/Cloud Architect/AWS-Security.pdf`} />
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

export default AzureCloudArchitectRole
