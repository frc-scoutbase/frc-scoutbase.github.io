<template>
    <div class="current-view">
        <span>© 2018 - 2019 Nathan Gordon</span>
    </div>
</template>

<script>
export default 
{
  name: 'Footer',
  props: {},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .current-view
    {
        height: 100%;
        min-height: 90px;
        display: table;
        background: linear-gradient(90deg, #d009cb, #013F8A);
        color: white;
    }

    span
    {
        display: table-cell;
        width: 100%;
        text-align: center;
        vertical-align: middle;
    }
</style>
