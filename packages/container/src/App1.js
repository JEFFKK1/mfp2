import React from 'react'
import { BrowserRouter } from "react-router-dom"
import mountMe from 'marketing/Marketing'
import MarketingApp from "./components/MarketingApp";
import Header from './components/Header'
export default () => {
  // console.log('mount:', mountMe)
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <MarketingApp/> 
        </div>
      </BrowserRouter>
    )
}