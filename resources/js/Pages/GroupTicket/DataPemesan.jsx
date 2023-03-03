import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {Box, Typography, Card, InputAdornment, Button, TextField, Autocomplete, FormControl, InputLabel, Select, MenuItem, Fade, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import {AccountCircle, Business, Email, Phone, LocationOn} from '@mui/icons-material';

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
        const localCustomerCompanyName = window.sessionStorage.getItem('customerCompanyName');
        if (localCustomerCompanyName) {
            setCompanyName(JSON.parse(localCustomerCompanyName));
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
        // const localSelectedProvince = window.sessionStorage.getItem('selectedProvince');
        // if (localSelectedProvince) {
        //     setSelectedProvince(JSON.parse(localSelectedProvince));
        // } else {
        //     //
        // }
        // const localSelectedRegency = window.sessionStorage.getItem('selectedRegency');
        // if (localSelectedRegency) {
        //     setSelectedRegency(JSON.parse(localSelectedRegency));
        // } else {
        //     //
        // }
    }, []);

    const [bookingDate, setBookingDate] = React.useState( new Date());
    const [ticketOrder, setTicketOrder] = React.useState();
    const [name, setName] = React.useState("");
    const handleNameChange = (value) => {
        setName(value.target.value);
        window.sessionStorage.setItem('customerName', JSON.stringify(value.target.value));
    }
    const [companyName, setCompanyName] = React.useState("");
    const handleCompanyNameChange = (value) => {
        setCompanyName(value.target.value);
        window.sessionStorage.setItem('customerCompanyName', JSON.stringify(value.target.value));
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
            return;
        } else {
            setEmailTyping(true);
            const timeoutId = setTimeout(() => setEmailTyping(false), 500);
            return () => clearTimeout(timeoutId);
        }
    }, [email]);
    React.useEffect(() => {
        if (emailTyping === false) {
            // axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=c028b3d712bd44bbb87a8951748ebf26&email=${email}`)
            // .then(response => {
            //     if (response.data.deliverability === "DELIVERABLE") {
            //         setEmailValid(true);
            //         setEmailInvalidMessage("email is valid")
            //     } else {
            //         setEmailValid(false);
            //         setEmailInvalidMessage("email is invalid!")
            //     }
            // })
            // .catch(error => {
            //     setEmailInvalidMessage("check email validation failed!")
            // });
            if (email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                setEmailValid(true);
                setEmailInvalidMessage("email format is valid")
            } else {
                setEmailValid(false);
                setEmailInvalidMessage("email format is not valid")
            }
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
    // alamat dropdown
    const [province, setProvince] = React.useState([]);
    const [selectedProvince, setSelectedProvince] = React.useState("");
    const [regency, setRegency] = React.useState([]);
    const [selectedRegency, setSelectedRegency] = React.useState("");
    React.useEffect(() => {
        //
        axios.get('/api/get-province')
        .then((response) => {
            setProvince(response.data.status.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    const provinceCount = Array.from(Array(province.length).keys());
    const regencyCount = Array.from(Array(regency.length).keys());

    const onProvinceChange = (event) => {
        console.log(event);
        setSelectedRegency('');
        setSelectedProvince(event.target.value);
        window.sessionStorage.setItem('selectedProvince', event.target.value);

        axios.post('/api/get-regency', {
            province_id: JSON.parse(event.target.value).id
        })
        .then((response) => {
            setRegency(response.data.status.data);
        })
        .catch((error) => {
            console.log(error);
        })
    };
    const onRegencyChange = (event) => {
        console.log(event);
        setSelectedRegency(event.target.value);
        window.sessionStorage.setItem('selectedRegency', event.target.value);
    }

    // alamat text area
    const [address, setAddress] = React.useState("");
    const handleAddressChange = (value) => {
        setAddress(value.target.value);
        window.sessionStorage.setItem('customerAddress', JSON.stringify(value.target.value));
    }

    //submit button
    const [canSubmit, setCanSubmit] = React.useState(false);
    const submitConditionsArray = [
        name,
        companyName,
        phone,
        email,
        selectedProvince,
        selectedRegency,
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
    }, [name, companyName, phone, email, emailValid, emailActive, selectedProvince, selectedRegency])

    const submit = () => {
        let orderID = "ro-"+new Date().getFullYear().toString()+(new Date().getMonth()+1).toString().padStart(2, "0")+new Date().getDate().toString().padStart(2, "0")+new Date().getMinutes().toString().padStart(2, "0")+new Date().getMilliseconds().toString().padStart(2, "0")+Math.floor(Math.random()*(999-100+1)+100).toString().substring(1);
        window.sessionStorage.setItem('orderID', JSON.stringify(orderID));
        let zealsCode = window.localStorage.getItem('zeals_track')

        if(zealsCode) {
            axios.post('/api/create-reservation-group', {
                orderID: orderID,
                name: name,
                companyName: companyName,
                phone: phone,
                email: email,
                address: JSON.parse(selectedRegency).name+", "+JSON.parse(selectedProvince).name,
                zeals_code: zealsCode,
                bookingDate: bookingDate,
                ticketOrder: ticketOrder,
            }).then((response) => {
                //
                window.sessionStorage.setItem('reservationID', JSON.stringify(response.data.reservation_id));
                window.sessionStorage.setItem('orderID', JSON.stringify(response.data.order_id));
            }).catch((error) => {
                //
                console.log(error)
            });
        } else {
            axios.post('/api/create-reservation-group', {
                orderID: orderID,
                name: name,
                companyName: companyName,
                phone: phone,
                email: email,
                address: JSON.parse(selectedRegency).name+", "+JSON.parse(selectedProvince).name,
                zeals_code: null,
                bookingDate: bookingDate,
                ticketOrder: ticketOrder,
            }).then((response) => {
                //
                window.sessionStorage.setItem('reservationID', JSON.stringify(response.data.reservation_id));
                window.sessionStorage.setItem('orderID', JSON.stringify(response.data.order_id));
            }).catch((error) => {
                //
                console.log(error)
            });
        }

        handleDialogClose();
        Inertia.visit('/group-ticket/konfirmasi-pembayaran');
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
            <Fade
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
                                    label="Nama PIC"
                                    placeholder='Loka'
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
                                    value={companyName}
                                    onChange={value => handleCompanyNameChange(value)}
                                    autoComplete='off'
                                    label="Nama Group"
                                    placeholder='Saloka Theme Park'
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Business/>
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
                                    placeholder='08123456789'
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
                                    placeholder='yourname@mail.com'
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
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Provinsi</InputLabel>
                                        <Select
                                        value={selectedProvince || ""}
                                        label="Provinsi"
                                        onChange={onProvinceChange}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        defaultValue={""}
                                        >
                                            {provinceCount.map((index) => (
                                                <MenuItem key={province[index].id} value={JSON.stringify({id: province[index].id, name: province[index].name})}>{province[index].name}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box
                                sx={{
                                    width: '100%',
                                    padding: '10px',
                                    backgroundColor: '#fafafa',
                                }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Kota/Kabupaten</InputLabel>
                                        <Select
                                        value={selectedRegency || ""}
                                        label="Kota/Kabupaten"
                                        onChange={onRegencyChange}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        defaultValue={""}
                                        >
                                            {regencyCount.map((index) => (
                                                <MenuItem key={regency[index].id} value={JSON.stringify({id: regency[index].id, name: regency[index].name})}>{regency[index].name}</MenuItem>
                                            ))}

                                        </Select>
                                    </FormControl>
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
                        marginTop: '50px',
                        width: '100%',
                        height: '100%',
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
            </Fade>
        </>
    )
}
