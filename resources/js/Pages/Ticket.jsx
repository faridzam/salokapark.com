import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {Box, Typography, Card, Button, Fab, TextField, Zoom} from '@mui/material';
import {Add, Remove} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../Components';
import {media} from '../assets/images';
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

    const [state, setState] = React.useState({
        date: new Date(),
    });

    // ticket section
    const [ticketOrder, setTicketOrder] = React.useState([
        {
            ticket_id: 1,
            ticket_name: 'Regular Weekdays Ticket',
            ticket_description: 'Nam a nisl aliquet arcu aliquam aliquam id semper metus.',
            quantity: '0',
            price: 120000,
        },
        {
            ticket_id: 2,
            ticket_name: 'Promo Ticket',
            ticket_description: 'Proin imperdiet velit metus, a mattis tellus facilisis id.',
            quantity: '0',
            price: 108000,
        },
    ]);

    const ticketCount = Array.from(Array(ticketOrder.length).keys());

    const totalBill = () => {
        let total = 0;
        for (let index = 0; index < ticketOrder.length; index++) {
            let subtotal = ticketOrder[index].price * ticketOrder[index].quantity;
            total =+ subtotal;
        }
        return total;
    }

    React.useEffect(() => {
        const totalBill = () => {
            let total = 0;
            for (let index = 0; index < ticketOrder.length; index++) {
                let subtotal = ticketOrder[index].price * ticketOrder[index].quantity;
                total =+ subtotal;
            }
            return total;
        }
    })

    const addQuantityTicket = index => {
        let newArr = [...ticketOrder]; // copying the old datas array
        newArr[index].quantity++; // replace e.target.value with whatever you want to change it to

        setTicketOrder(newArr);
    }
    const subQuantityTicket = index => {
        let newArr = [...ticketOrder]; // copying the old datas array
        if (newArr[index].quantity > 0) {
            newArr[index].quantity--; // replace e.target.value with whatever you want to change it to
        }
        setTicketOrder(newArr);
    }

    const isMounted = useIsMounted();
    return (
        <>
            <Head title='Ticket'/>
            <Zoom
            in={isMounted}
            timeout={1000}
            style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>
                <div
                theme={theme}>
                    {/* header */}
                    <Header/>

                    {/* left-container */}
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
                                            value={state.date}
                                            onChange={value => setState({ date: value })}
                                            disabledDays={['2019/11/15', new Date('2019/11/20')]}
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
                                                        }}>{ticketOrder[index].quantity}</Typography>
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
                                            justifyContent: 'flex-end',
                                        }}>
                                            <Card
                                            elevation={5}
                                            sx={{
                                                borderRadius: '10px'
                                            }}>
                                                <Box
                                                sx={{
                                                    width: '300px',
                                                    height: '50px',
                                                    borderRadius: '30px',
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}>
                                                    <Box
                                                    sx={{
                                                        marginLeft: '20px',
                                                    }}>
                                                        <Typography
                                                        sx={{
                                                            fontWeight: 500
                                                        }}>Rp. {totalBill}</Typography>
                                                    </Box>
                                                    <Button
                                                    variant='contained'
                                                    sx={{
                                                        borderRadius: '10px',
                                                        height: '100%',
                                                    }}>
                                                        <Typography
                                                        sx={{
                                                            fontSize: '18px',
                                                            fontWeight: 600
                                                        }}>Checkout</Typography>
                                                    </Button>
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
            </Zoom>
        </>
    )
}
