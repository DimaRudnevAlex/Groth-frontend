import {
    AppBar,
    Box,
    Grid,
    IconButton,
    InputBase,
    Toolbar,
    Typography,
    useTheme,
} from '@mui/material';
import { FC } from 'react';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import FlexBetween from '../flex-between';

import { tokens, useColorMode } from '../../theme';
import { ITopBarProps } from '../../common/types/topbar';

import { useStyles } from './styles.ts';

const TopBarComponent: FC<ITopBarProps> = (props) => {
    const { setIsOpen } = props;
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode: any = useColorMode();
    const cl = useStyles();
    const name = JSON.parse(sessionStorage.getItem('name')!);

    return (
        <AppBar
            className={cl.root}
            position="static"
            sx={{
                background: `${colors.primary.DEFAULT} !important`,
                borderBottom: `1px solid ${colors.borderColor}`,
            }}
        >
            <Toolbar className={cl.toolbar}>
                <FlexBetween>
                    <MenuOutlinedIcon
                        className={cl.menuIcon}
                        onClick={() => setIsOpen((prev) => !prev)}
                    />
                    <Typography variant="h3">Welcome, {name}</Typography>
                </FlexBetween>
                <Box display="flex" alignItems="center">
                    <Grid
                        className={cl.iconBlock}
                        sx={{ borderRight: `1px solid ${colors.borderColor}` }}
                    >
                        <IconButton
                            onClick={colorMode.toggleColorMode}
                            className={cl.themeIcon}
                        >
                            {theme.palette.mode === 'dark' ? (
                                <DarkModeIcon />
                            ) : (
                                <LightModeIcon />
                            )}
                        </IconButton>
                        <IconButton>
                            <NotificationsNoneIcon />
                        </IconButton>
                    </Grid>
                    <Grid
                        className={cl.searchBlock}
                        sx={{ backgroundColor: `${colors.primary[600]}` }}
                    >
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            className={cl.searchInput}
                            placeholder="Поиск..."
                        />
                    </Grid>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default TopBarComponent;
