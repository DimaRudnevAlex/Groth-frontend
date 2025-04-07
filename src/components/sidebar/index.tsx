import {
    Box,
    Drawer,
    // Divider,
    IconButton,
    Typography,
    useTheme,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
// import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import FlexBetween from '../flex-between';
import MenuNavigate from './menu-navigate';
import { tokens } from '../../theme';

import Logo from '../../assets/images/logo.svg';
import { useStyles } from './styles.ts';

const Sidebar = (props: any) => {
    const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props;
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const cl = useStyles();

    return (
        <Box component="nav">
            {isOpen && (
                <Drawer
                    anchor="left"
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    variant="persistent"
                    sx={{
                        width: drawerWidth,
                        '& .MuiDrawer-paper': {
                            color: theme.palette.secondary.main,
                            backgroundColor: theme.palette.primary.main,
                            width: drawerWidth,
                        },
                    }}
                >
                    <Box
                        pt={2}
                        sx={{ borderBottom: `1px solid ${colors.borderColor}` }}
                    >
                        <Box>
                            <FlexBetween>
                                <Box className={cl.navBlock}>
                                    <img src={Logo} alt="logo" />
                                    <Typography
                                        variant="h1"
                                        textAlign="center"
                                        color={
                                            theme.palette.mode === 'dark'
                                                ? colors.white.DEFAULT
                                                : colors.black.DEFAULT
                                        }
                                    >
                                        BtcInfo
                                    </Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        <ChevronLeftOutlinedIcon />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <MenuNavigate />
                    </Box>
                    <Box width="100%">
                        <List>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LogoutOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography>Выйти</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default Sidebar;
