import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const  mountMe = (el) => {
    console.log('in the mount el = ', el)
    ReactDOM.render(<App/>, el)
}

export default mountMe 
