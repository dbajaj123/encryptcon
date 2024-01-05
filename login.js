var facingMode = "user";
var constraints = {
  audio: false,
  video: {
   facingMode: facingMode
  }
};
var canvas = document.getElementById("preview");
var video = document.getElementById('cam');
navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
  console.log(stream);
    window.stream = stream;
    video.srcObject = stream;
    video.onloadedmetadata = function(e) {
            $("#capture").click(function() {
                var context = canvas.getContext('2d');
                context.drawImage(video, 0, 0, 320, 240);
            });
    };
});
// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  import { getDatabase, set, ref as refd } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
  import { getStorage, ref as refs, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCUyGoJXa2vp9SibVPa8a77EjgelHyvuRU",
    authDomain: "encryptcon.firebaseapp.com",
    projectId: "encryptcon",
    storageBucket: "encryptcon.appspot.com",
    messagingSenderId: "711168427906",
    appId: "1:711168427906:web:73b006afb5302e812cf19b",
    measurementId: "G-8N20PLYVLR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
const auth = getAuth(app);
auth.languageCode="en";
const database = getDatabase(app);
const storage = getStorage();

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid);
    var starsRef = refs(storage, 'faceImages/'+uid);


        getDownloadURL(starsRef)
  .then((url) => {
    console.log(url);

$("#submit").click(function() {
$.ajax({
    type: 'post', // the method (could be GET btw)
    url: 'a.php', // The file where my php code is
    data: {
        'url': url // all variables i want to pass. In this case, only one.
    },
    success: function(data) { // in case of success get the output, i named data
                        var dataURL = canvas.toDataURL();
                        $.ajax({
                            type: "POST",
                            url: "b.php",
                            data: {
                                "imgBase64": dataURL
                            }
                        }).done(function(o) {
                                                        $.ajax({
                                                        type: "POST",
                                                        url: "c.php"
                                                    }).done(function(o) {
                                                        alert(o);
                                                    });
                        });
    }
});
   });

    });

    }
    else {
    // User is signed out
    // ...
  }
});





