import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Fade} from '@mui/material';
import {ArrowForward} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import {mediaShowEvent, showEventByIndex} from '../../assets/images/showEvent';
import { SwiperShowEvent } from '../../Components/Carousel';

import { Inertia } from '@inertiajs/inertia';

export function useIsMounted() {
    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
      return () => void (isMountedRef.current = false);
    }, []);

    return isMounted;
}

export default function ShowEvent(props) {

    const isMounted = useIsMounted();

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const redirect = (route) => {
        Inertia.visit(route);
    }

    const [banner, setBanner] = React.useState(false);
    React.useEffect(() => {
        axios.get('/api/get-content-showEvent-banner')
        .then((response) => {
            //
            // let Obj = response.data.promoBanner;
            // var result=[];
            // for(var i=0;i<Obj.length;i++){
            //     result.push({id: Obj[i].id, gambar: Obj[i].gambar, deskripsi: Obj[i].deskripsi});
            // }
            setBanner(response.data.showEventBanner);
        }).catch((error) => {
            //
            console.log(error);
        })
    }, []);

    return(
        <>

            <Head title='Show & Event'/>
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
                        direction="column"
                        spacing={0}
                        sx={{
                        }}>

                            {/* banner */}
                            {
                                banner
                                ?
                                <Box
                                sx={{
                                    maxHeight: '85vh',
                                    cursor: 'pointer',
                                }}>
                                    <img
                                    src={'https://dashboard.salokapark.com/public/foto/event/'+banner}
                                    loading="lazy"
                                    alt="logo saloka"
                                    style={{
                                        layout: 'fill',
                                        objectFit: 'cover',
                                        objectPosition: 'top',
                                        width: '100%',
                                        minHeight: '30vh',
                                        maxHeight: '85vh',
                                    }}></img>
                                </Box>
                                :
                                <div></div>
                            }

                            <Box>
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

                                    }}>
                                        <Typography
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: '38px',
                                            color: '#333'
                                        }}>Show & Event</Typography>
                                    </Box>

                                    <Box
                                    sx={{
                                        width: '100%',
                                        marginTop: '20px'
                                    }}>
                                        <SwiperShowEvent/>
                                    </Box>

                                </Grid>
                            </Box>
                        </Grid>
                        :
                        <Grid
                        direction="column"
                        spacing={0}
                        sx={{
                            marginTop: '20px',
                        }}>
                        
                            {/* banner */}
                            {
                                banner
                                ?
                                <Box
                                sx={{
                                    maxHeight: '85vh',
                                    cursor: 'pointer',
                                }}>
                                    <img
                                    src={'https://dashboard.salokapark.com/public/foto/event/'+banner}
                                    loading="lazy"
                                    alt="logo saloka"
                                    style={{
                                        layout: 'fill',
                                        objectFit: 'cover',
                                        objectPosition: 'top',
                                        width: '100%',
                                        minHeight: '30vh',
                                        maxHeight: '85vh',
                                    }}></img>
                                </Box>
                                :
                                <div></div>
                            }

                            <Box>
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
                                        width: '90%',
                                    }}>
                                        <Typography
                                        sx={{
                                            textAlign: 'center',
                                            fontWeight: 600,
                                            fontSize: '32px',
                                            color: '#333'
                                        }}>Show & Event</Typography>
                                    </Box>

                                    <Box
                                    sx={{
                                        width: '100%',
                                        marginTop: '20px'
                                    }}>
                                        <SwiperShowEvent/>
                                    </Box>

                                </Grid>
                            </Box>
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
    );

}
