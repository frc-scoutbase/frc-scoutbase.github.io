<template>
    <div class="current-view">
    </div>
</template>

<script>

export default 
{
  name: 'Form',
  props: {},
  data()
  {
    return (
    {

    })
  },
  mounted()
  {
    if(window.localStorage.getItem("evt") == undefined)
    {
      alert("You cannot scout until you have an event key set!");
      location.href = location.origin;
    }
    fetch("./PowUp.json").then(res => {return res.text()}).then(text => 
    {
        document.querySelector("#app > div:nth-child(2)").appendChild(JSFN.parse(text));
    });
  },
  methods:
  {
    f()
    {
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './forms.css';
.current-view
{
    width: calc(100% - 14px);
    height: calc(100% - 14px);
    margin: 7px;
}
</style>
