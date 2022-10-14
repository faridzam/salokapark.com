import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {Box, Typography, Card, Button, Fab, TextField, Zoom} from '@mui/material';
import {Add, Remove} from '@mui/icons-material';

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
