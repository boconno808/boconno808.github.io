import * as React from 'react';
import { makeStyles, Theme, useTheme, createStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { animTileData } from './animTileData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 800,
      flexGrow: 1,
      padding: theme.spacing(4),
      margin: 'auto',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 75,
      backgroundColor: theme.palette.background.default,
    },
    headerText: {
      width: '100%',
      maxWidth: 800,
    },
    video:{
      position: "relative",
      paddingBottom: "56.25%" /* 16:9 */,
      paddingTop: 25,
      height: 0
    },
    iframe:{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    },
    img: {
      height: 450,
      maxWidth: 800,
      overflow: 'hidden',
      display: 'block',
      width: '100%',
    },
  }),
);

export default function Stepper() {
  const classes = useStyles({});
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = animTileData.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <div className={classes.headerText}>
        <Typography variant = "subtitle1" gutterBottom>{animTileData[activeStep].label} </Typography>
        <Typography variant="caption" gutterBottom> Created in : {animTileData[activeStep].materials}</Typography>
        </div>
      </Paper>
      <div
      className={classes.video}
      >
        <iframe
          title={animTileData[activeStep].label}
          className={classes.iframe}
          src={`https://www.youtube.com/embed/${animTileData[activeStep].youtubeId}`}
          frameBorder="0"
        />
      </div>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}
