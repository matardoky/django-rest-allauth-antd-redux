import React from 'react';
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

export default connect(null, mapDispatchToProps)(App)
