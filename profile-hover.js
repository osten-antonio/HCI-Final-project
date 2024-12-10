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
const auth= getAuth();


 
const profileImage = document.getElementById('pfp'); 
const profileMenu = document.querySelector('.profile'); 
const signOutButton = document.querySelector('.sign-out'); 

window.addEventListener('DOMContentLoaded', () => {
  profileImage.addEventListener('click', (event) => {
    event.stopPropagation(); 
    profileMenu.classList.toggle('show'); 
  });

  document.addEventListener('click', (event) => {
    if (!profileMenu.contains(event.target) && event.target !== profileImage) {
      profileMenu.classList.remove('show'); 
    }
  });
  signOutButton.addEventListener('click', (event) => {
    if (confirm("Are you sure?")) {
      signOut(auth).then(function() {
        localStorage.removeItem('loggedInUId')
        window.location.replace('index.html')
      }, function(error) {
        console.error('Error', error);
      });
    } 
  
  })
  function checkLoggedInProfile(){
    const loggedInUserId=localStorage.getItem('loggedInUId');
    if(loggedInUserId){
        const userRef = doc(db, "users", loggedInUserId)
        getDoc(userRef)
        .then((docSnap) =>{
            if(docSnap.exists()){
                const data = docSnap.data();
                document.getElementById("profile-name").innerText = data.Name // Do PFP
            }
        })
        .catch((error) => 
            console.error(error)
        );


    }
  }
  checkLoggedInProfile()
})

