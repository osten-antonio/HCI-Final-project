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
        console.log(data)
        var learnArray = data.learnCompletion
    }else{
        window.location.replace('../auth.html')
    }
    switch(topic[0]){
        case "1":
            switch(topic[1]){
                case "1": // TOPIC 1.1
                    var content=[{
                        subtopic:"Addition and Subtraction",
                        content:`
                        <ul style="list-style-type:none;">
                            <li>4 + 6 = 10 <br> (Imagine you have 4 apples, and someone gives you 6 more apples. Now you have 10 apples.)</li>
                            <li>12 - 5 = 7 <br> (If you have 12 candies and you give away 5, you’ll have 7 candies left.)</li>
                        </ul>
                        `,
                        explanation:`
                            <p><strong>Addition</strong> is when you combine two or more numbers to make a bigger number. The symbol (+) is used for addition. For example, 3 + 2 = 5, which means you have 3 and you add 2 more, giving you a total of 5.</p>
                            <p><strong>Subtraction</strong> is when you take one number away from another. The symbol (-) is used for subtraction. For example, 7 - 4 = 3, which means you have 7, and if you take away 4, you are left with 3.</p>
                            <p>These two operations are opposites. Addition increases numbers, while subtraction decreases them.</p>
                        `
                    },{
                        subtopic:"Practice Questions",
                        content:`
                            <p>Try solving these problems:</p>
                            <ul>
                                <li>5 + 3 = ?</li>
                                <li>10 - 6 = ?</li>
                                <li>8 + 2 = ?</li>
                                <li>15 - 7 = ?</li>
                            </ul>
                        `,
                        explanation:`
                            <p>Use the examples of addition and subtraction to solve the practice questions. Remember, for addition, you are combining numbers to get a bigger total. For subtraction, you are taking away from the first number.</p>
                        `
                    }] 
                    var done = 1; 
                    
                    handleNavigation(content,done,learnArray,"First","0")
                    break
                case "2": // TOPIC 1.2
                    var content=[{
                        subtopic:"Multiplication",
                        content:`
                            <img src="multiplication_example.png" alt="Example of Multiplication">
                        `,
                        explanation:`
                            <p><strong>Multiplication</strong> is when you add a number to itself a certain number of times. The symbol (x) or (*) is used for multiplication. For example, 4 x 3 means you add 4 three times (4 + 4 + 4 = 12). So, 4 x 3 = 12.</p>
                            <p>Multiplication can also be thought of as "groups of". For example, 3 x 2 means you have 3 groups of 2 items, which totals 6.</p>
                        `
                    },{
                        subtopic:"Why We Use Multiplication",
                        content:`
                            <p>We use multiplication to make adding large numbers easier. Instead of adding 5 + 5 + 5 + 5, we can just say 5 x 4, which is 20.</p>
                        `,
                        explanation:`
                            <p>When you see repeated addition, think of it as multiplication. For example, 7 + 7 + 7 + 7 + 7 is the same as 7 x 5, which equals 35. This makes math faster and easier.</p>
                        `
                    }] 
                    var done = 1; 
                    
                    handleNavigation(content,done,learnArray,"First","1")
                    break
                case "3": // TOPIC 1.3
                    var content=[{
                        subtopic:"Division",
                        content:`
                            <img src="division_example.png" alt="Example of Division">
                        `,
                        explanation:`
                            <p><strong>Division</strong> is when you split a number into equal parts. The symbol (÷) or (/) is used for division. For example, 12 ÷ 3 means you are dividing 12 into 3 equal parts, and each part is 4. So, 12 ÷ 3 = 4.</p>
                            <p>Another way to think about division is sharing. If you have 12 cookies and 3 friends, each friend gets 4 cookies.</p>
                        `
                    },{
                        subtopic:"Practice Questions",
                        content:`
                            <p>Try solving these problems:</p>
                            <ul>
                                <li>10 ÷ 2 = ?</li>
                                <li>15 ÷ 3 = ?</li>
                                <li>8 ÷ 2 = ?</li>
                                <li>20 ÷ 5 = ?</li>
                            </ul>
                        `,
                        explanation:`
                            <p>Use the idea of "sharing" to solve these division problems. For example, if you have 10 candies and 2 people, each person gets 5 candies. Use this idea to solve the other problems.</p>
                        `
                    }] 
                    var done = 1; 
                    
                    handleNavigation(content,done,learnArray,"First","2")
                    
                    break
            }   
            break
        case "2":
            switch(topic[1]){
                case "1": // TOPIC 2.1: Area
                    var content = [{
                        subtopic: "Area",
                        content: `
                            Area is the amount of space inside a shape. 
                            Think of it as the space where you can color inside a box! 
                            To find the area of a rectangle, you multiply the length by the width.
                            For example, if a rectangle has a length of 4 units and a width of 3 units,
                            the area is 4 x 3 = 12 square units.
                            <br><br>
                            Here's a simple rectangle with a length of 4 and width of 3:
                            <div style="width: 150px; height: 100px; border: 2px solid black;"></div>
                        `,
                        explanation: `
                            <p>Area is the space inside a shape, measured in square units. For example, the area of a rectangle is found by multiplying the length and width.</p>
                            <p>Area = Length × Width</p>
                        `
                    }, {
                        subtopic: "Subtitle",
                        content: `
                            <p>Here's a challenge! Can you find the area of this square?</p>
                            <div style="width: 100px; height: 100px; border: 2px solid blue;"></div>
                            <p>If the sides are 5 units long, what is the area?</p>
                        `,
                        explanation: `
                            <p>For squares, the area is the length of one side squared. So, if the side is 5 units, the area is 5 × 5 = 25 square units.</p>
                        `
                    }];
                    var done = 1; // One content provided
                    handleNavigation(content, done, learnArray, "Second", "0");
                    break;
            
                case "2": // TOPIC 2.2: Perimeter
                    var content = [{
                        subtopic: "Perimeter",
                        content: `
                            Perimeter is the distance around the outside of a shape.
                            To find the perimeter of a rectangle, you add up the lengths of all the sides.
                            For example, if a rectangle has a length of 4 units and a width of 3 units,
                            the perimeter is 4 + 4 + 3 + 3 = 14 units.
                            <br><br>
                            Here's a simple rectangle with a length of 4 and width of 3:
                            <div style="width: 150px; height: 100px; border: 2px solid red;"></div>
                        `,
                        explanation: `
                            <p>The perimeter is the total length around a shape. For rectangles, you add up all the sides: 2 × (Length + Width).</p>
                            <p>Perimeter = 2 × (Length + Width)</p>
                        `
                    }, {
                        subtopic: "Subtitle",
                        content: `
                            <p>Now, let's calculate the perimeter of this triangle!</p>
                            <div style="width: 0; height: 0; border-left: 50px solid transparent; border-right: 50px solid transparent; border-bottom: 100px solid green;"></div>
                            <p>If the sides of the triangle are 5, 5, and 6 units, what is the perimeter?</p>
                        `,
                        explanation: `
                            <p>For triangles, you add the lengths of all three sides. So, the perimeter is 5 + 5 + 6 = 16 units.</p>
                        `
                    }];
                    var done = 1; // One content provided
                    handleNavigation(content, done, learnArray, "Second", "1");
                    break;
            
                case "3": // TOPIC 2.3: Angles
                    var content = [{
                        subtopic: "Angles",
                        content: `
                            Angles are formed when two lines meet at a point. 
                            The space between the two lines is the angle.
                            You can measure angles in degrees. 
                            A right angle is 90 degrees and looks like the corner of a book.
                            <br><br>
                            Here's a right angle:
                            <div style="width: 100px; height: 100px; border-left: 2px solid black; border-bottom: 2px solid black;"></div>
                        `,
                        explanation: `
                            <p>An angle is the space between two lines that meet. A right angle is 90 degrees, which is a perfect corner.</p>
                            <p>Other angles are less than 90° (acute) or greater than 90° (obtuse).</p>
                        `
                    }, {
                        subtopic: "Subtitle",
                        content: `
                            <p>Can you spot the right angle in this picture?</p>
                            <div style="width: 100px; height: 100px; border-left: 2px solid purple; border-bottom: 2px solid purple;"></div>
                            <p>Does it look like the corner of a book?</p>
                        `,
                        explanation: `
                            <p>Yes! The right angle is 90 degrees, and it looks like the corner of a square or a book!</p>
                        `
                    }];
                    var done = 1; // One content provided
                    handleNavigation(content, done, learnArray, "Second", "2");
                    break;
            }   
            break
        case "3":
            switch(topic[1]){
                case "1": // TOPIC 3.1: Equivalent Fractions
                    var content = [{
                        subtopic: "Equivalent Fractions",
                        content: `
                            Equivalent fractions are fractions that look different but represent the same amount.
                            For example, 1/2 and 2/4 are equivalent fractions because they both represent half.
                            You can think of it like cutting a pizza into two parts or four parts, but you still have half of it!
                            <br><br>
                            Here's a visual:
                            <div style="width: 100px; height: 50px; background-color: lightblue; display: inline-block;"></div> 
                            <div style="width: 200px; height: 50px; background-color: lightgreen; display: inline-block;"></div>
                            <p>Both represent half of a whole!</p>
                        `,
                        explanation: `
                            <p>Equivalent fractions are fractions that represent the same part of a whole, even though they have different numbers. You can make equivalent fractions by multiplying or dividing both the numerator (top number) and the denominator (bottom number) by the same number.</p>
                            <p>Example: 1/2 = 2/4 = 4/8</p>
                        `
                    }];
                    var done = 1; // One content provided
                    handleNavigation(content, done, learnArray, "Third", "0");
                    break;
            
                case "2": // TOPIC 3.2: Comparing Fractions
                    var content = [{
                        subtopic: "Comparing Fractions",
                        content: `
                            Comparing fractions means deciding which fraction is bigger or smaller.
                            To compare fractions, you need to look at the size of the parts. 
                            For example, 1/4 is smaller than 1/2 because the parts are smaller!
                            <br><br>
                            Here's a simple visual:
                            <div style="width: 100px; height: 50px; background-color: lightcoral; display: inline-block;"></div> 
                            <div style="width: 200px; height: 50px; background-color: lightyellow; display: inline-block;"></div>
                            <p>1/4 is smaller than 1/2 because the pieces are bigger in 1/2!</p>
                        `,
                        explanation: `
                            <p>To compare fractions, check the size of the parts. If two fractions have the same denominator (bottom number), the fraction with the bigger numerator (top number) is the bigger fraction.</p>
                            <p>Example: 1/2 is bigger than 1/4 because 2 is bigger than 1 when the denominator is the same.</p>
                        `
                    }];
                    var done = 1; // One content provided
                    handleNavigation(content, done, learnArray, "Third", "1");
                    break;
            
                case "3": // TOPIC 3.3: Simplifying Fractions
                    var content = [{
                        subtopic: "Simplifying Fractions",
                        content: `
                            Simplifying a fraction means making it easier by using smaller numbers.
                            For example, the fraction 2/4 can be simplified to 1/2 because both the top and bottom numbers can be divided by 2.
                            It's like dividing a pizza into fewer slices for easier sharing!
                            <br><br>
                            Here's how you simplify:
                            <div style="width: 100px; height: 50px; background-color: lightpink; display: inline-block;"></div> 
                            <div style="width: 50px; height: 50px; background-color: lightseagreen; display: inline-block;"></div>
                            <p>2/4 simplifies to 1/2!</p>
                        `,
                        explanation: `
                            <p>To simplify a fraction, divide both the numerator and the denominator by the same number. You want to find the smallest numbers that still represent the same part of the whole.</p>
                            <p>Example: 2/4 simplifies to 1/2, because both 2 and 4 can be divided by 2.</p>
                        `
                    }];
                    var done = 1; // One content provided
                    handleNavigation(content, done, learnArray, "Third", "2");
                    break;
            }
            break
    }
    console.log("Test")
}
writeLearn();
