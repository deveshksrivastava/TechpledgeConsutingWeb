import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: purple[500],
//     },
//     secondary: {
//       main: '#f44336',
//     },
//   },
// });

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
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;


  return (
<section className="w3l-features-1">
	{/* <!-- /features --> */}
		<div className="features py-4">
            <div className="container pb-5">
      {/* {data} */}
			<div className="fea-gd-vv row ">	
			   <div className="float-lt feature-gd col-lg-4 col-sm-6">	
					 <div className="icon-info">
						<h5></h5>
						<p>
            <Card className={classes.root}>
              <CardContent>
                {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography> */}
                <Typography variant="h5" component="h2">
                    Microsoft Messaging
                </Typography>
                {/* <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography> */}
                <Typography variant="body2" component="p">
                  Certificate : MCSA-Messaging<br />
                  Exam Code : MS-70-345<br />
                  Training Hours: 36 Hr<br />
                  Exam Preparation: 6 Hr<br /><br /><br />

                  Price $ 500<br />
                  {/* <br />
                  {'"a benevolent smile"'} */}
                </Typography>
              </CardContent>
              <CardActions>
        
                <a href="https://www.techpledgeconsulting.com/mcmicrosoft-exchange-2019">View Detail</a>
              </CardActions>
            </Card>
						</p>
					</div>
					 
				</div>	
		</div>  
		 </div>
	   </div>
     </section>
  );
}
