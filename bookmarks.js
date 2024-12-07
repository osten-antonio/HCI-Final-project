import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, setDoc, doc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyCIneOjj2SFDdXV0h_5Vc-0Lgw2v_HWZ5o",
  authDomain: "hci-project-d22bc.firebaseapp.com",
  projectId: "hci-project-d22bc",
  storageBucket: "hci-project-d22bc.appspot.com",
  messagingSenderId: "606720483728",
  appId: "1:606720483728:web:6242f8464536ce7d391315",
  measurementId: "G-RFYWMXZBTT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const loggedInUserId=localStorage.getItem('loggedInUId');

function checkLoggedInProfile(){
    console.log(loggedInUserId)
    if(loggedInUserId){
        const userRef = doc(db,"users",loggedInUserId)
        getDoc(userRef)
        .then((docSnap) =>{
        if(docSnap.exists()){
            updateDoc(userRef,change)
            .then(() => console.log("Name updated successfully"))
            .catch((error) => console.error("Error updating name:", error));
        } else{
            console.log("No data available.");
        }
        })
        .catch((error) =>{
            console.error("Error",error);
        });
    } else{
        window.location.replace("auth.html")
    }
}

checkLoggedInProfile();


