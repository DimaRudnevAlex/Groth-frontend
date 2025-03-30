import { Navigate, Outlet } from 'react-router';

const PrivateRoute = () => {
    const auth = true;

    return auth ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRoute;
