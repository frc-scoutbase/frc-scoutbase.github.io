import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Chat from './components/Chat.vue';
import Graph from './components/Graph.vue';
import Form from './components/Form.vue'

Vue.use(Router);

export default new Router(
{
  mode: 'history',
  routes: 
  [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/graph',
      name: 'Graph',
      component: Graph
    }
  ]
});