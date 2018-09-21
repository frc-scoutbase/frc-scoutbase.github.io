<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default 
{
  name: 'app',
  components: 
  {
    Navbar,
    Footer
  }
}
</script>

<style>
@import "https://fonts.googleapis.com/icon?family=Material+Icons";

body,html
{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app 
{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
  width: 100%;
  height: 100%;
}

</style>
