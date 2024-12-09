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

  
function createBookmarkButtons(bookmarks, panelId, subject) {
  const panel = document.getElementById(panelId);

  bookmarks.forEach(bookmark => {
      console.log("Created")
      const button = document.createElement('button');
      button.textContent = `Go to Quiz ${bookmark.quizId}, Question ${bookmark.questionIndex}`;
      
      button.onclick = () => {
          const url = `bookedmarkedqst.html?subject=${subject}&quizId=${bookmark.quizId}&questionIndex=${bookmark.questionIndex}`; 
          window.location.href = url;
      };
      

      //CONTINUE HERE, STyle Buttons

      panel.appendChild(button);
  });
}

function checkLoggedInProfile(){
    console.log(loggedInUserId)
    if(loggedInUserId){
        const bookmarksRef = doc(db,"bookmarks",loggedInUserId)
        getDoc(bookmarksRef)
        .then((docSnap) =>{
            if(docSnap.exists()){
                const englishBookmarks = docSnap.data().engBookmarks;
                const mathsBookmarks = docSnap.data().mathBookmarks;
                console.log(englishBookmarks)
                console.log(!(englishBookmarks === undefined || englishBookmarks.length == 0))
                if(!(englishBookmarks === undefined || englishBookmarks.length == 0)){
                    createBookmarkButtons(englishBookmarks, 'eng-panel', 'english');
                }
                if(!(mathsBookmarks === undefined || mathsBookmarks.length == 0)){
                    createBookmarkButtons(mathsBookmarks, 'eng-panel', 'english');
                }

            } else{
                console.log("No data available.");
            }
        })
    } else{
        window.location.replace("auth.html")
    }
}

checkLoggedInProfile();


