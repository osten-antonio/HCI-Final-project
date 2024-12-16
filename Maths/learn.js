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
const mathRef = doc(db,"mathlish",loggedInUserId)
const mathDocSnap = await getDoc(mathRef)

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id'); 

const returnButton = document.getElementById('return-button-link');
returnButton.href = `learnsubtopic.html?id=${id.split('.')[0]}`;

function getLearn(note,cur){
    document.getElementById("subtitle").innerText = note[cur].subtopic
    document.getElementById("content").innerHTML = note[cur].content
    document.getElementById("explanation").innerHTML = note[cur].explanation
}


const topic=id.split('.')

function handleNavigation(content,done,learnArray,topic,subtopic){
    var cur=0;
    getLearn(content,cur)
    document.getElementById("nextLink").addEventListener("click",(event)=>{
        cur++
        document.getElementById("progress").style.width = ((cur+1)/(done+1) * 100).toString() + "%"
        if(cur > done){
            cur--
            learnArray[topic][subtopic]=1;
            var totalCompletion = {};
            console.log(learnArray)
            let totals = {
                first: learnArray.First.reduce((sum, value) => sum + value, 0),
                second: learnArray.Second.reduce((sum, value) => sum + value, 0),
                third: learnArray.Third.reduce((sum, value) => sum + value, 0)
            };
            console.log(totalCompletion)
            const change = {
                learnCompletion:learnArray,
                mathLearnOne:totals.first/3*100,
                mathLearnTwo:totals.second/3*100,
                mathLearnThree:totals.third/3*100
            }
            console.log(change)
            updateDoc(mathRef,change)
            document.getElementById("nextLink").setAttribute("href", "selector.html");
        }
        getLearn(content,cur)
    })
    document.getElementById("back").addEventListener("click",(event)=>{
        cur--
        if(cur = 0){
            cur=0
        }
        document.getElementById("progress").style.width = ((cur+1)/(done+1) * 100).toString() + "%"
        if(cur <= done){
            document.getElementById("nextLink").setAttribute("href", "#");
        }
        getLearn(content,cur)
    })
}

function writeLearn(){
    if(mathDocSnap.exists){
        var data = mathDocSnap.data()
        var learnArray = data.learnCompletion
    }else{
        window.location.replace('../auth.html')
    }
    switch(topic[0]){
        case "1":
            
            switch(topic[1]){
                case "1": // TOPIC 1.1
                    var content=[{
                        subtopic:"Addition",
                        content:`
                            <img>
                        `,
                        explanation:`
                            <p>Addition and Substraction are both a way to comobine two or more number that is dependent on the symbol. The symbol (+) means to add like 5 + 5 becomes 10. The (-) symbol is to substract which meant it is decreasing the value on the left by the right value such as 10 - 5 = 5</p>
                        `
                    },{
                        subtopic:"Subtraction",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Multiplication is a sytem that multiply the number by a certain ammount. the multiply symbol is an (x) and when used in an equation such as 5 x 5 the eqatuion works by multiplying the first digit  to the last digits times so when the equation says 5 x 5 it means that 5 is added by itself a 5 ammoount of time(5 + 5 + 5 + 5 + 5) equaling to 25.</p>
                        `
                    },{
                        subtopic:"What is division?",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>division is a system that devides a number by another number the symbol itslef is (:) such as 10 : 2 = 5. the simplest way of doing division is by thinking it as sharing an item such as there are 10 pizza and 2 people how much can the 2 equally gets is 5 the same logic as 5 : 2  </p>
                        `
                    }] // Change it to how many as you want
                    var done = 2; // Please change to how many content you provided, -1
                    
                    handleNavigation(content,done,learnArray,"First","0")
                    break
                case "2": // TOPIC 1.2
                    var content=[{
                        subtopic:"Multiplication",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    },{
                        subtopic:"Subtitle",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    },{
                        subtopic:"Subtitle",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    }] // Change it to how many as you want
                    var done = 2; // Please change to how many content you provided, -1
                    
                    handleNavigation(content,done,learnArray,"First","1")
                    break
                case "3": // TOPIC 1.3
                    
                    var content=[{
                        subtopic:"Division",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    },{
                        subtopic:"Subtitle",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    },{
                        subtopic:"Subtitle",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    }] // Change it to how many as you want
                    var done = 2; // Please change to how many content you provided, -1
                    
                    handleNavigation(content,done,learnArray,"First","2")
                    break
            }   
            break
        case "2":
            switch(topic[1]){
                case "1": // TOPIC 2.1
                    
                    var content=[{
                        subtopic:"Area",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    },{
                        subtopic:"Subtitle",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    },{
                        subtopic:"Subtitle",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    }] // Change it to how many as you want
                    var done = 2; // Please change to how many content you provided, -1
                    
                    handleNavigation(content,done,learnArray,"Second","0")
                    break
                case "2": // TOPIC 2.2
                    
                    var content=[{
                        subtopic:"Perimeter",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    },{
                        subtopic:"Subtitle",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    },{
                        subtopic:"Subtitle",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    }] // Change it to how many as you want
                    var done = 2; // Please change to how many content you provided, -1
                    
                    handleNavigation(content,done,learnArray,"Second","1")
                    break
                case "3": // TOPIC 2.3
                    
                    var content=[{
                        subtopic:"Angles",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    },{
                        subtopic:"Subtitle",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    },{
                        subtopic:"Subtitle",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    }] // Change it to how many as you want
                    var done = 2; // Please change to how many content you provided, -1
                    
                    handleNavigation(content,done,learnArray,"Second","2")
                    break
            }   
            break
        case "3":
            switch(topic[1]){
                case "1": // TOPIC 3.1
                    
                    var content=[{
                        subtopic:"Equivalent",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    },{
                        subtopic:"Subtitle",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    },{
                        subtopic:"Subtitle",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    }] // Change it to how many as you want
                    var done = 2; // Please change to how many content you provided, -1
                    
                    handleNavigation(content,done,learnArray,"Third","0")
                    break
                case "2": // TOPIC 3.2
                    
                    var content=[{
                        subtopic:"Comparing",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    },{
                        subtopic:"Subtitle",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    },{
                        subtopic:"Subtitle",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    }] // Change it to how many as you want
                    var done = 2; // Please change to how many content you provided, -1
                    
                    handleNavigation(content,done,learnArray,"Third","1")
                    break
                case "3": // TOPIC 3.3
                    
                    var content=[{
                        subtopic:"Simplifying",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    },{
                        subtopic:"Subtitle",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    },{
                        subtopic:"Subtitle",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    }] // Change it to how many as you want
                    var done = 2; // Please change to how many content you provided, -1
                    
                    handleNavigation(content,done,learnArray,"Third","2")
                    break
            }   
            break
    }
    console.log("Test")
}


writeLearn();
