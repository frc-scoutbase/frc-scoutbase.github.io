<template>
    <v-expansion-panel>
        <v-expansion-panel-content>
            <div slot="header"><h4>{{ event.name }}</h4></div>
            <v-card>
                <v-card-text>
                    FIRST Event in {{ event.city }}, {{ event.state_prov }} {{ event.country }}<br><br>
                    From {{ event.start_date }} to {{ event.end_date }}<br><br>
                    Event Key: {{ event.key }}<br><br>
                    Event Type: {{ event.event_type_string }}<br><br>
                    View in Google Maps: <a :href="event.gmaps_url">{{ event.address }}</a>
                </v-card-text>
            </v-card>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
export default 
{
  name: 'event-item',
  props: 
  {
      event: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
