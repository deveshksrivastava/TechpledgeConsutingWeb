import React from 'react'
import CardsTranning from '../CardsTranning';

function DevOpsConsultingRole() {
    return (
        <div>
             <section className="w3l-features-1">
          <div className="features py-4">
                  <div className="container pb-5">
                  <h4>DevOps Coonsultant Role</h4>
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                          <CardsTranning title={`DevOps Automation Enginee`} certificate={`DevOps Automation Engineer`} examcode={`TP-DEV-001`} tranhrs={`36 Hr`} exmpre={`6 hr`} price={`588`} pdfURL={`assets/images/DevOps Consultant Role/TPCSDevOps.pdf`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                          <CardsTranning title={`Azure DevOps Professional`} certificate={`Azure DevOps Professional`} examcode={`AZ-400`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`628`} pdfURL={`assets/images/DevOps Consultant Role/Az-400.pdf`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`AWS DevOps Professional`} certificate={`AWS DevOps Professional`} examcode={`DOP-CO1`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`628`} pdfURL={`assets/images/DevOps Consultant Role/AWS-DevOps.pdf`} />
                          </div>					 
                        </div>	
                      </div>  
                      <hr />
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <CardsTranning title={`Docker Engineer`} certificate={`Docker Engineer`} examcode={`DCA`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`628`} pdfURL={`assets/images/DevOps Consultant Role/DCA.pdf`} />
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

export default DevOpsConsultingRole
