import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Button, Fade} from '@mui/material';
import {ArrowForward} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import {mediaZona, zonaByIndex, getIndexZonaBySlugs} from '../../assets/images/zona';
import {getIndexRestaurantByID, restaurant} from '../../assets/images/restaurant';
import { SwiperZonaWahana, SwiperRekomendasiZona, SwiperEventZona } from '../../Components/Carousel';

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

    const redirect = (route) => {
        Inertia.visit(route);
    }

    const [zone, setZone] = React.useState(false);
    const [merchandise, setMerchandise] = React.useState([]);
    const [resto, setResto] = React.useState(false);
    React.useEffect(() => {
        axios.post('/api/get-content-zones-detail', {
            slugs: props.slugs,
        })
        .then((response) => {
            //
            let Obj = response.data.zone;
            var result=[];
            for(var i=0;i<Obj.length;i++){
                result.push({id: Obj[i].id, nama: Obj[i].nama, link: Obj[i].link, gambar: Obj[i].gambar, deskripsi: Obj[i].deskripsi, no_urut: Obj[i].no_urut, status: Obj[i].status});
            }
            setZone(result);

            if(restaurant[getIndexRestaurantByID(result[0].id)]){
                setResto(
                    restaurant[getIndexRestaurantByID(result[0].id)]
                )
            }

            axios.post('/api/get-content-merchandise-zona', {
                id: result[0].id,
            })
            .then((response) => {
                //
                let Obj = response.data.merchandise;
                var result=[];
                for(var i=0;i<Obj.length;i++){
                    result.push({id: Obj[i].id, nama: Obj[i].nama, link: Obj[i].link, gambar: Obj[i].gambar, thumbnail: Obj[i].thumbnail, idzona: Obj[i].idzona, zona: Obj[i].zona, attraction_type: Obj[i].attraction_type, desk_singkat: Obj[i].desk_singkat, deskripsi: Obj[i].deskripsi, nourut: Obj[i].nourut, status: Obj[i].status});
                }
                setMerchandise(result);
    
            }).catch((error) => {
                //
                console.log(error);
            })

        }).catch((error) => {
            //
            console.log(error);
        });

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
                                zone
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
                                        src={'https://dashboard.salokapark.com/public/foto/zona/'+zone[0].gambar}
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
                                            fontFamily: 'Arial',
                                            fontWeight: 600,
                                            fontSize: '38px',
                                            color: '#333',
                                            textAlign: 'center',
                                        }}>{zone[0].nama}</Typography>
                                    </Box>
        
                                    <Box
                                    sx={{
                                        marginTop: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '80%',
                                    }}>
                                        <section
                                        dangerouslySetInnerHTML={{__html: zone[0].deskripsi}}>
                                        </section>
                                    </Box>

                                    <Box
                                    sx={{
                                        marginTop: '50px',
                                    }}>
                                        <Typography
                                        sx={{
                                            fontFamily: 'Arial',
                                            fontWeight: 600,
                                            fontSize: '32px',
                                            color: '#333',
                                            textAlign: 'center',
                                        }}>Yang Wajib Kamu Kunjungi di Zona {zone[0].nama}</Typography>
                                    </Box>

                                    <Box
                                    sx={{
                                        marginTop: '20px',
                                        width: '100%'
                                    }}>
                                        <SwiperZonaWahana
                                        slugs={zone[0].id}/>
                                    </Box>

                                    {
                                        resto
                                        ?
                                        <Grid
                                        container={true}
                                        direction="column"
                                        spacing={0}
                                        sx={{
                                            marginTop: '50px',
                                            display: 'flex',
                                            height: '100%',
                                            width: '100%',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Box
                                            sx={{
                                                position: 'relative',
                                                width: '100%',
                                                height: '75vh',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}>
                                                <img
                                                src={resto.image}
                                                alt="resto"
                                                style={{
                                                    layout: 'fill',
                                                    objectFit: 'cover',
                                                    objectPosition: 'top',
                                                    width: '100%',
                                                    filter: 'brightness(30%)',
                                                }}></img>
                                            </Box>
                                            <Box
                                            sx={{
                                                position: 'absolute',
                                                marginTop: '50px',
                                                width: '100%',
                                                height: '70vh',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}>
                                                <Grid
                                                container={true}
                                                direction="column"
                                                spacing={0}
                                                sx={{
                                                    paddingBottom: '50px',
                                                    display: 'flex',
                                                    height: '100%',
                                                    justifyContent: 'flex-end',
                                                    alignItems: 'center'
                                                }}>
                                                    <Typography
                                                    sx={{
                                                        fontFamily: 'Arial',
                                                        fontSize: '32px',
                                                        fontWeight: 500,
                                                        color: '#ddd'
                                                    }}
                                                    >{resto.nama}</Typography>
                                                    <Typography
                                                    sx={{
                                                        fontFamily: 'Arial',
                                                        marginBottom: '30px',
                                                        fontSize: '18px',
                                                        fontWeight: 200,
                                                        color: '#ddd'
                                                    }}
                                                    >{resto.deskripsi}</Typography>
                                                    <Button
                                                    onClick={() => redirect(resto.link)}
                                                    variant="contained"
                                                    sx={{
                                                        borderRadius: 25,
                                                        backgroundColor: 'primary.main',
                                                    }}>
                                                        <Typography
                                                        sx={{
                                                            fontFamily: 'Arial',
                                                            fontSize: '14px',
                                                            fontWeight: 600,
                                                            color: '#ddd'
                                                        }}>Pelajari Lebih Lanjut</Typography>
                                                    </Button>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                        :
                                        <div></div>
                                    }

                                    <Grid
                                    container={true}
                                    direction="column"
                                    spacing={0}
                                    sx={{
                                        marginTop: '50px',
                                        display: 'flex',
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
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
                                            }}>Shows on {zona[0].nama}</Typography>
                                        </Box>

                                        <Box
                                        sx={{
                                            marginTop: '20px',
                                            height: '100%',
                                            width: '80%',
                                        }}>
                                            <SwiperEventZona
                                            slugs={zone[0].id}/>
                                        </Box>

                                    </Grid>

                                    {
                                        merchandise.length > 0
                                        ?
                                        <Box>
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
                                                    marginTop: '50px',
                                                }}>
                                                    <Typography
                                                    sx={{
                                                        fontFamily: 'fontin',
                                                        fontWeight: 600,
                                                        fontSize: '32px',
                                                        color: '#333',
                                                        textAlign: 'center',
                                                    }}>Merchandise</Typography>
                                                </Box>
                                                <Box
                                                sx={{
                                                    marginY: '20px',
                                                    width: '80%',
                                                    height: '500px',
                                                    border: '1px solid #333',
                                                }}>
                                                    <Grid
                                                    container={true}
                                                    direction="row"
                                                    spacing={0}
                                                    sx={{
                                                        display: 'flex',
                                                        width: '100%',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Box
                                                        sx={{
                                                            display: 'flex',
                                                            justifyContent: 'flex-start',
                                                            alignItems: 'center',
                                                            width: '60%',
                                                        }}>
                                                            <img
                                                            onClick={() => redirect('/merchandise/'+merchandise[0].link)}
                                                            src={'https://dashboard.salokapark.com/public/foto/souvenir/daftar/'+merchandise[0].gambar}
                                                            alt={`merchandise`}
                                                            style={{
                                                                layout: 'fill',
                                                                objectFit: 'cover',
                                                                objectPosition: 'top',
                                                                height: '500px',
                                                            }}></img>
                                                        </Box>

                                                        <Box
                                                        sx={{
                                                            display: 'flex',
                                                            justifyContent: 'flex-start',
                                                            alignItems: 'center',
                                                            width: '40%',
                                                        }}>
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
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-start',
                                                                    alignItems: 'center',
                                                                    width: '90%',
                                                                }}>
                                                                    <Typography
                                                                    sx={{
                                                                        fontSize: '24px',
                                                                        fontWeight: 600,
                                                                        color: '#333'
                                                                    }}
                                                                    >{merchandise[0].nama}</Typography>
                                                                </Box>
                                                                <Box
                                                                sx={{
                                                                    marginTop: '10px',
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-start',
                                                                    alignItems: 'center',
                                                                    width: '90%',
                                                                }}>
                                                                    <section
                                                                    dangerouslySetInnerHTML={{__html: merchandise[0].desk_singkat}}>
                                                                    </section>
                                                                </Box>

                                                                <Box
                                                                sx={{
                                                                    width: '90%',
                                                                    display: 'flex',
                                                                    marginTop: '20px',
                                                                    justifyContent: 'flex-start',
                                                                    alignItems: 'center',
                                                                }}>
                                                                    <Typography
                                                                    onClick={() => redirect('/merchandise/'+merchandise[0].link)}
                                                                    className="noselect"
                                                                    align="justify"
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        fontSize: '15px',
                                                                        fontWeight: 400,
                                                                        color: '#333'
                                                                    }}
                                                                    >Baca Lebih Lanjut</Typography>
                                                                    <ArrowForward
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        marginLeft: '5px',
                                                                        fontSize: 15,
                                                                        color: '#333'
                                                                    }}/>
                                                                </Box>

                                                            </Grid>
                                                        </Box>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        </Box>
                                        
                                        :
                                        <div></div>
                                    }                                    
                                    
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
                                        }}>Zona Lain</Typography>
                                    </Box>
        
                                    <Box
                                    sx={{
                                        marginTop: '20px',
                                        width: '100%'
                                    }}>
                                        <SwiperRekomendasiZona
                                        slugs={zone[0].id}/>
                                    </Box>

                                    {/* */}

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
                                zone
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
                                        src={'https://dashboard.salokapark.com/public/foto/zona/'+zone[0].gambar}
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
                                            fontFamily: 'Arial',
                                            fontWeight: 600,
                                            fontSize: '28px',
                                            color: '#333',
                                            textAlign: 'center',
                                        }}>{zone[0].nama}</Typography>
                                    </Box>

                                    <Box
                                    sx={{
                                        marginTop: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '80%',
                                    }}>
                                        <section
                                        dangerouslySetInnerHTML={{__html: zone[0].deskripsi}}>
                                        </section>
                                    </Box>

                                    <Box
                                    sx={{
                                        marginTop: '50px',
                                    }}>
                                        <Typography
                                        sx={{
                                            fontFamily: 'Arial',
                                            fontWeight: 600,
                                            fontSize: '32px',
                                            color: '#333',
                                            textAlign: 'center',
                                        }}>Yang Wajib Kamu Kunjungi di Zona {zone[0].nama}</Typography>
                                    </Box>

                                    <Box
                                    sx={{
                                        marginTop: '20px',
                                        width: '100%'
                                    }}>
                                        <SwiperZonaWahana
                                        slugs={zone[0].id}/>
                                    </Box>

                                    {
                                        resto
                                        ?
                                        <Grid
                                        container={true}
                                        direction="column"
                                        spacing={0}
                                        sx={{
                                            marginTop: '100px',
                                            display: 'flex',
                                            height: '100%',
                                            width: '100%',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Box
                                            sx={{
                                                position: 'relative',
                                                width: '100%',
                                                height: '75vh',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}>
                                                <img
                                                src={resto.image}
                                                alt="maps-banner"
                                                style={{
                                                    layout: 'fill',
                                                    objectFit: 'cover',
                                                    objectPosition: 'top',
                                                    width: '100%',
                                                    filter: 'brightness(30%)',
                                                }}></img>
                                            </Box>
                                            <Box
                                            sx={{
                                                position: 'absolute',
                                                marginTop: '50px',
                                                width: '100%',
                                                height: '70vh',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}>
                                                <Grid
                                                container={true}
                                                direction="column"
                                                spacing={0}
                                                sx={{
                                                    paddingBottom: '50px',
                                                    display: 'flex',
                                                    height: '100%',
                                                    width: '80%',
                                                    justifyContent: 'flex-end',
                                                    alignItems: 'center'
                                                }}>
                                                <Typography
                                                sx={{
                                                    fontFamily: 'Arial',
                                                    fontSize: '26px',
                                                    fontWeight: 500,
                                                    color: '#ddd',
                                                    textAlign: 'center',
                                                }}
                                                >{resto.nama}</Typography>
                                                <Typography
                                                sx={{
                                                    fontFamily: 'Arial',
                                                    marginBottom: '30px',
                                                    fontSize: '13px',
                                                    fontWeight: 300,
                                                    color: '#ddd',
                                                    textAlign: 'center',
                                                }}
                                                >{resto.deskripsi}</Typography>
                                                <Button
                                                onClick={() => redirect(resto.link)}
                                                variant="contained"
                                                sx={{
                                                    borderRadius: 25,
                                                    backgroundColor: 'primary.main',
                                                }}>
                                                    <Typography
                                                    sx={{
                                                        fontFamily: 'Arial',
                                                        fontSize: '14px',
                                                        fontWeight: 600,
                                                        color: '#ddd'
                                                    }}>Pelajari Lebih Lanjut</Typography>
                                                </Button>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                        :
                                        <div></div>
                                    }

                                    {
                                        merchandise.length > 0
                                        ?
                                        <Box>
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
                                                    marginTop: '50px',
                                                }}>
                                                    <Typography
                                                    sx={{
                                                        fontFamily: 'fontin',
                                                        fontWeight: 600,
                                                        fontSize: '32px',
                                                        color: '#333',
                                                        textAlign: 'center',
                                                    }}>Merchandise</Typography>
                                                </Box>

                                                <Box
                                                sx={{
                                                    marginY: '20px',
                                                    width: '90%',
                                                    border: '1px solid #333',
                                                }}>
                                                    <Grid
                                                    container={true}
                                                    direction="column"
                                                    spacing={0}
                                                    sx={{
                                                        display: 'flex',
                                                        width: '100%',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Box
                                                        sx={{
                                                            display: 'flex',
                                                            justifyContent: 'flex-start',
                                                            alignItems: 'center',
                                                            width: '100%',
                                                        }}>
                                                            <img
                                                            onClick={() => redirect('/merchandise/'+merchandise[0].link)}
                                                            src={'https://dashboard.salokapark.com/public/foto/souvenir/daftar/'+merchandise[0].gambar}
                                                            alt={`merchandise`}
                                                            style={{
                                                                layout: 'fill',
                                                                objectFit: 'cover',
                                                                objectPosition: 'top',
                                                                maxHeight: '400px',
                                                            }}></img>
                                                        </Box>

                                                        <Box
                                                        sx={{
                                                            marginY: '20px',
                                                            display: 'flex',
                                                            justifyContent: 'flex-start',
                                                            alignItems: 'center',
                                                            width: '90%',
                                                        }}>
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
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-start',
                                                                    alignItems: 'center',
                                                                    width: '90%',
                                                                }}>
                                                                    <Typography
                                                                    sx={{
                                                                        fontSize: '18px',
                                                                        fontWeight: 600,
                                                                        color: '#333'
                                                                    }}
                                                                    >{merchandise[0].nama}</Typography>
                                                                </Box>
                                                                <Box
                                                                sx={{
                                                                    marginTop: '10px',
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-start',
                                                                    alignItems: 'center',
                                                                    width: '90%',
                                                                }}>
                                                                    <section
                                                                    dangerouslySetInnerHTML={{__html: merchandise[0].desk_singkat}}>
                                                                    </section>
                                                                </Box>

                                                                <Box
                                                                sx={{
                                                                    width: '90%',
                                                                    display: 'flex',
                                                                    marginTop: '20px',
                                                                    justifyContent: 'flex-start',
                                                                    alignItems: 'center',
                                                                }}>
                                                                    <Typography
                                                                    onClick={() => redirect('/merchandise/'+merchandise[0].link)}
                                                                    className="noselect"
                                                                    align="justify"
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        fontSize: '15px',
                                                                        fontWeight: 400,
                                                                        color: '#333'
                                                                    }}
                                                                    >Baca Lebih Lanjut</Typography>
                                                                    <ArrowForward
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        marginLeft: '5px',
                                                                        fontSize: 15,
                                                                        color: '#333'
                                                                    }}/>
                                                                </Box>

                                                            </Grid>
                                                        </Box>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        </Box>
                                        :
                                        <div></div>
                                    }

                                    <Box
                                    sx={{
                                        marginTop: '50px',
                                    }}>
                                        <Typography
                                        sx={{
                                            fontFamily: 'Arial',
                                            fontWeight: 600,
                                            fontSize: '32px',
                                            color: '#333',
                                            textAlign: 'center',
                                        }}>Zona Lain</Typography>
                                    </Box>
        
                                    <Box
                                    sx={{
                                        marginTop: '20px',
                                        width: '100%'
                                    }}>
                                        <SwiperRekomendasiZona
                                        slugs={zone[0].id}/>
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
