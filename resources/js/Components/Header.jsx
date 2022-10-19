import React from "react";
import { Link } from '@inertiajs/inertia-react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {Box, Typography, Button, SwipeableDrawer, List, Divider, ListItem, ListItemButton, ListItemText} from '@mui/material';
import {ConfirmationNumber, Menu} from '@mui/icons-material';
import {media} from '../assets/images'
import { useTheme, styled } from "@mui/material/styles";

import './header.css';

const NavbarMenu = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('laptop')]: {
      display: 'none',
    },
}));

const NavbarMobile = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.up('laptop')]: {
      display: 'none',
    },
}));

export default function Header() {

    const [drawerState, setDrawerState] = React.useState(false);
    const theme = useTheme();
    return(

        // header
        <Grid
        container={true}
        direction="row"
        spacing={0}
        sx={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Link
                href={route('welcome')}
                >
                    <Box
                    sx={{
                        marginLeft: '50px',
                        cursor: 'pointer',
                    }}>
                        <img src={media[0]} alt="logo saloka" width={150} height={75}></img>
                    </Box>
                </Link>

                <NavbarMenu>
                <Grid
                container={true}
                direction="row"
                spacing={0}
                sx={{
                //
                }}>

                    <Box
                    sx={{
                    marginY: '10px',
                    marginLeft: '50px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                        <Link
                        href={route('welcome')}
                        >
                            <Typography
                            noWrap={true}
                            sx={{
                                fontFamily: 'AlrightSans',
                                fontSize: '18px',
                                fontWeight: 700,
                                color: '#333',
                                cursor: 'pointer',
                                "&:hover": {
                                    color: 'secondary.light',
                                },
                            }}
                            >HOME</Typography>
                        </Link>
                    </Box>
                    <Box
                    sx={{
                    marginY: '10px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                    <Typography
                    noWrap={true}
                    sx={{
                        fontFamily: 'AlrightSans',
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#333',
                        cursor: 'pointer',
                        "&:hover": {
                            color: 'secondary.light',
                        },
                    }}
                    >PROMOSI</Typography>
                    </Box>
                    <Box
                    sx={{
                    marginY: '10px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                    <Typography
                    noWrap={true}
                    sx={{
                        fontFamily: 'AlrightSans',
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#333',
                        cursor: 'pointer',
                        "&:hover": {
                            color: 'secondary.light',
                        },
                    }}
                    >ZONA</Typography>
                    </Box>
                    <Box
                    sx={{
                    marginY: '10px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                    <Typography
                    noWrap={true}
                    sx={{
                        fontFamily: 'AlrightSans',
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#333',
                        cursor: 'pointer',
                        "&:hover": {
                            color: 'secondary.light',
                        },
                    }}
                    >SHOW & EVENT</Typography>
                    </Box>
                    <Box
                    sx={{
                    marginY: '10px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                    <Typography
                    noWrap={true}
                    sx={{
                        fontFamily: 'AlrightSans',
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#333',
                        cursor: 'pointer',
                        "&:hover": {
                            color: 'secondary.light',
                        },
                    }}
                    >RESTAURANT</Typography>
                    </Box>
                    <Box
                    sx={{
                    marginY: '10px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                    <Typography
                    noWrap={true}
                    sx={{
                        fontFamily: 'AlrightSans',
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#333',
                        cursor: 'pointer',
                        "&:hover": {
                            color: 'secondary.light',
                        },
                    }}
                    >MERCHANDISE</Typography>
                    </Box>

                </Grid>
                </NavbarMenu>
            </Box>

            <NavbarMenu>
                <Box
                sx={{
                }}>
                    <Link
                        href={route('ticket')}
                    >
                        <Button
                        className="ticket-cta-button"
                        variant="contained"
                        sx={{
                            backgroundColor: 'red.light',
                            height: '50px',
                            marginRight: '50px',
                            borderRadius: '10px',
                            '&:hover': {
                                backgroundColor: 'red.light',
                            },
                        }}
                        >
                            <ConfirmationNumber/>
                            <Typography
                            sx={{
                                fontFamily: 'AlrightSans',
                                marginLeft: '10px',
                                fontWeight: 700
                            }}>TICKET!</Typography>
                        </Button>
                    </Link>

                </Box>
            </NavbarMenu>

            <NavbarMobile>
                <Box>
                    <Button
                    onClick={() => {setDrawerState(true)}}>
                        <Menu/>
                    </Button>
                </Box>
                <SwipeableDrawer
                    anchor="right"
                    open={drawerState}
                    onClose={() => {setDrawerState(false)}}
                    onOpen={() => {setDrawerState(true)}}
                    sx={{
                        width: '100%',
                    }}
                >
                    <List
                    sx={{
                        width: '320px',
                        paddingX: '20px',
                    }}>
                        <ListItem key="home">
                            <ListItemButton>
                                <ListItemText primary="Home" sx={{textAlign: 'center'}}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem key="promosi">
                            <ListItemButton>
                                <ListItemText primary="Promosi" sx={{textAlign: 'center'}}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem key="zona">
                            <ListItemButton>
                                <ListItemText primary="Zona" sx={{textAlign: 'center'}}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem key="show&event">
                            <ListItemButton>
                                <ListItemText primary="Show & Event" sx={{textAlign: 'center'}}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem key="restaurant">
                            <ListItemButton>
                                <ListItemText primary="Restaurant" sx={{textAlign: 'center'}}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem key="merchandise">
                            <ListItemButton>
                                <ListItemText primary="Merchandise" sx={{textAlign: 'center'}}/>
                            </ListItemButton>
                        </ListItem>

                        <Divider/>

                        <ListItem key="ticket">
                            <ListItemButton>
                                <ListItemText primary="Ticket" sx={{textAlign: 'center', color: 'red.light'}}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </SwipeableDrawer>
            </NavbarMobile>

        </Grid>
    )
}
