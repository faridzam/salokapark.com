import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Button, Fade} from '@mui/material';
import {ArrowForward} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import {mediaMerchandise} from '../../assets/images/merchandise';
import { SwiperMerchandisePakaian, SwiperMerchandiseAccessories, SwiperMerchandiseGantungan, SwiperMerchandiseBoneka } from '../../Components/Carousel';

export function useIsMounted() {
    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
      return () => void (isMountedRef.current = false);
    }, []);

    return isMounted;
}

export default function Zona(props) {
    const isMounted = useIsMounted();

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    return(
        <>
            <Head title='Zona'/>
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
                                width: '100%',
                                cursor: 'pointer',
                            }}>
                                <img src={mediaMerchandise[0]} alt="logo saloka"
                                style={{
                                    width: '100%',
                                }}></img>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '50px',
                            }}>
                                <Typography
                                sx={{
                                    fontFamily: 'fontin',
                                    fontWeight: 600,
                                    fontSize: '32px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>Pakaian</Typography>
                            </Box>

                            <Box
                            sx={{
                                width: '100%',
                                marginTop: '20px',
                            }}>
                                <SwiperMerchandisePakaian/>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '50px',
                            }}>
                                <Typography
                                sx={{
                                    fontFamily: 'fontin',
                                    fontWeight: 600,
                                    fontSize: '32px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>Accessories</Typography>
                            </Box>

                            <Box
                            sx={{
                                width: '100%',
                                marginTop: '20px',
                            }}>
                                <SwiperMerchandiseAccessories/>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '50px',
                            }}>
                                <Typography
                                sx={{
                                    fontFamily: 'fontin',
                                    fontWeight: 600,
                                    fontSize: '32px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>Gantungan Kunci</Typography>
                            </Box>

                            <Box
                            sx={{
                                width: '100%',
                                marginTop: '20px',
                            }}>
                                <SwiperMerchandiseGantungan/>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '50px',
                            }}>
                                <Typography
                                sx={{
                                    fontFamily: 'fontin',
                                    fontWeight: 600,
                                    fontSize: '32px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>Boneka</Typography>
                            </Box>

                            <Box
                            sx={{
                                width: '100%',
                                marginTop: '20px',
                            }}>
                                <SwiperMerchandiseBoneka/>
                            </Box>

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

                            <Box
                            sx={{
                                width: '100%',
                                cursor: 'pointer',
                            }}>
                                <img src={mediaMerchandise[0]} alt="logo saloka"
                                style={{
                                    width: '100%',
                                }}></img>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '50px',
                            }}>
                                <Typography
                                sx={{
                                    fontFamily: 'fontin',
                                    fontWeight: 600,
                                    fontSize: '32px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>Pakaian</Typography>
                            </Box>

                            <Box
                            sx={{
                                width: '100%',
                                marginTop: '20px',
                            }}>
                                <SwiperMerchandisePakaian/>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '50px',
                            }}>
                                <Typography
                                sx={{
                                    fontFamily: 'fontin',
                                    fontWeight: 600,
                                    fontSize: '32px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>Accessories</Typography>
                            </Box>

                            <Box
                            sx={{
                                width: '100%',
                                marginTop: '20px',
                            }}>
                                <SwiperMerchandiseAccessories/>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '50px',
                            }}>
                                <Typography
                                sx={{
                                    fontFamily: 'fontin',
                                    fontWeight: 600,
                                    fontSize: '32px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>Gantungan Kunci</Typography>
                            </Box>

                            <Box
                            sx={{
                                width: '100%',
                                marginTop: '20px',
                            }}>
                                <SwiperMerchandiseGantungan/>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '50px',
                            }}>
                                <Typography
                                sx={{
                                    fontFamily: 'fontin',
                                    fontWeight: 600,
                                    fontSize: '32px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>Boneka</Typography>
                            </Box>

                            <Box
                            sx={{
                                width: '100%',
                                marginTop: '20px',
                            }}>
                                <SwiperMerchandiseBoneka/>
                            </Box>

                        </Grid>
                    }

                    {/* footer */}
                    <Box
                    sx={{
                        width: '100%',
                        height: '800px',
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
    );
}
