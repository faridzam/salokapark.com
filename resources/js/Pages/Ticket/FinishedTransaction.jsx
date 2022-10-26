import React from "react";
import { Link, Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Card, InputAdornment, Button, TextField, Fade} from '@mui/material';
import { useTheme } from "@mui/material/styles";
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

export default function FinishTransaction(props) {

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const isMounted = useIsMounted();
    const initialMountRef = React.useRef(true);

    return(
        <>
            <Head
            title='Finish Transaction'>
            </Head>
            <Fade
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
                    <Grid>
                    ini mobile
                    </Grid>
                }

            </Fade>
        </>
    )
}
