import { createApp } from 'vue'
import Dashboard from './components/Dashboard.vue'

const  mountMe = (el) => {
    const app = createApp(Dashboard)
       app.mount(el)
}
export default mountMe 
