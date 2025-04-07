import { Navigate } from 'react-router';
import { useAuth } from '../hook';
import LayoutComponent from '../../components/layout';

const PrivateRoute = () => {
    const auth = useAuth();

    return auth ? <LayoutComponent /> : <Navigate to="login" />;
};

export default PrivateRoute;
