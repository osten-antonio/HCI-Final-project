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
loggedinuser=localStorage.getItem("loggedInUId")
if(loggedinuser){
    const docRef = doc(db, "english", loggedinuser)
    getDoc(docRef)
    .then((docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Datas", data)
        console.log("Overall progress:", data.overallProgress);
        document.getElementById("learn-1").style["width"] = (data.engLearnOne * 100/80)+"%";
        document.getElementById("learn-2").style["width"] = (data.engLearnTwo * 100/80)+"%";
        document.getElementById("learn-3").style["width"] = (data.engLearnThree * 100/80)+"%";
        document.getElementById("quiz-1").style["width"] = (data.engQuizOne * 100/80)+"%";
        document.getElementById("quiz-2").style["width"] = (data.engQuizTwo * 100/80)+"%";
        document.getElementById("quiz-3").style["width"] = (data.engQuizThree * 100/80)+"%";
    } else {
        console.log("No data available.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}else{
    window.location.replace("auth.html")
}