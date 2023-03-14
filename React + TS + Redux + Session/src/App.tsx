import React, { Suspense, lazy, Fragment } from 'react'
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.scss';

import AuthGuard from './util/auth.guard';
import NonAuthGuard from './util/non-auth.guard';

const Login = lazy(() => import('./non-auth/login'));
const Dashboard = lazy(() => import('./auth/dashboard'));

function App() {
  return (

    <div className="App">
      <Suspense fallback={<div>Loading....</div>}>
        <Router>
          {/* <NonAuthGuard path='/' component={Login} /> */}

          {/* <Route path='/login' component={Login} /> */}

          <AuthGuard path='/auth/dashboard' component={Dashboard} />
          <NonAuthGuard path='/login' component={Login} />

          {/* <Route path='/auth/dashboard' component={<AuthGuard />}>
            <Route path='/auth/dashboard' component={<Dashboard />} />
          </Route> */}

        </Router>
      </Suspense>
    </div>
  );
}

export default App;
