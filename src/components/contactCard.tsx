import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    padding: {
      flexGrow: 1,
      padding: theme.spacing(6),
      margin: "auto",
    },
    card: {
      maxWidth: 600,
      margin: "auto",
    },
    icons: {
      justifyContent: "center",
    },
    mailbox: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
    },
    divider: {
      maxWidth: 100,
      margin: "auto",
    },
    paddingPhone: {
      paddingTop: 20,
    },
  })
);

export default function ContactCard() {
  const classes = useStyles({});

  return (
    <div className={classes.padding}>
      <Card className={classes.card}>
        <CardContent>
          <Grid className={classes.mailbox}>
            <img src={require("./pictures/mailbox.png")} alt="mailbox" />
          </Grid>
          <Typography variant="h5">Contact</Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle1" gutterBottom>
            I'd love to talk with you about anything!
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.paddingPhone}
          >
            boconno9@lion.lmu.edu
          </Typography>
        </CardContent>
        <CardActions className={classes.icons}>
          <IconButton
            aria-label={`linkedIn`}
            target="_blank"
            href="https://www.linkedin.com/in/bridgetoco/"
          >
            <LinkedInIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
