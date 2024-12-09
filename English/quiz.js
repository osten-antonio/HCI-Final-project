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

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id'); 

console.log(id)

function getQna(qna,cur){
    document.getElementById("questionlabel").innerText = qna[cur].question; 
    document.getElementById("A").innerHTML = qna[cur].answer1;
    document.getElementById("B").innerHTML = qna[cur].answer2;
    document.getElementById("C").innerHTML = qna[cur].answer3;
    document.getElementById("D").innerHTML = qna[cur].answer4;
    document.getElementById("E").innerHTML = qna[cur].answer5;
}
function loadQuestions(){
    const loggedInUserId = localStorage.getItem('loggedInUId')
    if(loggedInUserId){
    }
    const engRef = doc(db,"english",loggedInUserId)
    const mathDocSnap = getDoc(engRef);
    if (mathDocSnap.exists()) {
        var change={};
        switch(id){
            case "1":
                // First topic
                var correct = 0;
                var cur=0;
                var qna = [{
                    question:"First question",
                    answer1:"A. 1st answer",
                    answer2:"B. 2nd answer",
                    answer3:"C. 3rd answer",
                    answer4:"D. 4th answer",
                    answer5:"E. 5th answer",
                    correct:"A"},
                    {
                    question:"second question",
                    answer1:"A. 1st answer",
                    answer2:"B. 2nd answer",
                    answer3:"C. 3rd answer",
                    answer4:"D. 4th answer",
                    answer5:"E. 5th answer",
                    correct:"C"},
                    {
                    question:"third question",
                    answer1:"A. 1st answer",
                    answer2:"B. 2nd answer",
                    answer3:"C. 3rd answer",
                    answer4:"D. 4th answer",
                    answer5:"E. 5th answer",
                    correct:"B"},
                    {
                    question:"fourth question",
                    answer1:"A. 1st answer",
                    answer2:"B. 2nd answer",
                    answer3:"C. 3rd answer",
                    answer4:"D. 4th answer",
                    answer5:"E. 5th answer",
                    correct:"A"},
                    {
                    question:"fifth question",
                    answer1:"A. 1st answer",
                    answer2:"B. 2nd answer",
                    answer3:"C. 3rd answer",
                    answer4:"D. 4th answer",
                    answer5:"E. 5th answer",
                    correct:"D"}
                ]

                getQna(qna,cur)
                document.getElementById("next").addEventListener("click",(event)=>{
                    if(document.getElementById(qna[cur].correct).checked == True){
                        correct++
                    }
                    cur++
                    document.getElementById("quiz-progress").style["width"] = cur/5 * 100
                    getQna(qna,cur)
                    if(cur > 5){
                        cur--
                        if(window.confirm("Do you want to submit?")){
                            change.engQuizOne = correct/5 * 100
                            updateDoc(engRef,change)
                        }
                    }
                })
                document.getElementById("back").addEventListener("click",(event)=>{
                    if(cur!=0){
                        cur--
                        document.getElementById("quiz-progress").style["width"] = cur/5 * 
                        correct--
                    }
                    getQna(qna,cur)
                })
                break
            case "2":
                // Second topic
                var correct = 0;
                var cur=0;
                var qna = [{
                    question:"First question",
                    answer1:"A. 1st answer",
                    answer2:"B. 2nd answer",
                    answer3:"C. 3rd answer",
                    answer4:"D. 4th answer",
                    answer5:"E. 5th answer",
                    correct:"A"},
                    {
                    question:"second question",
                    answer1:"A. 1st answer",
                    answer2:"B. 2nd answer",
                    answer3:"C. 3rd answer",
                    answer4:"D. 4th answer",
                    answer5:"E. 5th answer",
                    correct:"C"},
                    {
                    question:"third question",
                    answer1:"A. 1st answer",
                    answer2:"B. 2nd answer",
                    answer3:"C. 3rd answer",
                    answer4:"D. 4th answer",
                    answer5:"E. 5th answer",
                    correct:"B"},
                    {
                    question:"fourth question",
                    answer1:"A. 1st answer",
                    answer2:"B. 2nd answer",
                    answer3:"C. 3rd answer",
                    answer4:"D. 4th answer",
                    answer5:"E. 5th answer",
                    correct:"A"},
                    {
                    question:"fifth question",
                    answer1:"A. 1st answer",
                    answer2:"B. 2nd answer",
                    answer3:"C. 3rd answer",
                    answer4:"D. 4th answer",
                    answer5:"E. 5th answer",
                    correct:"D"}
                ]

                getQna(qna,cur)
                document.getElementById("next").addEventListener("click",(event)=>{
                    if(document.getElementById(qna[cur].correct).checked == True){
                        correct++
                    }
                    cur++
                    document.getElementById("quiz-progress").style["width"] = cur/5 * 
                    getQna(qna,cur)
                    if(cur > 5){
                        cur--
                        if(window.confirm("Do you want to submit?")){
                            change.engQuizTwo = correct/5 * 100
                            updateDoc(engRef,change)
                        }
                    }
                })
                document.getElementById("back").addEventListener("click",(event)=>{
                    if(cur!=0){
                        cur--
                        document.getElementById("quiz-progress").style["width"] = cur/5 * 
                        correct--
                    }
                    getQna(qna,cur)
                })
                break
                
            case "3":
                // Third topic
                var correct = 0;
                var cur=0;
                var qna = [{
                    question:"First question",
                    answer1:"A. 1st answer",
                    answer2:"B. 2nd answer",
                    answer3:"C. 3rd answer",
                    answer4:"D. 4th answer",
                    answer5:"E. 5th answer",
                    correct:"A"},
                    {
                    question:"second question",
                    answer1:"A. 1st answer",
                    answer2:"B. 2nd answer",
                    answer3:"C. 3rd answer",
                    answer4:"D. 4th answer",
                    answer5:"E. 5th answer",
                    correct:"C"},
                    {
                    question:"third question",
                    answer1:"A. 1st answer",
                    answer2:"B. 2nd answer",
                    answer3:"C. 3rd answer",
                    answer4:"D. 4th answer",
                    answer5:"E. 5th answer",
                    correct:"B"},
                    {
                    question:"fourth question",
                    answer1:"A. 1st answer",
                    answer2:"B. 2nd answer",
                    answer3:"C. 3rd answer",
                    answer4:"D. 4th answer",
                    answer5:"E. 5th answer",
                    correct:"A"},
                    {
                    question:"fifth question",
                    answer1:"A. 1st answer",
                    answer2:"B. 2nd answer",
                    answer3:"C. 3rd answer",
                    answer4:"D. 4th answer",
                    answer5:"E. 5th answer",
                    correct:"D"}
                ]

                getQna(qna,cur)
                document.getElementById("next").addEventListener("click",(event)=>{
                    if(document.getElementById(qna[cur].correct).checked == True){
                        correct++
                    }
                    cur++
                    document.getElementById("quiz-progress").style["width"] = cur/5 * 
                    getQna(qna,cur)
                    if(cur > 5){
                        cur--
                        if(window.confirm("Do you want to submit?")){
                            change.mathQuizThree = correct/5 * 100
                            updateDoc(engRef,change)
                        }
                    }
                })
                document.getElementById("back").addEventListener("click",(event)=>{
                    if(cur!=0){
                        cur--
                        document.getElementById("quiz-progress").style["width"] = cur/5 * 
                        correct--
                    }
                    getQna(qna,cur)
                })
                break
        }

    }
}
function load(){
    document.addEventListener("DOMContentLoaded",loadQuestions())
}

load()
