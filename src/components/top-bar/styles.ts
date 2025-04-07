import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        position: 'static',
        boxShadow: 'none',
    },
    toolbar: {
        justifyContent: 'space-between',
        padding: '24px 20px',
    },
    menuIcon: {
        marginRight: '10px',
        cursor: 'pointer',
    },
    iconBlock: {
        paddingRight: '37px',
    },
    themeIcon: {
        marginRight: '45px',
    },
    searchBlock: {
        display: 'flex',
        maxHeight: '48px',
        borderRadius: '8px',
        marginLeft: '28px',
    },
    searchInput: {
        padding: '18px 12px',
    },
});
