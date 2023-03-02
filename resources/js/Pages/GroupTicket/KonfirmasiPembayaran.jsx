import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {Box, Paper, Typography, Button, Fade} from '@mui/material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import {Helmet} from "react-helmet";

export function useIsMounted() {

    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
      return () => void (isMountedRef.current = false);
    }, []);

    // React.useEffect(() => {
    //     //change this to the script source you want to load, for example this is snap.js sandbox env
    //     const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
    //     //change this according to your client-key
    //     const myMidtransClientKey = 'SB-Mid-client-nxEqAslc-ufQu9az';

    //     let scriptTag = document.createElement('script');
    //     scriptTag.src = midtransScriptUrl;
    //     // optional if you want to set script attribute
    //     // for example snap.js have data-client-key attribute
    //     scriptTag.setAttribute('data-client-key', myMidtransClientKey);

    //     document.body.appendChild(scriptTag);
    //     return () => {
    //         document.body.removeChild(scriptTag);
    //     }
    // }, []);

    return isMounted;
}

export default function Ticket(props) {

    const redirect = (route) => {
        Inertia.visit(route);
    }

    const isMounted = useIsMounted();

    const [bookingDate, setBookingDate] = React.useState( new Date());
    const [reservationID, setReservationID] = React.useState();
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
    const ticketCount = Array.from(Array(ticketOrder.length).keys());
    const [name, setName] = React.useState();
    const [phone, setPhone] = React.useState();
    const [email, setEmail] = React.useState();
    const [address, setAddress] = React.useState();

    //get session storage data
    React.useEffect(() => {
        const localReservationID = window.sessionStorage.getItem('reservationID');
        if (localReservationID) {
            setReservationID(JSON.parse(localReservationID));
        } else {
            //
        }
        const localOrderID = window.sessionStorage.getItem('orderID');
        if (localOrderID) {
            setOrderID(JSON.parse(localOrderID));
        } else {
            //
        }
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
        const localCustomerName = window.sessionStorage.getItem('customerName');
        if (localCustomerName) {
            setName(JSON.parse(localCustomerName));
        } else {
            //
        }
        const localCustomerEmail = window.sessionStorage.getItem('customerEmail');
        if (localCustomerEmail) {
            setEmail(JSON.parse(localCustomerEmail));
        } else {
            //
        }
        const localCustomerPhone = window.sessionStorage.getItem('customerPhone');
        if (localCustomerPhone) {
            setPhone(JSON.parse(localCustomerPhone));
        } else {
            //
        }
        const localCustomerAddress = window.sessionStorage.getItem('customerAddress');
        if (localCustomerAddress) {
            setAddress(JSON.parse(localCustomerAddress));
        } else {
            //
        }

    }, []);
    const [totalBill, setTotalBill] = React.useState(0);
    React.useEffect(() => {
            let subtotal = 0;
            ticketOrder.forEach((ticket, index) => {
                subtotal += ticket.price * ticket.quantity;
            });
            setTotalBill(subtotal)
    }, [ticketOrder])
    const [orderID, setOrderID] = React.useState(0);
    const snapPay = () => {
        var now = new Date();
        now.setHours(0,0,0,0);

        if(bookingDate <= now){
            redirect('/ticket/pilih-ticket');
        } else {
            axios.post('/api/get-midtrans-token-group', {
                reservationID: reservationID,
                orderID: orderID,
                bookingDate: bookingDate,
                ticketOrder: ticketOrder,
                name: name,
                phone: phone,
                email: email,
                address: address,
            })
            .then((response) => {
                //
                window.snap.pay(response.data.token);
            }).catch((error) => {
                // axios.post('/api/get-midtrans-transaction-status', {
                //     orderID: orderID,
                // }).then((response) => {
                //     //
                //     switch (response.data.status.payment_type) {
                //         case "echannel":
                //             handleTransactionDialogOpen({
                //                 payment_type: "echannel",
                //                 bank: "transfer bank - mandiri",
                //                 transaction_status: response.data.status.transaction_status,
                //                 payment_number_1: response.data.status.bill_key,
                //                 payment_number_2: response.data.status.biller_code,
                //                 total_bill: response.data.status.gross_amount,
                //             });
                //             break;
    
                //         case "bank_transfer":
                //             if (response.data.status.hasOwnProperty('permata_va_number')) {
                //                 handleTransactionDialogOpen({
                //                     payment_type: "bank_transfer",
                //                     bank: "transfer bank - permata",
                //                     transaction_status: response.data.status.transaction_status,
                //                     payment_number_1: response.data.status.permata_va_number,
                //                     total_bill: response.data.status.gross_amount,
                //                 });
                //             } else {
                //                 handleTransactionDialogOpen({
                //                     payment_type: "bank_transfer",
                //                     bank: "transfer bank - "+response.data.status.va_numbers[0].bank,
                //                     transaction_status: response.data.status.transaction_status,
                //                     payment_number_1: response.data.status.va_numbers[0].va_number,
                //                     total_bill: response.data.status.gross_amount,
                //                 });
                //             }
                //             break;
                //         case "cstore":
                //             handleTransactionDialogOpen({
                //                 payment_type: "cstore",
                //                 bank: response.data.status.store,
                //                 transaction_status: response.data.status.transaction_status,
                //                 payment_number_1: response.data.status.payment_code,
                //                 total_bill: response.data.status.gross_amount,
                //             });
                //             break;
    
                //         default:
                //             break;
                //     }
                // }).catch((error) => {
                //     //
                // })
            });
        }
    }

    const [transactionStatusDialog, setTransactionStatusDialog] = React.useState({
        open: false,
        payment_type: '',
        bank: '',
        payment_number_1: '',
        payment_number_2: '',
        total_bill: 0,
        transaction_status: '',
        message: '',
    })

    // const handleTransactionDialogOpen = (params) => {
    //     setTransactionStatusDialog({
    //         open: true,
    //         payment_type: params.payment_type,
    //         bank: params.bank,
    //         payment_number_1: params.payment_number_1,
    //         payment_number_2: params.payment_number_2,
    //         total_bill: params.total_bill,
    //         transaction_status: params.transaction_status,
    //         message: params.message,
    //     });
    //   };

    //   const handleTransactionDialogClose = () => {
    //     setTransactionStatusDialog({
    //         open: false,
    //         payment_type: '',
    //         bank: '',
    //         payment_number_1: '',
    //         payment_number_2: '',
    //         total_bill: 0,
    //         transaction_status: '',
    //         message: '',
    //     });
    // };

    const handleCancelTransaction = () => {
        setTransactionStatusDialog({
            open: false,
            payment_type: '',
            bank: '',
            payment_number_1: '',
            payment_number_2: '',
            total_bill: 0,
            transaction_status: '',
            message: '',
        });
        axios.post('/api/cancel-midtrans-transaction', {
            orderID: orderID,
        })
        .then((response) => {
            //
            let newOrderID = new Date().getFullYear().toString()+new Date().getMonth().toString()+new Date().getDate().toString()+new Date().getHours().toString()+new Date().getMinutes().toString()+new Date().getSeconds().toString()+new Date().getMilliseconds().toString()+(Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
            window.sessionStorage.setItem('orderID', JSON.stringify(newOrderID));
            setOrderID(newOrderID);

            axios.post('/api/get-midtrans-token', {
                orderID: newOrderID,
                bookingDate: bookingDate,
                ticketOrder: ticketOrder,
                name: name,
                phone: phone,
                email: email,
                address: address,
            })
            .then((response) => {
                //
                window.snap.pay(response.data.token);
            }).catch((error) => {
                //
            })

        }).catch((error) => {
            //
        });
    }


    return(
        <>
            <Head
            title='Data Pemesan'>
            </Head>
            <Fade
            in={isMounted}
            timeout={1000}
            style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>

                <div>

                    {/*

                    <Dialog
                        open={transactionStatusDialog.open}
                        onClose={handleTransactionDialogClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                        {"Transaction Status"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <Grid
                                container={true}
                                direction="column"
                                spacing={0}
                                sx={{
                                    marginTop: '10px',
                                    display: 'flex',
                                    width: '400px',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                }}>
                                    <Box
                                    sx={{
                                        marginTop: '10px',
                                        padding: '10px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        backgroundColor: '#444',
                                        borderRadius: '10px'
                                    }}>
                                        {
                                            transactionStatusDialog.bank === "transfer bank - mandiri"
                                            ?
                                            <Box>
                                            <Typography
                                            sx={{
                                                fontSize: '14px',
                                                fontWeight: 400,
                                                color: '#ddd'
                                            }}>
                                                kode perusahaan:
                                            </Typography>
                                            <Typography
                                            sx={{
                                                fontSize: '24px',
                                                fontWeight: 600,
                                                color: '#ddd'
                                            }}>
                                                {transactionStatusDialog.payment_number_2}
                                            </Typography>
                                            </Box>
                                            : null
                                        }
                                        <Typography
                                        sx={{
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            color: '#ddd'
                                        }}>
                                            nomor virtual account / transaksi:
                                        </Typography>
                                        <Typography
                                        sx={{
                                            fontSize: '24px',
                                            fontWeight: 600,
                                            color: '#ddd'
                                        }}>
                                            {transactionStatusDialog.payment_number_1}
                                        </Typography>
                                    </Box>
                                    <Box
                                    sx={{
                                        marginTop: '30px',
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                    }}>
                                        <Typography
                                        sx={{
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            color: '#333'
                                        }}>
                                            status: {transactionStatusDialog.transaction_status}
                                        </Typography>
                                    </Box>
                                    <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                    }}>
                                        <Typography
                                        sx={{
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            color: '#333'
                                        }}>
                                            metode: {transactionStatusDialog.bank}
                                        </Typography>
                                    </Box>
                                    <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                    }}>
                                        <Typography
                                        sx={{
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            color: '#333'
                                        }}>
                                            jumlah: Rp. {transactionStatusDialog.total_bill.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        {
                            transactionStatusDialog.transaction_status !== "settlement"
                            ?
                            <Button
                            color="red"
                            variant='outlined'
                            onClick={handleCancelTransaction}>ubah metode pembayaran</Button>
                            : null
                        }
                        <Button variant='outlined' onClick={handleTransactionDialogClose}>tutup</Button>
                        </DialogActions>
                    </Dialog>

                    */}

                    {/* header */}
                    <Header/>

                    {/* receipt paper */}
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
                        <Paper
                        elevation={5}
                        sx={{
                            width: '90%',
                            maxWidth: '400px',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Box
                            sx={{
                                marginTop: '20px',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <img src={media[4]} alt="logo saloka" width={150} height={75}></img>
                            </Box>
                            <Box
                            sx={{
                                marginTop: '10px',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <Typography
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    color: '#333'
                                }}>
                                    {new Date().toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                </Typography>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '10px',
                                width: '90%',
                                height: '1',
                                borderBottom: 'dotted 2px #555'
                            }}></Box>

                            <Box
                            sx={{
                                marginTop: '10px',
                                width: '90%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <Typography
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    color: '#333'
                                }}>arrival Date:</Typography>
                                <Typography
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    color: '#333'
                                }}>{bookingDate.toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Typography>
                            </Box>
                            <Box
                            sx={{
                                width: '90%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <Typography
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    color: '#333'
                                }}>name:</Typography>
                                <Typography
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    color: '#333'
                                }}>{name}</Typography>
                            </Box>
                            <Box
                            sx={{
                                width: '90%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <Typography
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    color: '#333'
                                }}>phone:</Typography>
                                <Typography
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    color: '#333'
                                }}>{phone}</Typography>
                            </Box>
                            <Box
                            sx={{
                                width: '90%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <Typography
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    color: '#333'
                                }}>email:</Typography>
                                <Typography
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    color: '#333'
                                }}>{email}</Typography>
                            </Box>
                            <Box
                            sx={{
                                width: '90%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <Typography
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    color: '#333'
                                }}>address:</Typography>
                                <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}>
                                    <Typography
                                    textAlign="right"
                                    sx={{
                                        width: '70%',
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        color: '#333',
                                        lineHeight: 'normal'
                                    }}>{address}</Typography>
                                </Box>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '10px',
                                width: '90%',
                                height: '1',
                                borderBottom: 'dashed 2px #555'
                            }}></Box>

                            <Box
                            sx={{
                                marginTop: '10px',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Box
                                sx={{
                                    width: '90%',
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                    <Box
                                    sx={{
                                        width: '50%',
                                        height: '100%',
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                    }}>
                                        <Typography
                                        sx={{
                                            fontSize: '16px',
                                            fontWeight: 500,
                                            color: '#333'
                                        }}>TICKET</Typography>
                                    </Box>
                                    <Box
                                    sx={{
                                        width: '20%',
                                        height: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}>
                                        <Typography
                                        sx={{
                                            fontSize: '16px',
                                            fontWeight: 500,
                                            color: '#333'
                                        }}>QTY</Typography>
                                    </Box>
                                    <Box
                                    sx={{
                                        width: '30%',
                                        height: '100%',
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}>
                                        <Typography
                                        sx={{
                                            fontSize: '16px',
                                            fontWeight: 500,
                                            color: '#333'
                                        }}>SUBTOTAL</Typography>
                                    </Box>
                                </Box>

                                {ticketCount.map((index) => (
                                    <>
                                        {
                                            ticketOrder[index].quantity > 0
                                            ?
                                            <Box
                                            sx={{
                                                marginTop: '10px',
                                                width: '90%',
                                                height: '100%',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}>
                                                <Box
                                                sx={{
                                                    width: '50%',
                                                    height: '100%',
                                                    display: 'flex',
                                                    justifyContent: 'flex-start',
                                                }}>
                                                    <Typography
                                                    sx={{
                                                        fontSize: '14px',
                                                        fontWeight: 400,
                                                        color: '#333'
                                                    }}>{ticketOrder[index].ticket_name}</Typography>
                                                </Box>
                                                <Box
                                                sx={{
                                                    width: '20%',
                                                    height: '100%',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                }}>
                                                    <Typography
                                                    sx={{
                                                        fontSize: '14px',
                                                        fontWeight: 400,
                                                        color: '#333'
                                                    }}>{ticketOrder[index].quantity}</Typography>
                                                </Box>
                                                <Box
                                                sx={{
                                                    width: '30%',
                                                    height: '100%',
                                                    display: 'flex',
                                                    justifyContent: 'flex-end',
                                                }}>
                                                    <Typography
                                                    sx={{
                                                        fontSize: '14px',
                                                        fontWeight: 400,
                                                        color: '#333'
                                                    }}>Rp. {(ticketOrder[index].price * ticketOrder[index].quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                                                </Box>
                                            </Box>
                                            : null
                                        }
                                    </>
                                ))}
                            </Box>

                            <Box
                            sx={{
                                marginTop: '10px',
                                width: '90%',
                                height: '1',
                                borderBottom: 'solid 1px #555'
                            }}></Box>

                            <Box
                            sx={{
                                marginTop: '10px',
                                width: '90%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <Box
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                }}>
                                    <Typography
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        color: '#333'
                                    }}>Total:</Typography>
                                </Box>
                                <Box
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}>
                                    <Typography
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        color: '#333'
                                    }}>Rp. {totalBill.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                                </Box>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '10px',
                                width: '90%',
                                height: '1',
                                borderBottom: 'double 3px #555'
                            }}></Box>

                            <Box
                            sx={{
                                marginY: '20px',
                            }}>
                                <Button
                                onClick={() => snapPay()}
                                className='payButton'
                                id="pay-button"
                                variant="contained"
                                sx={{
                                    borderRadius: '30px',
                                }}
                                >Bayar</Button>
                            </Box>

                        </Paper>
                    </Grid>

                    {/* footer */}
                    <Box
                    sx={{
                        marginTop: '50px',
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${media[2]})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `cover`
                    }}>
                        <Footer/>
                    </Box>

                </div>

            </Fade>
            <Helmet>
                <script type="text/javascript"
                src="https://app.midtrans.com/snap/snap.js"
                data-client-key="Mid-client-lYBi_CM3a6fBcx3w"></script>
            </Helmet>
        </>
    )
}
