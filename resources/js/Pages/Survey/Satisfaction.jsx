import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2';
import {Button, useMediaQuery, Box, Typography, Fade, CircularProgress, TextField, Slider, Paper, SliderThumb, Tooltip} from '@mui/material';
import {} from '@mui/icons-material';
import { Inertia } from '@inertiajs/inertia';
import PropTypes from 'prop-types';

import {media} from '../../assets/images';
import {mediaSurvey} from '../../assets/images/survey';
import '../../styles/satisfactionSurvey.module.css';

export function useIsMounted() {
    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
      return () => void (isMountedRef.current = false);
    }, []);

    return isMounted;
}

function customPageThumb(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <p 
        className="page-label">
          {props.ownerState.componentsProps.page.page}
        </p>
      </SliderThumb>
    );
}
  
customPageThumb.propTypes = {
    children: PropTypes.node,
};

function ValueLabelComponent(props) {
    const { children, value } = props;
  
    return (
      <Tooltip enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
}
  
ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

export default function CustomerSurvey(props) {
    const isMounted = useIsMounted();

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const [loaded, setLoaded] = React.useState(false);
    const [page, setPage] = React.useState(true);
    const [progress, setProgress] = React.useState(null);
    const [question, setQuestion] = React.useState(null);
    const [owner, setOwner] = React.useState(null);
    const [rides, setRides] = React.useState(null);
    const [facilities, setFacilities] = React.useState(null);
    const [hospitality, setHospitality] = React.useState(null);
    const [services, setServices] = React.useState(null);
    const [equivalence, setEquivalence] = React.useState(null);
    const [notes, setNotes] = React.useState(null);
    const [isNotesFormValid, setIsNotesFormValid] = React.useState(true);

    return(
        <>
            <Head title='Satisfaction Survey'/>
            <Fade
            in={isMounted}
            timeout={1000}
            style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>
                {
                    desktop
                    ?
                        <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        style={{
                            overflow: 'hidden',
                        }}>
                        {loaded === true ? null : 
                            <Box
                            sx={{
                                position: 'absolute',
                                height: '100vh',
                                width: '100vw',
                                display: 'flex',
                                margin: 'auto',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: '1000'
                            }}>
                                <CircularProgress style={{'color': 'primary.main'}}/>
                            </Box>
                        }
                        <Box
                            sx={{
                                width: '100%',
                                height: '35vh',
                                minHeight: '250px',
                                backgroundColor: 'secondary.main',
                                borderBottomRightRadius: '25%',
                                borderBottomLeftRadius: '25%',
                                boxShadow: 5,
                                display: 'flex',
                                flexDirection: 'column',
                                flexWrap: 'wrap'
                            }}>
                                <Box
                                sx={{
                                    marginTop: '10px',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Fade in={loaded}>
                                        <img
                                        style={loaded ? {} : {display: 'none'}}
                                        src={mediaSurvey[1]}
                                        height="100px" alt="loka"
                                        onLoad={() => setLoaded(true)}/>
                                    </Fade>
                                </Box>
                                <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Fade in={loaded}>
                                        <Slider
                                            sx={{
                                                maxWidth: '500px',
                                                height: '15px',
                                                'span.MuiSlider-rail': {color: 'primary.lightest'},
                                                'span.MuiSlider-track': {color: 'primary.main'},
                                                'span.MuiSlider-thumb': {width: '30px', height: '30px', color: 'primary.dark', overflow: 'hidden'},
                                                '& span.MuiSlider-thumb > p.page-label': {color: 'secondary.lightest', fontSize: '18px', fontWeight: 600},
                                            }}
                                            components={{
                                                Thumb: customPageThumb,
                                                ValueLabel: ValueLabelComponent,
                                            }}
                                            componentsProps={{
                                                page: {page},
                                                progress: {progress}
                                            }}
                                            value={progress}
                                        />
                                    </Fade>
                                </Box>
                                <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Fade in={loaded}>
                                        <h2 
                                        className="title"
                                        style={{
                                            textAlign: 'center', 
                                            color: '#444', 
                                            margin: 0, 
                                            padding: 0, 
                                            maxWidth: '400px', 
                                        }}>Silahkan Berikan Penilaian Atas Pengalaman Anda di Saloka</h2>
                                    </Fade>                        
                                </Box>
                                {/*<Box
                                sx={{
                                    marginTop: '10px',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Fade in={loaded}>
                                        <p className="subtitle" style={{textAlign: 'center', color: '#444', margin: 0, padding: 0, maxWidth: '400px'}}>masukan anda sangat penting bagi kami</p>
                                    </Fade>
                                </Box> */}
                            </Box>
            
                            <Box
                            sx={{
                                width: '100%',
                                height: '50px',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Fade in={loaded}>
                                    <p className="question" style={{fontWeight: 700, textAlign: 'center', color: '#444'}}>{question}</p>
                                </Fade>
                            </Box>
                            {page === 6
                                ? <Fade in={loaded && page === 6}>
                                <Paper
                                elevation={2}
                                sx={{
                                    marginBottom: '10px',
                                    width: '80%',
                                    height: '100%',
                                    maxWidth: '400px',
                                    maxHeight: '500px',
                                    padding: '20px',
                                    borderRadius: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#eee',
                                }}>
                                    <TextField
                                    error={!isNotesFormValid}
                                    helperText={!isNotesFormValid && "Review field required"}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        ...(isNotesFormValid ? {'&& fieldset.MuiOutlinedInput-notchedOutline': { borderColor: 'primary.light' }} : {'&& fieldset.MuiOutlinedInput-notchedOutline': { borderColor: 'red.lightest' }} ),
                                        ...(isNotesFormValid ? {'&& .MuiFormLabel-root': { color: 'primary.light' }} : {'&& .MuiFormLabel-root': { color: 'red.lightest' }} ),
                                        ...(isNotesFormValid ? {'p.Mui-error': { color: 'red.lightest' }} : {'p.Mui-error': { color: 'red.lightest' }} ),
                                        'textarea.MuiInputBase-input': {color: '#444'},
                                        'textarea.MuiInputBase-input::placeholder': {color: '#444'},
                                    }}
                                    autoComplete='off'
                                    value={notes}
                                    name="notes"
                                    onChange={this.onChange}
                                    multiline
                                    rows={10}
                                    label="Komentar"
                                    placeholder="Silahkan tulis komentar di kolom ini..."
                                    color="primary"
                                    focused/>
            
                                    <Button
                                    sx={{
                                        mt: 1,
                                        borderRadius: 10,
                                        width: '50%',
                                        height: '50px',
                                        alignItems: 'center',
                                        background: 'linear-gradient(to right bottom, #30E8BF, #FF8235)'
                                    }}
                                    variant="standard" 
                                    onClick={this.onSubmit}
                                    >
                                        <Typography
                                        sx={{
                                            color: 'white',
                                            letterSpacing: 1,
                                            fontSize: 16,
                                            fontWeight: '400',
                                        }}>
                                            selanjutnya
                                        </Typography>
                                    </Button>
                                </Paper>
                                </Fade>
                                : <Fade in={loaded && page !== 6}>
                                <Paper
                                elevation={2}
                                sx={{
                                    marginBottom: '10px',
                                    width: '90%',
                                    maxWidth: '400px',
                                    paddingTop: '20px',
                                    paddingBottom: '20px',
                                    borderRadius: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#eee',
                                }}>
                                    <Button
                                    disableElevation
                                    sx={{
                                        marginTop: '7px',
                                        marginBottom: '7px',
                                        width: '60%',
                                        height: '50px',
                                        borderRadius: 3,
                                    }}
                                    variant="outlined"
                                    onClick={event => this.onReview(event, 5)}>
                                        <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <h1
                                            style={{
                                                width: '30%',
                                                display: 'flex',
                                                justifyContent: 'flex-start'
                                            }}>😄</h1>
                                            <p
                                            style={{
                                                width: '70%',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                fontSize: '16px',
                                                fontWeight: 700,
                                                textAlign: 'left'
                                            }}>Sangat Puas</p>
                                        </Box>
                                    </Button>
                                    <Button
                                    disableElevation
                                    sx={{
                                        marginTop: '7px',
                                        marginBottom: '7px',
                                        width: '60%',
                                        height: '50px',
                                        borderRadius: 3,
                                    }}
                                    variant="outlined"
                                    onClick={event => this.onReview(event, 4)}>
                                        <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <h1
                                            style={{
                                                width: '30%',
                                                display: 'flex',
                                                justifyContent: 'flex-start'
                                            }}>😃</h1>
                                            <p
                                            style={{
                                                width: '70%',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                fontSize: '16px',
                                                fontWeight: 700,
                                                textAlign: 'left'
                                            }}>Puas</p>
                                        </Box>
                                    </Button>
                                    <Button
                                    disableElevation
                                    sx={{
                                        marginTop: '7px',
                                        marginBottom: '7px',
                                        width: '60%',
                                        height: '50px',
                                        borderRadius: 3,
                                    }}
                                    variant="outlined"
                                    onClick={event => this.onReview(event, 3)}>
                                        <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <h1
                                            style={{
                                                width: '30%',
                                                display: 'flex',
                                                justifyContent: 'flex-start'
                                            }}>🙂</h1>
                                            <p
                                            style={{
                                                width: '70%',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                fontSize: '16px',
                                                fontWeight: 700,
                                                textAlign: 'left'
                                            }}>Cukup</p>
                                        </Box>
                                    </Button>
                                    <Button
                                    disableElevation
                                    sx={{
                                        marginTop: '7px',
                                        marginBottom: '7px',
                                        width: '60%',
                                        height: '50px',
                                        borderRadius: 3,
                                    }}
                                    variant="outlined"
                                    onClick={event => this.onReview(event, 2)}>
                                        <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <h1
                                            style={{
                                                width: '30%',
                                                display: 'flex',
                                                justifyContent: 'flex-start'
                                            }}>😔</h1>
                                            <p
                                            style={{
                                                width: '70%',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                fontSize: '16px',
                                                fontWeight: 700,
                                                textAlign: 'left'
                                            }}>Kurang</p>
                                        </Box>
                                    </Button>
                                    <Button
                                    disableElevation
                                    sx={{
                                        marginTop: '7px',
                                        marginBottom: '7px',
                                        width: '60%',
                                        height: '50px',
                                        borderRadius: 3,
                                    }}
                                    variant="outlined"
                                    onClick={event => this.onReview(event, 1)}>
                                        <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <h1
                                            style={{
                                                width: '30%',
                                                display: 'flex',
                                                justifyContent: 'flex-start'
                                            }}>😒</h1>
                                            <p
                                            style={{
                                                width: '70%',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                fontSize: '16px',
                                                fontWeight: 700,
                                                textAlign: 'left'
                                            }}>Sangat Kurang</p>
                                        </Box>
                                    </Button>
                                </Paper>
                                </Fade>
                            }
                            
                        </Grid>
                    :
                        <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        style={{
                            overflow: 'hidden',
                        }}>
                        {loaded === true ? null : 
                            <Box
                            sx={{
                                position: 'absolute',
                                height: '100vh',
                                width: '100vw',
                                display: 'flex',
                                margin: 'auto',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: '1000'
                            }}>
                                <CircularProgress style={{'color': 'primary.main'}}/>
                            </Box>
                        }
                        <Box
                            sx={{
                                width: '100%',
                                height: '35vh',
                                minHeight: '250px',
                                backgroundColor: 'secondary.main',
                                borderBottomRightRadius: '25%',
                                borderBottomLeftRadius: '25%',
                                boxShadow: 5,
                                display: 'flex',
                                flexDirection: 'column',
                                flexWrap: 'wrap'
                            }}>
                                <Box
                                sx={{
                                    marginTop: '10px',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Fade in={loaded}>
                                        <img
                                        style={loaded ? {} : {display: 'none'}}
                                        src={mediaSurvey[1]}
                                        height="100px" alt="loka"
                                        onLoad={() => setLoaded(true)}/>
                                    </Fade>
                                </Box>
                                <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Fade in={loaded}>
                                        <Slider
                                            sx={{
                                                maxWidth: '500px',
                                                height: '15px',
                                                'span.MuiSlider-rail': {color: 'primary.lightest'},
                                                'span.MuiSlider-track': {color: 'primary.main'},
                                                'span.MuiSlider-thumb': {width: '30px', height: '30px', color: 'primary.dark', overflow: 'hidden'},
                                                '& span.MuiSlider-thumb > p.page-label': {color: 'secondary.lightest', fontSize: '18px', fontWeight: 600},
                                            }}
                                            components={{
                                                Thumb: customPageThumb,
                                                ValueLabel: ValueLabelComponent,
                                            }}
                                            componentsProps={{
                                                page: {page},
                                                progress: {progress}
                                            }}
                                            value={progress}
                                        />
                                    </Fade>
                                </Box>
                                <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Fade in={loaded}>
                                        <h2 
                                        className="title"
                                        style={{
                                            textAlign: 'center', 
                                            color: '#444', 
                                            margin: 0, 
                                            padding: 0, 
                                            maxWidth: '400px', 
                                        }}>Silahkan Berikan Penilaian Atas Pengalaman Anda di Saloka</h2>
                                    </Fade>                        
                                </Box>
                                {/*<Box
                                sx={{
                                    marginTop: '10px',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Fade in={loaded}>
                                        <p className="subtitle" style={{textAlign: 'center', color: '#444', margin: 0, padding: 0, maxWidth: '400px'}}>masukan anda sangat penting bagi kami</p>
                                    </Fade>
                                </Box> */}
                            </Box>
            
                            <Box
                            sx={{
                                width: '100%',
                                height: '50px',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Fade in={loaded}>
                                    <p className="question" style={{fontWeight: 700, textAlign: 'center', color: '#444'}}>{question}</p>
                                </Fade>
                            </Box>
                            {page === 6
                                ? <Fade in={loaded && page === 6}>
                                <Paper
                                elevation={2}
                                sx={{
                                    marginBottom: '10px',
                                    width: '80%',
                                    height: '100%',
                                    maxWidth: '400px',
                                    maxHeight: '500px',
                                    padding: '20px',
                                    borderRadius: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#eee',
                                }}>
                                    <TextField
                                    error={!isNotesFormValid}
                                    helperText={!isNotesFormValid && "Review field required"}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        ...(isNotesFormValid ? {'&& fieldset.MuiOutlinedInput-notchedOutline': { borderColor: 'primary.light' }} : {'&& fieldset.MuiOutlinedInput-notchedOutline': { borderColor: 'red.lightest' }} ),
                                        ...(isNotesFormValid ? {'&& .MuiFormLabel-root': { color: 'primary.light' }} : {'&& .MuiFormLabel-root': { color: 'red.lightest' }} ),
                                        ...(isNotesFormValid ? {'p.Mui-error': { color: 'red.lightest' }} : {'p.Mui-error': { color: 'red.lightest' }} ),
                                        'textarea.MuiInputBase-input': {color: '#444'},
                                        'textarea.MuiInputBase-input::placeholder': {color: '#444'},
                                    }}
                                    autoComplete='off'
                                    value={notes}
                                    name="notes"
                                    onChange={this.onChange}
                                    multiline
                                    rows={10}
                                    label="Komentar"
                                    placeholder="Silahkan tulis komentar di kolom ini..."
                                    color="primary"
                                    focused/>
            
                                    <Button
                                    sx={{
                                        mt: 1,
                                        borderRadius: 10,
                                        width: '50%',
                                        height: '50px',
                                        alignItems: 'center',
                                        background: 'linear-gradient(to right bottom, #30E8BF, #FF8235)'
                                    }}
                                    variant="standard" 
                                    onClick={this.onSubmit}
                                    >
                                        <Typography
                                        sx={{
                                            color: 'white',
                                            letterSpacing: 1,
                                            fontSize: 16,
                                            fontWeight: '400',
                                        }}>
                                            selanjutnya
                                        </Typography>
                                    </Button>
                                </Paper>
                                </Fade>
                                : <Fade in={loaded && page !== 6}>
                                <Paper
                                elevation={2}
                                sx={{
                                    marginBottom: '10px',
                                    width: '90%',
                                    maxWidth: '400px',
                                    paddingTop: '20px',
                                    paddingBottom: '20px',
                                    borderRadius: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#eee',
                                }}>
                                    <Button
                                    disableElevation
                                    sx={{
                                        marginTop: '7px',
                                        marginBottom: '7px',
                                        width: '60%',
                                        height: '50px',
                                        borderRadius: 3,
                                    }}
                                    variant="outlined"
                                    onClick={event => this.onReview(event, 5)}>
                                        <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <h1
                                            style={{
                                                width: '30%',
                                                display: 'flex',
                                                justifyContent: 'flex-start'
                                            }}>😄</h1>
                                            <p
                                            style={{
                                                width: '70%',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                fontSize: '16px',
                                                fontWeight: 700,
                                                textAlign: 'left'
                                            }}>Sangat Puas</p>
                                        </Box>
                                    </Button>
                                    <Button
                                    disableElevation
                                    sx={{
                                        marginTop: '7px',
                                        marginBottom: '7px',
                                        width: '60%',
                                        height: '50px',
                                        borderRadius: 3,
                                    }}
                                    variant="outlined"
                                    onClick={event => this.onReview(event, 4)}>
                                        <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <h1
                                            style={{
                                                width: '30%',
                                                display: 'flex',
                                                justifyContent: 'flex-start'
                                            }}>😃</h1>
                                            <p
                                            style={{
                                                width: '70%',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                fontSize: '16px',
                                                fontWeight: 700,
                                                textAlign: 'left'
                                            }}>Puas</p>
                                        </Box>
                                    </Button>
                                    <Button
                                    disableElevation
                                    sx={{
                                        marginTop: '7px',
                                        marginBottom: '7px',
                                        width: '60%',
                                        height: '50px',
                                        borderRadius: 3,
                                    }}
                                    variant="outlined"
                                    onClick={event => this.onReview(event, 3)}>
                                        <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <h1
                                            style={{
                                                width: '30%',
                                                display: 'flex',
                                                justifyContent: 'flex-start'
                                            }}>🙂</h1>
                                            <p
                                            style={{
                                                width: '70%',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                fontSize: '16px',
                                                fontWeight: 700,
                                                textAlign: 'left'
                                            }}>Cukup</p>
                                        </Box>
                                    </Button>
                                    <Button
                                    disableElevation
                                    sx={{
                                        marginTop: '7px',
                                        marginBottom: '7px',
                                        width: '60%',
                                        height: '50px',
                                        borderRadius: 3,
                                    }}
                                    variant="outlined"
                                    onClick={event => this.onReview(event, 2)}>
                                        <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <h1
                                            style={{
                                                width: '30%',
                                                display: 'flex',
                                                justifyContent: 'flex-start'
                                            }}>😔</h1>
                                            <p
                                            style={{
                                                width: '70%',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                fontSize: '16px',
                                                fontWeight: 700,
                                                textAlign: 'left'
                                            }}>Kurang</p>
                                        </Box>
                                    </Button>
                                    <Button
                                    disableElevation
                                    sx={{
                                        marginTop: '7px',
                                        marginBottom: '7px',
                                        width: '60%',
                                        height: '50px',
                                        borderRadius: 3,
                                    }}
                                    variant="outlined"
                                    onClick={event => this.onReview(event, 1)}>
                                        <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <h1
                                            style={{
                                                width: '30%',
                                                display: 'flex',
                                                justifyContent: 'flex-start'
                                            }}>😒</h1>
                                            <p
                                            style={{
                                                width: '70%',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                fontSize: '16px',
                                                fontWeight: 700,
                                                textAlign: 'left'
                                            }}>Sangat Kurang</p>
                                        </Box>
                                    </Button>
                                </Paper>
                                </Fade>
                            }
                            
                        </Grid>
                }
            </Fade>
        </>
    );
}