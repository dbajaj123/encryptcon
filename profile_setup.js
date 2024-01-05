  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  import { getDatabase, set, ref as refd } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
  import { getStorage, ref as refs, uploadBytes } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
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

    $('#faceRec').on('input', function() {
        console.log();
        if ($('#faceRec').is(":checked"))
            {
            $('#faceBox').css('display', 'block');
            set(refd(database, 'users/' + uid + "/face"), true);
            }
           else {
            $('#faceBox').css('display', 'none');
            set(refd(database, 'users/' + uid + "/face"), false);
           }
    });

    $('#faceImage').on('input', function() {
        console.log($('#faceImage').val());
        const storageRef = refs(storage, 'faceImages/'+uid);

        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, $("#faceImage")[0].files[0]).then((snapshot) => {
          console.log('Done');
        });
    });


    // ...
  } else {
    // User is signed out
    // ...
  }
});


