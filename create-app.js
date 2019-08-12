import Vue from 'vue'
import App from './App.vue'

export default (ssrData) => {
  const app = new Vue({
    render: createElement => createElement(App, {
      props: ssrData
    })
  })

  return { app }
}
