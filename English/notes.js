var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id'); 
console.log(id)
switch(id){
    case "1":
        console.log(id)
        var notes = document.getElementById("notes"); //EDIT NOTES CONTENT HERE
        notes.innerHTML = 
        `
        <h1>first</h1>
        `
        var sidebar = document.getElementById("sidebar");
        sidebar.innerHTML = `
        <a href="selector.html">
            <button id="returnbutton">Return</button>
        </a>
        <a>
            <p class="selectedtopic bigfont" id="topic1">Topic 1</p>
        </a>
        <a>
            <p class="selectedsubtopic" id="subtopic1">Subtopic 1</p>
        </a>
        <a>
            <p id="subtopic2">Subtopic 2</p>
        </a>
        <a>
            <p id="subtopic3">Subtopic 3</p>
        </a>
        <a>
            <p class="bigfont" id="topic2">Topic 2</p>
        </a>
        <a>
            <p class="bigfont" id="topic3">Topic 3</p>
        </a>

        `;
        break
    case "2":
        console.log(id)
        var notes = document.getElementById("notes"); //EDIT NOTES CONTENT HERE
        notes.innerHTML = 
        `
        <h1>Second</h1>
        `
        var sidebar = document.getElementById("sidebar");
        sidebar.innerHTML = `
        <a href="selector.html">
            <button id="returnbutton">Return</button>
        </a>
        <a>
            <p class="bigfont" id="topic1">Topic 1</p>
        </a>
        <a>
            <p class="bigfont selectedtopic" id="topic2">Topic 2</p>
        </a>
        <a>
            <p class="selectedsubtopic" id="subtopic1">Subtopic 1</p>
        </a>
        <a>
            <p id="subtopic2">Subtopic 2</p>
        </a>
        <a>
            <p id="subtopic3">Subtopic 3</p>
        </a>
        <a>
            <p class="bigfont" id="topic3">Topic 3</p>
        </a>
        `;
        break
    case "3":
        console.log(id)
        var notes = document.getElementById("notes"); //EDIT NOTES CONTENT HERE
        notes.innerHTML = 
        `
        <h1>Third</h1>
        `
        var sidebar = document.getElementById("sidebar");
        sidebar.innerHTML = `
        <a href="selector.html">
            <button id="returnbutton">Return</button>
        </a>
        <a>
            <p class="bigfont" id="topic1">Topic 1</p>
        </a>
        <a>
            <p class="bigfont" id="topic2">Topic 2</p>
        </a>
        <a>
            <p class="bigfont selectedtopic" id="topic3">Topic 3</p>
        </a>
        <a>
            <p class="selectedsubtopic" id="subtopic1">Subtopic 1</p>
        </a>
        <a>
            <p id="subtopic2">Subtopic 2</p>
        </a>
        <a>
            <p id="subtopic3">Subtopic 3</p>
        </a>
        `;
        break
}