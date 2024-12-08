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
      color: "#fafafa",
      fontSize: 16,

    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      color: "#fafafa",
      fontSize: 10,
    },
    pos: {
      marginBottom: 10,
    },
  });
  
  const CardsTranning:React.FC<{title:string,certificate:string,examcode:string, tranhrs:string,exmpre:string, price:string,pdfURL:string}> = ({title,certificate,examcode, tranhrs,exmpre, price,pdfURL}) => {
    const classes = useStyles();
    return (
        <div>
             <Card className={classes.root}>
              <CardContent >
                {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography> */}
                <Typography variant="h5" component="h6">
                    <u>{title}</u>
                </Typography>
                {/* <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography> */}
                <Typography >
                  <b className={classes.root}>Certificate : {certificate}</b><br />
                  <b className={classes.root}>Exam Code : {examcode}</b> <br />
                  <b className={classes.root}>Training Hours: {tranhrs}</b><br />
                  <b className={classes.root}>Exam Preparation: {exmpre}</b><br />
                  <b className={classes.root}>JobPreparation: 6 Hr<br /></b><br />
                  <b className={classes.root}>Price $ {price}   </b>              
                </Typography>
              </CardContent>
              <CardActions>  
                    <a href={pdfURL} className="btn-custom" >
                        <span><i className="fas fa-cloud-download-alt"></i></span>
                        <span><b className={classes.root}>View Detail</b></span>
                    </a>    
              </CardActions>
            </Card>
        </div>
    )
}

export default CardsTranning
