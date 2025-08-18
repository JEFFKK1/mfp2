import React from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import { Switch, Route, Router } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from  './components/Signup'


const generateClassName = createGenerateClassName({ 
    productionPrefix: 'au'
})

export default ({ history, onSignIn }) => {
    console.log('auth app.js history = ', history)
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history = { history }>
                    <Switch>
                       <Route path="/auth/signin"> 
                            <Signin onSignIn = {onSignIn} />
                       </Route>
                       <Route path='/auth/signup'>
                            <Signup onSignIn = {onSignIn} />
                       </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}