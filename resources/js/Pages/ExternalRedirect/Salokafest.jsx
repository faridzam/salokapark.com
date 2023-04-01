import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {Box, Typography, CircularProgress, Fade} from '@mui/material';
import {} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {mediaSalokafest} from '../../assets/images/salokafest';
import customStyle from './salokafest.module.css';

import { EncryptStorage } from 'encrypt-storage';

export function useIsMounted() {

    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
        return () => void (isMountedRef.current = false);
    }, []);

    return isMounted;

}

export const encryptStorage = new EncryptStorage('@encryptedByZam', {
    storageType: 'sessionStorage',
});


export default function Ticket(props) {
    const isMounted = useIsMounted();

    const externalRedirect = (route) => {
        window.location.href = route
    }

    React.useEffect(() => {
        // Your application has indicated there's an error
        if (encryptStorage.getItem('sessionCode')) {
            //
            var dateTimeNow = new Date();
            var jsonObj = encryptStorage.getItem('sessionCode');
            var expireDate = new Date(jsonObj.expire);

            var diffMaster = dateTimeNow - expireDate;
            var diffMins = Math.floor(((diffMaster % 86400000) % 3600000) / 60000);

            if (diffMins >= 0) {
                var sessionCode = {
                    id: new Date().getFullYear().toString()+(new Date().getMonth()+1).toString().padStart(2, "0")+new Date().getDate().toString().padStart(2, "0")+new Date().getMinutes().toString().padStart(2, "0")+new Date().getMilliseconds().toString().padStart(2, "0")+Math.floor(Math.random()*(999-100+1)+100).toString().substring(1),
                    expire: new Date(dateTimeNow.getTime() + 30*60000)
                }
                encryptStorage.setItem('sessionCodeID', JSON.stringify(sessionCode.id));
                encryptStorage.setItem('sessionCodeEX', JSON.stringify(sessionCode.expire));
                window.setTimeout(function(){
                    // Move to a new location or you can do something else
                    window.location.href = `https://salokafest.salokapark.app?sessionCodeID=${encodeURIComponent(sessionStorage.getItem('sessionCodeID'))}&sessionCodeEX=${encodeURIComponent(sessionStorage.getItem('sessionCodeEX'))}`;
                }, 5000);
            } else if (diffMins <= 0) {
                window.setTimeout(function(){
                    // Move to a new location or you can do something else
                    window.location.href = `https://salokafest.salokapark.app?sessionCodeID=${encodeURIComponent(sessionStorage.getItem('sessionCodeID'))}&sessionCodeEX=${encodeURIComponent(sessionStorage.getItem('sessionCodeEX'))}`;
                }, 5000);
            }

        } else{
            var dateTimeNow = new Date();
            var sessionCode = {
                id: new Date().getFullYear().toString()+(new Date().getMonth()+1).toString().padStart(2, "0")+new Date().getDate().toString().padStart(2, "0")+new Date().getMinutes().toString().padStart(2, "0")+new Date().getMilliseconds().toString().padStart(2, "0")+Math.floor(Math.random()*(999-100+1)+100).toString().substring(1),
                expire: new Date(dateTimeNow.getTime() + 30*60000)
            }
            encryptStorage.setItem('sessionCodeID', JSON.stringify(sessionCode.id));
            encryptStorage.setItem('sessionCodeEX', JSON.stringify(sessionCode.expire));
            window.setTimeout(function(){
                // Move to a new location or you can do something else
                window.location.href = `https://salokafest.salokapark.app?sessionCodeID=${encodeURIComponent(sessionStorage.getItem('sessionCodeID'))}&sessionCodeEX=${encodeURIComponent(sessionStorage.getItem('sessionCodeEX'))}`;
            }, 5000);
        }
    }, []);

    return (
        <>
            <Head title='Data Pemesan'/>
            <Fade
            in={isMounted}
            timeout={1000}
            style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>
                <div>

                    {/* contents */}
                    <Grid
                    container={true}
                    direction="column"
                    spacing={0}
                    sx={{
                        display: 'flex',
                        width: '100vw',
                        height: '100vh',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'black.lightest',
                    }}>
                        <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                        }}>
                            <img
                            src={mediaSalokafest[0]}
                            style={{
                            }}></img>
                        </Box>
                        <Box
                        sx={{
                            marginTop: '30px',
                        }}>
                        <CircularProgress />
                        </Box>
                        <Box>
                            <Typography
                            className={customStyle.loading}
                            sx={{
                                fontSize: '18px',
                                color: 'white.main',
                                marginTop: '10px',
                            }}>
                                Checking session for online reservation...
                            </Typography>
                        </Box>
                    </Grid>

                </div>
            </Fade>
        </>
    )
}
