import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Fade} from '@mui/material';
import {ArrowForward} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import {mediaShowEvent, showEvent, showEventByIndex} from '../../assets/images/showEvent';
import { SwiperShowEventBanner } from '../../Components/Carousel';

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

    const CONTENT_COUNT = showEvent.length;
    const contents = Array.from(Array(CONTENT_COUNT).keys());

    const redirect = (route) => {
        Inertia.visit(route);
    }

    return(
        <>

            <Head title='Show & Event'/>
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
                        direction="column"
                        spacing={0}
                        sx={{
                            marginTop: '20px',
                        }}>
                            <Box>
                                <SwiperShowEventBanner/>
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

                                    }}>
                                        <Typography
                                        sx={{
                                            fontFamily: 'fontin',
                                            fontWeight: 600,
                                            fontSize: '38px',
                                            color: '#333'
                                        }}>Show & Event Saloka Theme Park</Typography>
                                    </Box>

                                    {contents.map((index) => (
                                        <Box
                                        sx={{
                                            marginY: '10px',
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
                                                    onClick={() => redirect(showEventByIndex(index).link)}
                                                    src={mediaShowEvent[index]}
                                                    alt={`showEvent`+index}
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
                                                            >{showEvent[index].title}</Typography>
                                                        </Box>
                                                        <Box
                                                        sx={{
                                                            marginTop: '10px',
                                                            display: 'flex',
                                                            justifyContent: 'flex-start',
                                                            alignItems: 'center',
                                                            width: '90%',
                                                        }}>
                                                            <Typography
                                                            sx={{
                                                                textAlign: 'justify',
                                                                fontSize: '18px',
                                                                fontWeight: 400,
                                                                color: '#333'
                                                            }}
                                                            >{showEvent[index].deskripsi}</Typography>
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
                                                            onClick={() => redirect(showEventByIndex(index).link)}
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
                        :
                        <Grid
                        direction="column"
                        spacing={0}
                        sx={{
                            marginTop: '20px',
                        }}>
                            <Box>
                                <SwiperShowEventBanner/>
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
                                        }}>Show & Event Saloka Theme Park</Typography>
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
                                                    onClick={() => redirect(showEventByIndex(index).link)}
                                                    src={mediaShowEvent[index]}
                                                    alt={`showEvent`+index}
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
                                                            >{showEvent[index].title}</Typography>
                                                        </Box>
                                                        <Box
                                                        sx={{
                                                            marginTop: '10px',
                                                            display: 'flex',
                                                            justifyContent: 'flex-start',
                                                            alignItems: 'center',
                                                            width: '90%',
                                                        }}>
                                                            <Typography
                                                            sx={{
                                                                textAlign: 'justify',
                                                                fontSize: '15px',
                                                                fontWeight: 400,
                                                                color: '#333'
                                                            }}
                                                            >{showEvent[index].deskripsi}</Typography>
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
                                                            onClick={() => redirect(showEventByIndex(index).link)}
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
