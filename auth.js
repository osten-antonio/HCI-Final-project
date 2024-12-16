 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
 import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged , signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
 import{getFirestore, setDoc,getDoc, doc, Timestamp} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"
 
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
const auth=getAuth();
const db=getFirestore();


const signUp=document.getElementById('submitSignUp');
signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('emailR').value;
    const password=document.getElementById('passwordR').value;
    const Name=document.getElementById('Uname').value;
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user=userCredential.user;
        localStorage.setItem('loggedInUId',user.uid)
        const userData={
            email: email,
            Name: Name,
            streak:0,
            topicsCompleted: 0,
            recentlyVisited:["","","","",""],
            streak:0,
            streakDays:[
                {
                    date:  new Date(new Date().setDate(new Date().getDate() + 6)),
                    logged: false,
                },
                {
                    date:  new Date(new Date().setDate(new Date().getDate() + 5)),
                    logged: false,
                },
                {
                    date:  new Date(new Date().setDate(new Date().getDate() + 4)),
                    logged: false,
                },
                {
                    date:  new Date(new Date().setDate(new Date().getDate() + 3)),
                    logged: false,
                },                {
                    date:  new Date(new Date().setDate(new Date().getDate() + 2)),
                    logged: false,
                },                {
                    date:  new Date(new Date().setDate(new Date().getDate() + 1)),
                    logged: false,
                },                {
                    date:  new Date(new Date().setDate(new Date().getDate())),
                    logged: false,
                }
            ],
            topicsCompleted:0
        };
        const englishData ={
            learnCompletion:{
                First:[0,0,0],
                Second:[0,0,0],
                Third:[0,0,0]
            },
            engLearnOne: 0,
            engLearnTwo: 0,
            engLearnThree: 0,
            engQuizOne: 0,
            engQuizTwo: 0,
            engQuizThree: 0,
            engTopicOne: 0,
            engTopicTwo: 0,
            engTopicThree: 0,
            overallProgress:0
        }
        const mathData ={
            learnCompletion:{
                First:[0,0,0],
                Second:[0,0,0],
                Third:[0,0,0]
            },
            mathLearnOne: 0,
            mathLearnTwo: 0,
            mathLearnThree: 0,
            mathQuizOne: 0,
            mathQuizTwo: 0,
            mathQuizThree: 0,
            mathTopicOne: 0,
            mathTopicTwo: 0,
            mathTopicThree: 0,
            overallProgress:0
        }
        const achievementData ={
            totalAchievement: 0,
            "10day": {
                dateAchieved: Date.now(),
                get: false
            },
            engCompletion: {
                dateAchieved: Date.now(),
                get: false
            },
            mathCompletion:{
                dateAchieved: Date.now(),
                get: false
            }
        }
        const bookmarksData = {
            engBookmarks:[],
            mathBookmarks:[]
        }

        const docRef=doc(db, "users", user.uid);
        const engRef=doc(db, "english", user.uid);
        const mathRef=doc(db, "math", user.uid);
        const bookmarkRef=doc(db, "bookmarks", user.uid);
        const achievementRef=doc(db, "achievements", user.uid);

        setDoc(docRef,userData)
        .catch((error) => {
            console.error("Error writing Firestore documents:", error);
            alert("Failed to create account. Please try again later.");
          });
        setDoc(engRef,englishData)
        .catch((error) => {
            console.error("Error writing Firestore documents:", error);
            alert("Failed to create account. Please try again later.");
          });
        setDoc(mathRef,mathData)
        .catch((error) => {
            console.error("Error writing Firestore documents:", error);
            alert("Failed to create account. Please try again later.");
          });
        setDoc(achievementRef,achievementData)
        .catch((error) => {
            console.error("Error writing Firestore documents:", error);
            alert("Failed to create account. Please try again later.");
          });
        setDoc(bookmarkRef,bookmarksData)

        .then(()=>{
            localStorage.setItem('loggedInUId',user.uid)
            window.location.href='index.html';
        })
        .catch((error) => {
            console.error("Error writing Firestore documents:", error);
            alert("Failed to create account. Please try again later.");
          });
        showMessage('Account Created Successfully', 'signUpMessage');
        

  
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode=='auth/email-already-in-use'){
            alert("Email already exists");
        }
    })
 });

 const signIn=document.getElementById('submitSignIn');
 signIn.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;

    const auth=getAuth();

    signInWithEmailAndPassword(auth, email,password)
    .then((userCredential)=>{
        const user=userCredential.user;
        localStorage.setItem('loggedInUId', user.uid);
        window.location.href='dashboard.html';
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode==='auth/invalid-credential'){
            alert("Incorrect email and or password");
        }
        else{
            alert("Account does not exist");
        }
    })
 })

