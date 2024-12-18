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

const engRef = doc(db,"english", loggedInUserId);
const engDocsnap = await getDoc(engRef);
const completionData = engDocsnap.data().learnCompletion
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
  1:["Spelling",{
    1:"Homophones",
    2:"Regular and Irregular Plurals",
    3:"Vocabulary"
  }],
  2:["Grammar",{
    1:"Conjunctions",
    2:"Adverbs",
    3:"Adjectives"
  }],
  3:["Prepositions",{
    1:"Place",
    2:"Time",
    3:"Movement"
  }],
}
const descriptionList = {
  1:{
    1:"Homophones are words that sound the same but have different meanings, spellings, or both.",
    2:"Regular plurals add -s or -es (e.g., cat → cats), while irregular plurals change form (e.g., mouse → mice). ",
    3:"Vocabulary refers to the set of words used in a language. Building a strong vocabulary improves communication, comprehension, and writing skills. "
  },
  2:{
    1:"Description",
    2:"Description",
    3:"Description"
  },
  3:{
    1:"Description",
    2:"Description",
    3:"Description"
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
