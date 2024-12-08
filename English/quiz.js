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
const engRef = doc(db,"english",loggedInUserId)
const bookmarkRef = doc(db,"bookmarks",loggedInUserId)
const engDocSnap = await getDoc(engRef)
const bookmarkDocSnap = await getDoc(bookmarkRef)

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id'); 
var bookmarks = [];
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
    const bookmarkData = bookmarkDocSnap.data()
    if (engDocSnap) {
        var change={};
        switch(id){
            case "1":
                // First topic
                var correct = 0;
                var cur=0;
                var qna = [{
                    question:"I didn't ____ what she said.",
                    answer1:"A. here",
                    answer2:"B. hear",
                    answer3:"C. hare",
                    answer4:"D. her",
                    answer5:"E. horse",
                    correct:"B"},
                    {
                    question:"They forgot to take ____ printouts.",
                    answer1:"A. they're",
                    answer2:"B. there",
                    answer3:"C. their",
                    answer4:"D. door",
                    answer5:"E. deer",
                    correct:"C"},
                    {
                    question:"The plural of 'church' is ....",
                    answer1:"A. church",
                    answer2:"B. churches",
                    answer3:"C. church's",
                    answer4:"D. churchi",
                    answer5:"E. churchee",
                    correct:"B"},
                    {
                    question:"The teacher marked their ______ for the answer with a red pen.",
                    answer1:"A. quizzes",
                    answer2:"B. quiz",
                    answer3:"C. quizs",
                    answer4:"D. quizer",
                    answer5:"E. quizzi",
                    correct:"A"},
                    {
                    question:"What is the best synonym for choice:",
                    answer1:"A. price",
                    answer2:"B. way",
                    answer3:"C. stuff",
                    answer4:"D. decision",
                    answer5:"E. prize",
                    correct:"D"}
                ]

                getQna(qna,cur)
                console.log(document.getElementById("bookmark"))
                document.getElementById("bookmarkbutton").addEventListener("click",(event)=>{
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
                    console.log(qna[cur].correct)
                    console.log(document.getElementById(qna[cur].correct).checked)
                    if(document.getElementById(qna[cur].correct+"choice").checked == true){
                        correct++
                    }
                    cur++
                    if(cur > 4){
                        cur--
                        if(window.confirm("Do you want to submit?")){
                            change.engQuizOne = correct/5 * 100

                            updateDoc(engRef,change)

                        }
                    }
                    console.log((cur+1/5 * 100).toString() + "%")
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
                    question:"This is the place _________ we stayed last time we visited.",
                    answer1:"A. when",
                    answer2:"B. where",
                    answer3:"C. what",
                    answer4:"D. who",
                    answer5:"E. whose",
                    correct:"B"},
                    {
                    question:"You won't pass the test _________ you study.",
                    answer1:"A. what",
                    answer2:"B. when",
                    answer3:"C. unless",
                    answer4:"D. if",
                    answer5:"E. maybe",
                    correct:"C"},
                    {
                    question:"My grandfather walks extremely slowly. The adverb 'extremely' modifies:",
                    answer1:"A. verb",
                    answer2:"B. adverb",
                    answer3:"C. noun",
                    answer4:"D. adjective",
                    answer5:"E. pronoun",
                    correct:"B"},
                    {
                    question:"We rarely go to the movies on the weekends. The adverb 'rarely' modifies:",
                    answer1:"A. verb",
                    answer2:"B. adverb",
                    answer3:"C. noun",
                    answer4:"D. adjective",
                    answer5:"E. pronoun",
                    correct:"A"},
                    {
                    question:"We saw _____ animals at the zoo.",
                    answer1:"A. of",
                    answer2:"B. number",
                    answer3:"C. much",
                    answer4:"D. many",
                    answer5:"E. while",
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
                    if(document.getElementById(qna[cur].correct+"choice").checked == True){
                        correct++
                    }
                    cur++
                    if(cur > 5){
                        cur--
                        if(window.confirm("Do you want to submit?")){
                            change.engQuizOne = correct/5 * 100
                            const bookmarkChanges = {
                                engBookmarks: Array.from(new Set(bookmarkData.engBookmarks.concat(bookmarks))) 
                            }
                            updateDoc(engRef,change)
                            updateDoc(bookmarkRef,bookmarkChanges)
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
                    question:"They climbed ___ the highest hill they could find.",
                    answer1:"A. up",
                    answer2:"B. under",
                    answer3:"C. for",
                    answer4:"D. while",
                    answer5:"E. of",
                    correct:"A"},
                    {
                    question:"We have to get ___ the bus at the next stop.",
                    answer1:"A. from",
                    answer2:"B. down",
                    answer3:"C. off",
                    answer4:"D. where",
                    answer5:"E. up",
                    correct:"C"},
                    {
                    question:"I was born ___ May.",
                    answer1:"A. on",
                    answer2:"B. in",
                    answer3:"C. at",
                    answer4:"D. over",
                    answer5:"E. under",
                    correct:"B"},
                    {
                    question:"The farmer wakes up ___ sunrise.",
                    answer1:"A. at",
                    answer2:"B. in",
                    answer3:"C. on",
                    answer4:"D. under",
                    answer5:"E. over",
                    correct:"A"},
                    {
                    question:"Every morning I get ___ my bicycle and go to school.",
                    answer1:"A. over",
                    answer2:"B. under",
                    answer3:"C. in",
                    answer4:"D. on",
                    answer5:"E. at",
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
                    if(document.getElementById(qna[cur].correct+"choice").checked == True){
                        correct++
                    }
                    cur++
                    if(cur > 5){
                        cur--
                        if(window.confirm("Do you want to submit?")){
                            change.engQuizOne = correct/5 * 100
                            const bookmarkChanges = {
                                engBookmarks: Array.from(new Set(bookmarkData.engBookmarks.concat(bookmarks))) 
                            }
                            updateDoc(engRef,change)
                            updateDoc(bookmarkRef,bookmarkChanges)
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
