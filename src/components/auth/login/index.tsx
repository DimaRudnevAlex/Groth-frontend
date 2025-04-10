import { TextField, Typography } from '@mui/material';
import { FC } from 'react';

import { IPropsLogin } from '../../../common/types/auth';
import { Link } from 'react-router';
import { useStyles } from './styles.ts';
import AppLoadingButton from '../../loading-button';

const LoginPage: FC<IPropsLogin<any>> = (props) => {
    const { register, errors, isLoading } = props;
    const cl = useStyles();

    return (
        <>
            <Typography
                variant="h3"
                fontFamily="Poppins"
                textAlign="center"
                fontSize="32px"
            >
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
                {...register('email')}
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
                {...register('password')}
                placeholder="Введите ваш пароль"
                helperText={
                    !!errors['password'] && `${errors['password'].message}`
                }
            />
            <AppLoadingButton
                loading={isLoading}
                sx={{
                    fontFamily: 'Poppins',
                    marginBlock: 2,
                    width: '60%',
                }}
                type="submit"
                variant="contained"
            >
                Войти
            </AppLoadingButton>
            <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
                У вас нет аккаунта?
                <Link to={'/register'} className={cl.incitingText}>
                    Регистрация
                </Link>
            </Typography>
        </>
    );
};

export default LoginPage;
