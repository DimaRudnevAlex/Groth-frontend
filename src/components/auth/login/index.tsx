import { Button, TextField, Typography } from '@mui/material';
import { FC, JSX } from 'react';

import { IPropsLogin } from '../../../common/types/auth';
import { Link } from 'react-router';

const LoginPage: FC<IPropsLogin> = (props): JSX.Element => {
    const { setPassword, setEmail } = props;
    return (
        <>
            <Typography variant="h3" fontFamily="Poppins" textAlign="center">
                Авторизация
            </Typography>
            <Typography
                variant="body1"
                fontFamily="Poppins"
                marginBottom={3}
                textAlign="center"
            >
                Введите ваш логин и пароль
            </Typography>
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
            <Button
                sx={{
                    fontFamily: 'Poppins',
                    marginTop: 2,
                    width: '60%',
                    marginBottom: 2,
                }}
                type="submit"
                variant="contained"
            >
                Войти
            </Button>
            <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
                У вас нет аккаунта?
                <Link to={'/register'} className="incitingText">
                    Регистрация
                </Link>
            </Typography>
        </>
    );
};

export default LoginPage;
