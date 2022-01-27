import React from 'react';
import { ThemeProvider, useTheme } from '@material-ui/core';
import { Suspense } from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import { Fallback, Layout } from './components';
import { history } from './helpers';
import {   routes } from './utils';

function App() {
    
    return <Router history={history}>
        <ThemeProvider >
            <Suspense fallback={<Fallback/>}>
                <Switch>
                        {routes && routes.map((route, index)=><Layout {...route} key={index}/>)}
                </Switch>
            </Suspense>
        </ThemeProvider>
    </Router>
}

export default App;
