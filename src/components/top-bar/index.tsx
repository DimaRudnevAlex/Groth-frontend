import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { tokens, useColorMode } from '../../theme';
import { useStyles } from './styles.ts';
import { useAppSelector } from '../../utils/hook';
import { selectUser } from '../../store/slice/auth';

const TopBarComponent = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode: any = useColorMode();
    const cl = useStyles();
    const { firstName } = useAppSelector(selectUser)!;

    return (
        <Box
            className={cl.root}
            sx={{
                backgroundColor: colors.primary.DEFAULT,
                borderBottom: `1px solid ${colors.borderColor}`,
            }}
        >
            <Grid>Welcome {firstName}</Grid>
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
        </Box>
    );
};

export default TopBarComponent;
