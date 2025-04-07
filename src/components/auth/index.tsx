import { useLocation, useNavigate } from 'react-router';
import { Box } from '@mui/material';
import { ChangeEvent, FC, JSX, useState } from 'react';

import LoginPage from './login';
import RegisterPage from './register';

import { instance } from '../../utils/axios/axios.ts';
import { useAppDispatch } from '../../utils/hook';
import { login } from '../../store/slice/auth';
import { AppError } from '../../common/errors';

import './style.scss';

const AuthRootComponent: FC = (): JSX.Element => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('12345678');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (location.pathname === '/login') {
            try {
                const userData = { email, password };
                const user = await instance.post('/auth/login', userData);
                dispatch(login(user.data));
                navigate('/');
            } catch (e) {
                return e;
            }
        } else {
            if (password === repeatPassword) {
                try {
                    const userData = {
                        firstName,
                        username,
                        email,
                        password,
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
        <div className="root">
            <form className="form" onSubmit={handleSubmit}>
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
                            setEmail={setEmail}
                            setPassword={setPassword}
                        />
                    ) : location.pathname === '/register' ? (
                        <RegisterPage
                            setRepeatPassword={setRepeatPassword}
                            setFirstName={setFirstName}
                            setUsername={setUsername}
                            setEmail={setEmail}
                            setPassword={setPassword}
                        />
                    ) : null}
                </Box>
            </form>
        </div>
    );
};

export default AuthRootComponent;
