import React from 'react'
import mountMe from 'marketing/Marketing'
import MarketingApp from "./components/MarketingApp";

//console.log('mount:', mountMe)
//console.log('App/Mount:', mount)

export default () => {
  // console.log('mount:', mountMe)
    return (
        <div>
            <h1>hello out there!!!</h1> 
            <hr/>
           <MarketingApp/> 
        </div>
    )
}