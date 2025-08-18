import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'

const mount = (el, {  defaultHistory } ) => {
    const history = defaultHistory
    console.log('is history created',history)
    ReactDOM.render(<App history = { history } />, el)
}
if (process.env.NODE_ENV === 'development') {
   console.log('checking dev root now...')
    const devRoot = document.querySelector('#auth_dev_root')
    console.log('what is devroot - el: ', devRoot)
    if(devRoot)
        mount(devRoot, { defaultHistory: createBrowserHistory() })
    else
        console.log('Error in MARKETING BOOTSTRAP')
}
export default {mount}

