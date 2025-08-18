import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory } from 'history'
import App from './App'

const  mountMe = (el, {onSignIn, onNavigate, initialPath }) => {
    console.log('in the mountme -auth initialpath: = ', initialPath)
    const history = createMemoryHistory({
        initialEntries: [
            initialPath
        ]
    })
    if(onNavigate) {
        history.listen(onNavigate)
    }
    ReactDOM.render(<App onSignIn = { onSignIn } history = { history }/>, el)
 
    return {
        onParentNavigate({ pathname: nextPathname}) {
            const { pathname } = history.location
            console.log('Container just navigated to auth', nextPathname, pathname)
            if(pathname !== nextPathname){
                history.push(nextPathname)
            }
        }
    }
}

export default mountMe 
