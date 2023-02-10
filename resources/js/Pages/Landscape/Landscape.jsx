import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Paper, Typography, Card, IconButton, Button, TextField, Fade} from '@mui/material';
import {Instagram, Facebook, Twitter, YouTube, LocationOn, DeviceThermostat, Email, Phone, WhatsApp} from '@mui/icons-material';
import {media} from '../../assets/images';

import {mediaLandscape, landscapeByIndex, getIndexLandscapeBySlugs} from '../../assets/images/landscape';
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
    const [manfaat, setManfaat] = React.useState([]);

    React.useEffect(() => {
        //
        const manfaatString = landscapeByIndex(getIndexLandscapeBySlugs(props.slugs)).manfaat;
        var manfaatArray = manfaatString.split(',');
        setManfaat(manfaatArray);
    })

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
                            src={mediaLandscape[0]}
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
                                        position: 'absolute',
                                        width: '300px',
                                        height: '125px',
                                        background: 'linear-gradient(to right bottom, RGBA(255,255,255, 0.0), RGBA(255,255,255, 0.0))',
                                        borderRadius: '30px',
                                    }}>
                                        <Box
                                        sx={{
                                            width: '300px',
                                            height: '125px',
                                            background: 'linear-gradient(to right bottom, RGBA(255,255,255, 0.4), RGBA(255,255,255, 0.1))',
                                            filter: 'blur(4px)',
                                            borderRadius: '30px',
                                        }}></Box>
                                    </Card>

                                    <Box
                                    sx={{
                                    }}>
                                        <Typography
                                        sx={{
                                            fontFamily: 'fontin',
                                            fontWeight: 600,
                                            fontSize: '32px',
                                            color: '#ddd',
                                            textAlign: 'center',
                                        }}>{landscapeByIndex(getIndexLandscapeBySlugs(props.slugs)).title}</Typography>
                                        <hr
                                            style={{
                                                color: '#ddd',
                                                backgroundColor: '#ddd',
                                                height: 2
                                            }}
                                        />
                                        <Typography
                                        sx={{
                                            fontFamily: 'fontin',
                                            fontWeight: 500,
                                            fontSize: '18px',
                                            color: '#ddd',
                                            textAlign: 'center',
                                        }}>{landscapeByIndex(getIndexLandscapeBySlugs(props.slugs)).subTitle}</Typography>
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
                                    borderTopLeftRadius: '30px',
                                    borderTopRightRadius: '30px',
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
                                                marginBottom: '20px',
                                                width: '100%'
                                            }}>
                                                <Grid
                                                container={true}
                                                direction="row"
                                                spacing={0}
                                                sx={{
                                                    width: '100%',
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'space-between',
                                                }}>
                                                    <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                    }}>
                                                    <LocationOn/>
                                                    <Typography
                                                    sx={{
                                                        fontFamily: 'fontin',
                                                        fontWeight: 500,
                                                        fontSize: '14px',
                                                        color: '#333',
                                                        textAlign: 'left',
                                                    }}>{landscapeByIndex(getIndexLandscapeBySlugs(props.slugs)).location}</Typography>
                                                    </Box>
                                                    <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                    }}>
                                                    <DeviceThermostat/>
                                                    <Typography
                                                    sx={{
                                                        fontFamily: 'fontin',
                                                        fontWeight: 500,
                                                        fontSize: '14px',
                                                        color: '#333',
                                                        textAlign: 'left',
                                                    }}>{landscapeByIndex(getIndexLandscapeBySlugs(props.slugs)).climate}</Typography>
                                                    </Box>
                                                </Grid>
                                            </Box>
                                            <Box>
                                                <Typography
                                                sx={{
                                                    fontFamily: 'fontin',
                                                    fontWeight: 500,
                                                    fontSize: '14px',
                                                    color: '#333',
                                                    textAlign: 'left',
                                                }}>Nama Lokal:</Typography>
                                            </Box>
                                            <Box>
                                                <Typography
                                                sx={{
                                                    fontFamily: 'fontin',
                                                    fontWeight: 600,
                                                    fontSize: '16px',
                                                    color: '#333',
                                                    textAlign: 'left',
                                                }}>{landscapeByIndex(getIndexLandscapeBySlugs(props.slugs)).localName}</Typography>
                                            </Box>
                                            <Box>
                                                <Typography
                                                sx={{
                                                    fontFamily: 'fontin',
                                                    fontWeight: 500,
                                                    fontSize: '14px',
                                                    color: '#333',
                                                    textAlign: 'left',
                                                }}>Nama Umum:</Typography>
                                            </Box>
                                            <Box>
                                                <Typography
                                                sx={{
                                                    fontFamily: 'fontin',
                                                    fontWeight: 600,
                                                    fontSize: '16px',
                                                    color: '#333',
                                                    textAlign: 'left',
                                                }}>{landscapeByIndex(getIndexLandscapeBySlugs(props.slugs)).generalName}</Typography>
                                            </Box>
                                            <hr
                                            style={{
                                                color: '#333',
                                                backgroundColor: '#333',
                                                height: 2
                                            }}
                                            />
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
                                                }}>{landscapeByIndex(getIndexLandscapeBySlugs(props.slugs)).deskripsi}</Typography>
                                            </Box>
                                            <Box
                                            sx={{
                                                marginTop: '10px',
                                            }}>
                                                <Typography
                                                paragraph={true}
                                                sx={{
                                                    fontFamily: 'fontin',
                                                    fontWeight: 600,
                                                    fontSize: '16px',
                                                    color: '#333',
                                                    textAlign: 'justify',
                                                }}>Manfaat:</Typography>
                                            </Box>

                                            {Array.from(Array(manfaat.length).keys()).map((index) => (
                                                <Typography
                                                sx={{
                                                    fontFamily: 'fontin',
                                                    fontWeight: 500,
                                                    fontSize: '14px',
                                                    color: '#333',
                                                    textAlign: 'left',
                                                }}>• {manfaat[index]}</Typography>
                                            ))}

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
                            src={mediaLandscape[1]}
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
                                        position: 'absolute',
                                        width: '300px',
                                        height: '125px',
                                        background: 'linear-gradient(to right bottom, RGBA(255,255,255, 0.0), RGBA(255,255,255, 0.0))',
                                        borderRadius: '30px',
                                    }}>
                                        <Box
                                        sx={{
                                            width: '300px',
                                            height: '125px',
                                            background: 'linear-gradient(to right bottom, RGBA(255,255,255, 0.4), RGBA(255,255,255, 0.1))',
                                            filter: 'blur(4px)',
                                            borderRadius: '30px',
                                        }}></Box>
                                    </Card>

                                    <Box
                                    sx={{
                                    }}>
                                        <Typography
                                        sx={{
                                            fontFamily: 'fontin',
                                            fontWeight: 600,
                                            fontSize: '32px',
                                            color: '#ddd',
                                            textAlign: 'center',
                                        }}>{landscapeByIndex(getIndexLandscapeBySlugs(props.slugs)).title}</Typography>
                                        <hr
                                            style={{
                                                color: '#ddd',
                                                backgroundColor: '#ddd',
                                                height: 2
                                            }}
                                        />
                                        <Typography
                                        sx={{
                                            fontFamily: 'fontin',
                                            fontWeight: 500,
                                            fontSize: '18px',
                                            color: '#ddd',
                                            textAlign: 'center',
                                        }}>{landscapeByIndex(getIndexLandscapeBySlugs(props.slugs)).subTitle}</Typography>
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
                                    borderTopLeftRadius: '30px',
                                    borderTopRightRadius: '30px',
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
                                                marginBottom: '20px',
                                                width: '100%'
                                            }}>
                                                <Grid
                                                container={true}
                                                direction="row"
                                                spacing={0}
                                                sx={{
                                                    width: '100%',
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'space-between',
                                                }}>
                                                    <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                    }}>
                                                    <LocationOn/>
                                                    <Typography
                                                    sx={{
                                                        fontFamily: 'fontin',
                                                        fontWeight: 500,
                                                        fontSize: '14px',
                                                        color: '#333',
                                                        textAlign: 'left',
                                                    }}>{landscapeByIndex(getIndexLandscapeBySlugs(props.slugs)).location}</Typography>
                                                    </Box>
                                                    <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                    }}>
                                                    <DeviceThermostat/>
                                                    <Typography
                                                    sx={{
                                                        fontFamily: 'fontin',
                                                        fontWeight: 500,
                                                        fontSize: '14px',
                                                        color: '#333',
                                                        textAlign: 'left',
                                                    }}>{landscapeByIndex(getIndexLandscapeBySlugs(props.slugs)).climate}</Typography>
                                                    </Box>
                                                </Grid>
                                            </Box>
                                            <Box>
                                                <Typography
                                                sx={{
                                                    fontFamily: 'fontin',
                                                    fontWeight: 500,
                                                    fontSize: '14px',
                                                    color: '#333',
                                                    textAlign: 'left',
                                                }}>Nama Lokal:</Typography>
                                            </Box>
                                            <Box>
                                                <Typography
                                                sx={{
                                                    fontFamily: 'fontin',
                                                    fontWeight: 600,
                                                    fontSize: '16px',
                                                    color: '#333',
                                                    textAlign: 'left',
                                                }}>{landscapeByIndex(getIndexLandscapeBySlugs(props.slugs)).localName}</Typography>
                                            </Box>
                                            <Box>
                                                <Typography
                                                sx={{
                                                    fontFamily: 'fontin',
                                                    fontWeight: 500,
                                                    fontSize: '14px',
                                                    color: '#333',
                                                    textAlign: 'left',
                                                }}>Nama Umum:</Typography>
                                            </Box>
                                            <Box>
                                                <Typography
                                                sx={{
                                                    fontFamily: 'fontin',
                                                    fontWeight: 600,
                                                    fontSize: '16px',
                                                    color: '#333',
                                                    textAlign: 'left',
                                                }}>{landscapeByIndex(getIndexLandscapeBySlugs(props.slugs)).generalName}</Typography>
                                            </Box>
                                            <hr
                                            style={{
                                                color: '#333',
                                                backgroundColor: '#333',
                                                height: 2
                                            }}
                                            />
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
                                                }}>{landscapeByIndex(getIndexLandscapeBySlugs(props.slugs)).deskripsi}</Typography>
                                            </Box>
                                            <Box
                                            sx={{
                                                marginTop: '10px',
                                            }}>
                                                <Typography
                                                paragraph={true}
                                                sx={{
                                                    fontFamily: 'fontin',
                                                    fontWeight: 600,
                                                    fontSize: '16px',
                                                    color: '#333',
                                                    textAlign: 'justify',
                                                }}>Manfaat:</Typography>
                                            </Box>

                                            {Array.from(Array(manfaat.length).keys()).map((index) => (
                                                <Typography
                                                sx={{
                                                    fontFamily: 'fontin',
                                                    fontWeight: 500,
                                                    fontSize: '14px',
                                                    color: '#333',
                                                    textAlign: 'left',
                                                }}>• {manfaat[index]}</Typography>
                                            ))}

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
