import { Route, Routes } from 'react-router';
import Home from './components/home';
import PrivateRoute from './utils/router/privateRoute.tsx';
import AuthRootComponent from './components/auth';

function App() {
    return (
        <div>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route path="login" element={<AuthRootComponent />} />
                <Route path="register" element={<AuthRootComponent />} />
            </Routes>
        </div>
    );
}

export default App;
