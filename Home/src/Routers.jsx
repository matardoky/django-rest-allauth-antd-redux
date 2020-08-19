import React, { Component } from 'react'
import { Router, Switch, Redirect, Route} from 'react-router-dom'
import LoginForm from './containers/LoginForm'
import test from './containers/test'

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
            <Route exact path='/login' component={LoginForm}/>
            <Route exact path='/' component={test}/>
       </Switch>

    )
   

}

export const BasePrivateRoute = () => {

}