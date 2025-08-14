import React from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Landing from './components/Landing'
import Pricing from  './components/Pricing'

const generateClassName = createGenerateClassName({ 
    productionPrefix: 'ma'
})

export default () => {
    console.log('marketing app.js')
    return (
    <StylesProvider generateClassName={generateClassName}>
        <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path= '/Pricing' component={Pricing}/>
                        <Route path ='/' component={Landing}/>
                    </Switch>
                </BrowserRouter>
        </div>
    </StylesProvider>
    )
}