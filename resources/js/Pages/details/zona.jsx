import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Button, Fade, List, ListItem} from '@mui/material';
import {ArrowForward} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import {getFasumByID} from '../../assets/images/carousel_assets/tentangFasum';
import {getIndexesShowEventByID} from '../../assets/images/showEvent';
import {getIndexRestaurantByID, restaurant} from '../../assets/images/restaurant';
import { SwiperZonaWahana, SwiperRekomendasiZona, SwiperEventZona, SwiperFasilitasUmum } from '../../Components/Carousel';

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
    const [show, setShow] = React.useState(false);
    const [fasum, setFasum] = React.useState(false);
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

            if(getIndexesShowEventByID(result[0].id)[0]){
                setShow(true);
            }

            console.log(getFasumByID(result[0].id));

            if(getFasumByID(result[0].id)[0]){
                setFasum(getFasumByID(result[0].id));
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

    const FASUM_COUNT = fasum.length;
    const fasumContent = Array.from(Array(FASUM_COUNT).keys());


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
                                            fontWeight: 600,
                                            fontSize: '32px',
                                            color: '#333',
                                            textAlign: 'center',
                                        }}>Yang Wajib Kamu Kunjungi di Zona {zone[0].nama}</Typography>
                                    </Box>

                                    <Box
                                    sx={{
                                        marginTop: '20px',
                                        width: '90%'
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
                                                        fontSize: '38px',
                                                        fontWeight: 600,
                                                        color: '#ddd'
                                                    }}
                                                    >{resto.nama}</Typography>
                                                    <Typography
                                                    sx={{
                                                        marginBottom: '30px',
                                                        fontSize: '18px',
                                                        fontWeight: 200,
                                                        color: '#ddd'
                                                    }}
                                                    >{resto.deskripsi}</Typography>
                                                    <Button
                                                    // onClick={() => redirect(resto.link)}
                                                    variant="contained"
                                                    sx={{
                                                        borderRadius: 25,
                                                        backgroundColor: 'primary.main',
                                                    }}>
                                                        <Typography
                                                        sx={{
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
                                        show
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
                                            }}>
                                                <Typography
                                                sx={{
                                                    fontWeight: 600,
                                                    fontSize: '38px',
                                                    color: '#333'
                                                }}>Pertunjukan di {zone[0].nama}</Typography>
                                            </Box>
                                            <Box
                                            sx={{
                                                marginTop: '20px',
                                                width: '80%',
                                            }}>
                                                <SwiperEventZona
                                                slugs={zone[0].id}/>
                                            </Box>
                                        </Grid>
                                        :
                                        <div></div>
                                    }

                                    {
                                        merchandise.length > 0
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
                                                    onClick={() => redirect('/merchandise/'+merchandise[0].link)}
                                                    src={'https://dashboard.salokapark.com/public/foto/souvenir/daftar/'+merchandise[0].gambar}
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
                                                        <Box>
                                                            <Typography
                                                            sx={{
                                                                fontSize: '32px',
                                                                fontWeight: 600,
                                                                color: '#ddd'
                                                            }}
                                                            >{merchandise[0].nama}</Typography>
                                                        </Box>
                                                        <Box>
                                                            <Typography
                                                            sx={{
                                                                fontSize: '14px',
                                                                fontWeight: 400,
                                                                color: '#ddd'
                                                            }}
                                                            >{merchandise[0].desk_singkat}</Typography>
                                                        </Box>
                                                        <Button
                                                        onClick={() => redirect('/merchandise/'+merchandise[0].link)}
                                                        variant="contained"
                                                        sx={{
                                                            marginTop: '20px',
                                                            borderRadius: 25,
                                                            backgroundColor: 'primary.main',
                                                        }}>
                                                            <Typography
                                                            sx={{
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

                                    <Box
                                    sx={{
                                        marginTop: '50px',
                                    }}>
                                        <Typography
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: '32px',
                                            color: '#333',
                                            textAlign: 'center',
                                        }}>Fasilitas Umum di {zone[0].nama}</Typography>
                                    </Box>

                                    <Box
                                    sx={{
                                        marginTop: '20px',
                                        width: '80%'
                                    }}>
                                        {
                                            fasum
                                            ?
                                            <Grid
                                            container={true}
                                            direction="row"
                                            spacing={0}
                                            sx={{
                                                display: 'flex',
                                                width: '100%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                {fasumContent.map((index) => (
                                                    <Box
                                                    sx={{
                                                        marginX: '20px',
                                                    }}>
                                                        <Typography
                                                        sx={{
                                                            fontWeight: 500,
                                                            fontSize: '16px',
                                                            color: '#333',
                                                        }}>• {fasum[index].nama}</Typography>
                                                    </Box>
                                                ))}
                                            </Grid>
                                            :
                                            <div></div>
                                        }
                                    </Box>
                                    
                                    <Box
                                    sx={{
                                        marginTop: '50px',
                                    }}>
                                        <Typography
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: '32px',
                                            color: '#333',
                                            textAlign: 'center',
                                        }}>Zona Lainnya</Typography>
                                    </Box>
                                    
                                    <Box
                                    sx={{
                                        marginTop: '20px',
                                        width: '90%'
                                    }}>
                                        <SwiperRekomendasiZona
                                        slugs={zone[0].id}/>
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
                                                    fontSize: '26px',
                                                    fontWeight: 500,
                                                    color: '#ddd',
                                                    textAlign: 'center',
                                                }}
                                                >{resto.nama}</Typography>
                                                <Typography
                                                sx={{
                                                    marginBottom: '30px',
                                                    fontSize: '13px',
                                                    fontWeight: 300,
                                                    color: '#ddd',
                                                    textAlign: 'center',
                                                }}
                                                >{resto.deskripsi}</Typography>
                                                <Button
                                                // onClick={() => redirect(resto.link)}
                                                variant="contained"
                                                sx={{
                                                    borderRadius: 25,
                                                    backgroundColor: 'primary.main',
                                                }}>
                                                    <Typography
                                                    sx={{
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
                                        show
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
                                            }}>
                                                <Typography
                                                sx={{
                                                    fontWeight: 600,
                                                    fontSize: '38px',
                                                    color: '#333'
                                                }}>Shows on {zone[0].nama}</Typography>
                                            </Box>

                                            <Box
                                            sx={{
                                                marginTop: '20px',
                                                height: '100%',
                                                width: '100%',
                                            }}>
                                                <SwiperEventZona
                                                slugs={zone[0].id}/>
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
                                                    onClick={() => redirect('/merchandise/'+merchandise[0].link)}
                                                    src={'https://dashboard.salokapark.com/public/foto/souvenir/daftar/'+merchandise[0].gambar}
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
                                                        fontSize: '26px',
                                                        fontWeight: 600,
                                                        color: '#ddd',
                                                        textAlign: 'center',
                                                    }}
                                                    >{merchandise[0].nama}</Typography>
                                                    <Typography
                                                    sx={{
                                                        fontSize: '14px',
                                                        fontWeight: 400,
                                                        color: '#ddd',
                                                        textAlign: 'center',
                                                    }}
                                                    >{merchandise[0].desk_singkat}</Typography>
                                                    <Button
                                                    onClick={() => redirect('/merchandise/'+merchandise[0].link)}
                                                    variant="contained"
                                                    sx={{
                                                        marginTop: '20px',
                                                        borderRadius: 25,
                                                        backgroundColor: 'primary.main',
                                                    }}>
                                                        <Typography
                                                        sx={{
                                                            fontSize: '14px',
                                                            fontWeight: 600,
                                                            color: '#ddd'
                                                        }}>Pelajari Lebih Lanjut</Typography>
                                                    </Button>
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
                                            fontWeight: 600,
                                            fontSize: '32px',
                                            color: '#333',
                                            textAlign: 'center',
                                        }}>Fasilitas Umum di {zone[0].nama}</Typography>
                                    </Box>

                                    <Box
                                    sx={{
                                        marginTop: '20px',
                                        width: '70%'
                                    }}>
                                        {
                                            fasum
                                            ?
                                            <List
                                            sx = {{
                                                width: '100%',
                                                listStyleType: 'disc',
                                                pl: 2,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                padding: 0,
                                                '& .MuiListItem-root': {
                                                    display: 'list-item',
                                                },
                                            }}>
                                                {fasumContent.map((index) => (
                                                    <ListItem>
                                                        <Typography
                                                        sx={{
                                                            fontWeight: 500,
                                                            fontSize: '14px',
                                                            color: '#333',
                                                        }}>{fasum[index].nama}</Typography>
                                                    </ListItem>
                                                ))}
                                            </List>
                                            :
                                            <div></div>
                                        }
                                    </Box>

                                    <Box
                                    sx={{
                                        marginTop: '50px',
                                    }}>
                                        <Typography
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: '32px',
                                            color: '#333',
                                            textAlign: 'center',
                                        }}>Zona Lainnya</Typography>
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
