import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Button, Fade} from '@mui/material';
import {FiberManualRecord, ArrowForward} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import {berita} from '../../assets/images/berita';
import zIndex from '@mui/material/styles/zIndex';

export function useIsMounted() {
    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
      return () => void (isMountedRef.current = false);
    }, []);

    return isMounted;
}

export default function Berita(props) {
    const isMounted = useIsMounted();

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const redirect = (route) => {
        Inertia.visit(route);
    }

    const CONTENT_COUNT = berita.length;
    const contents = Array.from(Array(CONTENT_COUNT).keys());

    return(
        <>
            <Head title='Berita'/>
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
                            display: 'flex',
                            height: '100%',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Box
                            sx={{
                                marginTop: '100px',
                                display: 'flex',
                                height: '100%',
                                width: '60%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Grid
                                container={true}
                                direction="row"
                                spacing={0}
                                sx={{
                                    display: 'flex',
                                    height: '400px',
                                    width: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Box
                                    sx={{
                                        width: '40%',
                                        height: '100%',
                                        paddingX: '20px'
                                    }}>
                                        <img
                                        src={berita[0].image}
                                        loading="lazy"
                                        alt="logo saloka"
                                        style={{
                                            layout: 'fill',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                            width: '100%',
                                            height: '100%',
                                        }}></img>
                                    </Box>
                                    <Box
                                    sx={{
                                        width: '60%',
                                        height: '90%',
                                        paddingX: '20px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Grid
                                        container={true}
                                        direction="column"
                                        spacing={0}
                                        sx={{
                                            display: 'flex',
                                            height: '100%',
                                            width: '100%',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Box
                                            sx={{
                                                width: '100%',
                                            }}>
                                                <Grid
                                                container={true}
                                                direction="row"
                                                spacing={0}
                                                sx={{
                                                    display: 'flex',
                                                    height: '100%',
                                                    width: '100%',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center',
                                                }}>
                                                    <Typography
                                                    sx={{
                                                        fontWeight: 600,
                                                        fontSize: '14px',
                                                        color: 'secondary.light'
                                                    }}>{berita[0].category}</Typography>
                                                    <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}>
                                                        <FiberManualRecord fontSize='8px' sx={{marginX: '10px', fontSize: '8px'}}/>
                                                    </Box>
                                                    <Typography
                                                    sx={{
                                                        fontWeight: 600,
                                                        fontSize: '14px',
                                                        color: '#333'
                                                    }}>{berita[0].date}</Typography>
                                                </Grid>
                                            </Box>
                                            <Box
                                            sx={{
                                                width: '100%',
                                                marginTop: '10px',
                                            }}>
                                                <Typography
                                                sx={{
                                                    fontWeight: 600,
                                                    fontSize: '28px',
                                                    color: '#333'
                                                }}>{berita[0].title}</Typography>
                                            </Box>
                                            <Box
                                            sx={{
                                                width: '100%',
                                                marginTop: '10px',
                                            }}>
                                                <Typography
                                                paragraph={true}
                                                align='justify'
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: '14px',
                                                    color: '#333'
                                                }}>{berita[0].deskripsi.slice(0, 500) + "..."}</Typography>
                                            </Box>

                                            <Box
                                            sx={{
                                                width: '100%',
                                                display: 'flex',
                                                marginTop: '20px',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                            }}>
                                                <Typography
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

                            <Box
                            sx={{
                                marginTop: '100px',
                                width: '70%',
                            }}>
                                <Typography
                                className="noselect"
                                sx={{
                                    textAlign: 'center',
                                    fontSize: '24px',
                                    fontWeight: 500,
                                    color: 'primary.light'
                                }}
                                >Latest Articles</Typography>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '20px',
                                width: '70%',
                            }}>
                                <Grid
                                container={true}
                                direction="row"
                                spacing={10}
                                sx={{
                                    display: 'flex',
                                    height: '100%',
                                    width: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    {contents.map((index) => (
                                        <Grid item xs={12} sm={6} md={3} key={index}>
                                            <Box>
                                                <Grid
                                                container={true}
                                                direction="column"
                                                spacing={0}
                                                sx={{
                                                    display: 'flex',
                                                    height: '100%',
                                                    width: '100%',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Box
                                                    sx={{
                                                        width: '350px',
                                                        height: '100%',
                                                    }}>
                                                        <img
                                                        src={berita[index].image}
                                                        loading="lazy"
                                                        alt="logo saloka"
                                                        style={{
                                                            layout: 'fill',
                                                            objectFit: 'cover',
                                                            objectPosition: 'top',
                                                            width: '100%',
                                                            height: '100%',
                                                        }}></img>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        marginTop: '5px',
                                                        width: '100%',
                                                        height: '100%',
                                                    }}>
                                                        <Grid
                                                        container={true}
                                                        direction="row"
                                                        spacing={0}
                                                        sx={{
                                                            display: 'flex',
                                                            height: '100%',
                                                            width: '100%',
                                                            justifyContent: 'flex-start',
                                                            alignItems: 'center',
                                                        }}>
                                                            <Typography
                                                            sx={{
                                                                fontWeight: 600,
                                                                fontSize: '12px',
                                                                color: 'secondary.light'
                                                            }}>{berita[index].category}</Typography>
                                                            <Box
                                                            sx={{
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                            }}>
                                                                <FiberManualRecord fontSize='6px' sx={{marginX: '5px', fontSize: '6px'}}/>
                                                            </Box>
                                                            <Typography
                                                            sx={{
                                                                fontWeight: 600,
                                                                fontSize: '12px',
                                                                color: '#333'
                                                            }}>{berita[index].date}</Typography>
                                                        </Grid>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        width: '100%',
                                                        height: '100%',
                                                        marginTop: '5px',
                                                    }}>
                                                        <Typography
                                                        sx={{
                                                            fontWeight: 600,
                                                            fontSize: '24px',
                                                            color: '#333'
                                                        }}>{berita[index].title}</Typography>
                                                    </Box>
                                                </Grid>
                                            </Box>
                                        </Grid>
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
                            display: 'flex',
                            height: '100%',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Box
                            sx={{
                                marginTop: '50px',
                            }}>
                                <Typography
                                className="noselect"
                                sx={{
                                    textAlign: 'center',
                                    fontSize: '24px',
                                    fontWeight: 500,
                                    color: 'primary.light'
                                }}
                                >Latest Articles</Typography>
                            </Box>

                            {contents.map((index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Box>
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
                                            alignItems: 'center',
                                        }}>
                                            <Box
                                            sx={{
                                                width: '350px',
                                                height: '100%',
                                            }}>
                                                <img
                                                src={berita[index].image}
                                                loading="lazy"
                                                alt="logo saloka"
                                                style={{
                                                    layout: 'fill',
                                                    objectFit: 'cover',
                                                    objectPosition: 'top',
                                                    width: '100%',
                                                    height: '100%',
                                                }}></img>
                                            </Box>

                                            <Box
                                            sx={{
                                                marginTop: '5px',
                                                width: '100%',
                                                height: '100%',
                                            }}>
                                                <Grid
                                                container={true}
                                                direction="row"
                                                spacing={0}
                                                sx={{
                                                    display: 'flex',
                                                    height: '100%',
                                                    width: '100%',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center',
                                                }}>
                                                    <Typography
                                                    sx={{
                                                        fontWeight: 600,
                                                        fontSize: '12px',
                                                        color: 'secondary.light'
                                                    }}>{berita[index].category}</Typography>
                                                    <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}>
                                                        <FiberManualRecord fontSize='6px' sx={{marginX: '5px', fontSize: '6px'}}/>
                                                    </Box>
                                                    <Typography
                                                    sx={{
                                                        fontWeight: 600,
                                                        fontSize: '12px',
                                                        color: '#333'
                                                    }}>{berita[index].date}</Typography>
                                                </Grid>
                                            </Box>

                                            <Box
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                marginTop: '5px',
                                            }}>
                                                <Typography
                                                sx={{
                                                    fontWeight: 600,
                                                    fontSize: '24px',
                                                    color: '#333'
                                                }}>{berita[index].title}</Typography>
                                            </Box>
                                        </Grid>
                                    </Box>
                                </Grid>
                            ))}
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
    )
}