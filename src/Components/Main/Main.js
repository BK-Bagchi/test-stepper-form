import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VerifyYourself from './VerifyYourself';
import DetailInfo from './DetailInfo';
import BecomeMember from './BecomeMember';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '60%',
        margin: '0 auto'
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        margin: '0 auto',
        background: 'red'
    },
}));

const getSteps = () => {
    return ['Verify Yourself', 'You Detail Info', 'Become a Member'];
}

const getStepContent = (stepIndex) => {
    switch (stepIndex) {
        case 0:
            return <VerifyYourself />
        case 1:
            return <DetailInfo />
        case 2:
            return <BecomeMember />
        default:
            return 'Unknown stepIndex';
    }
}

const Main = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
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
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
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
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}
export default Main;
