import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/css/App.css';
import RegisterAccountPage from './pages/RegisterAccountPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ScreenLoader from './components/ScreenLoader';
import useAuthReady from './hooks/useAuthReady';

function App() {
    const isAuthReady = useAuthReady();

    if(!isAuthReady) return <ScreenLoader />

    return (
    <div className="App">
        <Router>
            <Switch>
                <Route path='/login'>
                    <LoginPage/>
                </Route>
                <Route path='/register'>
                    <RegisterAccountPage />
                </Route>
                <Route path='/dashboard'>
                    <DashboardPage />
                </Route>
            </Switch>
        </Router>
    </div>
    );
}

export default App;