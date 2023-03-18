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
import customStyle from '../../styles/visitSurvey.module.css';

import { EncryptStorage } from 'encrypt-storage';

export const encryptStorage = new EncryptStorage('@encryptedByZam', {
    storageType: 'sessionStorage',
});

export function useIsMounted() {
    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
      return () => void (isMountedRef.current = false);
    }, []);

    return isMounted;
}

export default function CustomerSurvey(props) {
    const isMounted = useIsMounted();

    const redirect = (route) => {
        Inertia.visit(route);
    }

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    React.useEffect(() => {
        const localPage = encryptStorage.getItem('page-visit');
        if (localPage) {
            setPage(localPage);
        } else {
            //
        }
        const localProgress = encryptStorage.getItem('progress-visit');
        if (localProgress) {
            setProgress(localProgress);
        } else {
            //
        }
        const localQuestion = encryptStorage.getItem('question-visit');
        if (localQuestion) {
            setQuestion(localQuestion);
        } else {
            //
        }
        const localOption = encryptStorage.getItem('option-visit');
        if (localOption) {
            setOption(localOption);
        } else {
            //
        }
        const localOwner = encryptStorage.getItem('owner');
        if (localOwner) {
            setOwner(localOwner);
        } else {
            //
        }
    }, []);

    const [loaded, setLoaded] = React.useState(false);
    const [page, setPage] = React.useState(null);
    const [progress, setProgress] = React.useState(null);
    const [question, setQuestion] = React.useState(null);
    const [option, setOption] = React.useState([]);
    const [owner, setOwner] = React.useState(null);
    const [frequency, setFrequency] = React.useState(null);
    const [referal, setReferal] = React.useState(null);
    const [isRecommended, setIsRecommended] = React.useState(null);
    const [notes, setNotes] = React.useState(null);
    const [isNotesFormValid, setIsNotesFormValid] = React.useState(true);

    const onReview = (event, value) => {
        //
        switch (page) {
            case 1:
                setFrequency(value);
                setPage(page+1);
                setProgress(2);
                setQuestion("Dari manakah Anda mendapatkan informasi mengenai saloka?");
                setOption(
                    [
                        {
                            value: 1,
                            text: "media sosial"
                        },
                        {
                            value: 2,
                            text: "teman"
                        },
                        {
                            value: 3,
                            text: "saudara"
                        },
                    ],
                );
                break;
            case 2:
                setReferal(value);
                setPage(page+1);
                setProgress(3);
                setQuestion("Secara keseluruhan apakah anda merekomendasikan saloka?(teman, saudara, kerabat, dll)");
                setOption(
                    [
                        {
                            value: 1,
                            text: "ya"
                        },
                        {
                            value: 2,
                            text: "mungkin"
                        },
                        {
                            value: 3,
                            text: "tidak"
                        },
                    ],
                );
                break;
            case 3:
                if (value === 3) {
                    setIsRecommended(value);
                    setPage(page+1);
                    setProgress(4);
                    setQuestion("Alasan Kenapa Anda Tidak Merekomendasikan :");
                    setOption([]);
                }else{
                    setIsRecommended(value);
                    setOption([]);

                    axios.post('/api/store-visit', {
                        'owner': owner,
                        'frequency': frequency,
                        'referal': referal,
                        'isRecommended': value,
                        'notes': "kosong"
                    }).then((res) => {
                        encryptStorage.setItem('owner-name', res.data.customer);
                        redirect('/survey/finished');
                    }).catch((error) => {
                        //catch the error
                        console.log(error);
                    });

                }
                break;

            default:
                break;
        }
    }

    const handleNoteChange = (event) => {
        //
        // console.log(event);
        if (event.target.name === "notes") {
            if (!event.target.value) {
                setIsNotesFormValid(false);
            } else {
                setIsNotesFormValid(true);
            }
            setNotes(event.target.value);
        }
    }

    const onSubmit = () => {
        if (notes) {
            axios.post('/api/store-visit', {
                'owner': owner,
                'frequency': frequency,
                'referal': referal,
                'isRecommended': isRecommended,
                'notes': notes
            }).then((res) => {
                encryptStorage.setItem('owner-name', res.data.customer);
                redirect('/survey/finished');
            }).catch((error) => {
                //catch the error
                console.log(error);
            });
        } else {
            if (!notes) {
                setIsNotesFormValid(false);
            }
        }
    }

    var circleStyle = {
        marginLeft: '10px',
        marginRight: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: "50%",
    };

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
                                <CircularProgress style={{'color': 'secondary.main'}}/>
                            </Box>
                        }
                        <Box
                        sx={{
                            width: '100%',
                            height: '35vh',
                            minHeight: '250px',
                            backgroundColor: 'primary.main',
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
                                    style={loaded ? {
                                        objectFit: 'contain',
                                        objectPosition: 'top',
                                        width: '100%',
                                        height: '100px',
                                    } : {display: 'none'}}
                                    src={mediaSurvey[2]}
                                    height="100px" alt="loka"
                                    onLoad={() => setLoaded(true)}/>
                                </Fade>
                            </Box>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                marginY: '10px',
                                justifyContent: 'center'
                            }}>
                                <Fade in={loaded}>
                                    <h1 className="title" style={{
                                        color: 'white',
                                        fontSize: '42px'
                                    }}>Customer Survey</h1>
                                </Fade>
                            </Box>
                            <Fade in={loaded}>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: '10px',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                    <Box
                                    className={`${customStyle.circlePagination} ${page===1?customStyle.activePage:null}`}
                                    style={circleStyle}>1</Box>
                                    <Box
                                    className={`${customStyle.circlePagination} ${page===2?customStyle.activePage:null}`}
                                    style={circleStyle}>2</Box>
                                    <Box
                                    className={`${customStyle.circlePagination} ${page===3?customStyle.activePage:null}`}
                                    style={circleStyle}>3</Box>
                            </Box>
                            </Fade>
                        </Box>
                        <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}>
                            <Box
                            sx={{
                                marginTop: '10px',
                                width: '100%',
                                height: '50px',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Fade in={loaded}>
                                    <p
                                    className="question"
                                    style={{
                                        padding: 0,
                                        margin: 0,
                                        textAlign: 'center',
                                        fontWeight: 700,
                                        color: '#444',
                                        fontSize: '18px',
                                    }}>{question}</p>
                                </Fade>
                            </Box>

                            {page === 4
                                ?
                                <Fade in={loaded && page === 4}>
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
                                    onChange={event => handleNoteChange(event)}
                                    multiline
                                    rows={8}
                                    label="Alasan"
                                    placeholder="Silahkan tulis alasan anda tidak merekomendasikan di kolom ini..."
                                    color="primary"
                                    focused />

                                    <Button
                                    sx={{
                                        mt: 1,
                                        borderRadius: 10,
                                        width: '80%',
                                        height: '50px',
                                        alignItems: 'center',
                                        background: 'linear-gradient(to right bottom, #30E8BF, #FF8235)'
                                    }}
                                    variant="standard"
                                    onClick={onSubmit}
                                    >
                                        <Typography
                                        sx={{
                                            color: 'white',
                                            letterSpacing: 1,
                                            fontSize: 16,
                                            fontWeight: '400',
                                        }}>
                                            selesai
                                        </Typography>
                                    </Button>
                                </Paper>
                                </Fade>
                                : <Fade in={loaded && page !== 4}>
                                <Box
                                sx={{
                                    marginTop: '10px',
                                    marginBottom: '10px',
                                    width: '80%',
                                    height: '100%',
                                    maxWidth: '400px',
                                    maxHeight: '500px',
                                    padding: '20px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#eee',
                                }}>
                                    {option.map((option, index) => (
                                        <Button
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                marginTop: '10px',
                                                marginBottom: '10px',
                                                borderRadius: 10,
                                                width: '80%',
                                                height: '50px',
                                                alignItems: 'center',
                                            }}
                                            variant="outlined"
                                            onClick={event => onReview(event, option.value)}
                                            >
                                                <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'flex-start',
                                                    width: '35%'
                                                }}>
                                                    <div
                                                    style={{
                                                        width: '30px',
                                                        height: '30px',
                                                        marginLeft: '5%',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderRadius: "50%",
                                                        border: '1px solid rgba(115, 193, 169, 1)',
                                                    }}>
                                                        <div
                                                        style={{
                                                            width: '10px',
                                                            height: '10px',
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            borderRadius: "50%",
                                                            backgroundColor: "#73c1a9",
                                                        }}></div>
                                                    </div>
                                                </Box>
                                                <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'flex-start',
                                                    width: '65%'
                                                }}>
                                                    <Typography
                                                    sx={{
                                                        color: '#444',
                                                        letterSpacing: 1,
                                                        fontSize: 16,
                                                        fontWeight: '600',
                                                    }}>
                                                        {option.text}
                                                    </Typography>
                                                </Box>
                                        </Button>
                                    ))}
                                </Box>
                                </Fade>
                            }
                        </Box>
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
                                <CircularProgress style={{'color': 'secondary.main'}}/>
                            </Box>
                        }
                        <Box
                        sx={{
                            width: '100%',
                            height: '35vh',
                            minHeight: '250px',
                            backgroundColor: 'primary.main',
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
                                    style={loaded ? {
                                        objectFit: 'contain',
                                        objectPosition: 'top',
                                        width: '100%',
                                        height: '100px',
                                    } : {display: 'none'}}
                                    src={mediaSurvey[2]}
                                    height="100px" alt="loka"
                                    onLoad={() => setLoaded(true)}/>
                                </Fade>
                            </Box>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                marginY: '5px',
                                justifyContent: 'center'
                            }}>
                                <Fade in={loaded}>
                                    <h1 className="title" style={{
                                        color: 'white',
                                        fontSize: '28px'
                                    }}>Customer Survey</h1>
                                </Fade>
                            </Box>
                            <Fade in={loaded}>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: '5px',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                    <Box
                                    className={`${customStyle.circlePagination} ${page===1?customStyle.activePage:null}`}
                                    style={circleStyle}>1</Box>
                                    <Box
                                    className={`${customStyle.circlePagination} ${page===2?customStyle.activePage:null}`}
                                    style={circleStyle}>2</Box>
                                    <Box
                                    className={`${customStyle.circlePagination} ${page===3?customStyle.activePage:null}`}
                                    style={circleStyle}>3</Box>
                            </Box>
                            </Fade>
                        </Box>
                        <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}>
                            <Box
                            sx={{
                                marginTop: '10px',
                                width: '100%',
                                height: '50px',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Fade in={loaded}>
                                    <p
                                    className="question"
                                    style={{
                                        padding: 0,
                                        margin: 0,
                                        textAlign: 'center',
                                        fontWeight: 700,
                                        color: '#444',
                                        fontSize: '18px',
                                    }}>{question}</p>
                                </Fade>
                            </Box>

                            {page === 4
                                ?
                                <Fade in={loaded && page === 4}>
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
                                    onChange={event => handleNoteChange(event)}
                                    multiline
                                    rows={8}
                                    label="Alasan"
                                    placeholder="Silahkan tulis alasan anda tidak merekomendasikan di kolom ini..."
                                    color="primary"
                                    focused />

                                    <Button
                                    sx={{
                                        mt: 1,
                                        borderRadius: 10,
                                        width: '80%',
                                        height: '50px',
                                        alignItems: 'center',
                                        background: 'linear-gradient(to right bottom, #30E8BF, #FF8235)'
                                    }}
                                    variant="standard"
                                    onClick={onSubmit}
                                    >
                                        <Typography
                                        sx={{
                                            color: 'white',
                                            letterSpacing: 1,
                                            fontSize: 16,
                                            fontWeight: '400',
                                        }}>
                                            selesai
                                        </Typography>
                                    </Button>
                                </Paper>
                                </Fade>
                                : <Fade in={loaded && page !== 4}>
                                <Box
                                sx={{
                                    marginTop: '10px',
                                    marginBottom: '10px',
                                    width: '80%',
                                    height: '100%',
                                    maxWidth: '400px',
                                    maxHeight: '500px',
                                    padding: '20px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#eee',
                                }}>
                                    {option.map((option, index) => (
                                        <Button
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                marginTop: '10px',
                                                marginBottom: '10px',
                                                borderRadius: 10,
                                                width: '80%',
                                                height: '50px',
                                                alignItems: 'center',
                                            }}
                                            variant="outlined"
                                            onClick={event => onReview(event, option.value)}
                                            >
                                                <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'flex-start',
                                                    width: '35%'
                                                }}>
                                                    <div
                                                    style={{
                                                        width: '30px',
                                                        height: '30px',
                                                        marginLeft: '5%',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderRadius: "50%",
                                                        border: '1px solid rgba(115, 193, 169, 1)',
                                                    }}>
                                                        <div
                                                        style={{
                                                            width: '10px',
                                                            height: '10px',
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            borderRadius: "50%",
                                                            backgroundColor: "#73c1a9",
                                                        }}></div>
                                                    </div>
                                                </Box>
                                                <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'flex-start',
                                                    width: '65%'
                                                }}>
                                                    <Typography
                                                    sx={{
                                                        color: '#444',
                                                        letterSpacing: 1,
                                                        fontSize: 16,
                                                        fontWeight: '600',
                                                    }}>
                                                        {option.text}
                                                    </Typography>
                                                </Box>
                                        </Button>
                                    ))}
                                </Box>
                                </Fade>
                            }
                        </Box>
                    </Grid>
                }
            </Fade>
        </>
    );
}
