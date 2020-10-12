import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 175,
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      background: 'linear-gradient(21deg, #002147 50%, #002147 50%)',
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
  
  const CardsTranning:React.FC<{title:string,certificate:string,examcode:string, tranhrs:string,exmpre:string, price:string,pdfURL:string}> = ({title,certificate,examcode, tranhrs,exmpre, price,pdfURL}) => {
    const classes = useStyles();
    return (
        <div>
             <Card className={classes.root}>
              <CardContent>
                {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography> */}
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                {/* <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography> */}
                <Typography variant="body2" component="p">
                  Certificate : {certificate}<br />
                  Exam Code : {examcode}<br />
                  Training Hours: {tranhrs}<br />
                  Exam Preparation: {exmpre}<br />
                  JobPreparation: 6 Hr<br /><br />
                  Price $ {price}                 
                </Typography>
              </CardContent>
              <CardActions>  
             
              <a href={pdfURL} className="btn-custom" download="resume-devesh">
                                  <span><i className="fas fa-cloud-download-alt"></i></span>
                                  <span>View Detail</span>
                              </a>    
              </CardActions>
            </Card>
        </div>
    )
}

export default CardsTranning
