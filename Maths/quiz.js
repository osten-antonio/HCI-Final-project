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
const mathRef = doc(db,"math",loggedInUserId)
const bookmarkRef = doc(db,"bookmarks",loggedInUserId)
const bookmarkDocSnap = await getDoc(bookmarkRef);
const mathDocSnap = await getDoc(mathRef)
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id'); 

console.log(id)

const bookmarkIcon = document.getElementById("bookmarkicon");

function getQna(qna, cur) {
    document.getElementById("questionlabel").innerText = qna[cur].question;
    document.getElementById("A").innerHTML = qna[cur].answer1;
    document.getElementById("B").innerHTML = qna[cur].answer2;
    document.getElementById("C").innerHTML = qna[cur].answer3;
    document.getElementById("D").innerHTML = qna[cur].answer4;
    document.getElementById("E").innerHTML = qna[cur].answer5;

    fetchBookmarkData().then(bookmarkArray => {
        const isBookmarked = bookmarkArray.some(bookmark => bookmark.quizId === id && bookmark.questionIndex === cur);
        if (isBookmarked) {
            bookmarkIcon.classList.remove("fa-bookmark-o");
            bookmarkIcon.classList.add("fa-bookmark");
        } else {
            bookmarkIcon.classList.remove("fa-bookmark");
            bookmarkIcon.classList.add("fa-bookmark-o");
        }
    });
}

  
async function fetchBookmarkData() {
    const bookmarkDocSnap = await getDoc(bookmarkRef);
    if (bookmarkDocSnap.exists()) {
        return bookmarkDocSnap.data().mathBookmarks || [];
    }
    return [];  
}
async function updateBookmarkData(updatedBookmarks) {
    const bookmarkChanges = { mathBookmarks: updatedBookmarks };
    await updateDoc(bookmarkRef, bookmarkChanges);
}

