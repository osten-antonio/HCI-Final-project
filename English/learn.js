const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id'); 

const returnButton = document.getElementById('return-button-link');
returnButton.href = `learnsubtopic.html?id=${id.split('.')[0]}`;

const topic=id.split('.')
switch(topic[0]){
    case "1":
        switch(topic[1]){
            case "1":
                const content=[{
                    subtopic:"Subtopic",
                    content:`
                        You can put HTML tags here
                        like <img> this is for the additional content thingamabob
                    `,
                    explanation:`
                        <p>Content, you can put HTML tags here</p>
                    `
                },{
                    subtopic:"Subtopic",
                    content:`
                        You can put HTML tags here
                        like <img> this is for the additional content thingamabob
                    `,
                    explanation:`
                        <p>Content, you can put HTML tags here</p>
                    `
                },{
                    subtopic:"Subtopic",
                    content:`
                        You can put HTML tags here
                        like <img> this is for the additional content thingamabob
                    `,
                    explanation:`
                        <p>Content, you can put HTML tags here</p>
                    `
                }] // Change it to how many as you want
                const done = 3; // Please change to how many content you provided
                
                break
            case "2":
                //Second subtopic
            
                break
            case "3":
                //Third subtopic
            
                break
        }   
        break
    case "2":
        switch(topic[1]){
            case "1":
                //First subtopic
            
                break
            case "2":
                //Second subtopic
            
                break
            case "3":
                //Third subtopic
            
                break
        }   
        break
    case "3":
        switch(topic[1]){
            case "1":
                //First subtopic
            
                break
            case "2":
                //Second subtopic
            
                break
            case "3":
                //Third subtopic
            
                break
        }   
        break
}