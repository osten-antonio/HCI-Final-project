import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, setDoc, doc, getDoc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

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

function checkLoggedInProfile(){
  const loggedInUserId=localStorage.getItem('loggedInUId');

  if(loggedInUserId){
    const mathRef = doc(db, "math", loggedInUserId)
    const engRef = doc(db, "english", loggedInUserId)
    getDoc(mathRef)
    .then((docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Datas", data)
        console.log("Overall progress:", data.overallProgress);
        document.getElementById("maths-overall").style["width"] = (data.overallProgress)+"%";
        document.getElementById("maths-overall-label").innerText = (Math.ceil(data.overallProgress))+"%";
      } else {
        console.log("No data available.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
    getDoc(engRef)
    .then((docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Datas", data)
        console.log("Overall progress:", data.overallProgress);
        document.getElementById("english-overall").style["width"] = (data.overallProgress)+"%";
        document.getElementById("eng-overall-label").innerText = (Math.ceil(data.overallProgress))+"%";
      } else {
        console.log("No data available.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  }
}

// TODO: adjust value here

checkLoggedInProfile();

