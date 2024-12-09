const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id'); 


subtopics.forEach((subtopic, index) => {
    const element = document.getElementById(subtopic);
    if (element) {
        element.href = `learn.html?id=${id}.${index + 1}`;
    }
});

const topicList = {
    "eng":{
      1:["Spelling",{
        1:"Homophones",
        2:"Regular and Irregular Plurals",
        3:"Vocabulary"
      }],
      2:["Grammar",{
        1:"Conjunctions",
        2:"Adverbs",
        3:"Adjectives"
      }],
      3:["Prepositions",{
        1:"Place",
        2:"Time",
        3:"Movement"
      }],
    }
  }


switch(id){
    case "1":
        // First subtopic
        break
    case "2":
        // Second subtopic
        break
    case "3":
        // Third subtopic
        break
}