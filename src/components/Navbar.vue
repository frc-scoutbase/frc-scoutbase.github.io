<template>
    <nav>
        <router-link to="/"><i class="material-icons">home</i></router-link>
        <router-link to="/chat"><i class="material-icons">chat_bubble</i></router-link>
        <router-link to="/graph"><i class="material-icons">bar_chart</i></router-link>
        <router-link to="/form"><i class="material-icons">assignment</i></router-link>
    </nav>
</template>

<script>
export default 
{
  name: 'Navbar',
  props: {}
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    nav
    {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr 2fr 1fr;
        background: linear-gradient(90deg, #d009cb, #013F8A);
    }
    nav a
    {
        grid-row: 2 / 3;
        text-align: center;
        text-decoration: none;
        display: table;
        height: 100%;
        color: #eeeeee;
    }
    nav a i
    {
        display: table-cell;
        vertical-align: middle;
        font-size: 2em;
    }
</style>
