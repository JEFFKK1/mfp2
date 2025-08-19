import React, {lazy, Suspense, useEffect , useState} from 'react'
import { Router, Route, Switch, Redirect } from "react-router-dom"
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import { createBrowserHistory } from 'history'
//import AuthApp from "./components/AuthApp"
import Header from './components/Header'
import Progress from './components/Progress'
const MarketingLazy = lazy(() =>  import ("./components/MarketingApp"))

const AuthLazy = lazy(() =>  import ("./components/AuthApp"))
const DashboardLazy = lazy(() =>  import ("./components/DashboardApp"))

const generateClassName = createGenerateClassName({ 
    productionPrefix: 'co',
})
 const history = createBrowserHistory()
export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  useEffect(() => {
    if(isSignedIn) {
      history.push('/dashboard')
    }
  },[isSignedIn])
    return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history = { history }>
        <div>
          <Header onSignOut = {() => setIsSignedIn(false)} isSignedIn={isSignedIn}/>
            <Suspense fallback = { <Progress /> }>
              <Switch>
                <Route path= '/Auth'>
                  <AuthLazy onSignIn= { () => setIsSignedIn(true) } />
                </Route>
                <Route path='/dashboard' component = { DashboardLazy} >
                {!isSignedIn && <Redirect to="/" />} 
                </Route>
                <Route path='/' component = { MarketingLazy} />
              </Switch>
            </Suspense>   
        </div>
      </Router>
    </StylesProvider>
    )
}