import { useLocation, useNavigate } from 'react-router';
import { Box } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import LoginPage from './login';
import RegisterPage from './register';

import { instance } from '../../utils/axios/axios.ts';
import { useAppDispatch } from '../../utils/hook';
import { login } from '../../store/slice/auth';
import { AppError } from '../../common/errors';
import { LoginSchema, RegisterSchema } from '../../utils/yup';

import { useStyles } from './styles.ts';

const AuthRootComponent: FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const cl = useStyles();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(
            location.pathname === '/login' ? LoginSchema : RegisterSchema,
        ),
    });

    const handleSubmitForm = async (data: any) => {
        if (location.pathname === '/login') {
            try {
                const userData = { email: data.email, password: data.password };
                const user = await instance.post('/auth/login', userData);
                dispatch(login(user.data));
                navigate('/');
            } catch (e) {
                return e;
            }
        } else {
            if (data.password === data.repeatPassword) {
                try {
                    const userData = {
                        firstName: data.name,
                        username: data.username,
                        email: data.email,
                        password: data.password,
                    };
                    const newUser = await instance.post(
                        '/auth/register',
                        userData,
                    );
                    dispatch(login(newUser.data));
                    navigate('/');
                } catch (e) {
                    return e;
                }
            } else {
                throw new Error(AppError.PasswordDoNotMatch);
            }
        }
    };

    return (
        <div className={cl.root}>
            <form className={cl.form} onSubmit={handleSubmit(handleSubmitForm)}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    maxWidth={640}
                    margin="auto"
                    padding={5}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                >
                    {location.pathname === '/login' ? (
                        <LoginPage
                            errors={errors}
                            register={register}
                            key="LoginPage"
                        />
                    ) : location.pathname === '/register' ? (
                        <RegisterPage
                            errors={errors}
                            register={register}
                            key="RegisterPage"
                        />
                    ) : null}
                </Box>
            </form>
        </div>
    );
};

export default AuthRootComponent;
