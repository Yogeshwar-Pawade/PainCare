// import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import './Cards.css';

const useStyles = makeStyles({
  title: {
    fontSize: 20,
  },
  // pos: {
  //   marginBottom: 12,
  // },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <div className="flexcard">
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="black" gutterBottom>
              TIMINGS
            </Typography>
            <Typography variant="body1" component="p">
              Monday - Friday 08:00 - 21:00 <br /> Saturday and Sunday - 09:00 -
              18:00
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="black" gutterBottom>
              CONTACT
            </Typography>
            <Typography variant="body1" component="p">
              +91 98862 72166 | +91 95135 15111 <br />
              contact@perfectbounce.in
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="black" gutterBottom>
              LOCATION
            </Typography>
            <Typography variant="body1" component="p">
              1st Floor, No.184/A, Club Road,
              <br /> HSR Layout, Sector 3,
              <br /> Bangalore 560102, India
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
