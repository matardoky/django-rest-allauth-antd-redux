import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import LoginForm from './containers/LoginForm'
import Dashboard from './components/Dashboard'
import LieuConsult from './components/LieuConsul'
import Users from './components/users'
import CustomLayout from './containers/CustomLayout'
import Asider from './containers/Asider'
import Compte from './components/Compte'


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
            <PrivateRoute>
                <CustomLayout>
                    <Switch>
                        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                        <PrivateRoute exact path ="/compte" component = {Compte}/>
                        <Asider>
                            <Switch>
                                <PrivateRoute exact path="/lieu-de-consultation" component={LieuConsult}/>
                                <PrivateRoute exact path="/users" component={Users}/>
                            </Switch>
                        </Asider>
                    </Switch>
                </CustomLayout>
            </PrivateRoute>
       </Switch>
    )
}

