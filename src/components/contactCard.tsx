import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme: Theme) => createStyles({
    padding: {
      flexGrow: 1,
      padding: theme.spacing(4),
      margin: 'auto',
    },
    card: {
      maxWidth: 600,
      minWidth: 400,
      margin: 'auto',
    },
    icons: {
      justifyContent: 'center'
    },
  }),
);

export default function ContactCard() {
  const classes = useStyles({});

  return (
    <div className={classes.padding}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Contact
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            I'd love to talk with you about anything!
          </Typography>
          <Typography variant= "body2" color="textSecondary">
            808-352-7368
          </Typography>
          <Typography variant="body2" component="p">
            boconno9@lion.lmu.edu
          </Typography>
        </CardContent>
        <CardActions className={classes.icons}>
          <IconButton aria-label={`linkedIn`} >
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label={`instagram`} >
            <InstagramIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
