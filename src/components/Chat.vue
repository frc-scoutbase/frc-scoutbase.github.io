<template>
    <div class="current-view">
        <h2>Scoutbase is built to help in all aspects of the FRC competition, so where would it be if it didn't provide a platform for communication?</h2>
        <hr>
        <p>Now, before you get too excited, if we had a chat platform built into Scoutbase sure it would be awesome but our database service would not be able to handle that load - at least not yet.</p>
        <p>So for the time being we have created a custom discord server that all teams can use for free for communication just press the link below!</p>
        <h3><a href="https://discord.gg/fA3wtNH">Join our Discord Server</a></h3>
    </div>
</template>

<script>
export default 
{
  name: 'Chat',
  props: {},
  data()
  {
    return (
    {

    })
  },
  methods:
  {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.current-view
{
    width: calc(100% - 2em);
    height: calc(80% - 10% + 1em);
    margin: 1em;
    text-align: center;
    margin-top: 10%;
}

hr
{
    margin: 1em;
    padding: 0px;
    background: black;
    height: 0.2em;
    border: none;
    border-radius: 0.1em;
}
</style>
