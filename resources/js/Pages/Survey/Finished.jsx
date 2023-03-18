import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2';
import {Button, useMediaQuery, Box, Typography, Fade, CircularProgress, TextField, FormControl, InputAdornment} from '@mui/material';
import {Person, PhoneIphone, LocationOn} from '@mui/icons-material';
import { Inertia } from '@inertiajs/inertia';

import {media} from '../../assets/images';
import {mediaSurvey} from '../../assets/images/survey';

import { EncryptStorage } from 'encrypt-storage';

export function useIsMounted() {
    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
      return () => void (isMountedRef.current = false);
    }, []);

    return isMounted;
}

export const encryptStorage = new EncryptStorage('@encryptedByZam', {
    storageType: 'sessionStorage',
});

export default function CustomerSurvey(props) {
    const isMounted = useIsMounted();

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const redirect = (route) => {
        Inertia.visit(route);
    }
    const redirectWithParams = (route, params) => {
        Inertia.visit(route, params);
    }

    React.useEffect(() => {
        const locaUser = encryptStorage.getItem('owner-name');
        if (locaUser) {
            setUser(locaUser);
        } else {
            //
        }
    }, []);

    const [loaded, setLoaded] = React.useState(false);
    const [user, setUser] = React.useState(false);

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
                    style={{
                        minHeight: '100vh',
                        overflow: 'hidden',
                    }}>
                        <Box
                        sx={{
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: '#444',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            flexWrap: 'wrap'
                        }}>
                            <Box
                            sx={{
                                width: '100%',
                                height: '250px',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                {loaded === true ? null : <CircularProgress/>}
                                <Fade in={loaded}>
                                    <img
                                    style={loaded ? {
                                        transform: 'translate(-20px, 0px)',
                                        objectFit: 'contain',
                                        objectPosition: 'top',
                                        width: '100%',
                                        height: '100px',
                                    } : {display: 'none'}}
                                    src={mediaSurvey[3]}
                                    height="250px" alt="loka"
                                    onLoad={() => setLoaded(true)}/>
                                </Fade>
                            </Box>
                            <Fade in={loaded}>
                                <Box
                                sx={{
                                    marginTop: '30px',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <p
                                    style={{
                                        textAlign: 'center',
                                        color: 'white'
                                    }}>Terimakasih,&nbsp;</p>
                                    <p
                                    style={{
                                        textAlign: 'center',
                                        color: 'white',
                                        fontWeight: 700
                                    }}>{user} 👍</p>
                                </Box>
                            </Fade>
                        </Box>
                    </Grid>
                    :
                    <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    style={{
                        minHeight: '100vh',
                        overflow: 'hidden',
                    }}>
                        <Box
                        sx={{
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: '#444',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            flexWrap: 'wrap'
                        }}>
                            <Box
                            sx={{
                                width: '100%',
                                height: '250px',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                {loaded === true ? null : <CircularProgress/>}
                                <Fade in={loaded}>
                                    <img
                                    style={loaded ? {
                                        transform: 'translate(-20px, 0px)',
                                        objectFit: 'contain',
                                        objectPosition: 'top',
                                        width: '100%',
                                        height: '100px',
                                    } : {display: 'none'}}
                                    src={mediaSurvey[3]}
                                    height="250px" alt="loka"
                                    onLoad={() => setLoaded(true)}/>
                                </Fade>
                            </Box>
                            <Fade in={loaded}>
                                <Box
                                sx={{
                                    marginTop: '30px',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <p
                                    style={{
                                        textAlign: 'center',
                                        color: 'white'
                                    }}>Terimakasih,&nbsp;</p>
                                    <p
                                    style={{
                                        textAlign: 'center',
                                        color: 'white',
                                        fontWeight: 700
                                    }}>{user} 👍</p>
                                </Box>
                            </Fade>
                        </Box>
                    </Grid>
                }
            </Fade>
        </>
    );
}
