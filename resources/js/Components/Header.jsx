import React from "react";
import { Link } from '@inertiajs/inertia-react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {Box, Typography, Button, SwipeableDrawer, List, Divider, ListItem, ListItemButton, ListItemText} from '@mui/material';
import {ConfirmationNumber, Menu} from '@mui/icons-material';
import {media} from '../assets/images'
import { useTheme, styled } from "@mui/material/styles";

import './header.css';
import { Inertia } from '@inertiajs/inertia';

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

    const [activeRoute, setActiveRoute] = React.useState('');

    React.useEffect(() => {
        setActiveRoute(window.location.pathname);
      }, []);

    const redirect = (route) => {
        Inertia.visit(route);
    }

    const externalRedirect = (route) => {
        window.location.href = route
    }

    return(

        // header
        <Grid
        container={true}
        direction="row"
        spacing={0}
        sx={{
            height: '100px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white.lightest',
        }}>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>

                <Box
                onClick={() => redirect('/')}
                // onClick={() => externalRedirect('https://salokapark.com/')}
                sx={{
                    marginLeft: '50px',
                    cursor: 'pointer',
                }}>
                    <img src={media[0]} alt="logo saloka" width={150} height={75}></img>
                </Box>

                <NavbarMenu>
                <Grid
                container={true}
                direction="row"
                spacing={0}
                sx={{
                //
                }}>

                    {/* tombol home
                    <Box
                    sx={{
                    marginY: '10px',
                    marginLeft: '50px',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                        <Typography
                        className={`navbar-item noselect ${activeRoute === "/" ? " navbar-item-active" : ""}`}
                        onClick={() => redirect('/')}
                        // onClick={() => externalRedirect('https://salokapark.com/')}
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
                    </Box>
                    */}

                    <Box
                    sx={{
                    marginY: '10px',
                    marginLeft: '50px',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                    <Typography
                    className={`navbar-item noselect ${activeRoute.includes("promosi") ? " navbar-item-active" : ""}`}
                    onClick={() => redirect('/promosi')}
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
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                    <Typography
                    className={`navbar-item noselect ${activeRoute.includes("zona") ? " navbar-item-active" : ""}`}
                    onClick={() => redirect('/zona')}
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
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                    <Typography
                    className={`navbar-item noselect ${activeRoute.includes("show-event") ? " navbar-item-active" : ""}`}
                    onClick={() => redirect('/show-event')}
                    // onClick={() => externalRedirect('https://salokapark.com/event')}
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
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                    <Typography
                    className={`navbar-item noselect ${activeRoute.includes("restaurant") ? " navbar-item-active" : ""}`}
                    onClick={() => redirect('/restaurant')}
                    // onClick={() => externalRedirect('https://salokapark.com/kuliner')}
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
                    >RESTO & CAFE</Typography>
                    </Box>

                    {/* tombol merchandise
                    <Box
                    sx={{
                    marginY: '10px',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>

                    <Typography
                    className={`navbar-item noselect ${activeRoute.includes("merchandise") ? " navbar-item-active" : ""}`}
                    onClick={() => redirect('/merchandise')}
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
                    */}

                    <Box
                    sx={{
                    marginY: '10px',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                        <Typography
                        className={`navbar-item noselect ${activeRoute.includes("group") ? " navbar-item-active" : ""}`}
                        onClick={() => redirect('/group')}
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
                        >ROMBONGAN</Typography>
                    </Box>

                </Grid>
                </NavbarMenu>
            </Box>

            <NavbarMenu>
                <Box
                sx={{
                }}>
                    <Button
                    onClick={() => redirect('/ticket')}
                    // onClick={() => externalRedirect('https://webdev.salokapark.com/ticket')}
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
                        {/* home button
                        <ListItem key="home">
                            <ListItemButton
                            className={`navbar-item noselect ${activeRoute === "/" ? " navbar-item-active" : ""}`}
                            onClick={() => redirect('/')}
                            // onClick={() => externalRedirect('https://salokapark.com/')}
                            >
                                <ListItemText primary="Home" sx={{textAlign: 'center'}}/>
                            </ListItemButton>
                        </ListItem>
                        */}

                        <ListItem key="promosi">
                            <ListItemButton
                            className={`navbar-item noselect ${activeRoute.includes("promosi") ? " navbar-item-active" : ""}`}
                            onClick={() => redirect('/promosi')}>
                                <ListItemText primary="Promosi" sx={{textAlign: 'center'}}/>
                            </ListItemButton>
                        </ListItem>

                        <ListItem key="zona">
                            <ListItemButton
                            className={`navbar-item noselect ${activeRoute.includes("zona") ? " navbar-item-active" : ""}`}
                            onClick={() => redirect('/zona')}>
                                <ListItemText primary="Zona" sx={{textAlign: 'center'}}/>
                            </ListItemButton>
                        </ListItem>

                        <ListItem key="show&event">
                            <ListItemButton
                            className={`navbar-item noselect ${activeRoute.includes("show-event") ? " navbar-item-active" : ""}`}
                            onClick={() => redirect('/show-event')}
                            // onClick={() => externalRedirect('https://salokapark.com/event')}
                            >
                                <ListItemText primary="Show & Event" sx={{textAlign: 'center'}}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem key="restaurant">
                            <ListItemButton
                            className={`navbar-item noselect ${activeRoute.includes("restaurant") ? " navbar-item-active" : ""}`}
                            onClick={() => redirect('/restaurant')}
                            // onClick={() => externalRedirect('https://salokapark.com/kuliner')}
                            >
                                <ListItemText primary="Resto & Cafe" sx={{textAlign: 'center'}}/>
                            </ListItemButton>
                        </ListItem>

                        {/* home button
                        <ListItem key="merchandise">
                            <ListItemButton
                            className={`navbar-item noselect ${activeRoute.includes("merchandise") ? " navbar-item-active" : ""}`}
                            onClick={() => redirect('/merchandise')}>
                                <ListItemText primary="Merchandise" sx={{textAlign: 'center'}}/>
                            </ListItemButton>
                        </ListItem>
                        */}

                        <ListItem key="group">
                            <ListItemButton
                            className={`navbar-item noselect ${activeRoute.includes("group") ? " navbar-item-active" : ""}`}
                            onClick={() => redirect('/group')}>
                                <ListItemText primary="Rombongan" sx={{textAlign: 'center'}}/>
                            </ListItemButton>
                        </ListItem>

                        <Divider/>

                        <ListItem key="ticket">
                            <ListItemButton
                            onClick={() => redirect('/ticket')}
                            // onClick={() => externalRedirect('https://webdev.salokapark.com/ticket')}
                            >
                                <ListItemText primary="Ticket" sx={{textAlign: 'center', color: 'red.light'}}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </SwipeableDrawer>
            </NavbarMobile>

        </Grid>
    )
}
