import { useCallback, useEffect, useMemo, useRef } from 'react';

import { getFavoriteAssets } from '../../store/thunks/assets';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { selectFavoriteAssets } from '../../store/slice/assets';
import { Box, Grid, useTheme } from '@mui/material';
import { useStyles } from './styles.ts';
import { tokens } from '../../theme';

const Home = () => {
    const dispatch = useAppDispatch();
    const favoriteAssets = useAppSelector(selectFavoriteAssets);
    const fetchDataRef = useRef(false);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const cl = useStyles();

    const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], []);

    const fetchData = useCallback(
        (data: string[]) => {
            data.forEach((item) => {
                dispatch(getFavoriteAssets(item));
            });
        },
        [dispatch],
    );

    useEffect(() => {
        if (!fetchDataRef.current) {
            fetchData(favoriteAssetName);
        }
        return () => {
            fetchDataRef.current = true;
        };
    }, [dispatch, favoriteAssetName, fetchData]);

    const renderFavoriteBlock = favoriteAssets.map((item: any) => {
        const currentPrice = item.data.prices[0];
        const currentCap = item.data.market_caps[0];
        return (
            <Grid key={item.name} size={{ xs: 12, sm: 6, lg: 6 }}>
                <Grid
                    className={cl.topCardItem}
                    container
                    sx={{
                        border: `1px solid ${colors.borderColor}`,
                        backgroundColor: `${theme.palette.mode === 'light' ? colors.primary.DEFAULT : colors.primary[600]}`,
                    }}
                >
                    <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
                        <h3 className={cl.assetName}>{item.name}</h3>
                        <div className={cl.itemDetail}>
                            <h3 className={cl.cardPrice}>
                                {currentPrice[1].toFixed(2)}
                            </h3>
                            <p
                                className={cl.cardCapitalize}
                                style={{ color: `${colors.secondary.DEFAULT}` }}
                            >
                                {currentCap[1].toFixed(0)}
                            </p>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
                        <h5>Chart</h5>
                    </Grid>
                </Grid>
            </Grid>
        );
    });

    return (
        <Box className={cl.root}>
            <Grid container spacing={2}>
                {renderFavoriteBlock}
            </Grid>
        </Box>
    );
};

export default Home;
