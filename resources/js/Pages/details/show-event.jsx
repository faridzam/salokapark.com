import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Button, Fade} from '@mui/material';
import {ArrowForward} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import {mediaShowEvent, showEventByIndex, getIndexShowEventBySlugs} from '../../assets/images/showEvent';

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

    const [showEvent, setShowEvent] = React.useState(false);
    React.useEffect(() => {
        axios.post('/api/get-content-showEvent-detail', {
            slugs: props.slugs,
        })
        .then((response) => {
            //
            let Obj = response.data.showEvent;
            var result=[];
            for(var i=0;i<Obj.length;i++){
                result.push({id: Obj[i].id, nama: Obj[i].nama, link: Obj[i].link, gambar: Obj[i].gambar, deskripsi: Obj[i].deskripsi, jadwalwd: Obj[i].jadwalwd, jadwalwe: Obj[i].jadwalwe, jadwalhol: Obj[i].jadwalhol, zona: Obj[i].zona, no_urut: Obj[i].no_urut, status: Obj[i].status});
            }
            setShowEvent(result);
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
                                showEvent
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
                                        src={'https://dashboard.salokapark.com/public/foto/event/daftarevent/'+showEvent[0].gambar}
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
                                            width: '70%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start'
                                        }}>
                                            <Box>
                                                <Typography
                                                sx={{
                                                    fontFamily: 'fontin',
                                                    fontWeight: 600,
                                                    fontSize: '32px',
                                                    color: '#333',
                                                    textAlign: 'center',
                                                }}>{showEvent[0].nama}</Typography>
                                            </Box>
        
                                            <Box
                                            sx={{
                                                marginTop: '10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: '80%',
                                            }}>
                                                <section
                                                dangerouslySetInnerHTML={{__html: showEvent[0].deskripsi}}>
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
                                                fontFamily: 'fontin',
                                                fontWeight: 600,
                                                fontSize: '28px',
                                                color: '#333',
                                                textAlign: 'center',
                                            }}>
                                                Jadwal Show:
                                            </Typography>
                                            <Typography
                                            sx={{
                                                fontSize: '18px',
                                                fontWeight: 500,
                                                color: '#333'
                                            }}>
                                                weekdays:
                                            </Typography>
                                            <Typography
                                            sx={{
                                                fontSize: '15px',
                                                fontWeight: 400,
                                                color: '#333'
                                            }}>
                                                {showEvent[0].jadwalwd}
                                            </Typography>
                                            <Typography
                                            sx={{
                                                fontSize: '18px',
                                                fontWeight: 500,
                                                color: '#333'
                                            }}>
                                                weekends:
                                            </Typography>
                                            <Typography
                                            sx={{
                                                fontSize: '15px',
                                                fontWeight: 400,
                                                color: '#333'
                                            }}>
                                                {showEvent[0].jadwalwe}
                                            </Typography>
                                            <Typography
                                            sx={{
                                                fontSize: '18px',
                                                fontWeight: 500,
                                                color: '#333'
                                            }}>
                                                Tanggal Merah:
                                            </Typography>
                                            <Typography
                                            sx={{
                                                fontSize: '15px',
                                                fontWeight: 400,
                                                color: '#333'
                                            }}>
                                                {showEvent[0].jadwalhol}
                                            </Typography>
        
                                            <Box
                                            sx={{
                                                marginTop: '20px',
                                            }}>
                                                <Typography
                                                sx={{
                                                    fontWeight: 600,
                                                    fontSize: '24px',
                                                    color: '#333',
                                                    textAlign: 'center',
                                                }}>
                                                    Zona: {showEvent[0].zona}
                                                </Typography>
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
                                showEvent
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
                                        src={'https://dashboard.salokapark.com/public/foto/event/daftarevent/'+showEvent[0].gambar}
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
                                        }}>{showEvent[0].nama}</Typography>
                                    </Box>
        
                                    <Box
                                    sx={{
                                        marginTop: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '80%',
                                    }}>
                                        <section
                                        dangerouslySetInnerHTML={{__html: showEvent[0].deskripsi}}>
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
