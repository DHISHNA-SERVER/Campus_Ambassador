// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAFEIc_Po4HPQ7mOg1SSL_lg56mJw0qAcE",
    authDomain: "campus-ambassador-b3c7a.firebaseapp.com",
    databaseURL: "https://campus-ambassador-b3c7a.firebaseio.com",
    projectId: "campus-ambassador-b3c7a",
    storageBucket: "campus-ambassador-b3c7a.appspot.com",
    messagingSenderId: "714049994844",
    appId: "1:714049994844:web:6a8c6363605c9b4bfc2699",
    measurementId: "G-6JS999HH5P"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

$(document).ready(function() {

  console.log("document ready");
  
  // load input score forms
  db.collection("ca-selected").get()
  .then(function(snap) {

    let row = $("#row").empty();

    snap.forEach(function(docRef) {
      let doc = docRef.data();

      let name = doc.name;
      let score = doc.score;

      console.log(name, score);

      let html = `<div name="score">
        <form action="" method="post" name="form" id="score-form">
          <label for="name">${name}</label>
          <input type="number" id="score" placeholder="score">
          <button type="submit">add score</button>
        </form>
      </div>`

      row.append(html);
    });

  }).catch(function(err) {
    if (err) console.log(err);
  });

  // on score input
  $("#score-form").submit(function() {

    let points = $("#score").val();
    let docName = $("")

    db.collection("ca-selected").doc("")
    .update({
      score : 
    });
  });

});