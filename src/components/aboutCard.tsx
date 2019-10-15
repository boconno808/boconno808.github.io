import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) => createStyles({
    padding: {
      flexGrow: 1,
      padding: theme.spacing(6),
      margin: 'auto',
    },
    card: {
      maxWidth: 600,
      minWidth: 400,
      margin: 'auto',
    },
    paragraph:{
      paddingTop: theme.spacing(2),
    },
    divider: {
      maxWidth: 100,
      margin:'auto',
    },
  }),
);

export default function AboutCard() {
  const classes = useStyles({});

  return (
    <div className={classes.padding}>
    <img src={require('./pictures/linkedin.png')} />
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5">
            About
          </Typography>
          <Divider className={classes.divider} />
          <Typography align='center' variant="body1" paragraph className={classes.paragraph}>
          Bridget O’Connor is an Animation and Computer Science student at Loyola Marymount University
          who is passionate about eating. She has been drawing from an early age, and gained an interest
           in CS through her love for computers and puzzling things out. By doing a double degree she
           hopes to pursue a career combining those two, but her passion for snacking is a pursuit she
            plans to follow with or without a degree.
          </Typography>
          <Typography align='center' variant="body1" gutterBottom>
          Half Japanese⎯she was born and raised in Honolulu, Hawaii and is also minoring in Asian and
           Pacific studies. She creates work that she hopes people can find interesting or useful has
            experience designing and creating pouches and bags, all of which can be used to hold various
             amounts of snacks.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
