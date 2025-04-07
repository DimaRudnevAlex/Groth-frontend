import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';

import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import CustomLink from '../custom-link';

const navMenu = [
    {
        name: 'Главная',
        icon: HomeOutlinedIcon,
        path: '/',
        id: 1,
    },
    {
        name: 'Избранное',
        icon: TimelineOutlinedIcon,
        path: '/watchlist',
        id: 2,
    },
    {
        name: 'Новости',
        icon: NewspaperOutlinedIcon,
        path: '/news',
        id: 3,
    },
    {
        name: 'Настройки',
        icon: AdminPanelSettingsOutlinedIcon,
        path: '/settings',
        id: 4,
    },
];

const MenuNavigate = () => {
    return (
        <List sx={{ marginBottom: '50px' }}>
            {navMenu.map((item) => (
                <CustomLink to={item.path} key={item.id}>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>{<item.icon />}</ListItemIcon>
                            <ListItemText>
                                <Typography variant="body1">
                                    {item.name}
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </CustomLink>
            ))}
        </List>
    );
};

export default MenuNavigate;
