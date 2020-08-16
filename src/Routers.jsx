import React, { Component } from 'react'
import { Router, Switch, Redirect} from 'react-router-dom'

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



}