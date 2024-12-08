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

const topicList = {
  "eng":{
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
  },
  "maths":{
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
},
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

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
        document.getElementById("maths-overall").style["width"] = (data.overallProgress * 100/80)+"%";
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
        document.getElementById("english-overall").style["width"] = (data.overallProgress * 100/80)+"%";
      } else {
        console.log("No data available.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

    const userRef = doc(db, "users", loggedInUserId);
    getDoc(userRef)
    .then((docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("data", data)
        document.getElementById("topics-completed").innerText = data.topicsCompleted;
        // Recently visited
        const regex = /\/(\w+)\/(quiz|notes|learn)\.html\?id=(\d+)(?:\.(\d+))?/;
        const recentArray = data.recentlyVisited;
        const elements = ["first", "second", "third", "fourth", "fifth"];

        for (var i = 0; i < recentArray.length; i++) {
          var temp = regex.exec(recentArray[i]);
      
          var subject = temp[1] == "Maths" ? "Maths" : "Eng";
          var topic = typeof temp[4] === 'undefined' ? temp[3] : `${temp[3]}.${temp[4]}`;

          // Access topicList and correctly handle the nested topics
          var topicName = topicList[subject.toLowerCase()][temp[3]][0]; // Get the main topic name
          var subTopicName = typeof temp[4] !== 'undefined' ? topicList[subject.toLowerCase()][temp[3]][1][temp[4]] : null; 
      
          // Construct the text with both main and sub-topic
          var text = `${subject} | ${capitalizeFirstLetter(temp[2])} | ${topic}. ${subTopicName ? ` ${subTopicName}` : topicName}`;
      
          // Update the inner text for the corresponding element
          document.getElementById(`${elements[i]}`).href = recentArray[i];
          document.getElementById(`${elements[i]}p`).innerText = text;
        }

        var currentStreak = data.streak;
        var dateArray = data.streakDays;

        const today = new Date(); 
        const todayDay = today.getDay(); 
      
        for(var i = 0; i<7;i++){
          dateArray[i.toString()]["date"] = dateArray[i.toString()]["date"].toDate();
          currentStreak = dateArray[i.toString()]["logged"] == true ? currentStreak+=1 : currentStreak=0
        }
        console.log(dateArray)
        // check if it is new week
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - todayDay); 
        startOfWeek.setHours(0, 0, 0, 0); // Time midnight
      
        const previousWeekStart = dateArray[0]?.date; // Get the first day of the previous week
        if (previousWeekStart && previousWeekStart < startOfWeek) {
          // reset dateArray if new week
          dateArray = Array.from({ length: 7 }, (_, i) => ({
            logged: false,
            date: new Date(startOfWeek.getTime() - i * 24 * 60 * 60 * 1000),
          }));
        }
      
        dateArray[todayDay.toString()]["logged"] = true;
        
        console.log(dateArray)
        console.log(currentStreak)
        document.getElementById("login-streak").innerText = currentStreak;
        const streakIcons= ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
        for(var i=0;i<7;i++){
          console.log(i)
          console.log( dateArray[i.toString()])
          document.getElementById(streakIcons[i]).setAttribute("fill", dateArray[i.toString()]["logged"] ? "#FFBB00" : "#05525B");
        }
      } else {
        console.log("No data available.");
      }

      const changes = {
        streakDays: dateArray,
        streak: currentStreak
      }
      updateDoc(userRef,changes)
      .catch((error) => {
        console.error("Error writing data:", error);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
    
    const achievementRef = doc(db, "achievements", loggedInUserId);
    getDoc(achievementRef)
    .then((docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("data", data)
        document.getElementById("achievementvalue").innerText = data.totalAchievement;
      } else {
        console.log("No data available.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

    // do the recent achievement here
  }
  else{
    window.location.replace("auth.html")
  }
}

checkLoggedInProfile();

