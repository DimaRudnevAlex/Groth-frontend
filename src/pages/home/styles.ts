import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding: '32px',
    },
    topCardItem: {
        padding: '20px 14px',
        minHeight: 185,
        borderRadius: '12px',
    },
    assetName: {
        fontSize: 25,
        fontWeight: 600,
        lineHeight: '30px',
        textTransform: 'capitalize',
    },
    itemDetail: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'end',
        paddingBottom: '20px',
    },
    cardPrice: {
        fontSize: 32,
        fontWeight: 700,
        lineHeight: '48px',
    },
    cardCapitalize: {
        fontWeight: 400,
        fontSize: 18,
        lineHeight: '21px',
    },
    areaChart: {
        marginBottom: 32,
    },
    lineChartBlock: {
        padding: '20px 16px',
        minHeight: 270,
        borderRadius: '12px',
    },
});
