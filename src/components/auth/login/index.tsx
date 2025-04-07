import { Button, TextField, Typography } from '@mui/material';
import { FC, JSX } from 'react';

import { IPropsLogin } from '../../../common/types/auth';
import { Link } from 'react-router';

const LoginPage: FC<IPropsLogin> = (props): JSX.Element => {
    const { register, errors } = props;
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
                error={!!errors['email']}
                fullWidth={true}
                margin="normal"
                label="Email"
                variant="filled"
                {...register('email', {
                    required: 'Это обязательное поле',
                })}
                placeholder="Введите ваш email"
                helperText={!!errors['email'] && `${errors['email'].message}`}
            />
            <TextField
                error={!!errors['password']}
                type="password"
                fullWidth={true}
                margin="normal"
                label="Password"
                variant="filled"
                {...register('password', {
                    required: 'Это обязательное поле',
                    minLength: 6,
                })}
                placeholder="Введите ваш пароль"
                helperText={
                    !!errors['password'] && `${errors['password'].message}`
                }
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
