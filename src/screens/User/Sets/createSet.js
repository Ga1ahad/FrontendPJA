import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    display: 'flex',
    justifyContent: 'center',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Hello', 'Choose destination', 'Choose type of clothes'];
}

//const components = [component1, component2, component3];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Component1 />;
    case 1:
      return <Component2 />;
    //return 'Step 2: Select the trip you would like to go';
    case 2:
      return <Component3 />;
    //return 'Step 3: Specify types of clothes you would like to bring with you';
    case 3:
    //return 'Step 4: Specify variety of clothes like colour etc.';
    case 4:
    //return 'Step 5: We are calculating your set please stand by..';
    default:
      return 'Unknown step';
  }
}

export default function CreateSet() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Paper className="paper">
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className={classes.content}>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={handleReset}>Back to the starting point</Button>
            </div>
          ) : (
            <div id="test">
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div className={classes.content}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  //className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Paper>
  );
}
