import { Grid, IconButton, useTheme } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useColorMode } from '../../theme';
import { useStyles } from './style.ts';

const ThemeSwitcher = () => {
    const theme = useTheme();
    const colorMode: any = useColorMode();
    const cl = useStyles();

    return (
        <Grid className={cl.iconBlock}>
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
    );
};

export default ThemeSwitcher;
