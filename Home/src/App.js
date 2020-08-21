import React from 'react';
import PropTypes from 'prop-types'
import { checkAuthState } from './store/actions/auth';
import { connect } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import { BaseRoute } from './Routers';


class App extends React.Component {
  componentDidMount(){
    this.props.onTryAutoSignup()
    console.log('App')
  }
  render(){
    return (
      <Router>
        
          <BaseRoute/>
        
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup : () => dispatch(checkAuthState())
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

App.propTypes = {
  onTryAutoSignup: PropTypes.func
}