import React, { useState } from 'react';
import './All.css';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VerifyYourself from './VerifyYourself';
import DetailInfo from './DetailInfo';
import BecomeMember from './BecomeMember';
import Payment from './Payment';
import NavBar from './NavBar';

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
    },
}));

const getSteps = () => {
    return ['Verify Yourself', 'You Detail Info', 'Payment Details', 'Become a Member'];
}

const getStepContent = (stepIndex) => {
    switch (stepIndex) {
        case 0:
            return <VerifyYourself />
        case 1:
            return <DetailInfo />
        case 2:
            return <Payment />
        case 3:
            return <BecomeMember />
        default:
            return 'Unknown stepIndex';
    }
}
export const UserInfo = React.createContext()

const Main = () => {
    const [userInfo, setUserInfo] = useState({})

    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <UserInfo.Provider value={{ info: [userInfo, setUserInfo] }}>
            <NavBar />
            <div className={classes.root}>
                <Stepper style={{ background: 'transparent' }} activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                        <div className="d-flex flex-column align-items-center">
                            <Typography className={`text-center ${classes.instructions}`}>All steps completed</Typography>
                            <Button onClick={handleReset}>Reset</Button>
                        </div>
                    ) : (
                            <div className="d-flex flex-column align-items-center">
                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                <div>
                                    <Button variant="contained" color="primary" onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                </div>
            </div>
            <div className="background"></div>
        </UserInfo.Provider>
    );
}
export default Main;