function toggleBookmark(cur) {
    fetchBookmarkData().then(bookmarkArray => {
        const isBookmarked = bookmarkArray.some(bookmark => bookmark.quizId === id && bookmark.questionIndex === cur);
        
        if (isBookmarked) {

            const updatedBookmarks = bookmarkArray.filter(bookmark => !(bookmark.quizId === id && bookmark.questionIndex === cur));
            updateBookmarkData(updatedBookmarks);
            bookmarkIcon.classList.remove("fa-bookmark");
            bookmarkIcon.classList.add("fa-bookmark-o");
        } else {
            const updatedBookmarks = [...bookmarkArray, { quizId: id, questionIndex: cur }];
            updateBookmarkData(updatedBookmarks);
            bookmarkIcon.classList.remove("fa-bookmark-o");
            bookmarkIcon.classList.add("fa-bookmark");
        }
    });
}
function loadQuestions(){
    if(loggedInUserId){
        console.log("A")
    if (mathDocSnap.exists() && bookmarkDocSnap.exists()) {
        console.log("B")
        var change={};
        switch(id){
            case "1":
                // First topic
                var correct = 0;
                var cur=0;
                var qna = [{
                    question:"1. 9 + 2 =",
                    answer1:"A. 11",
                    answer2:"B. 12",
                    answer3:"C. 13",
                    answer4:"D. 14",
                    answer5:"E. 15",
                    correct:"A"},
                    {
                    question:"2. 69 - 21 =",
                    answer1:"A. 46",
                    answer2:"B. 47",
                    answer3:"C. 48",
                    answer4:"D. 49",
                    answer5:"E. 50",
                    correct:"C"},
                    {
                    question:"3. 7 x 4 =",
                    answer1:"A. 21",
                    answer2:"B. 28",
                    answer3:"C. 35",
                    answer4:"D. 42",
                    answer5:"E. 49",
                    correct:"B"},
                    {
                    question:"4. 9 x 9 =",
                    answer1:"A. 81",
                    answer2:"B. 90",
                    answer3:"C. 99",
                    answer4:"D. 108",
                    answer5:"E. 117",
                    correct:"A"},
                    {
                    question:"5. 20 / 5 =",
                    answer1:"A. 1",
                    answer2:"B. 2",
                    answer3:"C. 3",
                    answer4:"D. 4",
                    answer5:"E. 5",
                    correct:"D"}
                ]

                getQna(qna,cur)
                document.getElementById("bookmarkbutton").addEventListener("click",(event)=>{
                    toggleBookmark(cur);
                })
                document.getElementById("next").addEventListener("click",(event)=>{
                    if(document.querySelector('input[name="choice"]:checked') == null) {
                        window.alert("Please select an option");
                    }else{
                    if(document.getElementById(qna[cur].correct).checked == true){
                        correct++
                    }
                    cur++
                    if(cur >= 5){
                        cur--
                        if(window.confirm("Do you want to submit?")){
                            change.mathQuizOne = correct/5 * 100
                            updateDoc(mathRef,change)

                        }
                    }
                    document.getElementById("quiz-progress").style.width = ((cur+1)/5 * 100).toString() + "%"
                    getQna(qna,cur)
                }
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
                    question:"1. The length of a rectangle is 6cm and its height is 4cm. What is the area of the rectangle?",
                    answer1:"A. 24cm",
                    answer2:"B. 24m",
                    answer3:"C. 26cm",
                    answer4:"D. 3mm",
                    answer5:"E. 2km",
                    correct:"A"},
                    {
                    question:"2. The length of a the base of a triangle is 5cm and its height is 3cm. What is the area of the triangle?",
                    answer1:"A. 6.5cm",
                    answer2:"B. 7cm",
                    answer3:"C. 7.5cm",
                    answer4:"D. 8cm",
                    answer5:"E. 10cm",
                    correct:"C"},
                    {
                    question:"3. The length of a rectangle is 8cm and its height is 6cm. What is the perimiter of the rectangle?",
                    answer1:"A. 26cm",
                    answer2:"B. 28cm",
                    answer3:"C. 30cm",
                    answer4:"D. 32cm",
                    answer5:"E. 34cm",
                    correct:"B"},
                    {
                    question:"4. The length of one side of a square is 9cm. What is the perimiter of the square?",
                    answer1:"A. 36cm",
                    answer2:"B. 45cm",
                    answer3:"C. 35cm",
                    answer4:"D. 20cm",
                    answer5:"E. 50cm",
                    correct:"A"},
                    {
                    question:"5. The angle of one acute corner of a right-angle triangle is 57∘. What is the angle of the other acute angle?",
                    answer1:"A. 12∘",
                    answer2:"B. 17∘",
                    answer3:"C. 24∘",
                    answer4:"D. 33∘",
                    answer5:"E. 40∘",
                    correct:"D"}
                ]

                getQna(qna,cur)
                document.getElementById("bookmarkbutton").addEventListener("click",(event)=>{
                    toggleBookmark(cur);
                })
                document.getElementById("next").addEventListener("click",(event)=>{
                    if(document.querySelector('input[name="choice"]:checked') == null) {
                        window.alert("Please select an option");
                    }else{
                    if(document.getElementById(qna[cur].correct).checked == true){
                        correct++
                    }
                    cur++
                    if(cur >= 5){
                        cur--
                        if(window.confirm("Do you want to submit?")){
                            change.mathQuizOne = correct/5 * 100

                            updateDoc(mathRef,change)

                        }
                    }
                    document.getElementById("quiz-progress").style.width = ((cur+1)/5 * 100).toString() + "%"
                    getQna(qna,cur)
                }
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
                    question:"1. Which of the following fractions is equivalent to 2/3?",
                    answer1:"A. 6/9",
                    answer2:"B. 4/5",
                    answer3:"C. 5/7",
                    answer4:"D. 2/7",
                    answer5:"E. 3/4",
                    correct:"A"},
                    {   
                    question:"2. Which fraction is the largest?",
                    answer1:"A. 1/5",
                    answer2:"B. 7/10",
                    answer3:"C. 3/4",
                    answer4:"D. 2/4",
                    answer5:"E. 3/8",
                    correct:"C"},
                    {
                    question:"3. What is the simplified form of 20/28?",
                    answer1:"A. 3/4",
                    answer2:"B. 4/7",
                    answer3:"C. 5/7",
                    answer4:"D. 2/3",
                    answer5:"E. 6/8",
                    correct:"B"},
                    {
                    question:"4. Which of the following fractions is equivalent to 3/6?",
                    answer1:"A. 1/2",
                    answer2:"B. 1/3",
                    answer3:"C. 2/3",
                    answer4:"D. 3/4",
                    answer5:"E. 5/8",
                    correct:"A"},
                    {
                    question:"5. Which fraction is the smallest?",
                    answer1:"A. 2/3",
                    answer2:"B. 5/6",
                    answer3:"C. 1/2",
                    answer4:"D. 3/8",
                    answer5:"E. 5/7",
                    correct:"D"}
                ]

                getQna(qna,cur)
                document.getElementById("bookmarkbutton").addEventListener("click",(event)=>{
                    toggleBookmark(cur);
                })
                document.getElementById("next").addEventListener("click",(event)=>{
                    if(document.querySelector('input[name="choice"]:checked') == null) {
                        window.alert("Please select an option");
                    }else{
                    if(document.getElementById(qna[cur].correct).checked == true){
                        correct++
                    }
                    cur++
                    if(cur >= 5){
                        cur--
                        if(window.confirm("Do you want to submit?")){
                            change.mathQuizOne = correct/5 * 100
                            updateDoc(mathRef,change)
                        }
                    }
                    document.getElementById("quiz-progress").style.width = ((cur+1)/5 * 100).toString() + "%" 
                    getQna(qna,cur)
                }
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
                case "4":
                    // FINAL EXAM topic
                    var correct = 0;
                    var cur = 0;
                    var qna = [
                        { 
                            question: "What is 6 X 7", 
                            answer1: "A. 37", 
                            answer2: "B. 42", 
                            answer3: "C. 32", 
                            answer4: "D. 49", 
                            answer5: "E. 13", 
                            correct: "B" },
                        { 
                            question: "An angle measures 120° Is it acute, obtuse, or right?", 
                            answer1: "A. acute", 
                            answer2: "B. obtuse", 
                            answer3: "C. right", 
                            answer4: "D. rotation", 
                            answer5: "E. left", 
                            correct: "B" },
                        { 
                            question: "What is 25-9?", 
                            answer1: "A. 16", 
                            answer2: "B. 34", 
                            answer3: "C. 24", 
                            answer4: "D. 17", 
                            answer5: "E. 18", 
                            correct: "A" },
                        { 
                            question: "Simplify 18/27", 
                            answer1: "A. 2/3", 
                            answer2: "B. 9/3", 
                            answer3: "C. 5/8", 
                            answer4: "D. 1/2", 
                            answer5: "E. 3/4", 
                            correct: "A" },
                        { 
                            question: "A rectangle with dimensions 12 units by 8 units is attached to a semicircle with a radius of 4 units. Find the total area (use π≈3.14)", 
                            answer1: "A. 96.5", 
                            answer2: "B. 121.12", 
                            answer3: "C. 80.3", 
                            answer4: "D. 75.6", 
                            answer5: "E. 67.2", 
                            correct: "B" },
                        { 
                            question: "What is 81 ÷ 9?", 
                            answer1: "A. 6", 
                            answer2: "B. 9", 
                            answer3: "C. 8", 
                            answer4: "D. 10", 
                            answer5: "E. 7", 
                            correct: "B" },
                        { 
                            question: "What is 123 + 456?", 
                            answer1: "A. 469", 
                            answer2: "B. 579", 
                            answer3: "C. 576", 
                            answer4: "D. 590", 
                            answer5: "E. 499", 
                            correct: "B" },
                        { 
                            question: "Which is greater, 3/4 or 2/3?", 
                            answer1: "A. 3/4", 
                            answer2: "B. 2/3", 
                            answer3: "C. Both are equal", 
                            answer4: "D. Cannot determine", 
                            answer5: "E. None", 
                            correct: "A" },
                        { 
                            question: "Find the perimeter of a triangle with sides 3 units, 4 units, and 5 units.", 
                            answer1: "A. 12", 
                            answer2: "B. 11", 
                            answer3: "C. 13", 
                            answer4: "D. 14", 
                            answer5: "E. 15", 
                            correct: "A" },
                        { 
                            question: "What is 14 × 12?", 
                            answer1: "A. 140", 
                            answer2: "B. 156", 
                            answer3: "C. 168", 
                            answer4: "D. 144", 
                            answer5: "E. 172", 
                            correct: "C" },
                        { 
                            question: "What is the measure of a right angle?", 
                            answer1: "A. 90°", 
                            answer2: "B. 180°", 
                            answer3: "C. 45°", 
                            answer4: "D. 360°", 
                            answer5: "E. 270°", 
                            correct: "A" },
                        { 
                            question: "Simplify 4/8", 
                            answer1: "A. 1/2", 
                            answer2: "B. 2/4", 
                            answer3: "C. 3/8", 
                            answer4: "D. 5/8", 
                            answer5: "E. 2/3", 
                            correct: "A" },
                        { 
                            question: "What is 725 ÷ 25?", 
                            answer1: "A. 28", 
                            answer2: "B. 29", 
                            answer3: "C. 30", 
                            answer4: "D. 27", 
                            answer5: "E. 31", 
                            correct: "B" },
                        { 
                            question: "Find the perimeter of a rectangle with length 8 units and width 3 units.", 
                            answer1: "A. 20", 
                            answer2: "B. 22", 
                            answer3: "C. 24", 
                            answer4: "D. 25", 
                            answer5: "E. 18", 
                            correct: "B" },
                        { 
                            question: "Which is smaller: 3/8 or 1/4?", 
                            answer1: "A. 3/8", 
                            answer2: "B. 1/4", 
                            answer3: "C. Both are equal", 
                            answer4: "D. Cannot determine", 
                            answer5: "E. None", 
                            correct: "B" },
                        { 
                            question: "What is 40 ÷ 8?", 
                            answer1: "A. 4", 
                            answer2: "B. 5", 
                            answer3: "C. 6", 
                            answer4: "D. 7", 
                            answer5: "E. 8", 
                            correct: "B" },
                        { 
                            question: "What is 56 × 34?", 
                            answer1: "A. 1874", 
                            answer2: "B. 1924", 
                            answer3: "C. 1904", 
                            answer4: "D. 1934", 
                            answer5: "E. 1804", 
                            correct: "C" },
                        { 
                            question: "Find the area of a rectangle with length 5 units and width 3 units.", 
                            answer1: "A. 12 sq units", 
                            answer2: "B. 15 sq units", 
                            answer3: "C. 18 sq units", 
                            answer4: "D. 20 sq units", 
                            answer5: "E. 10 sq units", 
                            correct: "B" },
                        { 
                            question: "Which is greater: 7/12 or 5/8?", 
                            answer1: "A. 7/12", 
                            answer2: "B. 5/8", 
                            answer3: "C. Both are equal", 
                            answer4: "D. Cannot determine", 
                            answer5: "E. None", 
                            correct: "B" },
                        { 
                            question: "What is 15 + 8?", 
                            answer1: "A. 22", 
                            answer2: "B. 23", 
                            answer3: "C. 24", 
                            answer4: "D. 25", 
                            answer5: "E. 21", 
                            correct: "B" }
                    ];
                
                    getQna(qna, cur);
                
                    document.getElementById("bookmark").addEventListener("click", (event) => {
                        bookmarks.push({
                            quizId: id,
                            questionIndex: cur
                        });
                        bookmarks = Array.from(
                            new Set(bookmarks.map(bookmark => JSON.stringify(bookmark)))
                        ).map(str => JSON.parse(str));
                
                        const bookmarkChanges = {
                            engBookmarks: Array.from(new Set(bookmarkData.engBookmarks.concat(bookmarks)))
                        };
                        console.log(bookmarkChanges);
                        updateDoc(bookmarkRef, bookmarkChanges);
                    });
                
                    document.getElementById("next").addEventListener("click", (event) => {
                        if (document.getElementById(qna[cur].correct).checked == true) {
                            correct++;
                        }
                        cur++;
                        if (cur >= qna.length) {
                            cur--;
                            if (window.confirm("Do you want to submit?")) {
                                change.mathQuizOne = (correct / qna.length) * 100;
                                updateDoc(mathRef, change);
                            }
                        }
                        document.getElementById("quiz-progress").style.width = ((cur + 1) / qna.length * 100).toString() + "%";
                        getQna(qna, cur);
                    });
                
                    document.getElementById("back").addEventListener("click", (event) => {
                        if (cur != 0) {
                            cur--;
                            document.getElementById("quiz-progress").style.width = ((cur + 1) / qna.length * 100).toString() + "%";
                            correct--;
                        }
                        getQna(qna, cur);
                    });
                    break;
                
        }   
    }
    }
}
function load(){
    document.addEventListener("DOMContentLoaded",loadQuestions())
}

load()
