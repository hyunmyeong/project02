// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPBceArVPh7xdiN1UAHYxBwLeBPf4ea9c",
  authDomain: "sparta-react-project02.firebaseapp.com",
  projectId: "sparta-react-project02",
  storageBucket: "sparta-react-project02.appspot.com",
  messagingSenderId: "341183892789",
  appId: "1:341183892789:web:8c1a5ddcfb9533a435507c",
  measurementId: "G-010SES036M"
};


initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();

