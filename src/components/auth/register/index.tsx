import { Button, TextField, Typography } from '@mui/material';
import { FC } from 'react';

import { IPropsRegister } from '../../../common/types/auth';
import { Link } from 'react-router';

const RegisterPage: FC<IPropsRegister> = (props) => {
    const {
        setFirstName,
        setRepeatPassword,
        setPassword,
        setEmail,
        setUsername,
    } = props;

    return (
        <>
            <Typography variant="h3" fontFamily="Poppins" textAlign="center">
                Регистрация
            </Typography>
            <Typography
                variant="body1"
                fontFamily="Poppins"
                marginBottom={3}
                textAlign="center"
            >
                Введите данные для регистрации
            </Typography>
            <TextField
                fullWidth={true}
                margin="normal"
                label="Name"
                variant="outlined"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Введите вашe имя"
            />
            <TextField
                fullWidth={true}
                margin="normal"
                label="Username"
                variant="outlined"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Введите ваш username"
            />
            <TextField
                fullWidth={true}
                margin="normal"
                label="Email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите ваш email"
            />
            <TextField
                type="password"
                fullWidth={true}
                margin="normal"
                label="Password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите ваш пароль"
            />
            <TextField
                type="password"
                fullWidth={true}
                margin="normal"
                label="Password"
                variant="outlined"
                onChange={(e) => setRepeatPassword(e.target.value)}
                placeholder="Повторите ваш пароль"
            />
            <Button
                sx={{
                    fontFamily: 'Poppins',
                    marginTop: 2,
                    width: '60%',
                    marginBottom: 2,
                }}
                variant="contained"
                type="submit"
            >
                Регистрация
            </Button>
            <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
                У вас есть аккаунт?
                <Link to={'/login'} className="incitingText">
                    Авторизация
                </Link>
            </Typography>
        </>
    );
};

export default RegisterPage;
