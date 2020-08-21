import React, { Component } from 'react'
import { Router, Switch, Redirect, Route} from 'react-router-dom'
import LoginForm from './containers/LoginForm'
import Test from './containers/test'
import { Dashboard } from './components/Dashboard'
import { LieuConsult } from './components/LieuConsul'
import { Users } from './components/users'


export const PrivateRoute = ({component = Component, ...rest}) => {
    const isAuthenticated = localStorage.getItem("user") !==null
    return (
        <Router
           {...rest}
           render= {props => 
            isAuthenticated === true ? (
                <Component {...props}/>

            ):(
                <Redirect
                to={{
                    pathname:"/login",
                    state:{from:props.location}
                }}
                />
            )
        }
        />
    )
}

export const BaseRoute = () => {
    return (
        <Switch>
            <Route exact path = '/login' component={LoginForm}/>
            <Route exact path = '/home' component={Test} />
            <Route exact path = '/dashboard'component ={Dashboard}/>
            <Route exact path = '/lieu-de-consultation' component ={LieuConsult}/>
            <Route exact path = '/users' component={Users} />
       </Switch>

    )
   

}

