import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Button, Fade} from '@mui/material';
import {ArrowForward} from '@mui/icons-material';

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

    return(
        <>
            <Head title='Zona'/>
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
                                    fontSize: '32px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>Peta Zona</Typography>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '50px',
                                cursor: 'pointer',
                            }}>
                                <img src={mediaZona[0]} alt="logo saloka"></img>
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
                                sx={{
                                    width: '200px',
                                    height: '50px',
                                }}>
                                    Lihat Peta
                                </Button>
                                <Button
                                variant='outlined'
                                sx={{
                                    width: '200px',
                                    height: '50px',
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
                                    fontFamily: 'fontin',
                                    fontWeight: 600,
                                    fontSize: '32px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>5 Zona yang Ada di Saloka Theme Park</Typography>
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
                                    marginTop: '100px',
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Box
                                    sx={{
                                        backgroundColor: 'primary.light',
                                        width: '90%',
                                        maxHeight: '600px',
                                    }}>
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
                                                width: '50%',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                            }}>
                                                <img src={mediaZona[1]} alt="logo saloka"></img>
                                            </Box>

                                            <Box
                                            sx={{
                                                width: '50%',
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
                                                            fontWeight: 500,
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(1).nama}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        marginTop: '10px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        textAlign="justify"
                                                        sx={{
                                                            fontSize: '18px',
                                                            fontWeight: 400,
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(1).deskripsi}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        display: 'flex',
                                                        marginTop: '20px',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        onClick={() => redirect(zonaByIndex(1).link)}
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
                                        backgroundColor: 'secondary.light',
                                        width: '90%',
                                        maxHeight: '600px',
                                    }}>
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
                                                width: '50%',
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
                                                            fontWeight: 500,
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(2).nama}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        marginTop: '10px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        textAlign="justify"
                                                        sx={{
                                                            fontSize: '18px',
                                                            fontWeight: 400,
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(2).deskripsi}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        display: 'flex',
                                                        marginTop: '20px',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        onClick={() => redirect(zonaByIndex(2).link)}
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

                                            <Box
                                            sx={{
                                                width: '50%',
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                            }}>
                                                <img src={mediaZona[2]} alt="logo saloka"></img>
                                            </Box>

                                        </Grid>
                                    </Box>

                                    <Box
                                    sx={{
                                        backgroundColor: 'blue.light',
                                        width: '90%',
                                        maxHeight: '600px',
                                    }}>
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
                                                width: '50%',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                            }}>
                                                <img src={mediaZona[3]} alt="logo saloka"></img>
                                            </Box>

                                            <Box
                                            sx={{
                                                width: '50%',
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
                                                            fontWeight: 500,
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(3).nama}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        marginTop: '10px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        textAlign="justify"
                                                        sx={{
                                                            fontSize: '18px',
                                                            fontWeight: 400,
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(3).deskripsi}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        display: 'flex',
                                                        marginTop: '20px',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        onClick={() => redirect(zonaByIndex(3).link)}
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
                                        backgroundColor: 'red.light',
                                        width: '90%',
                                        maxHeight: '600px',
                                    }}>
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
                                                width: '50%',
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
                                                            fontWeight: 500,
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(4).nama}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        marginTop: '10px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        textAlign="justify"
                                                        sx={{
                                                            fontSize: '18px',
                                                            fontWeight: 400,
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(4).deskripsi}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        display: 'flex',
                                                        marginTop: '20px',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        onClick={() => redirect(zonaByIndex(4).link)}
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

                                            <Box
                                            sx={{
                                                width: '50%',
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                            }}>
                                                <img src={mediaZona[4]} alt="logo saloka"></img>
                                            </Box>

                                        </Grid>
                                    </Box>

                                    <Box
                                    sx={{
                                        backgroundColor: 'brown.light',
                                        width: '90%',
                                        maxHeight: '600px',
                                    }}>
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
                                                width: '50%',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                            }}>
                                                <img src={mediaZona[5]} alt="logo saloka"></img>
                                            </Box>

                                            <Box
                                            sx={{
                                                width: '50%',
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
                                                            fontWeight: 500,
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(5).nama}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        marginTop: '10px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        textAlign="justify"
                                                        sx={{
                                                            fontSize: '18px',
                                                            fontWeight: 400,
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(5).deskripsi}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        display: 'flex',
                                                        marginTop: '20px',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        onClick={() => redirect(zonaByIndex(5).link)}
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

                        </Grid>
                        :
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
                            <Box
                            sx={{
                            }}>
                                <Typography
                                sx={{
                                    fontFamily: 'fontin',
                                    fontWeight: 600,
                                    fontSize: '32px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>Peta Zona</Typography>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '50px',
                                cursor: 'pointer',
                            }}>
                                <img src={mediaZona[0]} alt="logo saloka"></img>
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
                                sx={{
                                    marginX: '5px',
                                    width: '200px',
                                    height: '50px',
                                }}>
                                    Lihat Peta
                                </Button>
                                <Button
                                variant='outlined'
                                sx={{
                                    marginX: '5px',
                                    width: '200px',
                                    height: '50px',
                                }}>
                                    Download Peta
                                </Button>
                            </Box>

                            <Box
                            sx={{
                                width: '90%',
                                marginTop: '50px',
                            }}>
                                <Typography
                                sx={{
                                    fontFamily: 'fontin',
                                    fontWeight: 600,
                                    fontSize: '24px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>5 Zona yang Ada di Saloka Theme Park</Typography>
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
                                    <Box
                                    sx={{
                                        marginY: '10px',
                                        backgroundColor: 'primary.light',
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
                                            sx={{
                                                width: '100%',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                            }}>
                                                <img src={mediaZona[1]} alt="logo saloka"></img>
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
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(1).nama}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        marginTop: '10px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        textAlign="justify"
                                                        sx={{
                                                            fontSize: '16px',
                                                            fontWeight: 400,
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(1).deskripsi}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        display: 'flex',
                                                        marginTop: '20px',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        onClick={() => redirect(zonaByIndex(1).link)}
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
                                        marginY: '10px',
                                        backgroundColor: 'secondary.light',
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
                                            sx={{
                                                width: '100%',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                            }}>
                                                <img src={mediaZona[2]} alt="logo saloka"></img>
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
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(2).nama}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        marginTop: '10px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        textAlign="justify"
                                                        sx={{
                                                            fontSize: '16px',
                                                            fontWeight: 400,
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(2).deskripsi}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        display: 'flex',
                                                        marginTop: '20px',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        onClick={() => redirect(zonaByIndex(2).link)}
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
                                        marginY: '10px',
                                        backgroundColor: 'blue.light',
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
                                            sx={{
                                                width: '100%',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                            }}>
                                                <img src={mediaZona[3]} alt="logo saloka"></img>
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
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(3).nama}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        marginTop: '10px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        textAlign="justify"
                                                        sx={{
                                                            fontSize: '16px',
                                                            fontWeight: 400,
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(3).deskripsi}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        display: 'flex',
                                                        marginTop: '20px',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        onClick={() => redirect(zonaByIndex(3).link)}
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
                                        marginY: '10px',
                                        backgroundColor: 'red.light',
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
                                            sx={{
                                                width: '100%',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                            }}>
                                                <img src={mediaZona[4]} alt="logo saloka"></img>
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
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(4).nama}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        marginTop: '10px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        textAlign="justify"
                                                        sx={{
                                                            fontSize: '16px',
                                                            fontWeight: 400,
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(4).deskripsi}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        display: 'flex',
                                                        marginTop: '20px',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        onClick={() => redirect(zonaByIndex(4).link)}
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
                                        marginY: '10px',
                                        backgroundColor: 'brown.light',
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
                                            sx={{
                                                width: '100%',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                            }}>
                                                <img src={mediaZona[5]} alt="logo saloka"></img>
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
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(5).nama}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        marginTop: '10px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        textAlign="justify"
                                                        sx={{
                                                            fontSize: '16px',
                                                            fontWeight: 400,
                                                            color: '#333'
                                                        }}
                                                        >{zonaByIndex(5).deskripsi}</Typography>
                                                    </Box>

                                                    <Box
                                                    sx={{
                                                        display: 'flex',
                                                        marginTop: '20px',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        onClick={() => redirect(zonaByIndex(5).link)}
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
