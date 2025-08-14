import React from 'react'
import { BrowserRouter } from "react-router-dom"
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import mountMe from 'marketing/Marketing'
import MarketingApp from "./components/MarketingApp";
import Header from './components/Header'

const generateClassName = createGenerateClassName({ 
    productionPrefix: 'co',
})

export default () => {
  // console.log('mount:', mountMe)
    return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header/>
          <MarketingApp/> 
        </div>
      </BrowserRouter>
    </StylesProvider>
    )
}