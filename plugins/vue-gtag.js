import Vue from 'vue'
import VueGtag from 'vue-gtag'

console.log(`using gtag ${process.env.GOOGLE_ANALYTICS_ID}`)
Vue.use(VueGtag, {
  config: { id: process.env.GOOGLE_ANALYTICS_ID }
})