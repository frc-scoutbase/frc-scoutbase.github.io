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

class SFDK
{
    static ensureInit()
    {
        try 
        {
            firebase.app();    
        } 
        catch (error) 
        {
            if(error.code == "app/no-app")
            {
                console.error("You need to init a firebase app before calling a function. View the Firebase error message below.");
                console.error(error.stack);
            }
            else
            {
                console.error("We have come across an unexpected error. View the Firebase error message below.")
                console.error(error.stack);
            }
        }
    }

    static set(path, value, callback)
    {
        this.ensureInit();
        firebase.database().ref(path).set(value).then(e => 
        {
            if(!e)
            {
                if(callback)
                    callback();
            }
            else
            {
                console.error("Failed to set " + value + " to '" + path + "'. See the Firebase error message below.");
                console.error(e);
            }
        });
    }

    static push(path, value, callback)
    {
        this.ensureInit();
        firebase.database().ref(path).push(value).then(e => 
        {
            if(callback)
                callback();
        });
    }

    static readOnce(path, callback)
    {
        firebase.database().ref(path).once('value').then(snapshot => 
        {
            if(callback)
                callback(snapshot.val());
            else
                console.warn("You have wasted a read, the read function requires a callback so it can send your requested data somewhere.")
        });
    }
}