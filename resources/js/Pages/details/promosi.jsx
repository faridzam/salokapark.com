import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Button, Fade} from '@mui/material';
import {ArrowForward} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import {mediaPromosi, promosiListByIndex, getIndexPromosiBySlugs} from '../../assets/images/promosi';
import { display } from '@mui/system';

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

    const [promo, setPromo] = React.useState(false);
    React.useEffect(() => {
        axios.post('/api/get-content-promo-detail', {
            slugs: props.slugs,
        })
        .then((response) => {
            //
            let Obj = response.data.promo;
            var result=[];
            for(var i=0;i<Obj.length;i++){
                result.push({id: Obj[i].id, nama: Obj[i].nama, link: Obj[i].link, tanggal: Obj[i].tanggal, type: Obj[i].type, gambar: Obj[i].gambar, deskripsi: Obj[i].deskripsi, no_urut: Obj[i].no_urut, status: Obj[i].status});
            }
            setPromo(result);
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
                                promo
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
                                        height: '75vh',
                                        cursor: 'pointer',
                                    }}>
                                        <img
                                        src={'https://dashboard.salokapark.com/public/foto/promosi/daftarpromo/'+promo[0].gambar}
                                        alt="banner image"
                                        style={{
                                            layout: 'fill',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                            width: '100%',
                                            height: '75vh',
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
                                                width: '70%',
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
                                                    }}>{promo[0].nama}</Typography>
                                                </Box>
            
                                                <Box
                                                sx={{
                                                    marginTop: '10px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    width: '80%',
                                                }}>
                                                    <section
                                                    dangerouslySetInnerHTML={{__html: promo[0].deskripsi}}>
                                                    </section>
                                                </Box>
                                            </Box>
                                            <Box
                                            sx={{
                                                width: '20%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start'
                                            }}>
                                                <Typography
                                                sx={{
                                                    fontWeight: 600,
                                                    fontSize: '28px',
                                                    color: '#333',
                                                    textAlign: 'center',
                                                }}>
                                                    Tanggal Promo:
                                                </Typography>
                                                <Typography
                                                sx={{
                                                    lineHeight: 1.5,
                                                    fontSize: '16px',
                                                    fontWeight: 400,
                                                    color: '#333'
                                                }}>
                                                    {promo[0].tanggal}
                                                </Typography>
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
                                promo
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
                                        height: '50vh',
                                        cursor: 'pointer',
                                    }}>
                                        <img
                                        src={'https://dashboard.salokapark.com/public/foto/promosi/daftarpromo/'+promo[0].gambar}
                                        alt="banner image"
                                        style={{
                                            layout: 'fill',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                            width: '100%',
                                            height: '50vh',
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
                                        }}>{promo[0].nama}</Typography>
                                    </Box>
        
                                    <Box
                                    sx={{
                                        marginTop: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '80%',
                                    }}>
                                        <section
                                        dangerouslySetInnerHTML={{__html: promo[0].deskripsi}}>
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
    );
}
