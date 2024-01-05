  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  import { getDatabase, set, ref, onValue, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
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
const provider = new GoogleAuthProvider();

const database = getDatabase(app);


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid
    console.log(uid);

    onValue(ref(database, "/users/" + uid), (snapshot) => {
          if (snapshot.exists()) {
    window.location.href = "login.html";
          }
          else {
           window.location.href = "profile_setup.html";
          }

        });




  }
  else {

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
     console.log(user);

       set(ref(database, 'users/' + user.uid), {
        username: user.displayName,
        email: user.email
      });

    setTimeout(function() {
      window.location.href = "profile_setup.html";
    }, 2000);
  });

  }
});

