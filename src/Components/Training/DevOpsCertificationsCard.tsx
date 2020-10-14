import React from 'react'
import Cards from '../Cards';

function DevOpsCertificationsCard() {
    return (
        <div>
             <section className="w3l-features-1">
          <div className="features py-4">
                  <div className="container pb-5">
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Azure DevOps`} certificate={`Azure DevOps`} examcode={`AZ-400`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`$626`} pdfURL={`Az-400.pdf`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`AWS DevOps`} certificate={`AWS DevOps`} examcode={`AWS-DOP-C01`} tranhrs={`36 Hr`} exmpre={`4 Hr`} price={`$626`} pdfURL={`AWS-DevOps.pdf`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`Docker Certified Associate`} certificate={`Docker Certified Associate`} examcode={`DCA`} tranhrs={`36 Hr`} exmpre={`6 Hr`} price={`$628`} pdfURL={`DCA.pdf`} />
                          </div>					 
                        </div>	
                      </div>  
                      <hr />
                      
                      
                  </div>
          </div>
     
     </section>
        </div>
    )
}

export default DevOpsCertificationsCard
