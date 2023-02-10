import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Paper, Typography, Card, IconButton, Button, TextField, Fade} from '@mui/material';
import {Instagram, Facebook, Twitter, YouTube, LocationOn, DeviceThermostat, Email, Phone, WhatsApp} from '@mui/icons-material';
import {media} from '../../assets/images';

import {mediaAnimal, animalByIndex, getIndexAnimalBySlugs} from '../../assets/images/animal';
import axios from 'axios';

export function useIsMounted() {

    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
        return () => void (isMountedRef.current = false);
    }, []);

    return isMounted;
}

export default function Landscape(props) {
    
    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const externalRedirect = (route) => {
        window.location.href = route
    }

    const isMounted = useIsMounted();

    return (
        <>

        <Head title='Landscape'/>

        <Fade
        in={isMounted}
        timeout={1000}
        style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>
            <div>
                {
                    desktop
                    ?
                    <div>

                        <Grid
                        container={true}
                        direction="column"
                        spacing={0}
                        sx={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            <img
                            src={mediaAnimal[0]}
                            alt="banner image"
                            style={{
                                position: 'sticky',
                                top: '0',
                                layout: 'fill',
                                zIndex: '-1000',
                                objectFit: 'cover',
                                objectPosition: 'top',
                                width: '100%',
                                height: '100vh',
                                filter: 'blur(2px)'
                            }}></img>

                            <Box
                            sx={{
                                zIndex: '1000',
                                position: 'relative',
                                marginTop: '-100vh',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                            }}>
                                <Box
                                elevation={2}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '10vh',
                                    height: '125px',
                                    width: '300px',
                                    borderRadius: '30px',
                                }}>
                                    <Card
                                    elevation={1}
                                    sx={{
                                        zIndex: '10000',
                                        position: 'absolute',
                                        width: '300px',
                                        height: '125px',
                                        background: 'linear-gradient(to right bottom, RGBA(0,0,0, 0.0), RGBA(0,0,0, 0.0))',
                                        borderRadius: '30px',
                                    }}>
                                        <Box
                                        sx={{
                                            width: '300px',
                                            height: '125px',
                                            background: 'linear-gradient(to right bottom, RGBA(0,0,0, 0.4), RGBA(0,0,0, 0.1))',
                                            filter: 'blur(4px)',
                                            borderRadius: '30px',
                                        }}></Box>
                                    </Card>

                                    <Box
                                    sx={{
                                        zIndex: '10001'
                                    }}>
                                        <Typography
                                        sx={{
                                            fontFamily: 'fontin',
                                            fontWeight: 600,
                                            fontSize: '32px',
                                            color: '#fff',
                                            textAlign: 'center',
                                        }}>{animalByIndex(getIndexAnimalBySlugs(props.slugs)).title}</Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Box
                            sx={{
                                zIndex: '1000',
                                position: 'relative',
                            }}>

                                <Card
                                elevation={1}
                                sx={{
                                    display: 'flex',
                                    marginTop: '10vh',
                                    width: '100%',
                                    borderRadius: '30px',
                                }}>

                                    <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                    }}>
                                        <Grid
                                        container={true}
                                        direction="column"
                                        spacing={0}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            minWidth: '200px',
                                            maxWidth: '600px',
                                            height: '100%',
                                            paddingX: '20px',
                                            paddingY: '30px',
                                        }}>

                                            <Box
                                            sx={{
                                                display: 'flex',
                                                width: '100%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <img
                                                src={mediaAnimal[getIndexAnimalBySlugs(props.slugs)]}
                                                alt="banner image"
                                                style={{
                                                    position: 'sticky',
                                                    top: '0',
                                                    layout: 'fill',
                                                    zIndex: '10000',
                                                    objectFit: 'cover',
                                                    objectPosition: 'top',
                                                    width: '90%',
                                                }}></img>
                                            </Box>

                                            <Box
                                            sx={{
                                                marginTop: '10px',
                                            }}>
                                                <Typography
                                                paragraph={true}
                                                sx={{
                                                    fontFamily: 'fontin',
                                                    fontWeight: 500,
                                                    fontSize: '14px',
                                                    color: '#333',
                                                    textAlign: 'justify',
                                                }}>{animalByIndex(getIndexAnimalBySlugs(props.slugs)).deskripsi}</Typography>
                                            </Box>

                                            <Box
                                            sx={{
                                                marginY: '20px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}>
                                                <Box>
                                                    <IconButton
                                                    onClick={() => externalRedirect('https://www.instagram.com/salokapark/')}
                                                    aria-label="instagram"
                                                    component="label"
                                                    sx={{
                                                        color: '#333'
                                                    }}>
                                                        <Instagram />
                                                    </IconButton>
                                                </Box>
                                                <Box>
                                                    <IconButton
                                                    onClick={() => externalRedirect('https://www.facebook.com/salokapark/')}
                                                    aria-label="facebook"
                                                    component="label"
                                                    sx={{
                                                        color: '#333'
                                                    }}>
                                                        <Facebook />
                                                    </IconButton>
                                                </Box>
                                                <Box>
                                                    <IconButton
                                                    onClick={() => externalRedirect('https://twitter.com/salokapark')}
                                                    aria-label="twitter"
                                                    component="label"
                                                    sx={{
                                                        color: '#333'
                                                    }}>
                                                        <Twitter />
                                                    </IconButton>
                                                </Box>
                                                <Box>
                                                    <IconButton
                                                    onClick={() => externalRedirect('https://www.youtube.com/channel/UC-X0frGAtka_RZu9LUTBWUA')}
                                                    aria-label="Youtube"
                                                    component="label"
                                                    sx={{
                                                        color: '#333'
                                                    }}>
                                                        <YouTube />
                                                    </IconButton>
                                                </Box>
                                                <Box
                                                sx={{
                                                }}>
                                                    <IconButton
                                                    onClick={() => externalRedirect('https://www.tiktok.com/@salokapark')}
                                                    aria-label="tiktok"
                                                    component="label"
                                                    sx={{
                                                        color: '#333'
                                                    }}>
                                                        <img
                                                        src={media[5]}
                                                        alt="logo_tiktok"
                                                        width="24px"
                                                        height="24px"
                                                        fill="#333"
                                                        stroke="#333"
                                                        style={{
                                                            fill: '#333',
                                                            color: '#333',
                                                            stroke: '#333',
                                                        }}/>
                                                    </IconButton>
                                                </Box>
                                            </Box>

                                        </Grid>
                                    </Box>
                                </Card>
                            </Box>

                        </Grid>

                    </div>
                    :
                    <div>

                        <Grid
                        container={true}
                        direction="column"
                        spacing={0}
                        sx={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            <img
                            src={mediaAnimal[1]}
                            alt="banner image"
                            style={{
                                position: 'sticky',
                                top: '0',
                                layout: 'fill',
                                zIndex: '-1000',
                                objectFit: 'cover',
                                objectPosition: 'top',
                                width: '100%',
                                height: '100vh',
                                filter: 'blur(2px)'
                            }}></img>

                            <Box
                            sx={{
                                zIndex: '1000',
                                position: 'relative',
                                marginTop: '-100vh',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                            }}>
                                <Box
                                elevation={2}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '10vh',
                                    height: '125px',
                                    width: '300px',
                                    borderRadius: '30px',
                                }}>
                                    <Card
                                    elevation={1}
                                    sx={{
                                        zIndex: '10000',
                                        position: 'absolute',
                                        width: '300px',
                                        height: '125px',
                                        background: 'linear-gradient(to right bottom, RGBA(0,0,0, 0.0), RGBA(0,0,0, 0.0))',
                                        borderRadius: '30px',
                                    }}>
                                        <Box
                                        sx={{
                                            width: '300px',
                                            height: '125px',
                                            background: 'linear-gradient(to right bottom, RGBA(0,0,0, 0.4), RGBA(0,0,0, 0.1))',
                                            filter: 'blur(4px)',
                                            borderRadius: '30px',
                                        }}></Box>
                                    </Card>

                                    <Box
                                    sx={{
                                        zIndex: '10001'
                                    }}>
                                        <Typography
                                        sx={{
                                            fontFamily: 'fontin',
                                            fontWeight: 600,
                                            fontSize: '32px',
                                            color: '#fff',
                                            textAlign: 'center',
                                        }}>{animalByIndex(getIndexAnimalBySlugs(props.slugs)).title}</Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Box
                            sx={{
                                zIndex: '1000',
                                position: 'relative',
                            }}>

                                <Card
                                elevation={1}
                                sx={{
                                    display: 'flex',
                                    marginTop: '10vh',
                                    width: '100%',
                                    borderRadius: '30px',
                                }}>

                                    <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                    }}>
                                        <Grid
                                        container={true}
                                        direction="column"
                                        spacing={0}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            minWidth: '200px',
                                            maxWidth: '600px',
                                            height: '100%',
                                            paddingX: '20px',
                                            paddingY: '30px',
                                        }}>

                                            <Box
                                            sx={{
                                                display: 'flex',
                                                width: '100%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <img
                                                src={mediaAnimal[getIndexAnimalBySlugs(props.slugs)]}
                                                alt="banner image"
                                                style={{
                                                    position: 'sticky',
                                                    top: '0',
                                                    layout: 'fill',
                                                    zIndex: '10000',
                                                    objectFit: 'cover',
                                                    objectPosition: 'top',
                                                    width: '90%',
                                                }}></img>
                                            </Box>

                                            <Box
                                            sx={{
                                                marginTop: '10px',
                                            }}>
                                                <Typography
                                                paragraph={true}
                                                sx={{
                                                    fontFamily: 'fontin',
                                                    fontWeight: 500,
                                                    fontSize: '14px',
                                                    color: '#333',
                                                    textAlign: 'justify',
                                                }}>{animalByIndex(getIndexAnimalBySlugs(props.slugs)).deskripsi}</Typography>
                                            </Box>

                                            <Box
                                            sx={{
                                                marginY: '20px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}>
                                                <Box>
                                                    <IconButton
                                                    onClick={() => externalRedirect('https://www.instagram.com/salokapark/')}
                                                    aria-label="instagram"
                                                    component="label"
                                                    sx={{
                                                        color: '#333'
                                                    }}>
                                                        <Instagram />
                                                    </IconButton>
                                                </Box>
                                                <Box>
                                                    <IconButton
                                                    onClick={() => externalRedirect('https://www.facebook.com/salokapark/')}
                                                    aria-label="facebook"
                                                    component="label"
                                                    sx={{
                                                        color: '#333'
                                                    }}>
                                                        <Facebook />
                                                    </IconButton>
                                                </Box>
                                                <Box>
                                                    <IconButton
                                                    onClick={() => externalRedirect('https://twitter.com/salokapark')}
                                                    aria-label="twitter"
                                                    component="label"
                                                    sx={{
                                                        color: '#333'
                                                    }}>
                                                        <Twitter />
                                                    </IconButton>
                                                </Box>
                                                <Box>
                                                    <IconButton
                                                    onClick={() => externalRedirect('https://www.youtube.com/channel/UC-X0frGAtka_RZu9LUTBWUA')}
                                                    aria-label="Youtube"
                                                    component="label"
                                                    sx={{
                                                        color: '#333'
                                                    }}>
                                                        <YouTube />
                                                    </IconButton>
                                                </Box>
                                                <Box
                                                sx={{
                                                }}>
                                                    <IconButton
                                                    onClick={() => externalRedirect('https://www.tiktok.com/@salokapark')}
                                                    aria-label="tiktok"
                                                    component="label"
                                                    sx={{
                                                        color: '#333'
                                                    }}>
                                                        <img
                                                        src={media[5]}
                                                        alt="logo_tiktok"
                                                        width="24px"
                                                        height="24px"
                                                        fill="#333"
                                                        stroke="#333"
                                                        style={{
                                                            fill: '#333',
                                                            color: '#333',
                                                            stroke: '#333',
                                                        }}/>
                                                    </IconButton>
                                                </Box>
                                            </Box>

                                        </Grid>
                                    </Box>
                                </Card>
                            </Box>

                        </Grid>


                    </div>
                }

            </div>
        </Fade>
        </>
    )
}
