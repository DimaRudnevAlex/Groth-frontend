import { useLocation, useNavigate } from 'react-router';
import { Box } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import LoginPage from './login';
import RegisterPage from './register';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { AppError } from '../../common/errors';
import { LoginSchema, RegisterSchema } from '../../utils/yup';

import { useStyles } from './styles.ts';
import { loginUser, registerUser } from '../../store/thunks/auth';
import { selectIsLoadingUser } from '../../store/slice/auth';

const AuthRootComponent: FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(selectIsLoadingUser);

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
                await dispatch(loginUser(data)).unwrap();
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
                    await dispatch(registerUser(userData)).unwrap();
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
                            isLoading={isLoading}
                            errors={errors}
                            register={register}
                        />
                    ) : location.pathname === '/register' ? (
                        <RegisterPage
                            isLoading={isLoading}
                            errors={errors}
                            register={register}
                        />
                    ) : null}
                </Box>
            </form>
        </div>
    );
};

export default AuthRootComponent;
