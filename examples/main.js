import Vue from 'vue'
import App from './App.vue'
import {
  Table,
  TableColumn
} from 'element-ui'

Vue.use(Table)
Vue.use(TableColumn)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
