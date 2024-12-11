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
const engDocSnap = await getDoc(engRef)

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
                engLearnOne:totals.first/3*100,
                engLearnTwo:totals.second/3*100,
                engLearnThree:totals.third/3*100
            }
            console.log(change)
            updateDoc(engRef,change)
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
    if(engDocSnap.exists){
        var data = engDocSnap.data()
        var learnArray = data.learnCompletion
    }else{
        window.location.replace('../auth.html')
    }
    switch(topic[0]){
        case "1":
            switch(topic[1]){
                case "1": // TOPIC 1.1
                    var content=[{
                        subtopic:"Homophones",
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
                    
                    handleNavigation(content,done,learnArray,"First","0")
                    break
                case "2": // TOPIC 1.2
                    var content=[{
                        subtopic:"Regular Plurals",
                        content:`
                            You can put HTML tags here
                            like <img> this is for the additional content thingamabob
                        `,
                        explanation:`
                            <p>Content, you can put HTML tags here</p>
                        `
                    },{
                        subtopic:"Irregular Plurals",
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
                        subtopic:"Vocabulary",
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
                        subtopic:"Conjuctions",
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
                        subtopic:"Adverbs",
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
                        subtopic:"Adjectives",
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
                        subtopic:"Place",
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
                        subtopic:"Time",
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
                        subtopic:"Movement",
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
