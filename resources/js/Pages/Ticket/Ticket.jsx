import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Card, Button, Fab, Fade} from '@mui/material';
import {Add, Remove} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import { Application, Calendar } from 'react-rainbow-components';
import axios from 'axios';

import styles from "../../styles/index.css";
import { Inertia } from '@inertiajs/inertia';

const calendarContainerStyles = {
    padding: '30px',
    width: '100%',
    height: '100%',
};
const ticketOptionStyles = {
    padding: '30px',
    width: '100%',
    height: '100%',
};

export function useIsMounted() {

    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
      return () => void (isMountedRef.current = false);
    }, []);

    return isMounted;
}

const rainbowTheme = {
    rainbow: {
        palette: {
            brand: '#169870',
        },
    },
};

export default function Ticket(props) {

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    // redirect function
    const redirect = (route) => {
        Inertia.visit(route);
    }

    // booking date
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const [bookingDate, setBookingDate] = React.useState(today);

    // ticket section
    const [ticketOrder, setTicketOrder] = React.useState([]);

    //get session storage data
    React.useEffect(() => {
        const localBookingDate = window.sessionStorage.getItem('arrivalDate');
        if (localBookingDate) {
            setBookingDate(new Date(parseInt(localBookingDate)));
        } else {
            //
        }
    }, []);
    React.useEffect(() => {
        const localTicketOrder = window.sessionStorage.getItem('ticketOrder');
        if (localTicketOrder) {
            window.sessionStorage.removeItem('ticketOrder');
            getTicketByDate(bookingDate);
        } else {
            getTicketByDate(bookingDate);
        }
    }, [bookingDate]);

    const getTicketByDate = (date) => {
        axios.post('/api/get-ticket-date', {
            date: date
        }).then((response) => {
            //
            let eventTicket = response.data.ticketEvent;
            let regulerTicket = response.data.ticketReguler;
            let newTicket = [];

            for (let index = 0; index < eventTicket.length; index++) {
                newTicket.push({
                    ticket_id: eventTicket[index].id,
                    ticket_name: eventTicket[index].name,
                    ticket_description: eventTicket[index].description,
                    quantity: 0,
                    price: eventTicket[index].price,
                })
            }

            for (let index = 0; index < regulerTicket.length; index++) {
                newTicket.push({
                    ticket_id: regulerTicket[index].id,
                    ticket_name: regulerTicket[index].name,
                    ticket_description: regulerTicket[index].description,
                    quantity: 0,
                    price: regulerTicket[index].price,
                })
            }

            setTicketOrder(newTicket);
        }).catch((error) => {
            //
            console.log(error);
        })
    }
    const handleArrivalDate = (value) => {
        setBookingDate(value);
        window.sessionStorage.setItem('arrivalDate', JSON.stringify(value.getTime()));
    }

    const ticketCount = Array.from(Array(ticketOrder.length).keys());

    const addQuantityTicket = index => {
        let newArr = [...ticketOrder]; // copying the old datas array
        newArr[index].quantity++; // replace e.target.value with whatever you want to change it to

        setTicketOrder(newArr);
        window.sessionStorage.setItem('ticketOrder', JSON.stringify(newArr));
    }
    const subQuantityTicket = index => {
        let newArr = [...ticketOrder]; // copying the old datas array
        if (newArr[index].quantity > 0) {
            newArr[index].quantity--; // replace e.target.value with whatever you want to change it to
        }
        setTicketOrder(newArr);
        window.sessionStorage.setItem('ticketOrder', JSON.stringify(newArr));
    }
    const [totalBill, setTotalBill] = React.useState(0);
    React.useEffect(() => {
            let subtotal = 0;
            ticketOrder.forEach((ticket, index) => {
                subtotal += ticket.price * ticket.quantity;
            });
            setTotalBill(subtotal)
    }, [ticketOrder])

    const isMounted = useIsMounted();
    return (
        <>
            <Head title='Ticket'/>
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
                        <div
                        theme={theme}>

                            {/* container */}
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
                                <Card
                                elevation={3}
                                sx={{
                                    width: '70%',
                                    borderRadius: '30px',
                                }}>
                                    <Grid
                                    container={true}
                                    direction="column"
                                    spacing={0}
                                    sx={{
                                        marginY: '30px',
                                        display: 'flex',
                                        width: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Typography
                                            sx={{
                                                fontSize: '28px',
                                                fontWeight: 500
                                            }}>Rencanakan kunjungan kamu dan keluarga ke Saloka!</Typography>
                                        </Box>
                                        <Box
                                        sx={{
                                            width: '50%',
                                            minWidth: '550px',
                                            marginTop: '30px',
                                        }}>
                                            <Button
                                            onClick={() => redirect('/ticket/pilih-ticket')}
                                            variant='contained'
                                            sx={{
                                                width: '100%',
                                                height: '75px',
                                                borderRadius: '30px',
                                            }}>
                                                <Typography
                                                sx={{
                                                    fontSize: '24px',
                                                    fontWeight: 600,
                                                    letterSpacing: 2
                                                }}>Ticket by Saloka!</Typography>
                                            </Button>
                                        </Box>
                                        <Box
                                        sx={{
                                            width: '40%',
                                            minWidth: '440px',
                                        }}>
                                            <Grid
                                            container={true}
                                            direction="row"
                                            spacing={0}
                                            sx={{
                                                marginTop: '30px',
                                                display: 'flex',
                                                width: '100%',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            }}>

                                                <Box>
                                                    <Button>Ticket by goers</Button>
                                                </Box>
                                                <Box>
                                                    <Button>Ticket by zeals</Button>
                                                </Box>

                                            </Grid>
                                        </Box>
                                    </Grid>
                                </Card>
                            </Grid>

                        </div>
                        :
                        <div
                        theme={theme}>

                            {/* container */}
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
                            </Grid>
                        </div>
                    }
                    {/* footer */}
                    <Box
                    sx={{
                        width: '100%',
                        height: '800px',
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
