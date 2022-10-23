import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {Box, Paper, Typography, Card, Button, TextField, Zoom} from '@mui/material';
import {Search} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import axios from 'axios';
import styles from './CheckStatus.module.css';

export function useIsMounted() {

    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
        return () => void (isMountedRef.current = false);
    }, []);

    return isMounted;
}

export default function CheckStatus(props) {

    const isMounted = useIsMounted();

    const [email, setEmail] = React.useState();
    const [reservation, setReservation] = React.useState([]);
    const [selectedReservation, setSelectedReservation] = React.useState();

    const reservationCount = Array.from(Array(reservation.length).keys());

    const handleEmailChange = (value) => {
        setEmail(value.target.value);
    }

    const findReservation = () => {
        axios.post('/api/get-reservation-by-email', {
            email: email
        }).then((response) => {
            //
            let reservations = response.data.reservations;
            let newReservation = [];

            for (let index = 0; index < reservations.length; index++) {
                newReservation.push({
                    id: reservations[index].id,
                    order_id: reservations[index].order_id,
                    bill: reservations[index].bill,
                    arrival_date: reservations[index].arrival_date,
                })
            }

            setReservation(newReservation);
        }).catch((error) => {
            //
            console.log(error);
        })
    }

    const selectReservation = (id) => {
        //
        setSelectedReservation(id);
    }

    return (
        <>

        <Head title='Check Status'/>

        <Zoom
        in={isMounted}
        timeout={1000}
        style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>
            <div>
                {/* header */}
                <Header/>

                {/* content */}
                <Grid
                container={true}
                direction="column"
                spacing={0}
                sx={{
                    marginTop: '100px',
                    display: 'flex',
                    maxWidth: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <Grid
                    container={true}
                    direction="row"
                    spacing={0}
                    sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                    }}>

                        {/*pilih reservasi*/}
                        <Paper
                        elevation={3}
                        sx={{
                            marginX: '2%',
                            width: '50%',
                            height: '100%',
                            borderRadius: '30px',
                        }}>

                            <Box
                            sx={{
                                marginTop: '20px',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <TextField
                                placeholder="email"
                                onChange={value => handleEmailChange(value)}
                                sx={{
                                    width: '50%',
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
                                        onClick={() => findReservation()}
                                        variant="contained"
                                        color='secondary'
                                        sx={{
                                            margin: 0,
                                            padding: 0,
                                            width: '100%',
                                            height: '100%',
                                            borderBottomLeftRadius: '50px',
                                            borderTopLeftRadius: '50px',
                                            borderBottomRightRadius: '50px',
                                            borderTopRightRadius: '50px',
                                        }}>

                                            <Search
                                            sx={{
                                                color: '#eee',
                                            }}/>
                                            <Typography
                                            sx={{
                                                marginX: '5px',
                                                fontSize: '18px',
                                                fontWeight: 400,
                                                color: '#eee'
                                            }}
                                            >Search</Typography>

                                        </Button>
                                }}>
                                </TextField>

                            </Box>

                            <Box
                            sx={{
                                marginTop: '20px',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <Typography
                                sx={{
                                    fontSize: '24px',
                                    fontWeight: 600
                                }}>
                                    Reservations:
                                </Typography>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '20px',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                            }}>

                            <Grid
                            container={true}
                            direction="column"
                            spacing={0}
                            sx={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'center',
                            }}>
                                {reservationCount.map((index) => (
                                    <Box
                                    sx={{
                                        marginY: '5px',
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}>
                                        <Card
                                        elevation={2}
                                        className={`reservation-container ${selectedReservation ===  reservation[index].id ? styles.reservationContainerActive : ""} `}
                                        onClick={() => selectReservation(reservation[index].id)}
                                        sx={{
                                            display: 'flex',
                                            width: '80%',
                                            height: '100px',
                                            justifyContent: 'center',
                                            borderRadius: '30px',
                                            cursor: 'pointer',
                                            '&:hover': {
                                                backgroundColor: 'secondary.lightest',
                                            },
                                        }}>
                                            <Grid
                                            container={true}
                                            direction="row"
                                            spacing={0}
                                            sx={{
                                                display: 'flex',
                                                width: '90%',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}>

                                                <Box
                                                sx={{
                                                    width: '60%',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                }}>
                                                    <Typography
                                                    sx={{
                                                        fontSize: '18px',
                                                        fontWeight: 600,
                                                        color: '#333'
                                                    }}>
                                                        {reservation[index].order_id}
                                                    </Typography>
                                                    <Typography
                                                    sx={{
                                                        fontSize: '12px',
                                                        fontWeight: 400,
                                                        color: '#555'
                                                    }}>
                                                        tanggal kedatangan: {reservation[index].arrival_date}
                                                    </Typography>
                                                </Box>

                                                <Box
                                                sx={{
                                                    width: '40%',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                }}>
                                                    <Typography
                                                    sx={{
                                                        fontSize: '18px',
                                                        fontWeight: 600,
                                                        color: '#333',
                                                        textAlign: 'right',
                                                    }}>
                                                        Rp. {reservation[index].bill.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                    </Typography>
                                                </Box>

                                            </Grid>
                                        </Card>
                                    </Box>
                                ))}
                            </Grid>

                            </Box>

                        </Paper>

                        {/*status reservasi*/}
                        <Paper
                        elevation={3}
                        sx={{
                            marginX: '2%',
                            width: '30%',
                            height: '500px',
                            borderRadius: '30px',
                        }}>
                            {
                                selectedReservation
                                ?
                                <Grid
                                container={true}
                                direction="row"
                                spacing={0}
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                }}>
                                    <Box
                                    sx={{
                                        marginTop: '20px',
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}>
                                        <Typography
                                        sx={{
                                            fontSize: '24px',
                                            fontWeight: 600
                                        }}>
                                            id :
                                        </Typography>
                                    </Box>
                                </Grid>
                                :
                                <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Typography
                                        sx={{
                                            fontSize: '24px',
                                            fontWeight: 600,
                                            color: '#aaa'
                                        }}>
                                            ID Reservasi Belum Dipilih
                                        </Typography>
                                        <Typography
                                        sx={{
                                            fontSize: '18px',
                                            fontWeight: 400,
                                            color: '#aaa'
                                        }}>
                                            Silahkan masukkan email reservasi anda lalu pilih ID reservasi!
                                        </Typography>
                                    </Box>
                                </Box>
                            }
                        </Paper>

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

            </div>
        </Zoom>

        </>
    )
}
