import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonalInfoForm from './Forms/PersonalInfoForm';
import ContactInfoForm from './Forms/ContactInfoForm';
import ReviewInfoForm from './Forms/ReviewInfoForm';
import { useDispatch } from 'react-redux';
import {resetState} from '../store/UserSlice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['Add Personal Information', 'Add Contact Information', 'Review your data'];
}

function getStepContent(stepIndex: number,setStep:any) {
  switch (stepIndex) {
    case 0:
      return <PersonalInfoForm submit={setStep}/>;
    case 1:
      return <ContactInfoForm submit={setStep} />;
    case 2:
      return <ReviewInfoForm submit={setStep} /> ;
    default:
      return <></>;
  }
}

export default function SignupForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const dispatch = useDispatch();


  const handleReset = () => {
    dispatch(resetState());
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
     <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            {/* <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div> */}
          </div>
        )}
      </div>

     {
       getStepContent(activeStep,setActiveStep)
     }
    
    </div>
  );
}
