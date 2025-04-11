import { useCallback, useEffect, useMemo, useRef } from 'react';

import { getFavoriteAssets } from '../../store/thunks/assets';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { selectFavoriteAssets } from '../../store/slice/assets';
import { Box, Grid, useTheme } from '@mui/material';
import { useStyles } from './styles.ts';
import { tokens } from '../../theme';
import AreaChart from '../../components/charts/area-chart';
import LineChart from '../../components/charts/linechart';

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

    const renderFavoriteBlock = favoriteAssets.map((item) => {
        const currentPrice = item.singleAsset[0].current_price;
        const currentCap = item.singleAsset[0].market_cap_change_percentage_24h;
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
                                {currentPrice.toFixed()} USD
                            </h3>
                            <p
                                className={cl.cardCapitalize}
                                style={{
                                    color: `${currentCap < 0 ? 'red' : 'green'}`,
                                }}
                            >
                                {currentCap.toFixed(5)} %
                            </p>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
                        <AreaChart data={item.data} />
                    </Grid>
                </Grid>
            </Grid>
        );
    });

    return (
        <Box className={cl.root}>
            <Grid container spacing={2} className={cl.areaChart}>
                {renderFavoriteBlock}
            </Grid>
            <Grid
                container
                className={cl.lineChartBlock}
                sx={{
                    backgroundColor: `${
                        theme.palette.mode === 'light'
                            ? colors.primary.DEFAULT
                            : colors.primary[600]
                    }`,
                    border: `1px solid ${colors.borderColor}`,
                }}
            >
                <Grid size={{ xs: 12, sm: 12, lg: 12 }}>
                    {favoriteAssets.length && (
                        <LineChart data={favoriteAssets} />
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
