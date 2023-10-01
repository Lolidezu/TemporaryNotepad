// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8ysU7L_GXnYwMtLAHAp6clC4t27TJIV0",
    authDomain: "temporarynotepad.firebaseapp.com",
    projectId: "temporarynotepad",
    storageBucket: "temporarynotepad.appspot.com",
    messagingSenderId: "998970069593",
    appId: "1:998970069593:web:93065677dbcd790201d748",
    measurementId: "G-5Q0KJ62KWM"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

function saveContent() {
    const content = document.getElementById('content').value;

    // Save content to Firebase
    db.collection("mypastebin").doc("singleSlot").set({
        content: content
    })
    .then(() => {
        console.log("Content successfully saved!");
    })
    .catch((error) => {
        console.error("Error writing content: ", error);
    });
}

function loadContent() {
    // Retrieve content from Firebase
    db.collection("mypastebin").doc("singleSlot").get()
    .then((doc) => {
        if (doc.exists) {
            document.getElementById('content').value = doc.data().content;
        } else {
            console.log("No content found!");
        }
    })
    .catch((error) => {
        console.error("Error fetching content: ", error);
    });
}
