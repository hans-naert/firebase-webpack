// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9zeI_nv8GUxKuTTMzL_crJD1ujQ-umP0",
  authDomain: "fir-project-les.firebaseapp.com",
  projectId: "fir-project-les",
  storageBucket: "fir-project-les.appspot.com",
  messagingSenderId: "726149397158",
  appId: "1:726149397158:web:11fd8ab20a841fe77a9267",
  measurementId: "G-D2CZ16GV39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
onAuthStateChanged(auth, user => { /* check status */ });

const db = getFirestore(app);

async function loadCity(name) {
  const cityDoc = doc(db, `cities/${name}`);
  const snapshot = await getDoc(cityDoc);
  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}

(async () => {
  try {
    const city = await loadCity('Kortrijk');
    console.log(city);
  }
  catch (e) {
    console.log(e);
  }
})();

document.querySelector('#login-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = document.querySelector('#login-form');
  console.log(form);
  const email = form.email.value
  const password = form.password.value;
  const createAccount = form.createAccount.checked;
  console.log(email, password, createAccount);
  try {
    let userCredential;
    if (createAccount == false) {
      userCredential = await signInWithEmailAndPassword(auth, email, password);
    } else {
      userCredential = await createUserWithEmailAndPassword(auth, email, password);
    }
    console.log(`Signed in user: ${JSON.stringify(userCredential)}`);
  }  catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(error);
  }});