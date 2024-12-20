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
function checkLoggedInProfile(){
    const loggedinuser=localStorage.getItem("loggedInUId")
    if(loggedinuser){

        const docRef = doc(db, "english", loggedinuser)
        getDoc(docRef)
        .then((docSnap) => {
        if (docSnap.exists()) {
            const data = docSnap.data();

            document.getElementById("learn-1").style["width"] = (data.engLearnOne)+"%";
            document.getElementById("topic-1").innerText = (Math.floor(data.engLearnOne))+"%";
            document.getElementById("learn-2").style["width"] = (data.engLearnTwo)+"%";
            document.getElementById("topic-2").innerText = (Math.floor(data.engLearnTwo))+"%";
            document.getElementById("learn-3").style["width"] = (data.engLearnThree)+"%";
            document.getElementById("topic-3").innerText = (Math.floor(data.engLearnThree))+"%";
            document.getElementById("quiz-1").style["width"] = (data.engQuizOne)+"%";
            document.getElementById("topic-1q").innerText = (Math.floor(data.engQuizOne))+"%";
            document.getElementById("quiz-2").style["width"] = (data.engQuizTwo)+"%";
            document.getElementById("topic-2q").innerText = (Math.floor(data.engQuizTwo))+"%";
            document.getElementById("quiz-3").style["width"] = (data.engQuizThree)+"%";
            document.getElementById("topic-3q").innerText = (Math.floor(data.engQuizThree))+"%";
            const change={
                "engTopicOne":(data.engQuizOne+ data.engLearnOne)/2,
                "mathTopicTwo":(data.engQuizTwo+ data.engLearnTwo)/2,
                "mathTopicThree":(data.engQuizThree+ data.engLearnThree)/2,
                "overallProgress":((data.engQuizOne+ data.engLearnOne)+
                (data.engQuizTwo+ data.engLearnTwo)+(data.engQuizThree+ data.engLearnThree))/3
              }
              updateDoc(docRef,change)
            

            
        } else {
            console.log("No data available.");
        }
        })
        .catch((error) => {
        console.error("Error fetching data:", error);
        });
    }else{
        window.location.replace("../auth.html")
    }
}
checkLoggedInProfile();