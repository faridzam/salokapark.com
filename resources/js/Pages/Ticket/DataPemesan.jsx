import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {Box, Typography, Card, InputAdornment, Button, TextField, Zoom, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import {AccountCircle, Email, Phone, LocationOn} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';

export function useIsMounted() {

    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
        return () => void (isMountedRef.current = false);
    }, []);

    return isMounted;
}

export default function Ticket(props) {
    const isMounted = useIsMounted();
    const initialMountRef = React.useRef(true);

    //get session storage data
    React.useEffect(() => {
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

    const [name, setName] = React.useState("");
    const handleNameChange = (value) => {
        setName(value.target.value);
        window.sessionStorage.setItem('customerName', JSON.stringify(value.target.value));
    }
    const [phone, setPhone] = React.useState("");
    const handlePhoneChange = (value) => {
        setPhone(value.target.value);
        window.sessionStorage.setItem('customerPhone', JSON.stringify(value.target.value));
    }
    const [email, setEmail] = React.useState("");
    const [emailTyping, setEmailTyping] = React.useState(true);
    const [emailValid, setEmailValid] = React.useState(false);
    const [emailInvalidMessage, setEmailInvalidMessage] = React.useState('kode booking akan dikirim melalui alamat email!');
    const [emailActive, setEmailActive] = React.useState(false);
    React.useEffect(() => {
        if (initialMountRef.current) {
            //initialMountRef.current = false;
            console.log('initial render')
            return;
        } else {
            setEmailTyping(true);
            const timeoutId = setTimeout(() => setEmailTyping(false), 3000);
            return () => clearTimeout(timeoutId);
        }
    }, [email]);
    React.useEffect(() => {
        if (emailTyping === false) {
            axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=c028b3d712bd44bbb87a8951748ebf26&email=${email}`)
            .then(response => {
                console.log(response.data);
                if (response.data.deliverability === "DELIVERABLE") {
                    setEmailValid(true);
                    setEmailInvalidMessage("email is valid")
                } else {
                    setEmailValid(false);
                    setEmailInvalidMessage("email is invalid!")
                }
            })
            .catch(error => {
                console.log(error);
                setEmailInvalidMessage("check email validation failed!")
            });
        } else {
            //
        }
    }, [emailTyping]);
    const handleEmailChange = (value) => {
        if (initialMountRef.current) {
            initialMountRef.current = false;
        }
        setEmail(value.target.value);
        window.sessionStorage.setItem('customerEmail', JSON.stringify(value.target.value));
    }
    const [address, setAddress] = React.useState("");
    const handleAddressChange = (value) => {
        setAddress(value.target.value);
        window.sessionStorage.setItem('customerAddress', JSON.stringify(value.target.value));
    }

    //submit button
    const [canSubmit, setCanSubmit] = React.useState(false);
    const submitConditionsArray = [
        name,
        phone,
        email,
        address,
    ]
    const validator = [""];

    function multipleValidator(arr, values) {
        return values.every(value => {
          return arr.includes(value);
        });
    }

    React.useEffect(() => {
        if (multipleValidator(submitConditionsArray, validator) === true || emailValid === false) {
            setCanSubmit(false);
        } else {
            setCanSubmit(true)
        }
        console.log(submitConditionsArray)
        console.log(canSubmit)
    }, [name, phone, email, emailValid, emailActive, address])

    const submit = () => {
        let orderID = new Date().getFullYear().toString()+new Date().getMonth().toString()+new Date().getDate().toString()+new Date().getHours().toString()+new Date().getMinutes().toString()+new Date().getSeconds().toString()+new Date().getMilliseconds().toString()+(Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
        window.sessionStorage.setItem('orderID', JSON.stringify(orderID));
        handleDialogClose();
        Inertia.visit('/ticket/konfirmasi-pembayaran');
    }

    // confirmation dialog
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleDialogOpen = () => {
      setOpenDialog(true);
    };
    const handleDialogClose = () => {
      setOpenDialog(false);
    };

    return (
        <>
            <Head title='Data Pemesan'/>
            <Zoom
            in={isMounted}
            timeout={1000}
            style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>
                <div>
                    {/* header */}
                    <Header/>

                    {/* contents */}
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
                        <Box>
                            <Typography
                            sx={{
                                fontSize: '32px',
                                fontWeight: 600,
                                color: '#333',
                            }}>
                                Data Diri Pemesan
                            </Typography>
                        </Box>
                        <Card
                        sx={{
                            width: '90%',
                            maxWidth: '500px',
                            marginTop: '50px',
                            padding: '30px',
                            borderRadius: '30px',
                        }}>
                            <Grid
                            container={true}
                            direction="column"
                            spacing={0}
                            sx={{
                                display: 'flex',
                                width: '100%',
                                maxWidth: '500px',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Box
                                sx={{
                                    width: '100%',
                                    padding: '10px',
                                    backgroundColor: '#fafafa',
                                }}>
                                    <TextField
                                    value={name}
                                    onChange={value => handleNameChange(value)}
                                    autoComplete='off'
                                    label="Nama"
                                    placeholder='Ahmad Farid Imam Zamani'
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle/>
                                        </InputAdornment>
                                    ),
                                    }}
                                    sx={{
                                        width: '100%',
                                    }}
                                    variant="outlined"
                                    />
                                </Box>

                                <Box
                                sx={{
                                    width: '100%',
                                    padding: '10px',
                                    backgroundColor: '#fafafa',
                                }}>
                                    <TextField
                                    value={phone}
                                    onChange={value => handlePhoneChange(value)}
                                    autoComplete='off'
                                    label="Nomor Telepon"
                                    placeholder='08993011870'
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Phone/>
                                        </InputAdornment>
                                    ),
                                    }}
                                    sx={{
                                        width: '100%',
                                    }}
                                    variant="outlined"
                                    />
                                </Box>

                                <Box
                                sx={{
                                    width: '100%',
                                    padding: '10px',
                                    backgroundColor: '#fafafa',
                                }}>
                                    <TextField
                                    value={email}
                                    onChange={value => handleEmailChange(value)}
                                    autoComplete='off'
                                    label="Email"
                                    placeholder='zamtechcorp@gmail.com'
                                    helperText={emailInvalidMessage}
                                    error={!emailValid}
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Email/>
                                        </InputAdornment>
                                    ),
                                    }}
                                    sx={{
                                        width: '100%',
                                    }}
                                    variant="outlined"
                                    />
                                </Box>

                                <Box
                                sx={{
                                    width: '100%',
                                    padding: '10px',
                                    backgroundColor: '#fafafa',
                                }}>
                                    <TextField
                                    value={address}
                                    onChange={value => handleAddressChange(value)}
                                    autoComplete='off'
                                    label="Alamat"
                                    placeholder='Jl. Fatmawati No.154, Tuntang, Semarang, Jawa Tengah 50773'
                                    multiline
                                    rows={3}
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocationOn/>
                                        </InputAdornment>
                                    ),
                                    }}
                                    sx={{
                                        width: '100%',
                                    }}
                                    variant="outlined"
                                    />
                                </Box>
                                {
                                    canSubmit
                                    ?
                                    <Box>
                                        <Button
                                        variant="contained"
                                        onClick={handleDialogOpen}
                                        sx={{
                                            borderRadius: '30px',
                                        }}
                                        >Selanjutnya</Button>
                                    </Box>
                                    :
                                    <Box>
                                        <Button
                                        disabled
                                        variant="contained"
                                        onClick={() => submit()}
                                        sx={{
                                            borderRadius: '30px',
                                        }}
                                        >Selanjutnya</Button>
                                    </Box>
                                }
                            </Grid>
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

                    <Dialog
                    open={openDialog}
                    onClose={handleDialogClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                        <DialogTitle id="alert-dialog-title">
                        {`Apakah alamat email ${email} sudah benar?`}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Kode booking akan dikirim via email.
                                Kesalahan penulisan alamat mengakibatkan anda tidak mendapatkan kode booking dari kami.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleDialogClose}>cancel</Button>
                            <Button onClick={submit} autoFocus>
                                next
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Zoom>
        </>
    )
}
