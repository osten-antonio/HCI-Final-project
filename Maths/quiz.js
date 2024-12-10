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
const loggedInUserId = localStorage.getItem('loggedInUId')
const mathRef = doc(db,"maths",loggedInUserId)
const bookmarkRef = doc(db,"bookmarks",loggedInUserId)
const mathDocSnap = await getDoc(mathRef)
const bookmarkDocSnap = await getDoc(bookmarkRef)

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id'); 
var bookmarks = []
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
    if(loggedInUserId){
    if (mathDocSnap.exists() && bookmarkDocSnap.exists()) {
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
                document.getElementById("bookmark").addEventListener("click",(event)=>{
                    bookmarks.push({
                        quizId:id,
                        questionIndex:cur
                    })
                    bookmarks = Array.from(
                        new Set(bookmarks.map(bookmark => JSON.stringify(bookmark)))
                    ).map(str => JSON.parse(str));

                    const bookmarkChanges = {
                        engBookmarks: Array.from(new Set(bookmarkData.engBookmarks.concat(bookmarks))) 
                    }
                    console.log(bookmarkChanges)
                    updateDoc(bookmarkRef,bookmarkChanges)
                })
                document.getElementById("next").addEventListener("click",(event)=>{
                    if(document.getElementById(qna[cur].correct).checked == True){
                        correct++
                    }
                    cur++
                    if(cur > 5){
                        cur--
                        if(window.confirm("Do you want to submit?")){
                            change.mathQuizOne = correct/5 * 100
                            updateDoc(mathRef,change)

                        }
                    }
                    document.getElementById("quiz-progress").style.width = ((cur+1)/5 * 100).toString() + "%"
                    getQna(qna,cur)

                })
                document.getElementById("back").addEventListener("click",(event)=>{
                    if(cur!=0){
                        cur--
                        document.getElementById("quiz-progress").style.width = ((cur+1)/5 * 100).toString() + "%"
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
                document.getElementById("bookmark").addEventListener("click",(event)=>{
                    bookmarks.push({
                        quizId:id,
                        questionIndex:cur
                    })
                    bookmarks = Array.from(
                        new Set(bookmarks.map(bookmark => JSON.stringify(bookmark)))
                    ).map(str => JSON.parse(str));

                    const bookmarkChanges = {
                        engBookmarks: Array.from(new Set(bookmarkData.engBookmarks.concat(bookmarks))) 
                    }
                    console.log(bookmarkChanges)
                    updateDoc(bookmarkRef,bookmarkChanges)
                })
                document.getElementById("next").addEventListener("click",(event)=>{
                    if(document.getElementById(qna[cur].correct).checked == True){
                        correct++
                    }
                    cur++
                    if(cur > 5){
                        cur--
                        if(window.confirm("Do you want to submit?")){
                            change.mathQuizOne = correct/5 * 100

                            updateDoc(mathRef,change)

                        }
                    }
                    document.getElementById("quiz-progress").style.width = ((cur+1)/5 * 100).toString() + "%"
                    getQna(qna,cur)

                })
                document.getElementById("back").addEventListener("click",(event)=>{
                    if(cur!=0){
                        cur--
                        document.getElementById("quiz-progress").style.width = ((cur+1)/5 * 100).toString() + "%" 
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
                document.getElementById("bookmark").addEventListener("click",(event)=>{
                    bookmarks.push({
                        quizId:id,
                        questionIndex:cur
                    })
                    bookmarks = Array.from(
                        new Set(bookmarks.map(bookmark => JSON.stringify(bookmark)))
                    ).map(str => JSON.parse(str));

                    const bookmarkChanges = {
                        engBookmarks: Array.from(new Set(bookmarkData.engBookmarks.concat(bookmarks))) 
                    }
                    console.log(bookmarkChanges)
                    updateDoc(bookmarkRef,bookmarkChanges)
                })
                document.getElementById("next").addEventListener("click",(event)=>{
                    if(document.getElementById(qna[cur].correct).checked == True){
                        correct++
                    }
                    cur++
                    if(cur > 5){
                        cur--
                        if(window.confirm("Do you want to submit?")){
                            change.mathQuizOne = correct/5 * 100
                            updateDoc(mathRef,change)
                        }
                    }
                    document.getElementById("quiz-progress").style.width = ((cur+1)/5 * 100).toString() + "%" 
                    getQna(qna,cur)

                })
                document.getElementById("back").addEventListener("click",(event)=>{
                    if(cur!=0){
                        cur--
                        document.getElementById("quiz-progress").style.width = ((cur+1)/5 * 100).toString() + "%" 
                        correct--
                    }
                    getQna(qna,cur)
                })
                break
        }
    }
    }
}
function load(){
    document.addEventListener("DOMContentLoaded",loadQuestions())
}

load()
