const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id'); 


const subtopics = ['subtopic1', 'subtopic2', 'subtopic3'];

subtopics.forEach((subtopic, index) => {
    const element = document.getElementById(subtopic);
    if (element) {
        element.href = `learn.html?id=${id}.${index + 1}`;
    }
});


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