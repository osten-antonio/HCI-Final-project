import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
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
const loggedInUserId = localStorage.getItem('loggedInUId');
   
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id'); 

const mathsRef = doc(db,"math", loggedInUserId);
const mathsDocsnap = await getDoc(mathsRef);
const completionData = mathsDocsnap.data().learnCompletion
const completionDict = {
  1:"First",
  2:"Second",
  3:"Third"
}


// subtopics.forEach((subtopic, index) => {
//     const element = document.getElementById(subtopic);
//     if (element) {
//         element.href = `learn.html?id=${id}.${index + 1}`;
//     }
// });


const topicList = {
  1:["Operations",{
    1:"Addition and Subtraction",
    2:"Multiplication",
    3:"Division"
  }],
  2:["Geometry",{
    1:"Area",
    2:"Perimeter",
    3:"Angles"
  }],
  3:["Fractions",{
    1:"Equivalent",
    2:"Comparing",
    3:"Simplifying"
  }],
}
const descriptionList = {
  1:{
    1:"Learn to add and subtract numbers efficiently.",
    2:"Master the basics of multiplication techniques.",
    3:"Understand the principles of division and how to apply them."
  },
  2:{
    1:"Discover how to calculate the area of different shapes.",
    2:"Learn to measure and calculate the perimeter of objects.",
    3:"Understand different types of angles and how to measure them."
  },
  3:{
    1:"Identify and create equivalent fractions easily.",
    2:"Learn to compare fractions to determine which is larger or smaller.",
    3:"Simplify fractions to their simplest form step-by-step."
  }
}


function writeSubtopics(id){
  document.getElementById("topicLabel").innerText=topicList[Number(id)][0]

  document.getElementById("subtopic1-title").innerText=topicList[Number(id)][1][1] + (completionData[completionDict[id]][0] == 0 ? "" : " ✅")
  document.getElementById("subtopic2-title").innerText=topicList[Number(id)][1][2] + (completionData[completionDict[id]][1] == 0 ? "" : " ✅")
  document.getElementById("subtopic3-title").innerText=topicList[Number(id)][1][3] + (completionData[completionDict[id]][2] == 0 ? "" : " ✅")
  document.getElementById("subtopic1-description").innerText=descriptionList[Number(id)][1]
  document.getElementById("subtopic2-description").innerText=descriptionList[Number(id)][2]
  document.getElementById("subtopic3-description").innerText=descriptionList[Number(id)][3]
  document.getElementById("subtopic1").setAttribute("href",`learn.html?id=${id}.1`)
  document.getElementById("subtopic2").setAttribute("href",`learn.html?id=${id}.2`)
  document.getElementById("subtopic3").setAttribute("href",`learn.html?id=${id}.3`)
}


document.addEventListener("DOMContentLoaded",writeSubtopics(id))
