import { TextField, Typography } from '@mui/material';
import { FC } from 'react';

import { IPropsRegister } from '../../../common/types/auth';
import { Link } from 'react-router';
import { useStyles } from './styles.ts';
import AppLoadingButton from '../../loading-button';

const RegisterPage: FC<IPropsRegister<any>> = (props) => {
    const { register, errors, isLoading } = props;
    const cl = useStyles();

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
                error={!!errors['name']}
                {...register('name')}
                fullWidth={true}
                margin="normal"
                label="Name"
                variant="outlined"
                placeholder="Введите вашe имя"
                helperText={!!errors['name'] && `${errors['name'].message}`}
            />
            <TextField
                error={!!errors['username']}
                {...register('username')}
                fullWidth={true}
                margin="normal"
                label="Username"
                variant="outlined"
                placeholder="Введите ваш username"
                helperText={
                    !!errors['username'] && `${errors['username'].message}`
                }
            />
            <TextField
                error={!!errors['email']}
                {...register('email')}
                fullWidth={true}
                margin="normal"
                label="Email"
                variant="outlined"
                placeholder="Введите ваш email"
                helperText={!!errors['email'] && `${errors['email'].message}`}
            />
            <TextField
                error={!!errors['password']}
                {...register('password')}
                type="password"
                fullWidth={true}
                margin="normal"
                label="Password"
                variant="outlined"
                placeholder="Введите ваш пароль"
                helperText={
                    !!errors['password'] && `${errors['password'].message}`
                }
            />
            <TextField
                error={!!errors['repeatPassword']}
                {...register('repeatPassword')}
                type="password"
                fullWidth={true}
                margin="normal"
                label="Password"
                variant="outlined"
                placeholder="Повторите ваш пароль"
                helperText={
                    !!errors['repeatPassword'] &&
                    `${errors['repeatPassword'].message}`
                }
            />
            <AppLoadingButton
                sx={{
                    fontFamily: 'Poppins',
                    marginBlock: 2,
                    width: '60%',
                }}
                loading={isLoading}
                variant="contained"
                type="submit"
            >
                Регистрация
            </AppLoadingButton>
            <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
                У вас есть аккаунт?
                <Link to={'/login'} className={cl.incitingText}>
                    Авторизация
                </Link>
            </Typography>
        </>
    );
};

export default RegisterPage;
