 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
 import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
 import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"
 
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


const signUp=document.getElementById('submitSignUp');
signUp.addEventListener('click', (event)=>{
event.preventDefault();
    const email=document.getElementById('emailR').value;
    const password=document.getElementById('passwordR').value;
    const Name=document.getElementById('Uname').value;
    const auth=getAuth();
    const db=getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user=userCredential.user;
        const userData={
            email: email,
            Name: firstName,
            streak:0,
            topicsCompleted: 0
        };
        const englishData ={
            engLearnOne: 0,
            engLearnTwo: 0,
            engLearnThree: 0,
            engQuizOne: 0,
            engQuizTwo: 0,
            engQuizThree: 0,
            engTopicOne: 0,
            engTopicTwo: 0,
            engTopicThree: 0,
        }
        const mathData ={
            mathLearnOne: 0,
            mathLearnTwo: 0,
            mathLearnThree: 0,
            mathQuizOne: 0,
            mathQuizTwo: 0,
            mathQuizThree: 0,
            mathTopicOne: 0,
            mathTopicTwo: 0,
            mathTopicThree: 0,
        }
        const achievementData ={
            totalAchievement: 0,
        }


        showMessage('Account Created Successfully', 'signUpMessage');
        const docRef=doc(db, "users", user.uid);
        const engRef=doc(db, "english", user.uid);
        const mathRef=doc(db, "math", user.uid);
        const achievementRef=doc(db, "achievements", user.uid);
        setDoc(docRef,userData)
        setDoc(engRef,englishData)
        setDoc(mathRef,mathData)
        setDoc(achievementRef,achievementData)

        .then(()=>{
            window.location.href='index.html';
        })

        .catch((error)=>{
            alert("An error occurred");

        });
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode=='auth/email-already-in-use'){
            alert("Email already exists");
        }
        else{
            alert("An error occurred");
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


 onAuthStateChanged(auth, (user)=>{
    const loggedInUserId=localStorage.getItem('loggedInUId');
    if(loggedInUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById('loggedUserUname').innerText=userData.Name;
                document.getElementById('loggedUserEmail').innerText=userData.email;
            }
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not Found in Local storage")
    }
  })

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUId');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })

