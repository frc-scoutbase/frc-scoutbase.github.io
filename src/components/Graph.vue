<template>
    <div class="current-view">
        <h1>Graph</h1>
        <h3>Configure your query:</h3>
        <v-expansion-panel class="root-expansion">
            <v-expansion-panel-content>
                <div slot="header">Select Teams<h4></h4></div>
                <v-card>
                    <v-card-text id="team-select" @click="addToSelection">
                        
                    </v-card-text>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
        <button @click="clearSelections">Clear Query</button>
        <div id="chart-view">
        </div>
    </div>
</template>

<script>
export default 
{
  name: 'Graph',
  props: {},
  data()
  {
    return (
    {
        matches: [],
        selection: []
    })
  },
  mounted()
  {
    if(window.localStorage.getItem("evt") == undefined)
    {
      alert("You cannot scout until you have an event key set!");
      location.href = location.origin;
    }
    else
    {
        SFDK.readOnce(`/${window.localStorage.getItem("evt")}`, (d) =>
        {
            window.localStorage.setItem("database", JSON.stringify(d));
            var db = JSON.parse(localStorage.getItem("database"));
            for(var key of Object.keys(db))
            {
                var teams = document.querySelector("#team-select");
                teams.innerHTML += `${key}: <button id='for-${key}_${JSON.stringify(db[key])}'>Add to Selection</button><br><br>`;
            }
        });
    }
  },
  methods:
  {
    addToSelection(e)
    {
        if(e.target.id.substring(0, 4) == "for-" && !this.selection.includes(e.target.id.substring(4, e.target.id.indexOf("_"))))
        {
            var matchData = (JSON.parse(e.target.id.substring(e.target.id.indexOf("_") + 1)));
            this.selection.push(e.target.id.substring(4, e.target.id.indexOf("_")));
            for(var team in matchData)
            {
                this.matches.push(matchData[team]);
            }
            console.log(this.matches);
            this.drawGraph(this.matches);
        }
    },
    clearSelections()
    {
        this._data.selection = [];
        this._data.matches = [];
        document.querySelector("#chart-view").remove();
        var current = document.createElement("div");
        current.setAttribute("id", "chart-view");
        document.querySelector(".current-view").appendChild(current);

    },
    drawGraph(matches)
    {
        document.querySelector("#chart-view").remove();
        var current = document.createElement("div");
        current.setAttribute("id", "chart-view");
        document.querySelector(".current-view").appendChild(current);
        for(var match of matches)
        {
            var row  = document.createElement("div");
            row.className = "row";

            var graph = document.createElement("canvas");
            graph.setAttribute("id", "graph-" + match.TEAM + "-auto");

            var graphCode = new Chart(graph.getContext("2d"),
            {
                type: 'doughnut',
                data: 
                {
                    labels: ["Auto Switch", "Auto Scale"],
                    datasets: 
                    [
                        {
                            label: `Auto - Team ${ match.TEAM } - Match ${ match.MATCH }`,
                            data: [match.switch_auto, match.scale_auto],
                            backgroundColor: ["#d009cb", "#013F8A"],
                            borderColor: ["#eeeeee"],
                            borderWidth: 2
                        }
                    ]
                }
            });
            graph.setAttribute("width", "");
            graph.setAttribute("height", "");

            var graph2 = document.createElement("canvas");
            graph2.setAttribute("id", "graph-" + match.TEAM + "-tele");

            var graphCode = new Chart(graph2.getContext("2d"),
            {
                type: 'doughnut',
                data: 
                {
                    labels: ["Tele Switch", "Tele Scale", "Tele Exchange"],
                    datasets: 
                    [
                        {
                            label: `Tele - Team ${ match.TEAM } - Match ${ match.MATCH }`,
                            data: [match.switch_tele, match.scale_tele, match.exchange_tele],
                            backgroundColor: ["#d009cb", "#013F8A", "#7323aa"],
                            borderColor: ["#eeeeee"],
                            borderWidth: 2
                        }
                    ]
                }
            });
            graph2.setAttribute("width", "");
            graph2.setAttribute("height", "");

            var label = document.createElement("label");
            if(window.innerWidth >= 800)
            {
                label.appendChild(document.createTextNode("Team: " + match.TEAM + " Match: " + match.MATCH + " - auto"));
                label.setAttribute("style", "font-weight: bolder; color: white; width: 100%; text-align: center; display: block; padding-bottom: 0.1em;");
                row.appendChild(label);
                var label = document.createElement("label");
                label.appendChild(document.createTextNode("Team: " + match.TEAM + " Match: " + match.MATCH + " - tele"));
                label.setAttribute("style", "font-weight: bolder; color: white; width: 100%; text-align: center; display: block; padding-bottom: 0.1em;");
                row.appendChild(label);
            }
            else
            {
                label.appendChild(document.createTextNode("Team: " + match.TEAM + " Match: " + match.MATCH));
                label.setAttribute("style", "font-weight: bolder; color: white; width: 100%; text-align: center; display: block; padding-bottom: 0.1em;");
                row.appendChild(label);
            }
            row.appendChild(graph2);
            row.appendChild(graph);

            current.appendChild(row);
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .current-view
    {
        width: calc(100% - 14px);
        height: calc(100% - 14px);
        margin: 7px;
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
    button
    {
        background: #4c25a8;
        color: white;
        font-weight: bolder;
        border: none;
        margin: 0.25em;
        border-radius: 0.7em;
        padding: 1em;
    }
</style>
