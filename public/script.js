firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function saveData() {
    var userInput = document.getElementById('userInput').value;
    var docRef = db.collection("users").doc("singleDocument");
    docRef.set({
        user_input: userInput
    })
    .then(() => { 
        alert("Data saved successfully!");
        document.getElementById('userInput').value = "";
    })
    .catch((error) => {
        console.error("Error writing data: ", error);
    });
}

function retrieveData() {
    var docRef = db.collection("users").doc("singleDocument");
    docRef.get().then((doc) => {
        if (doc.exists) {
            var outputDiv = document.getElementById('output');
            outputDiv.innerHTML = `<p>${doc.data().user_input}</p>`;  // Display the data
        } else {
            console.log("No data yet!");
        }
    }).catch((error) => {
        console.error("Error getting data:", error);
    });
}