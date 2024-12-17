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
const loggedInUserId=localStorage.getItem('loggedInUId');

function checkLoggedInProfile(){
  console.log(loggedInUserId)
  if(loggedInUserId){
    const mathRef = doc(db, "math", loggedInUserId)
    const engRef = doc(db, "english", loggedInUserId)
    getDoc(mathRef)
    .then((docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Datas", data)
        console.log("Overall progress:", data.overallProgress);
        document.getElementById("maths-percentage").innerText= (data.overallProgress)+"%";
        document.getElementById("maths-1").style["width"] = (data.mathTopicOne)+"%";
        document.getElementById("maths-1").textContent = "Topic One "+ data.mathTopicOne +"%";
        document.getElementById("maths-2").style["width"] = (data.mathTopicTwo)+"%";
        document.getElementById("maths-2").textContent = "Topic Two "+ data.mathTopicTwo +"%";
        document.getElementById("maths-3").style["width"] = (data.mathTopicThree)+"%";
        document.getElementById("maths-3").textContent = "Topic Three "+ data.mathTopicThree +"%";
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
        document.getElementById("eng-percentage").innerText= (data.overallProgress)+"%";
        document.getElementById("english-1").style["width"] = (data.engTopicOne)+"%";
        document.getElementById("english-1").textContent = "Topic One "+ data.engTopicOne +"%";
        document.getElementById("english-2").style["width"] = (data.engTopicTwo)+"%";
        document.getElementById("english-2").textContent = "Topic Two "+ data.engTopicTwo +"%";
        document.getElementById("english-3").style["width"] = (data.engTopicThree)+"%";
        document.getElementById("english-3").textContent = "Topic Three "+ data.engTopicThree +"%";
      } else {
        console.log("No data available.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
    const userRef = doc(db, "users", loggedInUserId)
    getDoc(userRef)
    .then((docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Datas", data)
        document.getElementById("name").innerText=data.Name;
      } else {
        console.log("No data available.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
    const achievementRef = doc(db, "achievements", loggedInUserId);
    getDoc(achievementRef)
    .then((docSnap) => {
      if (docSnap.exists()) {
        const recentachievementdata = docSnap.data();
        var achievement_array = [["10day",recentachievementdata["10day"]],["engCompletion",recentachievementdata.engCompletion],["mathCompletion",recentachievementdata.mathCompletion]];
        const iconMap={
          "10day":"./assets/10_days.png",
          "engCompletion":"./assets/eng_achievement.png",
          "mathCompletion":"./assets/maths_achievement.png"
        }
        const labelMap={
          "10day":"10 Day Streak",
          "engCompletion":"English Completionist",
          "mathCompletion":"Math Completionist"
        }
        // Appends each achievement

      const achievementIconsContainer = document.getElementById("achievements");

      achievementIconsContainer.innerHTML = "";

      achievement_array.forEach(([key, data]) => {
        if (data.get){
        const achievementContainer = document.createElement("div");
        achievementContainer.classList.add("achievement-container");
        

        const icon = document.createElement("img");
        icon.src = iconMap[key];
        icon.alt = key + " achievement icon";
        icon.width = 100;
        icon.height = 100;


        const label = document.createElement("div");
        label.classList.add("achievement-label");
        label.textContent = labelMap[key]; 

        achievementContainer.appendChild(icon);
        achievementContainer.appendChild(label);

        achievementIconsContainer.appendChild(achievementContainer);}
      });
      } else {
        console.log("No data available.");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
    }
  else{
    window.location.replace("auth.html")
  }
}


function changeName() {
  const userRef = doc(db, "users", loggedInUserId);

  // Select the 'name' element
  const nameElement = document.getElementById('name');


  nameElement.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
      evt.preventDefault(); 
      nameElement.blur(); 
    }
  });
  // TODO Validate name daat
  nameElement.addEventListener('blur', () => {
    const newName = nameElement.textContent.trim();
    if (newName) {
      const change = { Name: newName };
      updateDoc(userRef, change)
        .then(() => console.log("Name updated successfully"))
        .catch((error) => console.error("Error updating name:", error));
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  checkLoggedInProfile();
  changeName();
});
// TODO: adjust value here

