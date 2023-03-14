import React, { ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom'


const NonAuthGuard = ({ component, ...rest }: any) => {
  const isLogin = localStorage.getItem('token');
  return (
    <Route {...rest} render={(props: any) => {
      if (!isLogin) {
        return React.createElement(component, props)
        // return <Component {...props} />
      } else {
        return <Redirect to='/auth/dashboard' />
      }
    }}
    />
  )
}

export default NonAuthGuard;