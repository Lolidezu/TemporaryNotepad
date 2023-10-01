// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function saveData() {
    var userInput = document.getElementById('userInput').value;
    // Specify a document ID instead of letting Firestore auto-generate one
    var docRef = db.collection("users").doc("singleDocument");
    docRef.set({
        user_input: userInput
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}

function retrieveData() {
    var docRef = db.collection("users").doc("singleDocument");
    docRef.get().then((doc) => {
        if (doc.exists) {
            var outputDiv = document.getElementById('output');
            outputDiv.innerHTML = `<p>${doc.data().user_input}</p>`;  // Display the data
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.error("Error getting document:", error);
    });
}