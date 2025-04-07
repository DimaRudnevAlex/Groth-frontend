import { Button, TextField, Typography } from '@mui/material';
import { FC } from 'react';

import { IPropsRegister } from '../../../common/types/auth';
import { Link } from 'react-router';

const RegisterPage: FC<IPropsRegister<any>> = (props) => {
    const { register, errors } = props;

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
