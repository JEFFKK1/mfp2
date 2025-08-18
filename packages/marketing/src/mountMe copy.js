import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory } from 'history'
import App from './App'

const  mountMe = (el, { onNavigate }) => {
    console.log('in the mountme for auth onNavigate = ', onNavigate)
    const history = createMemoryHistory()
    if(onNavigate) {
        history.listen(onNavigate)
    }
    ReactDOM.render(<App history = { history }/>, el)
 
    return {
        onParentNavigate({ pathname: nextPathname}) {
            const { pathname } = history.location
            console.log('Container just navigated', nextPathname, pathname)
            if(pathname !== nextPathname){
                history.push(nextPathname)
            }
        }
    }
}

export default mountMe 
