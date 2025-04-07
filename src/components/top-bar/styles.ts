import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => {
    return {
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: '24px 32px',
            maxHeight: '95px',
        },
        iconBlock: {
            paddingRight: '37px',
        },
        themeIcon: {
            marginRight: '45px',
        },
        searchBlock: {
            display: 'flex',
            borderRadius: '8px',
            marginLeft: '28px',
        },
        searchInput: {
            padding: '18px 12px',
        },
    };
});
