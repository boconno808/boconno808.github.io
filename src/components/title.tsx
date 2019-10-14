import * as React from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: 100,
      minWidth: 515,
    },
    header: {
      padding: theme.spacing(4),
    },
  }),
);

export default function Title() {
  const classes = useStyles({});
  return (
    <Paper className={classes.paper}>
      <div className={classes.header}>
        <Typography variant= "h2"> Bridgets Portfolio </Typography>
      </div>
    </Paper>
  );
}
