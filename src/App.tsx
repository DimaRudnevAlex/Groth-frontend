import { Route, Routes } from 'react-router';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { ColorModeContext, useMode } from './theme';
import PrivateRoute from './utils/router/privateRoute.tsx';
import AuthRootComponent from './components/auth';

import Home from './pages/home';
import Watchlist from './pages/watchlist';
import News from './pages/news';
import Settings from './pages/settings';

function App() {
    const [colorMode, theme] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div>
                    <Routes>
                        <Route element={<PrivateRoute />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/watchlist" element={<Watchlist />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/settings" element={<Settings />} />
                        </Route>
                        <Route path="login" element={<AuthRootComponent />} />
                        <Route
                            path="register"
                            element={<AuthRootComponent />}
                        />
                    </Routes>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
