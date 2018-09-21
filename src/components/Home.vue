<template>
  <div class="current-view">
    <h1>Welcome to Scoutbase!</h1>
    <h3>Hey! Before scouting be sure to set your event from the dropdown below.</h3>
    <br>
    <br>
    <label style="padding-right: 1em;">Set Event Key: </label>
    <select @change="evtKeyChange" style="height: 30px; border: solid 1px black; padding: 0.2em; color: black;" id="event-select" placeholder="Loading events...">
    </select>
    <br>
    <br>
    <label>Current Event Key: {{ evtKey }}</label>
    <br>
    <br>
    <v-expansion-panel class="root-expansion">
      <v-expansion-panel-content>
        <div slot="header"><h3>Upcoming FIRST Robotics Events</h3></div>
        <v-card>
          <event-item class="child-expansion" v-for="(evt, i) in evts" :key="i" :event="evt"></event-item>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>

import EventItem from './EventItem.vue';

export default 
{
  name: 'Home',
  components: 
  {
    EventItem
  },
  data() {return (
  {
    evts: [],
    evtKey: window.localStorage.getItem("evt") || "unset"
  });},
  methods: 
  {
    getEvents()
    {
      this.$http.get("https://www.thebluealliance.com/api/v3/events/2018?X-TBA-Auth-Key=l546X6HHpPOiuPH0ZtO4rMgY1FvUWYIb9ruZRSdBcMlOsKBlMuyPzplegeFF7Oue").then( 
      res => 
      {
        console.log(res.body[0]);
        var filteredRes = res.body.filter(obj =>
        {
          var current = (new Date()).getTime();
          var target = (new Date(obj.end_date)).getTime();
          return target > current;
        });
        this.evts = filteredRes.sort((a,b) =>
        {
          return a.name < b.name? -1 : 1;
        });
        var options = "";
        for(var evt of this.evts)
        {
          options += `<option value="${evt.key}">${evt.name}</option>`;
        }
        document.querySelector("#event-select").innerHTML = options;
      }, 
      err => 
      {
        console.error(err);
      });
    },
    evtKeyChange(e)
    {
      window.localStorage.setItem("evt", e.target.value);
      this.evtKey = window.localStorage.getItem("evt");
    }
  },
  beforeMount()
  {
    this.getEvents();
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import 'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css';
  hr
  {
    margin: 1em 0;
    padding: 0px;
    background: black;
    height: 0.2em;
    border: none;
    border-radius: 0.1em;
  }
  .current-view
  {
    width: calc(100% - 2em);
    height: calc(100% - 2em);
    margin: 1em;
  }

  .root-expansion
  {
    background: linear-gradient(135deg, #363486, #0d0d31);
    color: white;
    border-radius: 0.7em;
    padding: 1em;
    width: 96%;
    margin: 1em auto;
  }

  .child-expansion
  {
    background: #ffffffa1;
    color: black;
    width: 96%;
    margin-right: 2%;
    margin-left: 2%;
    border-radius: 0.7em !important;
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 1em;
    transition: background 1s;
  }

  .child-expansion:hover
  {
    background: #ffffffea;
  }

  @media(min-width: 800px)
  {
    #app > div:nth-child(2) > ul > li > div.v-expansion-panel__body > div
    {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media(min-width: 1000px)
  {
    #app > div:nth-child(2) > ul > li > div.v-expansion-panel__body > div
    {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }

</style>
