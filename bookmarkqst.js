const questions = {
    English:{
        1:[
            {
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
        ],
        2:[
            {
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
        ],
        3:[
            {
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
    },
    Maths:{
        1:{

        },
        2:{

        },
        3:{

        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const params = new URLSearchParams(url.search);

    const paramsObject = Object.fromEntries(params.entries());
    switch(paramsObject.subject){
        case "English":

            document.getElementById("number").innerText = `Question ${Number(paramsObject.questionIndex)+1}`
            document.getElementById("question").innerText = questions.English[Number(paramsObject.quizId)][Number(paramsObject.questionIndex)].question;
            document.getElementById("A").innerText=questions.English[Number(paramsObject.quizId)][Number(paramsObject.questionIndex)].answer1;
            document.getElementById("B").innerText=questions.English[Number(paramsObject.quizId)][Number(paramsObject.questionIndex)].answer2;
            document.getElementById("C").innerText=questions.English[Number(paramsObject.quizId)][Number(paramsObject.questionIndex)].answer3;
            document.getElementById("D").innerText=questions.English[Number(paramsObject.quizId)][Number(paramsObject.questionIndex)].answer4;
            document.getElementById("E").innerText=questions.English[Number(paramsObject.quizId)][Number(paramsObject.questionIndex)].answer5;
            document.getElementById("check").addEventListener("click", () => {
                const quizId = Number(paramsObject.quizId);
                const questionIndex = Number(paramsObject.questionIndex);
                const correctAnswer = questions.English[quizId][questionIndex].correct; 
                const correctChoiceId = correctAnswer + "choice"; 
                const correctInput = document.getElementById(correctChoiceId);
                if (correctInput.checked) {
                    window.alert("Correct");
                } else {
                    window.alert("Wrong, try again");
                }
            });

    }
});
