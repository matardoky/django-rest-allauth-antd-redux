import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import LoginForm from './containers/LoginForm'
import Dashboard from './components/Dashboard'
import LieuConsult from './components/LieuConsult'
import Users from './components/users'
import CustomLayout from './containers/CustomLayout'
import Asider from './containers/Asider'
import Compte from './components/Compte'
import PasswordChange from './components/PasswordChange'
import PasswordReset from './containers/PasswordReset'
import PasswordResetConfirm from './containers/PasswordResetConfirm'
import CreateLieuConsult from './containers/CreateLieuConsult'


const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem("user")!==null;
    return (
        <Route
        {...rest}
        render={props =>
          isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
        />
    );
};

export const BaseRoute = () => {
    return (
        <Switch>
            <Route exact path= "/" component={LoginForm}/>
            <Route exact path="/password-reset" component={PasswordReset} />
            <Route exact path="/rest-auth/password/reset/confirm/:uid/:token" component={PasswordResetConfirm}/>
            <PrivateRoute>
                <CustomLayout>
                    <Switch>
                        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                        <PrivateRoute exact path ="/compte" component={Compte}/>
                        <PrivateRoute exact path ="/password/change" component={PasswordChange}  />
                        <Asider>
                            <Switch>
                                <PrivateRoute exact path="/lieu-de-consultation" component={LieuConsult}/>
                                <PrivateRoute exact path="/create-lieu-consult" component={CreateLieuConsult}/>
                                <PrivateRoute exact path="/users" component={Users}/>
                            </Switch>
                        </Asider>
                    </Switch>
                </CustomLayout>
            </PrivateRoute>
       </Switch>
    )
}

