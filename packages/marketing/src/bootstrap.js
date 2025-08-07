import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const mount = (el ) => {
    console.log('in the mount el = ', el)
    ReactDOM.render(<App/>, el)
}
if (process.env.NODE_ENV === 'development') {
   // console.log('checking dev root now...')
    const devRoot = document.querySelector('#marketing_dev_root')
    console.log('what is devroot - el: ', devRoot)
    if(devRoot)
        mount(devRoot)
    else
        console.log('Error in MARKETING BOOTSTRAP')
}
export default {mount}

