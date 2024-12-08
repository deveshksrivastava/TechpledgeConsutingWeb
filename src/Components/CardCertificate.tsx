import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Cards from './Cards';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


const data = [
    {Certificate:"MCSA-Messaging", ExameCode:"MS-70-345", TrainingHours:"36 Hr", ExamPreparation:"6 Hr"},
    {Certificate:"Microsoft Teams", ExameCode:"MCSA-0365 Teams", TrainingHours:"26 Hr", ExamPreparation:"4 Hr"},
    {Certificate:"Microsoft SharePoint", ExameCode:"MS-70-345", TrainingHours:"36 Hr", ExamPreparation:"6 Hr"},
]
interface tablepro {
  data:Array<{
    Certificate:string, 
    ExameCode:string,
    TrainingHours:string, 
    ExamPreparation:string 
  }>
}
export default function CardCertificate() {
  // const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;


  return (
    
      <section className="w3l-features-1">
          <div className="features py-4">
                  <div className="container pb-5">
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`test`} certificate={`certificate`} examcode={`examcode`} tranhrs={`tranhrs`} exmpre={`exmpre`} price={`price`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`test`} certificate={`certificate`} examcode={`examcode`} tranhrs={`tranhrs`} exmpre={`exmpre`} price={`price`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`test`} certificate={`certificate`} examcode={`examcode`} tranhrs={`tranhrs`} exmpre={`exmpre`} price={`price`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                      </div>  
                      <hr />
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`test`} certificate={`certificate`} examcode={`examcode`} tranhrs={`tranhrs`} exmpre={`exmpre`} price={`price`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`test`} certificate={`certificate`} examcode={`examcode`} tranhrs={`tranhrs`} exmpre={`exmpre`} price={`price`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                              <Cards title={`test`} certificate={`certificate`} examcode={`examcode`} tranhrs={`tranhrs`} exmpre={`exmpre`} price={`price`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                      </div>  
                      <hr/>
                      <div className="fea-gd-vv row ">	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                               <Cards title={`test`} certificate={`certificate`} examcode={`examcode`} tranhrs={`tranhrs`} exmpre={`exmpre`} price={`price`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                          <Cards title={`test`} certificate={`certificate`} examcode={`examcode`} tranhrs={`tranhrs`} exmpre={`exmpre`} price={`price`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                        <div className="float-lt feature-gd col-lg-4 col-sm-12">	
                          <div className="icon-info">
                          <Cards title={`test`} certificate={`certificate`} examcode={`examcode`} tranhrs={`tranhrs`} exmpre={`exmpre`} price={`price`} pdfURL={`pdfURL`} />
                          </div>					 
                        </div>	
                      </div>  
                      
                  </div>
          </div>
     
     </section>
  );
}
