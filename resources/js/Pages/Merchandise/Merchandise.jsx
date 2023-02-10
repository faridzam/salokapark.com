import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Button, Fade} from '@mui/material';
import {ArrowForward} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import {mediaMerchandise} from '../../assets/images/merchandise';
// import {merchandiseStore, merchandiseStoreByIndex} from '../../assets/images/merchandise_store';

import { Inertia } from '@inertiajs/inertia';

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

    const [merchandise, setMerchandise] = React.useState([]);
    React.useEffect(() => {
        axios.get('/api/get-content-merchandise')
        .then((response) => {
            //
            let Obj = response.data.merchandise;
            var result=[];
            for(var i=0;i<Obj.length;i++){
                result.push({id: Obj[i].id, nama: Obj[i].nama, link: Obj[i].link, gambar: Obj[i].gambar, zona: Obj[i].zona, attraction_type: Obj[i].attraction_type, deskripsi: Obj[i].deskripsi, nourut: Obj[i].nourut, status: Obj[i].status});
            }
            setMerchandise(result);
        }).catch((error) => {
            //
            console.log(error);
        })
    }, []);

    const CONTENT_COUNT = merchandise.length;
    const contents = Array.from(Array(CONTENT_COUNT).keys());

    return(
        <>
            <Head title='Merchandise'/>
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
                                    fontSize: '38px',
                                    color: '#333'
                                }}>Merchandise Store</Typography>
                            </Box>

                            {contents.map((index) => (
                                <Box
                                sx={{
                                    marginY: '10px',
                                    width: '80%',
                                    height: '500px',
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
                                            onClick={() => redirect('/merchandise/'+merchandise[index].link)}
                                            src={'https://dashboard.salokapark.com/public/foto/souvenir/daftar/'+merchandise[index].gambar}
                                            alt={`merchandise`+index}
                                            style={{
                                                layout: 'fill',
                                                objectFit: 'cover',
                                                objectPosition: 'top',
                                                height: '500px',
                                                maxWidth: '100%',
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
                                                    >{merchandise[index].nama}</Typography>
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
                                                    dangerouslySetInnerHTML={{__html: merchandise[index].deskripsi}}>
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
                                                    onClick={() => redirect('/merchandise/'+merchandise[index].link)}
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
                            ))}

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

                            <Box>
                                <Grid
                                container={true}
                                direction="column"
                                spacing={0}
                                sx={{
                                    marginTop: '100px',
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
                                            fontFamily: 'fontin',
                                            fontWeight: 600,
                                            fontSize: '28px',
                                            color: '#333'
                                        }}>Merchandise Store</Typography>
                                    </Box>

                                    {contents.map((index) => (
                                        <Box
                                        sx={{
                                            marginY: '10px',
                                            width: '90%',
                                            maxHeight: '600px',
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
                                                    onClick={() => redirect('/merchandise/'+merchandise[index].link)}
                                                    src={'https://dashboard.salokapark.com/public/foto/souvenir/daftar/'+merchandise[index].gambar}
                                                    alt={`merchandise`+index}
                                                    style={{
                                                        layout: 'fill',
                                                        objectFit: 'cover',
                                                        objectPosition: 'top',
                                                        width: '100%',
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
                                                            >{merchandise[index].nama}</Typography>
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
                                                            dangerouslySetInnerHTML={{__html: merchandise[index].deskripsi}}>
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
                                                            onClick={() => redirect('/merchandise/'+merchandise[index].link)}
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
                                    ))}


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
