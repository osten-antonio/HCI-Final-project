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
                var content = [{
                    subtopic: "Spelling",
                    content: `
                        Spelling means how we write words correctly.
                        Some words are tricky, but don't worry! 
                        Practice makes perfect. For example:
                        <ul>
                            <li>It's "definitely", not "definately".</li>
                            <li>It's "separate", not "seperate".</li>
                        </ul>
                    `,
                    explanation: `
                        <p>To help you remember, try writing the word a few times!</p>
                        <p>You can also ask a friend to quiz you!</p>
                    `
                },{
                    subtopic: "Homophones",
                    content: `
                        Homophones are words that sound the same but are spelled differently. 
                        For example:
                        <ul>
                            <li>“bare” means no clothes, and “bear” is an animal.</li>
                            <li>“flower” is a plant, and “flour” is what we use to bake!</li>
                        </ul>
                    `,
                    explanation: `
                        <p>Remember: Homophones may sound the same, but they mean different things!</p>
                        <p>You can practice by writing sentences using both words correctly.</p>
                    `
                },{
                    subtopic: "Regular and Irregular Plurals",
                    content: `
                        Regular plurals are when we just add "s" or "es" to make a word plural. 
                        For example:
                        <ul>
                            <li>One cat, two cats.</li>
                            <li>One box, two boxes.</li>
                        </ul>
                        But some words are irregular and don't follow this rule:
                        <ul>
                            <li>One man, two men.</li>
                            <li>One tooth, two teeth.</li>
                        </ul>
                    `,
                    explanation: `
                        <p>For regular plurals, just add "s" or "es"!</p>
                        <p>For irregular plurals, you'll need to remember the special rules!</p>
                    `
                }] // Change it to how many as you want
                    var done = 2; // Please change to how many content you provided, -1
                    
                    handleNavigation(content,done,learnArray,"First","0")
                    break
                case "2": // TOPIC 1.2
                var content = [{
                    subtopic: "Regular Plurals",
                    content: `
                        Regular plurals are when we make a word plural by adding "s" or "es". 
                        Here are some examples:
                        <ul>
                            <li>One dog, two dogs.</li>
                            <li>One cat, two cats.</li>
                            <li>One box, two boxes.</li>
                        </ul>
                    `,
                    explanation: `
                        <p>To make most words plural, just add "s" or "es"!</p>
                        <p>Try this: Make a list of your favorite animals and practice making them plural!</p>
                    `
                },{
                    subtopic: "Irregular Plurals",
                    content: `
                        Irregular plurals don't follow the "s" rule. These words change in special ways!
                        For example:
                        <ul>
                            <li>One man, two men.</li>
                            <li>One tooth, two teeth.</li>
                            <li>One child, two children.</li>
                        </ul>
                    `,
                    explanation: `
                        <p>Irregular plurals are tricky, but with practice, you'll remember them!</p>
                        <p>Can you think of any other irregular plurals?</p>
                    `
                },{
                    subtopic: "Fun Plural Practice",
                    content: `
                        Let's practice with some fun examples! Can you turn these words into plurals?
                        <ul>
                            <li>One fish, two __________.</li>
                            <li>One mouse, two __________.</li>
                            <li>One goose, two __________.</li>
                        </ul>
                    `,
                    explanation: `
                        <p>Now, let's check your answers:</p>
                        <ul>
                            <li>Fish (fish stays the same!)</li>
                            <li>Mouse, mice</li>
                            <li>Goose, geese</li>
                        </ul>
                        <p>Great job!</p>
                    `
                }] // Change it to how many as you want
                    var done = 2; // Please change to how many content you provided, -1
                    
                    handleNavigation(content,done,learnArray,"First","1")
                    break
                case "3": // TOPIC 1.3
                    
                var content = [{
                    subtopic: "Vocabulary",
                    content: `
                        Vocabulary is the collection of words we know and use.
                        The more words you know, the better you can read and write!
                        Here are some tips:
                        <ul>
                            <li>Read lots of books to learn new words!</li>
                            <li>Use a dictionary to find meanings of words!</li>
                        </ul>
                    `,
                    explanation: `
                        <p>Learning new words can be fun! Try using new words in your sentences.</p>
                        <p>Ask your teacher or parents to help you learn even more words!</p>
                    `
                },{
                    subtopic: "Synonyms and Antonyms",
                    content: `
                        Synonyms are words that have the same meaning. For example:
                        <ul>
                            <li>Happy and joyful</li>
                            <li>Big and large</li>
                        </ul>
                        Antonyms are words that have the opposite meaning. For example:
                        <ul>
                            <li>Hot and cold</li>
                            <li>Fast and slow</li>
                        </ul>
                    `,
                    explanation: `
                        <p>Knowing synonyms and antonyms helps you find the perfect word!</p>
                        <p>Try to use different words to make your sentences interesting!</p>
                    `
                },{
                    subtopic: "Context Clues",
                    content: `
                        Sometimes you can guess the meaning of a word by looking at the other words around it. This is called "context clues." 
                        For example:
                        <p>"The kitten was so playful, it ran around the house, jumping on everything!"</p>
                        In this sentence, "playful" means the kitten likes to play.
                    `,
                    explanation: `
                        <p>When you read, look at the other words to help you understand new words!</p>
                        <p>Try guessing the meaning of words you don't know by using context clues!</p>
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
                    
                var content = [{
                    subtopic: "Conjunctions",
                    content: `
                        Conjunctions are words that help connect other words or sentences.
                        For example:
                        <ul>
                            <li>"and" connects two things: I like cats <b>and</b> dogs.</li>
                            <li>"but" shows a difference: I like ice cream, <b>but</b> I don't like cake.</li>
                        </ul>
                    `,
                    explanation: `
                        <p>Conjunctions make your sentences more interesting and help you explain more things at once!</p>
                        <p>Try making your own sentence with "and" or "but".</p>
                    `
                },{
                    subtopic: "More Conjunctions",
                    content: `
                        Here are some more conjunctions you can use:
                        <ul>
                            <li>"or" (I want ice cream <b>or</b> cake.)</li>
                            <li>"because" (I am happy <b>because</b> I got a new toy.)</li>
                            <li>"so" (I was tired, <b>so</b> I took a nap.)</li>
                        </ul>
                    `,
                    explanation: `
                        <p>Conjunctions are helpful to join ideas and make your sentences flow smoothly!</p>
                        <p>Can you come up with a sentence using "because" or "so"?</p>
                    `
                },{
                    subtopic: "Practice with Conjunctions",
                    content: `
                        Let's practice:
                        <ul>
                            <li>My mom is cooking <b>and</b> my dad is cleaning.</li>
                            <li>We can go to the park <b>or</b> stay home.</li>
                        </ul>
                    `,
                    explanation: `
                        <p>Now, try to create your own sentences with these conjunctions!</p>
                        <p>Remember, conjunctions help make your writing easier to understand.</p>
                    `
                }] // Change it to how many as you want
                    var done = 2; // Please change to how many content you provided, -1
                    
                    handleNavigation(content,done,learnArray,"Second","0")
                    break
                case "2": // TOPIC 2.2
                var content = [{
                    subtopic: "Adverbs",
                    content: `
                        Adverbs are words that describe how something is done. They tell us more about a verb (action word).
                        For example:
                        <ul>
                            <li>She sings <b>beautifully</b> (How does she sing?)</li>
                            <li>The cat runs <b>quickly</b> (How does the cat run?)</li>
                        </ul>
                    `,
                    explanation: `
                        <p>Adverbs help us understand how, when, where, or to what degree something happens!</p>
                        <p>Try adding adverbs to your sentences, like "happily", "slowly", or "loudly".</p>
                    `
                },{
                    subtopic: "Kinds of Adverbs",
                    content: `
                        Adverbs can tell us about:
                        <ul>
                            <li><b>How</b> something is done: He plays <b>well</b>.</li>
                            <li><b>When</b> something happens: We will go <b>tomorrow</b>.</li>
                            <li><b>Where</b> something happens: The dog is <b>outside</b>.</li>
                            <li><b>How much</b> something happens: She is <b>very</b> happy.</li>
                        </ul>
                    `,
                    explanation: `
                        <p>See how adverbs help give more information about actions or things?</p>
                        <p>Can you use an adverb to describe how you are feeling today?</p>
                    `
                },{
                    subtopic: "Practice with Adverbs",
                    content: `
                        Let's practice:
                        <ul>
                            <li>The bird flew <b>gracefully</b> in the sky.</li>
                            <li>She answered the question <b>quickly</b>.</li>
                        </ul>
                    `,
                    explanation: `
                        <p>Now, try to come up with your own sentences with adverbs!</p>
                        <p>Don't forget to ask: How, when, where, or how much?</p>
                    `
                }] // Change it to how many as you want
                    var done = 2; // Please change to how many content you provided, -1
                    
                    handleNavigation(content,done,learnArray,"Second","1")
                    break
                case "3": // TOPIC 2.3
                var content = [{
                    subtopic: "Adjectives",
                    content: `
                        Adjectives are words that describe nouns (things or people). They help us understand more about the thing.
                        For example:
                        <ul>
                            <li>The <b>big</b> dog ran fast.</li>
                            <li>She wore a <b>blue</b> dress.</li>
                        </ul>
                    `,
                    explanation: `
                        <p>Adjectives can describe size, color, shape, or how something feels.</p>
                        <p>Try describing your favorite toy with an adjective. Is it <b>small</b>, <b>soft</b>, or <b>round</b>?</p>
                    `
                },{
                    subtopic: "More Adjectives",
                    content: `
                        Here are some more adjectives:
                        <ul>
                            <li><b>Tall</b>, <b>short</b>, <b>big</b>, <b>tiny</b></li>
                            <li><b>Happy</b>, <b>sad</b>, <b>excited</b></li>
                            <li><b>Soft</b>, <b>rough</b>, <b>squishy</b></li>
                        </ul>
                    `,
                    explanation: `
                        <p>Adjectives are fun because they help you tell others more about something!</p>
                        <p>Can you come up with more adjectives to describe your favorite things?</p>
                    `
                },{
                    subtopic: "Practice with Adjectives",
                    content: `
                        Let's practice:
                        <ul>
                            <li>The <b>happy</b> cat slept on the <b>soft</b> pillow.</li>
                            <li>She wore a <b>green</b> jacket and <b>shiny</b> shoes.</li>
                        </ul>
                    `,
                    explanation: `
                        <p>Now, try making your own sentences using adjectives!</p>
                        <p>Remember: Adjectives tell us more about things, people, or places.</p>
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
                    
                var content = [{
                    subtopic: "Place",
                    content: `
                        Prepositions of place help tell us where something is.
                        For example:
                        <ul>
                            <li>The ball is <b>under</b> the table.</li>
                            <li>The cat is <b>on</b> the chair.</li>
                            <li>The dog is <b>next to</b> the tree.</li>
                        </ul>
                    `,
                    explanation: `
                        <p>Prepositions of place show us the position or location of something.</p>
                        <p>Think about where your favorite toy is. Can you describe its location using prepositions?</p>
                    `
                },{
                    subtopic: "More Prepositions of Place",
                    content: `
                        Here are more examples:
                        <ul>
                            <li><b>Behind</b> (The book is behind the lamp.)</li>
                            <li><b>In</b> (The toy is in the box.)</li>
                            <li><b>Beside</b> (The shoes are beside the door.)</li>
                        </ul>
                    `,
                    explanation: `
                        <p>These prepositions help us know exactly where something is!</p>
                        <p>Can you come up with your own sentence using "behind" or "in"?</p>
                    `
                },{
                    subtopic: "Practice with Prepositions of Place",
                    content: `
                        Let's practice:
                        <ul>
                            <li>The pencil is <b>in</b> the box.</li>
                            <li>The bird is <b>on</b> the branch.</li>
                        </ul>
                    `,
                    explanation: `
                        <p>Now, try describing where your things are using prepositions!</p>
                        <p>Use words like "under", "next to", "behind", and "in".</p>
                    `
                }] // Change it to how many as you want
                    var done = 2; // Please change to how many content you provided, -1
                    
                    handleNavigation(content,done,learnArray,"Third","0")
                    break
                case "2": // TOPIC 3.2
                    
                var content = [{
                    subtopic: "Time",
                    content: `
                        Prepositions of time help us understand when something happens.
                        For example:
                        <ul>
                            <li>We will meet <b>at</b> 3 PM.</li>
                            <li>My birthday is <b>on</b> Monday.</li>
                            <li>We went to the park <b>in</b> the morning.</li>
                        </ul>
                    `,
                    explanation: `
                        <p>Prepositions of time tell us about moments, days, and months!</p>
                        <p>Can you think of something you do at a certain time? Maybe you eat lunch at <b>12 PM</b>!</p>
                    `
                },{
                    subtopic: "More Prepositions of Time",
                    content: `
                        Here are more examples:
                        <ul>
                            <li><b>At</b> (We play at noon.)</li>
                            <li><b>In</b> (The event is in the afternoon.)</li>
                            <li><b>On</b> (We go to school on Wednesday.)</li>
                        </ul>
                    `,
                    explanation: `
                        <p>These prepositions help tell us when things happen during the day or week.</p>
                        <p>Try thinking about a time you do something every day, like "in the morning" or "at night".</p>
                    `
                },{
                    subtopic: "Practice with Prepositions of Time",
                    content: `
                        Let's practice:
                        <ul>
                            <li>We go to bed <b>at</b> 8 PM.</li>
                            <li>The game starts <b>on</b> Friday.</li>
                        </ul>
                    `,
                    explanation: `
                        <p>Now, try to use prepositions of time in your sentences!</p>
                        <p>Remember, "at" is for specific times, "in" is for periods, and "on" is for days.</p>
                    `
                }] // Change it to how many as you want
                    var done = 2; // Please change to how many content you provided, -1
                    
                    handleNavigation(content,done,learnArray,"Third","1")
                    break
                case "3": // TOPIC 3.3
                    
                var content = [{
                    subtopic: "Movement",
                    content: `
                        Prepositions of movement help show the direction in which something moves.
                        For example:
                        <ul>
                            <li>The ball rolled <b>into</b> the box.</li>
                            <li>The bird flew <b>over</b> the tree.</li>
                            <li>She walked <b>across</b> the street.</li>
                        </ul>
                    `,
                    explanation: `
                        <p>These prepositions help us explain how something moves from one place to another.</p>
                        <p>Think about how you move around. Can you describe a movement with "over", "into", or "across"?</p>
                    `
                },{
                    subtopic: "More Prepositions of Movement",
                    content: `
                        Here are more examples:
                        <ul>
                            <li><b>Through</b> (The rabbit ran through the tunnel.)</li>
                            <li><b>To</b> (We are going to the park.)</li>
                            <li><b>Up</b> (The cat climbed up the tree.)</li>
                        </ul>
                    `,
                    explanation: `
                        <p>These prepositions help explain the direction or path of movement!</p>
                        <p>Can you think of a sentence where something moves "to", "through", or "up"?</p>
                    `
                },{
                    subtopic: "Practice with Prepositions of Movement",
                    content: `
                        Let's practice:
                        <ul>
                            <li>The car drove <b>through</b> the tunnel.</li>
                            <li>The dog jumped <b>over</b> the fence.</li>
                        </ul>
                    `,
                    explanation: `
                        <p>Now, try to describe a movement you see or do!</p>
                        <p>Use prepositions like "into", "over", "through", and "across".</p>
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
