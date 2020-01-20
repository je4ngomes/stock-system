import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/css/App.css';
import RegisterAccountPage from './pages/RegisterAccountPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ScreenLoader from './components/ScreenLoader';
import useAuthReady from './hooks/useAuthReady';
import StorePage from './pages/StorePage';

const ComponentWithAuthLoader = ({ component: Component, isAuthReady }) => (
    true ? <Component /> : <ScreenLoader />
);

function App() {
    const isAuthReady = null//useAuthReady();

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path='/store'>
                        <ComponentWithAuthLoader 
                            component={StorePage} 
                            isAuthReady={isAuthReady}/>
                    </Route>
                    <Route path='/login'>
                        <LoginPage/>
                    </Route>
                    <Route path='/register'>
                        <RegisterAccountPage />
                    </Route>
                    <Route path='/dashboard'>
                        <ComponentWithAuthLoader 
                            component={DashboardPage} 
                            isAuthReady={isAuthReady}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;