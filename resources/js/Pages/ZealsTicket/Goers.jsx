import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Paper, Typography, Card, Button, TextField, Fade} from '@mui/material';
import {Search, Error} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import axios from 'axios';

export function useIsMounted() {

    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
        return () => void (isMountedRef.current = false);
    }, []);

    return isMounted;
}

export default function CheckStatus(props) {
    
    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const isMounted = useIsMounted();

    return (
        <>

        <Head title='Check Status'/>

        <Fade
        in={isMounted}
        timeout={1000}
        style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>
            <div>

                {/* header */}
                <Header/>
                {
                    desktop
                    ?
                    <div>

                        {/* content */}
                        <Grid
                        container={true}
                        direction="column"
                        spacing={0}
                        sx={{
                            marginTop: '20px',
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Box
                            sx={{
                                display: 'flex',
                                width: '100%',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'hidden',
                            }}>
                                <iframe height={1000} width={1080} scrolling="no" src="https://widget.goersapp.com/venues/schedules/saloka-theme-park--saloka" allowfullscreen ></iframe>
                            </Box>
                        </Grid>

                    </div>
                    :
                    <div>

                        {/* content */}
                        <Grid
                        container={true}
                        direction="column"
                        spacing={0}
                        sx={{
                            marginTop: '20px',
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Box
                            sx={{
                                display: 'flex',
                                width: '100%',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'hidden',
                            }}>
                                <iframe height={1000} width={1080} scrolling="no" src="https://widget.goersapp.com/venues/schedules/saloka-theme-park--saloka" allowfullscreen ></iframe>
                            </Box>
                        </Grid>

                    </div>
                }

                {/* footer */}
                <Box
                sx={{
                    marginTop: '100px',
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${media[2]})`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `cover`
                }}>
                    <Footer/>
                </Box>

            </div>
        </Fade>
        </>
    )
}
