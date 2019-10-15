import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) => createStyles({
    padding: {
      flexGrow: 1,
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
    paddingBetween: {
      paddingTop: "5%",
    },
  }),
);

export default function IntroductionCard() {
  const classes = useStyles({});

  return (
    <div>
    <Grid container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '90vh' }}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5">
              Hi, I'm Bridget!
            </Typography>
            <Divider />
            <Typography variant="subtitle1" className={classes.paddingBetween}>
            Welcome to my portfolio website
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
