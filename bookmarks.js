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

const topicList = {
    "English":{
      1:"Spelling",
      2:"Grammar",
      3:"Prepositions",
    },
    "Maths":{
    1:"Operations",
    2:"Geometry",
    3:"Fractions",
  },
  }

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const loggedInUserId=localStorage.getItem('loggedInUId');

  
function createBookmarkButtons(bookmarks, panelId, subject) {
  const panel = document.getElementById(panelId);

    bookmarks.forEach(bookmark => {

    const container = document.createElement('div');
    
    const button = document.createElement('button');
    button.textContent = `${subject} | ${topicList[subject][Number(bookmark.quizId)]} | Number ${bookmark.questionIndex+1}`;
    button.onclick = () => {
        const url = `bookedmarkedqst.html?subject=${subject}&quizId=${bookmark.quizId}&questionIndex=${bookmark.questionIndex}`; 
        window.location.href = url;
    };
    console.log(subject)
    button.classList.add("bookmark-button");
    button.classList.add("mediumfont");
    
    const deleteButton = document.createElement('button');
    deleteButton.id = 'delete';
    deleteButton.innerHTML = `<i class="material-icons" style="font-size:36px;color:#05525B;">delete</i>`;
    deleteButton.classList.add('delete-button');
    deleteButton.setAttribute('key',`${subject}.${bookmark.quizId}.${bookmark.questionIndex}`)

    deleteButton.onclick = async () => {

        const docRef = doc(db,"bookmarks",loggedInUserId);
        getDoc(docRef)
        .then((docSnap) => {
            if (docSnap.exists()) {
                let bookmarksArray = subject == "English" ? docSnap.data().engBookmarks : docSnap.data().mathBookmarks;
                const index = bookmarksArray.findIndex(item => 
                    item.quizId === bookmark.quizId && item.questionIndex === bookmark.questionIndex
                );
    
                if (index !== -1) {
                    bookmarksArray.splice(index, 1); 
                }
    
                const updatedData = subject == "English" ? { engBookmarks: bookmarksArray } : { mathBookmarks: bookmarksArray };
    
                updateDoc(docRef, updatedData)
                    .then(() => {

                        container.remove(); 
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        } );

      };

    container.appendChild(button);
    container.appendChild(deleteButton);

    panel.appendChild(container);
    });


}

function checkLoggedInProfile(){
    if(loggedInUserId){
        const bookmarksRef = doc(db,"bookmarks",loggedInUserId)
        getDoc(bookmarksRef)
        .then((docSnap) =>{
            if(docSnap.exists()){
                const englishBookmarks = docSnap.data().engBookmarks;
                const mathsBookmarks = docSnap.data().mathBookmarks;
                if(!(englishBookmarks === undefined || englishBookmarks.length == 0)){
                    createBookmarkButtons(englishBookmarks, 'eng-panel', 'English');
                }
                if(!(mathsBookmarks === undefined || mathsBookmarks.length == 0)){
                    createBookmarkButtons(mathsBookmarks, 'eng-panel', 'Maths');
                }

            } else{
                console.log("No data available.");
            }
        })
    } else{
        window.location.replace("auth.html")
    }
}

checkLoggedInProfile();


