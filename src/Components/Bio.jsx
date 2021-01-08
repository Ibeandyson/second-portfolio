import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import nextland from '../images/nextland.png';
import bellefuapp from '../images/bellefuapp.png';
import bellefuweb from '../images/bellefuweb.png';

const tutorialSteps = [
    {
        label: 'NextLand a web app for real estate',
        imgPath: `${nextland}`
    },
    {
        label: 'Bellefu Mobile App for agro-digital connect',
        imgPath: `${bellefuapp}`
    },
    {
        label: 'Bellefu Web App for agro-digital connect',
        imgPath: `${bellefuweb}`
    },
  
];

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 400,
        flexGrow: 1
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 700,
        overflow: 'hidden',
        width: '100%'
    }
}));

export default function Bio() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };


    return (
        <div>
            <h1 style={{fontWeight: 'bolder', color: '#008037'}}>ABOUT</h1>
            <div className="mt-3">
                <p
                    style={{
                        color: 'black',
                        textAlign: 'justify',
                        fontWeight: 'bold',
                        opacity: '0.7',
                        lineHeight: '2.2em'
                    }}>
                    Hello! I'm Ibe Andyson Andrew, a passionate Front-end web and mobile app developer, dedicated to
                    build a nice and friendly user interface. I have experience on UX Design which made me able to build
                    a friendly user interface. Also I have experience on server-side rendering, Back-end development. I
                    build highly scalbe user interface with React.js, and cross platform mobile application with React
                    Native.
                </p>
                <p
                    style={{
                        color: 'black',
                        textAlign: 'justify',
                        fontWeight: 'bold',
                        opacity: '0.7',
                        lineHeight: '2.2em'
                    }}>
                    I'm a Software Developer with over 2 year of experience in working on Real life projects other then
                    learning, and doing my personal projects for learing purpose. I have done projects on MERN stack
                    (MongoDB, Express.js, React.js, Node.js). I have work with teams on lot's of projects at my school
                    and in my local developers community. I also have skill in computer repair / maintemamce and basic
                    Networking which I was practicing before I learnt coding. I studied Computer Science at The Federal
                    Polytechnic Nekede Owerri Imo State.
                </p>
                <button
                    type="button"
                    class="btn btn-success btn-sm mr-5"
                    data-toggle="modal"
                    data-target="#exampleModal">
                    Know More
                </button>
                <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#exampleModal1">
                    Portfolio
                </button>

                {/* ========MODAL FOR KNOW MORE =============== */}
                <div
                    class="modal fade "
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <h3 style={{fontWeight: 'bolder', color: '#008037'}}>Presonal Info</h3>
                                <hr />
                                <p style={{color: 'black', fontWeight: 'bold', fontSize: '0.9em'}}>Nationality</p>
                                <p style={{color: 'black', fontWeight: 'bold', opacity: '0.6', fontSize: '0.7em'}}>
                                    Nigeria
                                </p>

                                <p style={{color: 'black', fontWeight: 'bold', fontSize: '0.9em'}}>State Of Origin</p>
                                <p style={{color: 'black', fontWeight: 'bold', opacity: '0.6', fontSize: '0.7em'}}>
                                    Imo state
                                </p>

                                <p style={{color: 'black', fontWeight: 'bold', fontSize: '0.9em'}}>Address</p>
                                <p style={{color: 'black', fontWeight: 'bold', opacity: '0.6', fontSize: '0.7em'}}>
                                    Port Harcourt, River State, Nigeria.
                                </p>

                                <p style={{color: 'black', fontWeight: 'bold', fontSize: '0.9em'}}>Phone</p>
                                <p style={{color: 'black', fontWeight: 'bold', opacity: '0.6', fontSize: '0.7em'}}>
                                    +234-9033275449.
                                </p>

                                <p style={{color: 'black', fontWeight: 'bold', fontSize: '0.9em'}}>E-Mail</p>
                                <p style={{color: 'black', fontWeight: 'bold', opacity: '0.6', fontSize: '0.7em'}}>
                                    ibeandyson123@gmail.com
                                </p>

                                <h3 style={{fontWeight: 'bolder', color: '#008037'}}>Education</h3>
                                <hr />
                                <p style={{color: 'black', fontWeight: 'bold', fontSize: '0.9em'}}>WAEC</p>
                                <p style={{color: 'black', fontWeight: 'bold', opacity: '0.6', fontSize: '0.7em'}}>
                                    Vivian International Secondery School Port Hartcourt Rivers State.
                                </p>

                                <p style={{color: 'black', fontWeight: 'bold', fontSize: '0.9em'}}>National Diploma</p>
                                <p style={{color: 'black', fontWeight: 'bold', opacity: '0.6', fontSize: '0.7em'}}>
                                    Federal Polytechnic Nekede Owerri Imo State.
                                </p>

                                <h3 style={{fontWeight: 'bolder', color: '#008037'}}>Experience</h3>
                                <hr />
                                <p style={{color: 'black', fontWeight: 'bold', fontSize: '0.9em'}}>Freelancing</p>
                                <p style={{color: 'black', fontWeight: 'bold', opacity: '0.6', fontSize: '0.7em'}}>
                                    So far so good i have been Freelancing for over 3years now. people contact me for
                                    jobs and i always get the job done as expected.
                                </p>

                                <p style={{color: 'black', fontWeight: 'bold', fontSize: '0.9em'}}>
                                    Lead FrontEnd Developer
                                </p>
                                <p style={{color: 'black', fontWeight: 'bold', opacity: '0.6', fontSize: '0.7em'}}>
                                    Valid Profits
                                </p>
                                <p style={{color: 'black', fontWeight: 'bold', opacity: '0.6', fontSize: '0.7em'}}>
                                    Contract Since 15TH January 2020 - Present
                                </p>

                                <p style={{color: 'black', fontWeight: 'bold', fontSize: '0.9em'}}>
                                    FrontEnd Software Developer
                                </p>
                                <p style={{color: 'black', fontWeight: 'bold', opacity: '0.6', fontSize: '0.7em'}}>
                                    Bellefu Agro-digital
                                </p>
                                <p style={{color: 'black', fontWeight: 'bold', opacity: '0.6', fontSize: '0.7em'}}>
                                    Contract Since 28th June 2020 - Present
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =========MODAL FOR WORKS ============ */}
                <div
                    class="modal fade "
                    id="exampleModal1"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered ">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5>Works Done</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <Paper square elevation={0} className={classes.header}>
                                    <Typography>{tutorialSteps[activeStep].label}</Typography>
                                </Paper>
                                <img
                                    className={classes.img}
                                    src={tutorialSteps[activeStep].imgPath}
                                    alt={tutorialSteps[activeStep].label}
                                />
                                <MobileStepper
                                    steps={maxSteps}
                                    position="static"
                                    variant="text"
                                    activeStep={activeStep}
                                    nextButton={
                                        <Button
                                            size="small"
                                            onClick={handleNext}
                                            style={{backgroundColor: '#008037', color: 'white'}}
                                            disabled={activeStep === maxSteps - 1}>
                                            Next
                                            {theme.direction === 'rtl' ? (
                                                <MdKeyboardArrowLeft />
                                            ) : (
                                                <MdKeyboardArrowRight />
                                            )}
                                        </Button>
                                    }
                                    backButton={
                                        <Button
                                            size="small"
                                            style={{backgroundColor: '#008037', color: 'white'}}
                                            onClick={handleBack}
                                            disabled={activeStep === 0}>
                                            {theme.direction === 'rtl' ? (
                                                <MdKeyboardArrowRight />
                                            ) : (
                                                <MdKeyboardArrowLeft />
                                            )}
                                            Back
                                        </Button>
                                    }
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
