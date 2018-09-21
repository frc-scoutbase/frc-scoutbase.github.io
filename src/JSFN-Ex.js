
window.onload = function()
{
    fetch("./form2.json").then(res => {return res.text()}).then(text => 
    {
        document.body.appendChild(JSFN.parse(text));
    });
    
    var config = 
    {
        apiKey: "AIzaSyDbZM64iVkXZZTNKBYQOinSvrUSz-nyh4g",
        authDomain: "scoutbase-testing.firebaseapp.com",
        databaseURL: "https://scoutbase-testing.firebaseio.com",
        projectId: "scoutbase-testing",
        storageBucket: "scoutbase-testing.appspot.com",
        messagingSenderId: "84655105633"
    };
    firebase.initializeApp(config);

    // // SFDK Tests
    // SFDK.set("/users", [{"uid": "def"}], function(e)
    // {
    //     console.log("Set!");
    // });
    // SFDK.push("/users", {"uid": "aa"}, function(e)
    // {
    //     console.log("Push!");
    // });
    // SFDK.readOnce("/users", data => console.log(data));
}

function submit(e)
{
    SFDK.set("/events/current/", null);
    SFDK.push("/events/current/", Form.extractResponses(e.target), r => console.log("Submission Success!"));
}

function increment(e)
{
    var input = e.toElement.previousSibling;
    input.value ++;
}

function decrement(e)
{
    var input = e.toElement.previousSibling.previousSibling;
    input.value --;
}