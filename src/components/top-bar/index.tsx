import { AppBar, Grid, Toolbar, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import FlexBetween from '../flex-between';
import ThemeSwitcher from '../theme-switcher';
import SearchBar from '../search-bar';

import { tokens } from '../../theme';
import { ITopBarProps } from '../../common/types/topbar';

import { useStyles } from './styles.ts';

const TopBarComponent: FC<ITopBarProps> = (props) => {
    const { setIsOpen, isNonMobile } = props;
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
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
                <Grid
                    container
                    width="100%"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid size={{ sm: 3, lg: 3 }}>
                        <FlexBetween>
                            <MenuOutlinedIcon
                                className={cl.menuIcon}
                                onClick={() => setIsOpen((prev) => !prev)}
                            />
                            <Typography variant="h3">
                                Welcome, {name}
                            </Typography>
                        </FlexBetween>
                    </Grid>
                    {isNonMobile && (
                        <Grid
                            size={{ sm: 9, lg: 9 }}
                            display="flex"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <ThemeSwitcher />
                            <SearchBar />
                        </Grid>
                    )}
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default TopBarComponent;
