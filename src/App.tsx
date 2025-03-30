import { Route, Routes } from 'react-router';

import LoginPage from './components/auth/login';
import Home from './components/home';
import PrivateRoute from './utils/router/privateRoute.tsx';

import './App.css';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route path="login" element={<LoginPage />} />
            </Routes>
        </div>
    );
}

export default App;
