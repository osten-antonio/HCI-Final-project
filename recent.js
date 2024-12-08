import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, setDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

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

function writeRecent(){
  const curWindow = window.location.pathname;
  const loggedinuser = localStolage.getItem("loggedInUId");
  console.log(curWindow)
  if(loggedinuser){
    const docRef = doc(db, "users", loggedinuser)
    getDoc(docRef)
    .then((docSnap) => {
      if (docSnap.exists()) {
        const recentArray = docSnap.data().recentlyVisited;
        if(data.recentlyVisited.includes(curWindow)){
            for(var i=recentArray.indexOf(curWindow);i>=0;i--){
              recentArray[i]
              recentArray[i - 1]
            }
            recentArray[0]=curWindow;
            const change = {
            recentlyVisited: recentArray
            }
            updateDoc(docRef, change);// Also this
        }else{
          for (var i = 5; i >= 0; i--) {
            recentArray[i]
            recentArray[i - 1]
          }
          recentArray.pop()
          recentArray[0] = curWindow;
          console.log(recentArray)
          const change = {
            recentlyVisited: recentArray
          }
          updateDoc(docRef, change);
          // Test this
          
        }
          
        
       }
   
    })
      
     
    }
  }


writeRecent()
