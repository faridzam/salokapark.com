import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2';
import {Button, useMediaQuery, Box, Typography, Fade, CircularProgress, TextField, FormControl, InputAdornment} from '@mui/material';
import {Person, PhoneIphone, LocationOn} from '@mui/icons-material';
import { Inertia } from '@inertiajs/inertia';

import {media} from '../../assets/images';
import {mediaSurvey} from '../../assets/images/survey';

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

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const [loaded, setLoaded] = React.useState(false);
    const [isNameFormValid, setIsNameFormValid] = React.useState(true);
    const [name, setName] = React.useState("");
    const [isPhoneFormValid, setIsPhoneFormValid] = React.useState(true);
    const [phone, setPhone] = React.useState("");
    const [isAddressFormValid, setIsAddressFormValid] = React.useState(true);
    const [address, setAddress] = React.useState("");

    const onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        if (e.target.name === "name") {
            if (!e.target.value) {
                setIsNameFormValid(false);
            } else {
                setIsNameFormValid(true);
            }
            var text = e.target.value.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
            setName(e.target.value);
        } else if (e.target.name === "phone") {
            if (!e.target.value) {
                setIsPhoneFormValid(false);
            } else {
                setIsPhoneFormValid(true);
            }
            setPhone(e.target.value);
        } else if (e.target.name === "address") {
            if (!e.target.value) {
                setIsAddressFormValid(false);
            } else {
                setIsAddressFormValid(true);
            }
            setAddress(e.target.value);
        }
        console.log(e);
    }

    const onSubmit = (e) => {
        if (name && phone && address) {
            // axios.post('http://'+process.env.REACT_APP_SERVER+':'+process.env.REACT_APP_SERVER_PORT+'/api/survey/customer', { name, phone, address })
            // .then((res) => {
            //     this.props.router.navigate('/satisfaction', { state: {
            //         owner: res.data.id,
            //         page: 1,
            //         progressBefore: 0,
            //         progress: 16.7,
            //         question: "Bagaimana kualitas permainan wahana Kami?"
            //     }});
            // }).catch((error) => {
            //     //catch the error
            //     console.log(error);
            // });
        } else {
            if (!name) {
                this.setState({ isNameFormValid: false });
            }
            if(!phone) {
                this.setState({ isPhoneFormValid: false });
            }
            if(!address) {
                this.setState({ isAddressFormValid: false });
            }
        }
        
    }

    return(
        <>
            <Head title='Customer Survey'/>
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
                        style={{  }}
                        >
                            {loaded === true ? null : 
                                <Box
                                sx={{
                                    position: 'absolute',
                                    display: 'flex',
                                    height: '100vh',
                                    width: '100vw',
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
                                position: 'absolute',
                                marginTop: '20px',
                                maxWidth: '450px',
                                zIndex: '1000'
                            }}
                            >
                                <Grid
                                container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justifyContent= 'flex-end'
                                sx={{
                                    maxWidth: '350px',
                                }}
                                >
                                    <Fade in={loaded}>
                                        <img 
                                        style={loaded ? {} : {display: 'none'}}
                                        src={mediaSurvey[0]} 
                                        width="150px" alt="loka"
                                        onLoad={() => setLoaded(true)}/>
                                    </Fade>
                                </Grid>
                            </Box>
                            <Fade in={loaded}>
                                <Box
                                sx={{
                                    marginTop: '100px',
                                    width: '350px',
                                    height: '600px',
                                    maxWidth: '400px',
                                    maxHeight: '800px',
                                    backgroundColor: 'primary.main',
                                    borderRadius: 5,
                                    boxShadow: 5,
                                }}
                                >
                                    <Grid
                                    container
                                    spacing={0}
                                    direction="column"
                                    alignItems="center"
                                    style={{ height: '100%', width: '100%', paddingBottom: '50px', paddingTop: '100px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}
                                    >

                                        <p style={{margin: 0, padding: 0, textAlign: 'center', fontFamily: 'sans-serif', fontSize: '18px', color: 'white'}}>Survey Kepuasan Pengunjung</p>
                                        <FormControl 
                                        variant="standard"
                                        sx={{width: '100%', alignItems: 'center'}}>
                                            <Box sx={{width: '90%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', my: 1}}>
                                                <TextField
                                                error={!isNameFormValid}
                                                helperText={!isNameFormValid && "name field required"}
                                                sx={{
                                                    width: '80%',
                                                    fontSize: "10px",
                                                    'label.MuiFormLabel-root': { color: 'white.light' },
                                                    'label.Mui-error': { color: 'red.lightest' },
                                                    '&& label.Mui-focused': { color: 'secondary.lightest' },
                                                    '&& label.Mui-error': { color: 'red.lightest' },
                                                    'div.MuiInputBase-root > .MuiInputAdornment-root': { color: 'white.light' },
                                                    ...(isNameFormValid ? {'&& .Mui-focused > .MuiInputAdornment-root': { color: 'secondary.lightest' }} : {'&& .Mui-focused > .MuiInputAdornment-root': { color: 'red.lightest' }} ),
                                                    'div.Mui-error > .MuiInputAdornment-root': { color: 'red.lightest' },
                                                    '&& .Mui-error > .MuiInputAdornment-root': { color: 'red.lightest.lightest' },
                                                    '&& .MuiInput-root:hover::before': { borderBottomColor: 'white.light' },
                                                    '& .MuiInput-underline:before': { borderBottomColor: 'white.light' },
                                                    '& .MuiInput-underline:after': { borderBottomColor: 'secondary.lightest' },
                                                    '& .Mui-error:before': { borderBottomColor: 'red.lightest' },
                                                    '& .Mui-error:after': { borderBottomColor: 'red.lightest' },
                                                    'p.Mui-error': { color: 'red.lightest' },
                                                }}
                                                id="input-with-sx"
                                                label="Nama"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment 
                                                        position="start"
                                                        sx={{
                                                            
                                                        }}>
                                                            <Person
                                                            sx={{
                                                                my: 2,
                                                            }}/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                placeholder='Masukkan nama lengkap anda'
                                                autoComplete='off'
                                                variant="standard"
                                                value={name}
                                                name="name"
                                                onChange={(e) => onChange(e)}/>
                                            </Box>
                                            <Box sx={{width: '90%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', my: 1}}>
                                                <TextField
                                                error={!isPhoneFormValid}
                                                helperText={!isPhoneFormValid && "phone field required"}
                                                sx={{
                                                    width: '80%',
                                                    fontSize: "10px",
                                                    'label.MuiFormLabel-root': { color: 'white.light' },
                                                    'label.Mui-error': { color: 'red.lightest' },
                                                    '&& label.Mui-focused': { color: 'secondary.lightest' },
                                                    '&& label.Mui-error': { color: 'red.lightest' },
                                                    'div.MuiInputBase-root > .MuiInputAdornment-root': { color: 'white.light' },
                                                    ...(isPhoneFormValid ? {'&& .Mui-focused > .MuiInputAdornment-root': { color: 'secondary.lightest' }} : {'&& .Mui-focused > .MuiInputAdornment-root': { color: 'red.lightest' }} ),
                                                    'div.Mui-error > .MuiInputAdornment-root': { color: 'red.lightest' },
                                                    '&& .Mui-error > .MuiInputAdornment-root': { color: 'red.lightest.lightest' },
                                                    '&& .MuiInput-root:hover::before': { borderBottomColor: 'white.light' },
                                                    '& .MuiInput-underline:before': { borderBottomColor: 'white.light' },
                                                    '& .MuiInput-underline:after': { borderBottomColor: 'secondary.lightest' },
                                                    '& .Mui-error:before': { borderBottomColor: 'red.lightest' },
                                                    '& .Mui-error:after': { borderBottomColor: 'red.lightest' },
                                                    'p.Mui-error': { color: 'red.lightest' },
                                                }}
                                                id="input-with-sx"
                                                label="Nomor Ponsel"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment 
                                                        position="start"
                                                        sx={{
                                                            
                                                        }}>
                                                            <PhoneIphone
                                                            sx={{
                                                                my: 2,
                                                            }}/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                type="tel"
                                                placeholder='Masukkan nomor ponsel anda'
                                                autoComplete='off'
                                                variant="standard"
                                                value={phone}
                                                name="phone"
                                                onChange={(e) => onChange(e)}/>
                                            </Box>
                                            <Box sx={{width: '90%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', my: 1}}>
                                                <TextField
                                                error={!isAddressFormValid}
                                                helperText={!isAddressFormValid && "address field required"}
                                                sx={{
                                                    width: '80%',
                                                    fontSize: "10px",
                                                    'label.MuiFormLabel-root': { color: 'white.light' },
                                                    'label.Mui-error': { color: 'red.lightest' },
                                                    '&& label.Mui-focused': { color: 'secondary.lightest' },
                                                    '&& label.Mui-error': { color: 'red.lightest' },
                                                    'div.MuiInputBase-root > .MuiInputAdornment-root': { color: 'white.light' },
                                                    ...(isAddressFormValid ? {'&& .Mui-focused > .MuiInputAdornment-root': { color: 'secondary.lightest' }} : {'&& .Mui-focused > .MuiInputAdornment-root': { color: 'red.lightest' }} ),
                                                    'div.Mui-error > .MuiInputAdornment-root': { color: 'red.lightest' },
                                                    '&& .Mui-error > .MuiInputAdornment-root': { color: 'red.lightest.lightest' },
                                                    '&& .MuiInput-root:hover::before': { borderBottomColor: 'white.light' },
                                                    '& .MuiInput-underline:before': { borderBottomColor: 'white.light' },
                                                    '& .MuiInput-underline:after': { borderBottomColor: 'secondary.lightest' },
                                                    '& .Mui-error:before': { borderBottomColor: 'red.lightest' },
                                                    '& .Mui-error:after': { borderBottomColor: 'red.lightest' },
                                                    'p.Mui-error': { color: 'red.lightest' },
                                                }}
                                                id="input-with-sx"
                                                label="Alamat"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment 
                                                        position="start"
                                                        sx={{
                                                            
                                                        }}>
                                                            <LocationOn
                                                            sx={{
                                                                my: 2,
                                                            }}/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                placeholder='Masukkan alamat anda'
                                                autoComplete='off'
                                                variant="standard"
                                                value={address}
                                                name="address"
                                                onChange={(e) => onChange(e)}/>
                                            </Box>
                                        </FormControl>
                                        <Button
                                            sx={{
                                                mt: 4,
                                                borderRadius: 10,
                                                width: '50%',
                                                height: '50px',
                                                alignItems: 'center',
                                                background: 'linear-gradient(to right bottom, #30E8BF, #FF8235)'
                                            }}
                                            variant="standard" 
                                            onClick={(e) => onSubmit(e)}
                                            >
                                                <Typography
                                                sx={{
                                                    color: 'white.light',
                                                    letterSpacing: 1,
                                                    fontSize: 16,
                                                    fontWeight: '400',
                                                }}>
                                                    selanjutnya
                                                </Typography>
                                            </Button>
                                    </Grid>
                                </Box>
                            </Fade>
                        </Grid>
                    :
                        <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        style={{  }}
                        >
                            {loaded === true ? null : 
                                <Box
                                sx={{
                                    position: 'absolute',
                                    display: 'flex',
                                    height: '100vh',
                                    width: '100vw',
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
                                position: 'absolute',
                                marginTop: '20px',
                                maxWidth: '450px',
                                zIndex: '1000'
                            }}
                            >
                                <Grid
                                container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justifyContent= 'flex-end'
                                sx={{
                                    maxWidth: '350px',
                                }}
                                >
                                    <Fade in={loaded}>
                                        <img 
                                        style={loaded ? {} : {display: 'none'}}
                                        src={mediaSurvey[0]} 
                                        width="150px" alt="loka"
                                        onLoad={() => setLoaded(true)}/>
                                    </Fade>
                                </Grid>
                            </Box>
                            <Fade in={loaded}>
                                <Box
                                sx={{
                                    marginTop: '100px',
                                    width: '350px',
                                    height: '600px',
                                    maxWidth: '400px',
                                    maxHeight: '800px',
                                    backgroundColor: 'primary.main',
                                    borderRadius: 5,
                                    boxShadow: 5,
                                }}
                                >
                                    <Grid
                                    container
                                    spacing={0}
                                    direction="column"
                                    alignItems="center"
                                    style={{ height: '100%', width: '100%', paddingBottom: '50px', paddingTop: '100px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}
                                    >

                                        <p style={{margin: 0, padding: 0, textAlign: 'center', fontFamily: 'sans-serif', fontSize: '18px', color: 'white'}}>Survey Kepuasan Pengunjung</p>
                                        <FormControl 
                                        variant="standard"
                                        sx={{width: '100%', alignItems: 'center'}}>
                                            <Box sx={{width: '90%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', my: 1}}>
                                                <TextField
                                                error={!isNameFormValid}
                                                helperText={!isNameFormValid && "name field required"}
                                                sx={{
                                                    width: '80%',
                                                    fontSize: "10px",
                                                    'label.MuiFormLabel-root': { color: 'white.light' },
                                                    'label.Mui-error': { color: 'red.lightest' },
                                                    '&& label.Mui-focused': { color: 'secondary.lightest' },
                                                    '&& label.Mui-error': { color: 'red.lightest' },
                                                    'div.MuiInputBase-root > .MuiInputAdornment-root': { color: 'white.light' },
                                                    ...(isNameFormValid ? {'&& .Mui-focused > .MuiInputAdornment-root': { color: 'secondary.lightest' }} : {'&& .Mui-focused > .MuiInputAdornment-root': { color: 'red.lightest' }} ),
                                                    'div.Mui-error > .MuiInputAdornment-root': { color: 'red.lightest' },
                                                    '&& .Mui-error > .MuiInputAdornment-root': { color: 'red.lightest.lightest' },
                                                    '&& .MuiInput-root:hover::before': { borderBottomColor: 'white.light' },
                                                    '& .MuiInput-underline:before': { borderBottomColor: 'white.light' },
                                                    '& .MuiInput-underline:after': { borderBottomColor: 'secondary.lightest' },
                                                    '& .Mui-error:before': { borderBottomColor: 'red.lightest' },
                                                    '& .Mui-error:after': { borderBottomColor: 'red.lightest' },
                                                    'p.Mui-error': { color: 'red.lightest' },
                                                }}
                                                id="input-with-sx"
                                                label="Nama"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment 
                                                        position="start"
                                                        sx={{
                                                            
                                                        }}>
                                                            <Person
                                                            sx={{
                                                                my: 2,
                                                            }}/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                placeholder='Masukkan nama lengkap anda'
                                                autoComplete='off'
                                                variant="standard"
                                                value={name}
                                                name="name"
                                                onChange={(e) => onChange(e)}/>
                                            </Box>
                                            <Box sx={{width: '90%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', my: 1}}>
                                                <TextField
                                                error={!isPhoneFormValid}
                                                helperText={!isPhoneFormValid && "phone field required"}
                                                sx={{
                                                    width: '80%',
                                                    fontSize: "10px",
                                                    'label.MuiFormLabel-root': { color: 'white.light' },
                                                    'label.Mui-error': { color: 'red.lightest' },
                                                    '&& label.Mui-focused': { color: 'secondary.lightest' },
                                                    '&& label.Mui-error': { color: 'red.lightest' },
                                                    'div.MuiInputBase-root > .MuiInputAdornment-root': { color: 'white.light' },
                                                    ...(isPhoneFormValid ? {'&& .Mui-focused > .MuiInputAdornment-root': { color: 'secondary.lightest' }} : {'&& .Mui-focused > .MuiInputAdornment-root': { color: 'red.lightest' }} ),
                                                    'div.Mui-error > .MuiInputAdornment-root': { color: 'red.lightest' },
                                                    '&& .Mui-error > .MuiInputAdornment-root': { color: 'red.lightest.lightest' },
                                                    '&& .MuiInput-root:hover::before': { borderBottomColor: 'white.light' },
                                                    '& .MuiInput-underline:before': { borderBottomColor: 'white.light' },
                                                    '& .MuiInput-underline:after': { borderBottomColor: 'secondary.lightest' },
                                                    '& .Mui-error:before': { borderBottomColor: 'red.lightest' },
                                                    '& .Mui-error:after': { borderBottomColor: 'red.lightest' },
                                                    'p.Mui-error': { color: 'red.lightest' },
                                                }}
                                                id="input-with-sx"
                                                label="Nomor Ponsel"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment 
                                                        position="start"
                                                        sx={{
                                                            
                                                        }}>
                                                            <PhoneIphone
                                                            sx={{
                                                                my: 2,
                                                            }}/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                type="tel"
                                                placeholder='Masukkan nomor ponsel anda'
                                                autoComplete='off'
                                                variant="standard"
                                                value={phone}
                                                name="phone"
                                                onChange={(e) => onChange(e)}/>
                                            </Box>
                                            <Box sx={{width: '90%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', my: 1}}>
                                                <TextField
                                                error={!isAddressFormValid}
                                                helperText={!isAddressFormValid && "address field required"}
                                                sx={{
                                                    width: '80%',
                                                    fontSize: "10px",
                                                    'label.MuiFormLabel-root': { color: 'white.light' },
                                                    'label.Mui-error': { color: 'red.lightest' },
                                                    '&& label.Mui-focused': { color: 'secondary.lightest' },
                                                    '&& label.Mui-error': { color: 'red.lightest' },
                                                    'div.MuiInputBase-root > .MuiInputAdornment-root': { color: 'white.light' },
                                                    ...(isAddressFormValid ? {'&& .Mui-focused > .MuiInputAdornment-root': { color: 'secondary.lightest' }} : {'&& .Mui-focused > .MuiInputAdornment-root': { color: 'red.lightest' }} ),
                                                    'div.Mui-error > .MuiInputAdornment-root': { color: 'red.lightest' },
                                                    '&& .Mui-error > .MuiInputAdornment-root': { color: 'red.lightest.lightest' },
                                                    '&& .MuiInput-root:hover::before': { borderBottomColor: 'white.light' },
                                                    '& .MuiInput-underline:before': { borderBottomColor: 'white.light' },
                                                    '& .MuiInput-underline:after': { borderBottomColor: 'secondary.lightest' },
                                                    '& .Mui-error:before': { borderBottomColor: 'red.lightest' },
                                                    '& .Mui-error:after': { borderBottomColor: 'red.lightest' },
                                                    'p.Mui-error': { color: 'red.lightest' },
                                                }}
                                                id="input-with-sx"
                                                label="Alamat"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment 
                                                        position="start"
                                                        sx={{
                                                            
                                                        }}>
                                                            <LocationOn
                                                            sx={{
                                                                my: 2,
                                                            }}/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                placeholder='Masukkan alamat anda'
                                                autoComplete='off'
                                                variant="standard"
                                                value={address}
                                                name="address"
                                                onChange={(e) => onChange(e)}/>
                                            </Box>
                                        </FormControl>
                                        <Button
                                            sx={{
                                                mt: 4,
                                                borderRadius: 10,
                                                width: '50%',
                                                height: '50px',
                                                alignItems: 'center',
                                                background: 'linear-gradient(to right bottom, #30E8BF, #FF8235)'
                                            }}
                                            variant="standard" 
                                            onClick={(e) => onSubmit(e)}
                                            >
                                                <Typography
                                                sx={{
                                                    color: 'white.light',
                                                    letterSpacing: 1,
                                                    fontSize: 16,
                                                    fontWeight: '400',
                                                }}>
                                                    selanjutnya
                                                </Typography>
                                            </Button>
                                    </Grid>
                                </Box>
                            </Fade>
                        </Grid>
                }
            </Fade>
        </>
    );
}