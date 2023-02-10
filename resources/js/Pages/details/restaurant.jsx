import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Button, Fade} from '@mui/material';
import {ArrowForward} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import { SwiperMenuResto } from '../../Components/Carousel';
import {media} from '../../assets/images';
import {mediaRestaurant, restaurantBannerByIndex, getIndexRestaurantBySlugs} from '../../assets/images/restaurant';

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

    const [resto, setResto] = React.useState(false);
    React.useEffect(() => {
        axios.post('/api/get-content-restaurant-detail', {
            slugs: props.slugs,
        })
        .then((response) => {
            //
            let Obj = response.data.resto;
            var result=[];
            for(var i=0;i<Obj.length;i++){
                result.push({id: Obj[i].id, idresto: Obj[i].idresto, nama: Obj[i].nama, link: Obj[i].link, gambar: Obj[i].gambar, deskripsi: Obj[i].deskripsi, nourut: Obj[i].nourut, status: Obj[i].status});
            }
            setResto(result);
        }).catch((error) => {
            //
            console.log(error);
        })
    }, []);


    return(
        <>
            <Head title={props.slugs}/>
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
                                resto
                                ?
                                <Grid
                                Grid
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
                                        marginTop: '50px',
                                        cursor: 'pointer',
                                    }}>
                                        <img
                                        src={'https://dashboard.salokapark.com/public/foto/resto/daftar/'+resto[0].gambar}
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
                                    }}>
                                        <Typography
                                        sx={{
                                            fontFamily: 'fontin',
                                            fontWeight: 600,
                                            fontSize: '32px',
                                            color: '#333',
                                            textAlign: 'center',
                                        }}>{resto[0].nama}</Typography>
                                    </Box>
        
                                    <Box
                                    sx={{
                                        marginTop: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '80%',
                                    }}>
                                        <section
                                        dangerouslySetInnerHTML={{__html: resto[0].deskripsi}}>
                                        </section>
                                    </Box>

                                    {/* swiper menu
                                    <Box
                                    sx={{
                                        marginTop: '50px',
                                        width: '100%',
                                        height: '100%',
                                    }}>
                                        <SwiperMenuResto slugs={props.slugs}/>
                                    </Box>
                                    */}

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
                                resto
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
                                        marginTop: '50px',
                                        cursor: 'pointer',
                                    }}>
                                        <img
                                        src={'https://dashboard.salokapark.com/public/foto/resto/daftar/'+resto[0].gambar}
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
                                            fontFamily: 'fontin',
                                            fontWeight: 600,
                                            fontSize: '24px',
                                            color: '#333',
                                            textAlign: 'center',
                                        }}>{resto[0].nama}</Typography>
                                    </Box>
        
                                    <Box
                                    sx={{
                                        marginTop: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '80%',
                                    }}>
                                        <section
                                        dangerouslySetInnerHTML={{__html: resto[0].deskripsi}}>
                                        </section>
                                    </Box>

                                    {/* swiper menu
                                    <Box
                                    sx={{
                                        marginTop: '50px',
                                        width: '100%',
                                        height: '100%',
                                    }}>
                                        <SwiperMenuResto slugs={props.slugs}/>
                                    </Box>
                                    */}

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
    );
}
