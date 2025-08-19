import { createApp } from 'vue'
import Dashboard from './components/Dashboard.vue'

const mount = (el) => {
   const app = createApp(Dashboard)
   app.mount(el)
}

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#dashboard_dev_root')
    console.log('what is devroot - el: ', devRoot)
    if(devRoot)
        mount(devRoot)
    else
        console.log('Error in MARKETING BOOTSTRAP')
}
export default {mount}

