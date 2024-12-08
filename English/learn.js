const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id'); 

const returnButton = document.getElementById('return-button-link');
returnButton.href = `learnsubtopic.html?id=${id.split('.')[0]}`;

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