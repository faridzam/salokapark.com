import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Fade} from '@mui/material';
import {ArrowForward} from '@mui/icons-material';
import { Inertia } from '@inertiajs/inertia';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import {mediaRestaurant, restaurant, restaurantBannerByIndex} from '../../assets/images/restaurant';
import { SwiperRestaurantList } from '../../Components/Carousel';

export function useIsMounted() {
    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
      return () => void (isMountedRef.current = false);
    }, []);

    return isMounted;
}

export default function Restaurant(props) {

    const isMounted = useIsMounted();

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const redirect = (route) => {
        Inertia.visit(route);
    }

    const externalRedirect = (route) => {
        window.location.href = route
    }

    const [banner, setBanner] = React.useState(false);
    React.useEffect(() => {
        axios.get('/api/get-content-restaurant-banner')
        .then((response) => {
            //
            // let Obj = response.data.promoBanner;
            // var result=[];
            // for(var i=0;i<Obj.length;i++){
            //     result.push({id: Obj[i].id, gambar: Obj[i].gambar, deskripsi: Obj[i].deskripsi});
            // }
            setBanner(response.data.restoBanner);
        }).catch((error) => {
            //
            console.log(error);
        })
    }, []);

    return(
        <>

            <Head title='Restaurant'/>
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
                                    src={'https://dashboard.salokapark.com/public/foto/restaurant/'+banner}
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
                                    marginTop: '50px',
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
                                            fontFamily: 'Arial',
                                            fontWeight: 600,
                                            fontSize: '38px',
                                            color: '#333'
                                        }}>Resto & Cafe</Typography>
                                    </Box>

                                    <Box
                                    sx={{
                                        width: '100%',
                                        marginTop: '50px'
                                    }}>
                                        <SwiperRestaurantList/>
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
                                    src={'https://dashboard.salokapark.com/public/foto/restaurant/'+banner}
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
                                    marginTop: '50px',
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
                                            fontFamily: 'Arial',
                                            fontWeight: 600,
                                            fontSize: '28px',
                                            color: '#333'
                                        }}>Resto & Cafe</Typography>
                                    </Box>

                                    <Box
                                    sx={{
                                        width: '100%',
                                        marginTop: '50px'
                                    }}>
                                        <SwiperRestaurantList/>
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
