import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, setDoc, doc, getDoc,updateDoc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

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
        console.log("Done")
        const docRef = doc(db, "math", loggedinuser)
        getDoc(docRef)
        .then((docSnap) => {
        if (docSnap.exists()) {
            const data = docSnap.data();
            console.log("Datas", data)
            console.log("Overall progress:", data.overallProgress);
            document.getElementById("learn-1").style["width"] = (data.mathLearnOne)+"%";
            document.getElementById("topic-1").innerText = (Math.floor(data.mathLearnOne))+"%";
            document.getElementById("learn-2").style["width"] = (data.mathLearnTwo)+"%";
            document.getElementById("topic-2").innerText = (Math.floor(data.mathLearnTwo))+"%";
            document.getElementById("learn-3").style["width"] = (data.mathLearnThree)+"%";
            document.getElementById("topic-3").innerText = (Math.floor(data.mathLearnThree))+"%";
            document.getElementById("quiz-1").style["width"] = (data.mathQuizOne)+"%";
            document.getElementById("topic-1q").innerText = (Math.floor(data.mathQuizOne))+"%";
            document.getElementById("quiz-2").style["width"] = (data.mathQuizTwo)+"%";
            document.getElementById("topic-2q").innerText = (Math.floor(data.mathQuizTwo))+"%";
            document.getElementById("quiz-3").style["width"] = (data.mathQuizThree)+"%";
            document.getElementById("topic-3q").innerText = (Math.floor(data.mathQuizThree))+"%";

            const change={
                "mathTopicOne":(data.mathQuizOne+ data.mathLearnOne)/2,
                "mathTopicTwo":(data.mathQuizTwo+ data.mathLearnTwo)/2,
                "mathTopicThree":(data.mathQuizThree+ data.mathLearnThree)/2,
                "overallProgress":((data.mathQuizOne+ data.mathLearnOne)+
                (data.mathQuizTwo+ data.mathLearnTwo)+(data.mathQuizThree+ data.mathLearnThree))/3
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