import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Card, Button, Fab, Zoom} from '@mui/material';
import {Add, Remove} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import { Application, Calendar } from 'react-rainbow-components';

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

const theme = {
    rainbow: {
        palette: {
            brand: '#169870',
        },
    },
};

export function useIsMounted() {

    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
      return () => void (isMountedRef.current = false);
    }, []);

    return isMounted;
}

export default function Ticket(props) {

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    // booking date
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const [bookingDate, setBookingDate] = React.useState(tomorrow);

    // ticket section
    const [ticketOrder, setTicketOrder] = React.useState([
        {
            ticket_id: 1,
            ticket_name: 'Regular Weekdays Ticket',
            ticket_description: 'Nam a nisl aliquet arcu aliquam aliquam id semper metus.',
            quantity: 0,
            price: 120000,
        },
        {
            ticket_id: 2,
            ticket_name: 'Ticket Sheila on 7',
            ticket_description: 'Proin imperdiet velit metus, a mattis tellus facilisis id.',
            quantity: 0,
            price: 300000,
        },
    ]);

    //get session storage data
    React.useEffect(() => {
        const localBookingDate = window.sessionStorage.getItem('arrivalDate');
        if (localBookingDate) {
            setBookingDate(new Date(parseInt(localBookingDate)));
        } else {
            //
        }
        const localTicketOrder = window.sessionStorage.getItem('ticketOrder');
        if (localTicketOrder) {
            setTicketOrder(JSON.parse(localTicketOrder));
        } else {
            //
        }
    }, []);

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
            <Zoom
            in={isMounted}
            timeout={1000}
            style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>
                {
                    desktop
                    ?
                    <div
                    theme={theme}>
                        {/* header */}
                        <Header/>

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
                        }}>
                            <Grid
                            container={true}
                            direction="row"
                            spacing={0}
                            sx={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'center',
                            }}>
                                <Box
                                sx={{
                                    width: '30%',
                                    height: '100%',
                                }}>
                                    <Card
                                    elevation={2}
                                    style={calendarContainerStyles}
                                    sx={{
                                        borderRadius: '30px',
                                        height: '100%',
                                    }}>
                                        <Box
                                        sx={{
                                            marginBottom: '50px',
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}>
                                            <Typography
                                            sx={{
                                                fontSize: '24px',
                                                fontWeight: 600
                                            }}>
                                                Tanggal Kedatangan
                                            </Typography>
                                        </Box>
                                        <Application theme={theme}>
                                            <Calendar
                                                variant='single'
                                                id="calendar-5"
                                                locale="id-ID"
                                                value={bookingDate}
                                                onChange={value => handleArrivalDate(value)}
                                                minDate={ tomorrow }
                                            />
                                        </Application>
                                    </Card>
                                </Box>

                                <Grid
                                container={true}
                                direction="column"
                                spacing={0}
                                sx={{
                                    marginLeft: '50px',
                                    display: 'flex',
                                    width: '60%',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                }}>
                                    <Card
                                    elevation={2}
                                    style={ticketOptionStyles}
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: '30px',
                                    }}>
                                        <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}>
                                            <Typography
                                            sx={{
                                                fontSize: '28px',
                                                fontWeight: 600
                                            }}>Ticket Types</Typography>
                                        </Box>
                                        <Box
                                        sx={{
                                            marginTop: '50px',
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            {ticketCount.map((index) => (
                                                <Card
                                                elevation={2}
                                                sx={{
                                                    marginY: '10px',
                                                    width: '70%',
                                                    borderRadius: '10px',
                                                }}>
                                                    <Grid
                                                    container={true}
                                                    direction="row"
                                                    spacing={0}
                                                    sx={{
                                                        paddingX: '50px',
                                                        paddingY: '20px',
                                                        width: '100%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}>
                                                        <Box
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            width: '40%',
                                                            alignItems: 'flex-start',
                                                            justifyContent: 'flex-start',
                                                        }}>
                                                            <Typography
                                                            sx={{
                                                                fontSize: '20px',
                                                                fontWeight: 600
                                                            }}>{ticketOrder[index].ticket_name}</Typography>
                                                            <Typography
                                                            sx={{
                                                                fontSize: '12px',
                                                                fontWeight: 400
                                                            }}>{ticketOrder[index].ticket_description}</Typography>
                                                        </Box>
                                                        <Box
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            width: '30%',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}>
                                                            <Fab
                                                            onClick={() => subQuantityTicket(index)}
                                                            size="small"
                                                            variant='outlined'
                                                            color='primary'
                                                            sx={{
                                                                minWidth: '30px',
                                                                width: '30px',
                                                                minHeight: '30px',
                                                                height: '30px',
                                                                marginX: '20px'
                                                            }}>
                                                                <Remove
                                                                sx={{
                                                                    margin: 0,
                                                                    padding: 0,
                                                                }}/>
                                                            </Fab>
                                                            <Typography
                                                            sx={{
                                                                fontSize: '24px',
                                                                fontWeight: 600
                                                            }}>{ticketOrder[index].quantity.toString()}</Typography>
                                                            <Fab
                                                            onClick={() => addQuantityTicket(index)}
                                                            size="small"
                                                            variant='outlined'
                                                            color='primary'
                                                            sx={{
                                                                minWidth: '30px',
                                                                width: '30px',
                                                                minHeight: '30px',
                                                                height: '30px',
                                                                marginX: '20px'
                                                            }}>
                                                                <Add
                                                                sx={{
                                                                    margin: 0,
                                                                    padding: 0,
                                                                }}/>
                                                            </Fab>
                                                        </Box>
                                                        <Box
                                                        sx={{
                                                            width: '30%',
                                                            display: 'flex',
                                                            justifyContent: 'flex-end',
                                                            alignItems: 'center',
                                                        }}>
                                                            <Typography
                                                            sx={{
                                                                fontWeight: 500
                                                            }}>Rp. {ticketOrder[index].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                                                        </Box>
                                                    </Grid>
                                                </Card>

                                            ))}
                                            <Box
                                            sx={{
                                                marginTop: '30px',
                                                width: '70%',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}>
                                                <Box
                                                sx={{
                                                    marginLeft: '10px',
                                                    height: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justiifyContent: 'center',
                                                    alignItems: 'flex-start',
                                                }}>
                                                    <Typography
                                                    sx={{
                                                        fontSize: '14px',
                                                        fontWeight: 400,
                                                    }}>
                                                        arrival date:
                                                    </Typography>
                                                    <Typography
                                                    sx={{
                                                        fontSize: '18px',
                                                        fontWeight: 600,
                                                    }}>
                                                        {bookingDate.toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                                    </Typography>
                                                </Box>
                                                <Card
                                                elevation={5}
                                                sx={{
                                                    borderRadius: '30px'
                                                }}>
                                                    <Box
                                                    sx={{
                                                        width: '300px',
                                                        height: '50px',
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Box
                                                        sx={{
                                                            marginLeft: '10px'
                                                        }}>
                                                            <Typography
                                                            sx={{
                                                                fontWeight: 500
                                                            }}>Rp. {totalBill.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                                                        </Box>

                                                        {totalBill === 0
                                                            ?   <Button
                                                                disabled
                                                                variant='contained'
                                                                sx={{
                                                                    borderRadius: '30px',
                                                                    height: '100%',
                                                                }}>
                                                                    <Typography
                                                                    sx={{
                                                                        fontSize: '18px',
                                                                        fontWeight: 600
                                                                    }}>Checkout</Typography>
                                                                </Button>
                                                            :   <Link
                                                                href={route('dataPemesan')}
                                                                style={{
                                                                    height: '100%'
                                                                }}
                                                                >
                                                                    <Button
                                                                    variant='contained'
                                                                    sx={{
                                                                        borderRadius: '30px',
                                                                        height: '100%',
                                                                    }}>
                                                                        <Typography
                                                                        sx={{
                                                                            fontSize: '18px',
                                                                            fontWeight: 600
                                                                        }}>Checkout</Typography>
                                                                    </Button>
                                                                </Link>
                                                        }

                                                    </Box>
                                                </Card>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>

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
                    :
                    <div
                    theme={theme}>
                        {/* header */}
                        <Header/>

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
                            <Box
                            sx={{
                                width: '80%',
                                height: '100%',
                            }}>
                                <Card
                                elevation={2}
                                style={calendarContainerStyles}
                                sx={{
                                    borderRadius: '30px',
                                    height: '100%',
                                }}>
                                    <Box
                                    sx={{
                                        marginBottom: '50px',
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}>
                                        <Typography
                                        sx={{
                                            fontSize: '24px',
                                            fontWeight: 600
                                        }}>
                                            Tanggal Kedatangan
                                        </Typography>
                                    </Box>
                                    <Application theme={theme}>
                                        <Calendar
                                            variant='single'
                                            id="calendar-5"
                                            locale="id-ID"
                                            value={bookingDate}
                                            onChange={value => handleArrivalDate(value)}
                                            minDate={ tomorrow }
                                        />
                                    </Application>
                                </Card>
                            </Box>
                            <Grid
                            container={true}
                            direction="column"
                            spacing={0}
                            sx={{
                                marginTop: '50px',
                                display: 'flex',
                                width: '80%',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}>
                                <Card
                                elevation={2}
                                style={ticketOptionStyles}
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: '30px',
                                }}>
                                    <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}>
                                        <Typography
                                        sx={{
                                            fontSize: '28px',
                                            fontWeight: 600
                                        }}>Ticket Types</Typography>
                                    </Box>
                                    <Box
                                    sx={{
                                        marginTop: '50px',
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        {ticketCount.map((index) => (
                                            <Card
                                            elevation={2}
                                            sx={{
                                                marginY: '10px',
                                                width: '100%',
                                                borderRadius: '10px',
                                            }}>
                                                <Grid
                                                container={true}
                                                direction="column"
                                                spacing={0}
                                                sx={{
                                                    paddingY: '20px',
                                                    width: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}>
                                                    <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        width: '100%',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}>
                                                        <Typography
                                                        sx={{
                                                            fontSize: '18px',
                                                            fontWeight: 600,
                                                            textAlign: 'center'
                                                        }}>{ticketOrder[index].ticket_name}</Typography>
                                                    </Box>
                                                    <Box
                                                    sx={{
                                                        marginY: '20px',
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        width: '30%',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}>
                                                        <Fab
                                                        onClick={() => subQuantityTicket(index)}
                                                        size="small"
                                                        variant='outlined'
                                                        color='primary'
                                                        sx={{
                                                            minWidth: '30px',
                                                            width: '30px',
                                                            minHeight: '30px',
                                                            height: '30px',
                                                            marginX: '20px'
                                                        }}>
                                                            <Remove
                                                            sx={{
                                                                margin: 0,
                                                                padding: 0,
                                                            }}/>
                                                        </Fab>
                                                        <Typography
                                                        sx={{
                                                            fontSize: '24px',
                                                            fontWeight: 600
                                                        }}>{ticketOrder[index].quantity.toString()}</Typography>
                                                        <Fab
                                                        onClick={() => addQuantityTicket(index)}
                                                        size="small"
                                                        variant='outlined'
                                                        color='primary'
                                                        sx={{
                                                            minWidth: '30px',
                                                            width: '30px',
                                                            minHeight: '30px',
                                                            height: '30px',
                                                            marginX: '20px'
                                                        }}>
                                                            <Add
                                                            sx={{
                                                                margin: 0,
                                                                padding: 0,
                                                            }}/>
                                                        </Fab>
                                                    </Box>
                                                    <Box
                                                    sx={{
                                                        width: '100%',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Typography
                                                        sx={{
                                                            fontWeight: 500
                                                        }}>Rp. {ticketOrder[index].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                                                    </Box>
                                                </Grid>
                                            </Card>

                                        ))}
                                        <Box
                                        sx={{
                                            marginTop: '30px',
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                        }}>
                                            <Box
                                            sx={{
                                                marginLeft: '10px',
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justiifyContent: 'center',
                                                alignItems: 'flex-start',
                                            }}>
                                                <Typography
                                                sx={{
                                                    fontSize: '14px',
                                                    fontWeight: 400,
                                                }}>
                                                    arrival date:
                                                </Typography>
                                                <Typography
                                                sx={{
                                                    fontSize: '18px',
                                                    fontWeight: 600,
                                                }}>
                                                    {bookingDate.toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                                </Typography>
                                            </Box>
                                            <Card
                                            elevation={5}
                                            sx={{
                                                borderRadius: '30px'
                                            }}>
                                                <Box
                                                sx={{
                                                    height: '50px',
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}>
                                                    <Box
                                                    sx={{
                                                        marginLeft: '10px'
                                                    }}>
                                                        <Typography
                                                        sx={{
                                                            fontWeight: 500
                                                        }}>Rp. {totalBill.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                                                    </Box>

                                                    {totalBill === 0
                                                        ?   <Button
                                                            disabled
                                                            variant='contained'
                                                            sx={{
                                                                borderRadius: '30px',
                                                                height: '100%',
                                                            }}>
                                                                <Typography
                                                                sx={{
                                                                    fontSize: '18px',
                                                                    fontWeight: 600
                                                                }}>Checkout</Typography>
                                                            </Button>
                                                        :   <Link
                                                            href={route('dataPemesan')}
                                                            style={{
                                                                height: '100%'
                                                            }}
                                                            >
                                                                <Button
                                                                variant='contained'
                                                                sx={{
                                                                    borderRadius: '30px',
                                                                    height: '100%',
                                                                }}>
                                                                    <Typography
                                                                    sx={{
                                                                        fontSize: '18px',
                                                                        fontWeight: 600
                                                                    }}>Checkout</Typography>
                                                                </Button>
                                                            </Link>
                                                    }

                                                </Box>
                                            </Card>
                                        </Box>
                                    </Box>
                                </Card>
                            </Grid>
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
                        </Grid>
                    </div>
                }

            </Zoom>
        </>
    )
}
