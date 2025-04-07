import TopBarComponent from '../top-bar';
import { Outlet } from 'react-router';
import { Box, useMediaQuery } from '@mui/material';
import Sidebar from '../sidebar';
import { useState } from 'react';

const LayoutComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isNonMobile = useMediaQuery('(min-width:600px)');
    return (
        <Box
            display={isNonMobile ? 'flex' : 'block'}
            width="100%"
            height="100%"
        >
            <Sidebar
                isNonMobile={isNonMobile}
                drawerWidth="250px"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <Box
                display="flex"
                flexGrow="1"
                justifyContent="space-between"
                flexDirection="column"
            >
                <TopBarComponent setIsOpen={setIsOpen} />
                <Outlet />
            </Box>
        </Box>
    );
};

export default LayoutComponent;
