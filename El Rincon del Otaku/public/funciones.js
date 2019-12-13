
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyDsXaJvtWVCTzSCMOMJZLID9GllAcUewJU',
    authDomain: 'el-rincon-del-otaku-1c62a.firebaseapp.com',
    projectId: 'el-rincon-del-otaku-1c62a.firebaseapp.com'
  });
  
  var db = firebase.firestore();

function verDatos(){

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var edad = document.getElementById("edad").value;

    alert("Nombre: " + nombre +  "  "  + "Email: " + email +  "   "  + "Edad: " + edad);

}

function ingresarDatos(){

    db.collection("Usuarios").add({
        nombre: "Ada",
        email: "wong@gmail.com",
        edad: 26
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

}