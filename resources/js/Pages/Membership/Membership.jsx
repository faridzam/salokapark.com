import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Fade} from '@mui/material';
import {} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import {membership} from '../../assets/images/membership';
import axios from 'axios';

export function useIsMounted() {

    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
        return () => void (isMountedRef.current = false);
    }, []);

    return isMounted;
}

export default function Membership(props) {
    
    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const [content, setContent] = React.useState(true);

    const isMounted = useIsMounted();

    return (
        <>

        <Head title='Membership'/>

        <Fade
        in={isMounted}
        timeout={1000}
        style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>
            <div>

                {/* header */}
                <Box
                sx={{
                    position: 'sticky',
                    zIndex: '1002',
                    width: '100%',
                    top: '0',
                }}>
                    <Header/>
                </Box>
                {
                    desktop
                    ?
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

                        {
                            content
                            ?
                            <Grid
                            container={true}
                            direction="column"
                            spacing={0}
                            sx={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>

                                <Box
                                sx={{
                                    width: '100%',
                                    marginTop: '20px',
                                    cursor: 'pointer',
                                }}>
                                    <img
                                    src={membership[0].Image}
                                    alt="banner image"
                                    style={{
                                        layout: 'fill',
                                        objectFit: 'cover',
                                        objectPosition: 'top',
                                        width: '100%',
                                    }}></img>
                                </Box>
        
                                <Box>
                                    <Grid
                                    container={true}
                                    direction="row"
                                    spacing={0}
                                    sx={{
                                        marginTop: '50px',
                                        display: 'flex',
                                        width: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                    }}>
                                    <Box
                                    sx={{
                                        width: '80%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start'
                                    }}>
                                        <Box>
                                            <Typography
                                            sx={{
                                                fontWeight: 600,
                                                fontSize: '32px',
                                                color: '#333',
                                                textAlign: 'center',
                                            }}>{membership[0].title}</Typography>
                                        </Box>
        
                                        <Box
                                        sx={{
                                            marginTop: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: '100%',
                                        }}>
                                            <section
                                            dangerouslySetInnerHTML={{__html: membership[0].deskripsi}}>
                                            </section>
                                        </Box>
                                    </Box>
                                    </Grid>
                                </Box>

                            </Grid>
                            :
                            <div></div>
                        }

                    </Grid>
                    :
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

                        {
                            content
                            ?
                            <Grid
                            container={true}
                            direction="column"
                            spacing={0}
                            sx={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>

                                <Box
                                sx={{
                                    width: '100%',
                                    cursor: 'pointer',
                                }}>
                                    <img
                                    src={membership[0].Image}
                                    alt="banner image"
                                    style={{
                                        layout: 'fill',
                                        objectFit: 'cover',
                                        objectPosition: 'top',
                                        width: '100%',
                                    }}></img>
                                </Box>
        
                                <Box
                                sx={{
                                    marginTop: '50px',
                                    width: '80%',
                                }}>
                                    <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '24px',
                                        color: '#333',
                                        textAlign: 'center',
                                    }}>{membership[0].title}</Typography>
                                </Box>
        
                                <Box
                                sx={{
                                    marginTop: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: '80%',
                                }}>
                                    <section
                                    dangerouslySetInnerHTML={{__html: membership[0].deskripsi}}>
                                    </section>
                                </Box>

                            </Grid>
                            :
                            <div></div>
                        }

                    </Grid>
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

                {/* scroll to top button */}
                <ToTopButton/>

            </div>
        </Fade>
        </>
    )
}
