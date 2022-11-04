import React from "react";
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, IconButton, TextField, Button} from '@mui/material';
import {Instagram, Facebook, Twitter, YouTube, LocationOn, Email, Phone, WhatsApp} from '@mui/icons-material';
import {media} from '../assets/images';

const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      width: 300,
      margin: 100,
    },
    //style for font size
    resize:{
      fontSize:50
    },
}

export default function Footer() {

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    return(
        <Grid
        container={true}
        direction="column"
        spacing={0}
        sx={{
            paddingY: '50px',
            paddingX: '5%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
        }}>

            {
                desktop
                ?
                <>
                    <Box
                    sx={{
                        marginTop: '150px',
                        display: 'flex',
                        width: '100%',
                        height: '87px',
                        justifyContent: `flex-end`
                    }}>
                        <img
                        src={media[1]}
                        alt="logo_saloka"
                        width={300}
                        height={87}></img>
                    </Box>

                    <Grid
                    container={true}
                    direction="row"
                    spacing={0}
                    sx={{
                        marginTop: '100px',
                        width: '100%',
                    }}>

                        {/* zona */}
                        <Grid
                        container={true}
                        direction="column"
                        spacing={0}
                        sx={{
                            display: 'flex',
                            width: '15%'
                        }}>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}>
                                <Typography
                                className="noselect"
                                sx={{
                                    fontSize: '34px',
                                    fontWeight: 600,
                                    color: '#eee'
                                }}
                                >Zona</Typography>
                            </Box>

                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}>
                                <Typography
                                className="noselect"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    color: '#eee',
                                    cursor: 'pointer',
                                    "&:hover": {
                                        color: 'primary.light'
                                    },
                                }}
                                >Pesisir</Typography>
                            </Box>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}>
                                <Typography
                                className="noselect"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    color: '#eee',
                                    cursor: 'pointer',
                                    "&:hover": {
                                        color: 'primary.light'
                                    },
                                }}
                                >Balalantara</Typography>
                            </Box>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}>
                                <Typography
                                className="noselect"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    color: '#eee',
                                    cursor: 'pointer',
                                    "&:hover": {
                                        color: 'primary.light'
                                    },
                                }}
                                >Kamayayi</Typography>
                            </Box>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}>
                                <Typography
                                className="noselect"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    color: '#eee',
                                    cursor: 'pointer',
                                    "&:hover": {
                                        color: 'primary.light'
                                    },
                                }}
                                >Ararya</Typography>
                            </Box>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}>
                                <Typography
                                className="noselect"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    color: '#eee',
                                    cursor: 'pointer',
                                    "&:hover": {
                                        color: 'primary.light'
                                    },
                                }}
                                >Segara Prada</Typography>
                            </Box>
                        </Grid>

                        {/* Tentang Saloka */}
                        <Grid
                        container={true}
                        direction="column"
                        spacing={0}
                        sx={{
                            display: 'flex',
                            width: '23%'
                        }}>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}>
                                <Typography
                                className="noselect"
                                sx={{
                                    fontSize: '34px',
                                    fontWeight: 600,
                                    color: '#eee'
                                }}
                                >Tentang Saloka</Typography>
                            </Box>

                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}>
                                <Typography
                                className="noselect"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    color: '#eee',
                                    cursor: 'pointer',
                                    "&:hover": {
                                        color: 'primary.light'
                                    },
                                }}
                                >Sejarah</Typography>
                            </Box>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}>
                                <Typography
                                className="noselect"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    color: '#eee',
                                    cursor: 'pointer',
                                    "&:hover": {
                                        color: 'primary.light'
                                    },
                                }}
                                >Fasilitas Umum</Typography>
                            </Box>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}>
                                <Typography
                                className="noselect"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    color: '#eee',
                                    cursor: 'pointer',
                                    "&:hover": {
                                        color: 'primary.light'
                                    },
                                }}
                                >Hubungi Kami</Typography>
                            </Box>
                        </Grid>

                        {/* Restaurants */}
                        <Grid
                        container={true}
                        direction="column"
                        spacing={0}
                        sx={{
                            display: 'flex',
                            width: '22%'
                        }}>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}>
                                <Typography
                                className="noselect"
                                sx={{
                                    fontSize: '34px',
                                    fontWeight: 600,
                                    color: '#eee',
                                }}
                                >Restaurants</Typography>
                            </Box>

                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}>
                                <Typography
                                className="noselect"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    color: '#eee',
                                    cursor: 'pointer',
                                    "&:hover": {
                                        color: 'primary.light'
                                    },
                                }}
                                >Rimba Resto</Typography>
                            </Box>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}>
                                <Typography
                                className="noselect"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    color: '#eee',
                                    cursor: 'pointer',
                                    "&:hover": {
                                        color: 'primary.light'
                                    },
                                }}
                                >Daimami</Typography>
                            </Box>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}>
                                <Typography
                                className="noselect"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    color: '#eee',
                                    cursor: 'pointer',
                                    "&:hover": {
                                        color: 'primary.light'
                                    },
                                }}
                                >Jenju Café</Typography>
                            </Box>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}>
                                <Typography
                                className="noselect"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    color: '#eee',
                                    cursor: 'pointer',
                                    "&:hover": {
                                        color: 'primary.light'
                                    },
                                }}
                                >Tuk Cio Café</Typography>
                            </Box>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}>
                                <Typography
                                className="noselect"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    color: '#eee',
                                    cursor: 'pointer',
                                    "&:hover": {
                                        color: 'primary.light'
                                    },
                                }}
                                >Srengenge Café</Typography>
                            </Box>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}>
                                <Typography
                                className="noselect"
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    color: '#eee',
                                    cursor: 'pointer',
                                    "&:hover": {
                                        color: 'primary.light'
                                    },
                                }}
                                >Ice Cream Shop</Typography>
                            </Box>
                        </Grid>

                        {/* profile */}
                        <Grid
                        container={true}
                        direction="column"
                        spacing={0}
                        sx={{
                            display: 'flex',
                            width: '40%',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-end',
                        }}>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}>
                                <Typography
                                sx={{
                                    fontSize: '32px',
                                    fontWeight: 600,
                                    color: '#eee'
                                }}
                                >Hubungi Kami</Typography>
                            </Box>
                            <Box
                            sx={{
                                marginTop: '10px',
                                width: '80%',
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}>
                                <Typography
                                sx={{
                                    textAlign: 'right',
                                    marginRight: '20px',
                                    fontSize: '20px',
                                    fontWeight: 500,
                                    color: '#eee'
                                }}
                                >Jl. Fatmawati No.154, Tuntang, Semarang, Jawa Tengah 50773</Typography>
                                <LocationOn sx={{ color: '#eee'}}/>
                            </Box>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}>
                                <Typography
                                sx={{
                                    marginRight: '20px',
                                    fontSize: '20px',
                                    fontWeight: 500,
                                    color: '#eee'
                                }}
                                >marketing@salokapark.com</Typography>
                                <Email sx={{ color: '#eee'}}/>
                            </Box>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}>
                                <Typography
                                sx={{
                                    marginRight: '20px',
                                    fontSize: '20px',
                                    fontWeight: 500,
                                    color: '#eee'
                                }}
                                >(0298) 322266</Typography>
                                <Phone sx={{ color: '#eee'}}/>
                            </Box>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}>
                                <Typography
                                sx={{
                                    marginRight: '20px',
                                    fontSize: '20px',
                                    fontWeight: 500,
                                    color: '#eee'
                                }}
                                >0823-5900-0077</Typography>
                                <WhatsApp sx={{ color: '#eee'}}/>
                            </Box>
                            {/*
                            <Box
                            sx={{
                                marginTop: '40px',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}>
                                <TextField
                                placeholder="email"
                                sx={{
                                    width: '500px',
                                    margin: 0,
                                    padding: 0,
                                    backgroundColor: '#eee',
                                    border: 'solid 0px',
                                    borderBottomLeftRadius: '50px',
                                    borderTopLeftRadius: '50px',
                                    borderBottomRightRadius: '50px',
                                    borderTopRightRadius: '50px',
                                    '&:hover fieldset': {
                                        border: 'solid 0px',
                                    },
                                    'fieldset': {
                                        border: 'solid 0px',
                                    },
                                    "& .MuiOutlinedInput-root.Mui-focused": {
                                        "& > fieldset": {
                                            border: "solid 0px",
                                        }
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        paddingRight: '0px',
                                        fontFamily: 'AlrightSans',
                                        fontSize: '22px',
                                        fontWeight: 700,
                                    },
                                }}
                                InputProps={{
                                    endAdornment:
                                        <Button
                                        variant="contained"
                                        sx={{
                                            margin: 0,
                                            padding: 0,
                                            width: '300px',
                                            height: '100%',
                                            borderBottomLeftRadius: '50px',
                                            borderTopLeftRadius: '50px',
                                            borderBottomRightRadius: '50px',
                                            borderTopRightRadius: '50px',
                                            boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
                                        }}
                                        style={{
                                            boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
                                        }}>
                                            <Typography
                                            sx={{
                                                fontSize: '20px',
                                                fontWeight: 500,
                                                color: '#eee'
                                            }}
                                            >Subscribe</Typography>
                                        </Button>
                                }}>
                                </TextField>

                            </Box>
                            */}
                            <Box
                            sx={{
                                marginTop: '10px',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}>
                                <Box>
                                    <IconButton
                                    aria-label="instagram"
                                    component="label"
                                    sx={{
                                        color: '#eee'
                                    }}>
                                        <Instagram />
                                    </IconButton>
                                </Box>
                                <Box>
                                    <IconButton
                                    aria-label="facebook"
                                    component="label"
                                    sx={{
                                        color: '#eee'
                                    }}>
                                        <Facebook />
                                    </IconButton>
                                </Box>
                                <Box>
                                    <IconButton
                                    aria-label="twitter"
                                    component="label"
                                    sx={{
                                        color: '#eee'
                                    }}>
                                        <Twitter />
                                    </IconButton>
                                </Box>
                                <Box>
                                    <IconButton
                                    aria-label="Youtube"
                                    component="label"
                                    sx={{
                                        color: '#eee'
                                    }}>
                                        <YouTube />
                                    </IconButton>
                                </Box>
                                <Box
                                sx={{
                                }}>
                                    <IconButton
                                    aria-label="tiktok"
                                    component="label"
                                    sx={{
                                        color: '#eee'
                                    }}>
                                        <img
                                        src={media[3]}
                                        alt="logo_tiktok"
                                        width="24px"
                                        height="24px"
                                        fill="#eee"
                                        stroke="#eee"
                                        style={{
                                            fill: '#eee',
                                            color: '#eee',
                                            stroke: '#eee',
                                        }}/>
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>

                    <Grid
                    container={true}
                    direction="row"
                    spacing={0}
                    sx={{
                        marginTop: '10px',
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                    }}>
                        <Box
                        sx={{
                            width: '100%',
                            minHeight: '100%',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                        }}>
                            <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 400,
                                color: '#eee'
                            }}
                            >© 2022 Saloka Theme Park, All rights reserved.</Typography>
                        </Box>
                    </Grid>
                </>
                :
                <>
                    <Box
                    sx={{
                        marginTop: '150px',
                        display: 'flex',
                        width: '100%',
                        height: '87px',
                        justifyContent: `center`,
                        alignItems: `center`,
                    }}>
                        <img
                        style={{
                            marginTop: '50px',
                        }}
                        src={media[1]}
                        alt="logo_saloka"
                        width={300}
                        height={87}></img>
                    </Box>

                    <Grid
                    container={true}
                    direction="row"
                    spacing={0}
                    sx={{
                        marginTop: '100px',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        {/* profile */}
                        <Grid
                        container={true}
                        direction="column"
                        spacing={0}
                        sx={{
                            display: 'flex',
                            width: '90%',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}>
                            <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Typography
                                sx={{
                                    fontSize: '32px',
                                    fontWeight: 600,
                                    color: '#eee'
                                }}
                                >Hubungi Kami</Typography>
                            </Box>
                            <Box
                            sx={{
                                marginTop: '20px',
                                width: '100%',
                                maxWidth: '400px',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                            }}>
                                <Typography
                                sx={{
                                    textAlign: 'right',
                                    marginRight: '20px',
                                    fontSize: '16px',
                                    fontWeight: 500,
                                    color: '#eee'
                                }}
                                >Jl. Fatmawati No.154, Tuntang, Semarang, Jawa Tengah 50773</Typography>
                                <LocationOn sx={{ color: '#eee'}}/>
                            </Box>
                            <Box
                            sx={{
                                width: '100%',
                                maxWidth: '400px',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                            }}>
                                <Typography
                                sx={{
                                    textAlign: 'right',
                                    marginRight: '20px',
                                    fontSize: '16px',
                                    fontWeight: 500,
                                    color: '#eee'
                                }}
                                >marketing@salokapark.com</Typography>
                                <Email sx={{ color: '#eee'}}/>
                            </Box>
                            <Box
                            sx={{
                                width: '100%',
                                maxWidth: '400px',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                            }}>
                                <Typography
                                sx={{
                                    textAlign: 'right',
                                    marginRight: '20px',
                                    fontSize: '16px',
                                    fontWeight: 500,
                                    color: '#eee'
                                }}
                                >(0298) 322266</Typography>
                                <Phone sx={{ color: '#eee'}}/>
                            </Box>
                            <Box
                            sx={{
                                width: '100%',
                                maxWidth: '400px',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                            }}>
                                <Typography
                                sx={{
                                    textAlign: 'right',
                                    marginRight: '20px',
                                    fontSize: '16px',
                                    fontWeight: 500,
                                    color: '#eee'
                                }}
                                >0823-5900-0077</Typography>
                                <WhatsApp sx={{ color: '#eee'}}/>
                            </Box>

                            {/*
                            <Box
                            sx={{
                                marginTop: '40px',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <TextField
                                placeholder="email"
                                sx={{
                                    width: '500px',
                                    margin: 0,
                                    padding: 0,
                                    backgroundColor: '#eee',
                                    border: 'solid 0px',
                                    borderBottomLeftRadius: '50px',
                                    borderTopLeftRadius: '50px',
                                    borderBottomRightRadius: '50px',
                                    borderTopRightRadius: '50px',
                                    '&:hover fieldset': {
                                        border: 'solid 0px',
                                    },
                                    'fieldset': {
                                        border: 'solid 0px',
                                    },
                                    "& .MuiOutlinedInput-root.Mui-focused": {
                                        "& > fieldset": {
                                            border: "solid 0px",
                                        }
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        paddingRight: '0px',
                                        fontFamily: 'AlrightSans',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                    },
                                }}
                                InputProps={{
                                    endAdornment:
                                        <Button
                                        variant="contained"
                                        sx={{
                                            margin: 0,
                                            padding: 0,
                                            width: '300px',
                                            height: '100%',
                                            borderBottomLeftRadius: '50px',
                                            borderTopLeftRadius: '50px',
                                            borderBottomRightRadius: '50px',
                                            borderTopRightRadius: '50px',
                                            boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
                                        }}
                                        style={{
                                            boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
                                        }}>
                                            <Typography
                                            sx={{
                                                fontSize: '20px',
                                                fontWeight: 500,
                                                color: '#eee'
                                            }}
                                            >Subscribe</Typography>
                                        </Button>
                                }}>
                                </TextField>

                            </Box>
                            */}

                        </Grid>

                    </Grid>

                    <Grid
                    container={true}
                    direction="row"
                    spacing={0}
                    sx={{
                        marginTop: '10px',
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Box
                        sx={{
                            minHeight: '100%',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                        }}>
                            <Typography
                            sx={{
                                fontSize: '12px',
                                fontWeight: 400,
                                color: '#eee'
                            }}
                            >© 2022 Saloka Theme Park, All rights reserved.</Typography>
                        </Box>

                        <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}>
                            <Box>
                                <IconButton
                                aria-label="instagram"
                                component="label"
                                sx={{
                                    color: '#eee'
                                }}>
                                    <Instagram />
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton
                                aria-label="facebook"
                                component="label"
                                sx={{
                                    color: '#eee'
                                }}>
                                    <Facebook />
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton
                                aria-label="twitter"
                                component="label"
                                sx={{
                                    color: '#eee'
                                }}>
                                    <Twitter />
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton
                                aria-label="Youtube"
                                component="label"
                                sx={{
                                    color: '#eee'
                                }}>
                                    <YouTube />
                                </IconButton>
                            </Box>
                            <Box
                            sx={{
                            }}>
                                <IconButton
                                aria-label="tiktok"
                                component="label"
                                sx={{
                                    color: '#eee'
                                }}>
                                    <img
                                    src={media[3]}
                                    alt="logo_tiktok"
                                    width="24px"
                                    height="24px"
                                    fill="#eee"
                                    stroke="#eee"
                                    style={{
                                        fill: '#eee',
                                        color: '#eee',
                                        stroke: '#eee',
                                    }}/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                </>
            }
        </Grid>
    )
}
