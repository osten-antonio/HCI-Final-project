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

async function checkLoggedInProfile() {
  const loggedInUserId = localStorage.getItem('loggedInUId');
  if (loggedInUserId) {
    const mathRef = doc(db, "math", loggedInUserId);
    const engRef = doc(db, "english", loggedInUserId);
    const achievementRef = doc(db, "achievements", loggedInUserId);
    const userRef = doc(db, "users", loggedInUserId);

    try {
      // Fetch achievement data first
      const achievementdocSnap = await getDoc(achievementRef);
      if (!achievementdocSnap.exists()) {
        throw new Error("No achievement data found");
      }
      
      const achievementdata = achievementdocSnap.data();
      let totalAchievement = achievementdata.totalAchievement;
      let change = {};

      console.log("Current achievement data:", achievementdata);

      // Fetch math progress
      const mathDocSnap = await getDoc(mathRef);
      if (mathDocSnap.exists()) {
        const mathData = mathDocSnap.data();
        const mathProgress = mathData.overallProgress;
        document.getElementById("maths-overall").style["width"] = `${(mathProgress)}%`;

        if (mathProgress >= 100 && !achievementdata.mathCompletion["get"]) {
          alert("Achievement unlocked!\nMaths completion");
          change.mathCompletion = {
            get: true,
            dateAchieved: new Date()
          };
          totalAchievement += 1; // Increment achievement count
          console.log(`total achievement: ${totalAchievement}`);
        }
      }

      // Fetch English progress
      const engDocSnap = await getDoc(engRef);
      if (engDocSnap.exists()) {
        const engData = engDocSnap.data();
        const engProgress = engData.overallProgress;
        document.getElementById("english-overall").style["width"] = `${(engProgress)}%`;

        if (engProgress >= 100 && !achievementdata.engCompletion.get) {
          alert("Achievement unlocked!\nEnglish completion");
          change.engCompletion = {
            get: true,
            dateAchieved: new Date()
          };
          totalAchievement += 1; // Increment achievement count
          console.log(`total achievement: ${totalAchievement}`);
        }
      }

      // Fetch user data for streak
      const userDocSnap = await getDoc(userRef);
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const regex = /\/(\w+)\/(quiz|notes|learn)\.html\?id=(\d+)(?:\.(\d+))?/;
        const recentArray = userData.recentlyVisited;
        const elements = ["first", "second", "third", "fourth", "fifth"];

        for (var i = 0; i < recentArray.length; i++) {
          var temp = regex.exec(recentArray[i]);
      
          var subject = temp[1] == "Maths" ? "Maths" : "Eng"; // Add validation
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

        let currentStreak = userData.streak;
        let dateArray = userData.streakDays;

        const today = new Date();
        const todayDay = today.getDay();

        // Update streak based on logged days 
        for (let i = todayDay-1; i > 0; i--) {
          dateArray[(7-i).toString()]["date"] = dateArray[(7-i).toString()]["date"].toDate();
          console.log((7-i).toString())
          if (!dateArray[(7-i).toString()]["logged"]) {
            currentStreak = 0;
          }
        }

        const curDate = new Date(today);
        curDate.setDate(today.getDate() + (7 - todayDay)); // Set to next Sunday
        curDate.setHours(0,0,0,0);
  
        if (curDate > dateArray[0].date.toDate().setHours(0,0,0,0)) {
          console.log("New week")
          const thisSunday = new Date(today);
          thisSunday.setDate(today.getDate() - todayDay); // Get current Sunday

          dateArray = Array.from({ length: 7 }, (_, i) => ({
            logged: false,
            date: new Date(curDate.getTime() - i * 24 * 60 * 60 * 1000),
          }));
        }
        console.log(dateArray[(7-todayDay).toString()])
        console.log(7-todayDay)
        if(!dateArray[(7-todayDay).toString()]["logged"]){
          console.log("Updated streak")
          currentStreak += 1
          dateArray[(7 - todayDay).toString()]["logged"] = true;
        }

        document.getElementById("login-streak").innerText = currentStreak;
        const streakIcons= ["sunday","saturday","friday","thursday","wednesday","tuesday","monday"]
        for(var i=0;i<7;i++){
          document.getElementById(streakIcons[i]).setAttribute("fill", dateArray[i.toString()]["logged"] ? "#FFBB00" : "#05525B");
        }

        const streakChanges = {
          streakDays: dateArray,
          streak: currentStreak,
        };

        await updateDoc(userRef, streakChanges);

        if (currentStreak >= 10 && !achievementdata["10day"]["get"]) {
          alert("Achievement unlocked!\n10 Day streak");
          change["10day"] = {
            get: true,
            dateAchieved: Date.now(),
          };
          totalAchievement += 1; // Increment achievement count
          console.log(`total achievement: ${totalAchievement}`);
        }
      }
      document.getElementById("achievementvalue").innerText=totalAchievement;
      // After all data is fetched and logic is applied, update achievements
      change.totalAchievement = totalAchievement;

      await updateDoc(achievementRef, change);
      console.log("Total achievement updated successfully");
      
      const recentachievementdata = achievementdocSnap.data();
      var achievement_array = [["10day",recentachievementdata["10day"]],["engCompletion",recentachievementdata.engCompletion],["mathCompletion",recentachievementdata.mathCompletion]];
      achievement_array.sort((a, b) => b[1].dateAchieved.seconds - a[1].dateAchieved.seconds);
      achievement_array.reverse();
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

      // Appends recent achievement

      const achievementIconsContainer = document.getElementById("achievement-icons");

      achievementIconsContainer.innerHTML = "";

      achievement_array.forEach(([key, data]) => {

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

        achievementIconsContainer.appendChild(achievementContainer);
      });
      
    } catch (error) {
      console.error("Error processing user data:", error);
    }
  } else {
    window.location.replace("auth.html");
  }
}

checkLoggedInProfile();
