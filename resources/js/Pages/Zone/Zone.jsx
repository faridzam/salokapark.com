import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Button, Fade} from '@mui/material';
import {ArrowForward} from '@mui/icons-material';
import { saveAs } from 'file-saver';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import {mediaZona, zonaByIndex} from '../../assets/images/zona';
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

    function isOdd(num) { return num % 2;}

    const [image, setImage] = React.useState("");
    const [pdf, setPdf] = React.useState("");
    React.useEffect(() => {
        axios.get('/api/get-content-peta')
        .then((response) => {
            //
            setImage(response.data.image);
            setPdf(response.data.pdf);
        }).catch((error) => {
            //
            console.log(error);
        })
    }, []);
    

    const lihatPeta = () => {
        // location.href('https://dashboard.salokapark.com/public/peta/'+image);
        window.open('https://dashboard.salokapark.com/public/peta/'+image)
        .then((response) => {
            //
            //window.close();
        }).catch((error) => {
            //
            //window.close();
        });

    }
    const downloadPeta = () => {
        window.open('https://staging.salokapark.com/api/download-peta/'+pdf)
        .then((response) => {
            window.close();
        }).catch((error) => {
            window.close();
        });
    }

    const [zones, setZones] = React.useState([]);
    React.useEffect(() => {
        axios.get('/api/get-content-zones')
        .then((response) => {
            //
            let Obj = response.data.zones;
            var result=[];
            for(var i=0;i<Obj.length;i++){
                result.push({id: Obj[i].id, nama: Obj[i].nama, link: Obj[i].link, gambar: Obj[i].gambar, warnabg: Obj[i].warnabg, desk_singkat: Obj[i].desk_singkat, deskripsi: Obj[i].deskripsi, no_urut: Obj[i].no_urut, status: Obj[i].status});
            }
            setZones(result);
        }).catch((error) => {
            //
            console.log(error);
        })
    }, []);

    const CONTENT_COUNT = zones.length;
    const contents = Array.from(Array(CONTENT_COUNT).keys());

    return(
        <>
            <Head title='Zona'/>
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
                            }}>
                                <Typography
                                sx={{
                                    fontWeight: 600,
                                    fontSize: '32px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>Peta Zona</Typography>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '20px',
                                cursor: 'pointer',
                                width: '100%',
                            }}>
                                <img
                                src={'https://dashboard.salokapark.com/public/peta/'+image}
                                alt="peta saloka"
                                style={{
                                    layout: 'fill',
                                    objectFit: 'cover',
                                    objectPosition: 'top',
                                    width: '100%',
                                }}></img>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '30px',
                                width: '60%',
                                maxWidth: '640px',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <Button
                                variant='outlined'
                                onClick={() => lihatPeta()}
                                sx={{
                                    width: '200px',
                                    height: '50px',
                                    borderRadius: 50,
                                    border: '2px solid'
                                }}>
                                    Lihat Peta
                                </Button>
                                <Button
                                variant='outlined'
                                onClick={() => downloadPeta()}
                                sx={{
                                    width: '200px',
                                    height: '50px',
                                    borderRadius: 50,
                                    border: '2px solid'
                                }}>
                                    Download Peta
                                </Button>
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
                                }}>5 Zona di Saloka Theme Park</Typography>
                            </Box>


                            <Box
                            sx={{
                                width: '100%'
                            }}>
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

                                    {contents.map((index) => (
                                        <Box
                                        sx={{
                                            backgroundColor: zones[index].warnabg,
                                            width: '90%',
                                            maxHeight: '600px',
                                        }}>
                                            {
                                                isOdd(index)
                                                ?
                                                <Grid
                                                container={true}
                                                direction="row"
                                                spacing={0}
                                                sx={{
                                                    display: 'flex',
                                                    height: '100%',
                                                    width: '100%',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}>
                                                    <Box
                                                    onClick={() => redirect('/zona/'+zones[index].link)}
                                                    sx={{
                                                        width: '70%',
                                                        height: '500px',
                                                        display: 'flex',
                                                        justifyContent: 'flex-start',
                                                    }}>
                                                        <img src={'https://dashboard.salokapark.com/public/foto/zona/'+zones[index].gambar} style={{width: '100%', height: '500px', objectFit: 'cover'}} alt="logo saloka"></img>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        width: '30%',
                                                        height: '100%',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                    }}>
                                                        <Grid
                                                        container={true}
                                                        direction="column"
                                                        spacing={0}
                                                        sx={{
                                                            display: 'flex',
                                                            height: '100%',
                                                            width: '80%',
                                                            justifyContent: 'flex-start',
                                                            alignItems: 'flex-start',
                                                        }}>
                                                            <Box
                                                            sx={{
                                                                marginTop: '10px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                            }}>
                                                                <Typography
                                                                textAlign="left"
                                                                sx={{
                                                                    fontSize: '28px',
                                                                    fontWeight: 600,
                                                                    color: '#fff'
                                                                }}
                                                                >{zones[index].nama}</Typography>
                                                            </Box>

                                                            <Box
                                                            sx={{
                                                                marginTop: '10px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                            }}>
                                                                <Typography
                                                                textAlign="left"
                                                                sx={{
                                                                    fontSize: '16px',
                                                                    fontWeight: 500,
                                                                    color: '#fff'
                                                                }}
                                                                >{zones[index].desk_singkat}</Typography>
                                                            </Box>

                                                            <Box
                                                            onClick={() => redirect('/zona/'+zones[index].link)}
                                                            sx={{
                                                                display: 'flex',
                                                                marginTop: '20px',
                                                                alignItems: 'center',
                                                            }}>
                                                                <Typography
                                                                className="noselect"
                                                                align="justify"
                                                                sx={{
                                                                    cursor: 'pointer',
                                                                    fontSize: '15px',
                                                                    fontWeight: 400,
                                                                    color: '#fff'
                                                                }}
                                                                >Baca Lebih Lanjut</Typography>
                                                                <ArrowForward
                                                                sx={{
                                                                    cursor: 'pointer',
                                                                    marginLeft: '5px',
                                                                    fontSize: 15,
                                                                    color: '#fff'
                                                                }}/>
                                                            </Box>

                                                        </Grid>
                                                    </Box>

                                                </Grid>
                                                :
                                                <Grid
                                                container={true}
                                                direction="row"
                                                spacing={0}
                                                sx={{
                                                    display: 'flex',
                                                    height: '100%',
                                                    width: '100%',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}>

                                                    <Box
                                                    sx={{
                                                        width: '30%',
                                                        height: '100%',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                    }}>
                                                        <Grid
                                                        container={true}
                                                        direction="column"
                                                        spacing={0}
                                                        sx={{
                                                            display: 'flex',
                                                            height: '100%',
                                                            width: '80%',
                                                            justifyContent: 'flex-start',
                                                            alignItems: 'flex-start',
                                                        }}>
                                                            <Box
                                                            sx={{
                                                                marginTop: '10px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                            }}>
                                                                <Typography
                                                                textAlign="left"
                                                                sx={{
                                                                    fontSize: '28px',
                                                                    fontWeight: 600,
                                                                    color: '#fff'
                                                                }}
                                                                >{zones[index].nama}</Typography>
                                                            </Box>

                                                            <Box
                                                            sx={{
                                                                marginTop: '10px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                            }}>
                                                                <Typography
                                                                textAlign="left"
                                                                sx={{
                                                                    fontSize: '16px',
                                                                    fontWeight: 500,
                                                                    color: '#fff'
                                                                }}
                                                                >{zones[index].desk_singkat.slice(0, 500)+(zones[index].desk_singkat.length > 500 ? "..." : "")}</Typography>
                                                            </Box>

                                                            <Box
                                                            onClick={() => redirect('/zona/'+zones[index].link)}
                                                            sx={{
                                                                display: 'flex',
                                                                marginTop: '20px',
                                                                alignItems: 'center',
                                                            }}>
                                                                <Typography
                                                                className="noselect"
                                                                align="justify"
                                                                sx={{
                                                                    cursor: 'pointer',
                                                                    fontSize: '15px',
                                                                    fontWeight: 400,
                                                                    color: '#fff'
                                                                }}
                                                                >Baca Lebih Lanjut</Typography>
                                                                <ArrowForward
                                                                sx={{
                                                                    cursor: 'pointer',
                                                                    marginLeft: '5px',
                                                                    fontSize: 15,
                                                                    color: '#fff'
                                                                }}/>
                                                            </Box>

                                                        </Grid>
                                                    </Box>

                                                    <Box
                                                    onClick={() => redirect('/zona/'+zones[index].link)}
                                                    sx={{
                                                        width: '70%',
                                                        height: '500px',
                                                        display: 'flex',
                                                        justifyContent: 'flex-end',
                                                    }}>
                                                        <img src={'https://dashboard.salokapark.com/public/foto/zona/'+zones[index].gambar} style={{width: '100%', height: '500px', objectFit: 'cover'}} alt="logo saloka"></img>
                                                    </Box>

                                                </Grid>
                                            }
                                        </Box>
                                    ))}

                                </Grid>
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
                            }}>
                                <Typography
                                sx={{
                                    fontWeight: 600,
                                    fontSize: '32px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>Peta Zona</Typography>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '20px',
                                cursor: 'pointer',
                            }}>
                                <img src={'https://dashboard.salokapark.com/public/peta/'+image} alt="logo saloka"></img>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '30px',
                                width: '90%',
                                maxWidth: '640px',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <Button
                                variant='outlined'
                                onClick={() => lihatPeta()}
                                sx={{
                                    marginX: '5px',
                                    width: '200px',
                                    height: '50px',
                                    borderRadius: 50,
                                    border: '2px solid',
                                }}>
                                    Lihat Peta
                                </Button>
                                <Button
                                variant='outlined'
                                sx={{
                                    marginX: '5px',
                                    width: '200px',
                                    height: '50px',
                                    borderRadius: 50,
                                    border: '2px solid',
                                }}>
                                    <a href={'https://dashboard.salokapark.com/public/peta/'+pdf} download="peta_saloka.pdf">Download Peta</a>
                                </Button>
                            </Box>

                            <Box
                            sx={{
                                width: '90%',
                                marginTop: '50px',
                            }}>
                                <Typography
                                sx={{
                                    fontWeight: 600,
                                    fontSize: '24px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>5 Zona di Saloka Theme Park</Typography>
                            </Box>

                            <Box
                            sx={{
                                width: '100%'
                            }}>
                                <Grid
                                container={true}
                                direction="column"
                                spacing={0}
                                sx={{
                                    marginY: '10px',
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>

                                    {contents.map((index) => (
                                        <Box
                                        sx={{
                                            marginY: '10px',
                                            backgroundColor: zones[index].warnabg,
                                            width: '90%',
                                            maxHeight: '600px',
                                        }}>
                                            <Grid
                                            container={true}
                                            direction="column"
                                            spacing={0}
                                            sx={{
                                                display: 'flex',
                                                height: '100%',
                                                width: '100%',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                            }}>
                                                <Box
                                                onClick={() => redirect('/zona/'+zones[index].link)}
                                                sx={{
                                                    width: '100%',
                                                    display: 'flex',
                                                    justifyContent: 'flex-start',
                                                }}>
                                                    <img src={'https://dashboard.salokapark.com/public/foto/zona/'+zones[index].gambar} alt="logo saloka"></img>
                                                </Box>

                                                <Box
                                                sx={{
                                                    width: '80%',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                }}>
                                                    <Grid
                                                    container={true}
                                                    direction="column"
                                                    spacing={0}
                                                    sx={{
                                                        marginY: '30px',
                                                        display: 'flex',
                                                        height: '100%',
                                                        width: '100%',
                                                        justifyContent: 'flex-start',
                                                        alignItems: 'flex-start',
                                                    }}>
                                                        <Box
                                                        sx={{
                                                            marginTop: '10px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                        }}>
                                                            <Typography
                                                            textAlign="left"
                                                            sx={{
                                                                fontSize: '24px',
                                                                fontWeight: 600,
                                                                color: '#ddd'
                                                            }}
                                                            >{zones[index].nama}</Typography>
                                                        </Box>

                                                        <Box
                                                        sx={{
                                                            marginTop: '10px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                        }}>
                                                            <Typography
                                                            textAlign="left"
                                                            sx={{
                                                                fontSize: '14px',
                                                                fontWeight: 500,
                                                                color: '#ddd'
                                                            }}
                                                            >{zones[index].desk_singkat.slice(0, 500)+(zones[index].desk_singkat.length > 500 ? "..." : "")}</Typography>
                                                        </Box>

                                                        <Box
                                                        onClick={() => redirect('/zona/'+zones[index].link)}
                                                        sx={{
                                                            display: 'flex',
                                                            marginTop: '20px',
                                                            alignItems: 'center',
                                                        }}>
                                                            <Typography
                                                            className="noselect"
                                                            align="justify"
                                                            sx={{
                                                                cursor: 'pointer',
                                                                fontSize: '14px',
                                                                fontWeight: 400,
                                                                color: '#ddd'
                                                            }}
                                                            >Baca Lebih Lanjut</Typography>
                                                            <ArrowForward
                                                            sx={{
                                                                cursor: 'pointer',
                                                                marginLeft: '5px',
                                                                fontSize: 14,
                                                                color: '#ddd'
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
