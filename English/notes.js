var urlParams = new URLSearchParams(window.location.search); 
var id = urlParams.get('id');
console.log(id);


switch(id) {
    case "1":
        console.log(id);
        var notes = document.getElementById("notes");
        notes.innerHTML = `
        <h1>Spelling</h1>

        <h2 id="subtopic-1">Homophones</h2>
        
        <h3>1. Definition</h3>
        <p>Homophones are words that sound the same but have different meanings, spellings, or both.</p>
        
        <h3>2. Types</h3>
        <ul>
            <li>
                <strong>Same Pronunciation, Different Spellings</strong>
                <ul>
                    <li>Pair (two things) vs. Pear (fruit)</li>
                    <li>There (place) vs. Their (possessive) vs. They're (contraction of "they are")</li>
                </ul>
            </li>
            <li>
                <strong>Same Pronunciation, Different Meanings and Spellings</strong>
                <ul>
                    <li>To (direction) vs. Two (number) vs. Too (also)</li>
                    <li>Brake (stop) vs. Break (split)</li>
                </ul>
            </li>
        </ul>
        
        <h3>3. Importance</h3>
        <ul>
            <li>Avoid confusion in writing and speaking.</li>
            <li>Common in puns and wordplay.</li>
        </ul>
        
        <h3>4. Examples of Common Homophones</h3>
        <ul>
            <li>Here (location) vs. Hear (perceive sound)</li>
            <li>Sea (ocean) vs. See (vision)</li>
            <li>Whole (entire) vs. Hole (gap)</li>
        </ul>
        
        <h3>5. Tips for Remembering</h3>
        <ul>
            <li>Learn meanings and contexts.</li>
            <li>Practice writing sentences using each word.</li>
            <li>Use mnemonic devices (e.g., "Sea is full of water, you can see it").</li>
        </ul>

        <h2 id="subtopic-2">Regular and Irregular Plurals</h2>
        
        <h3>1. Definition</h3>
        <p>Plural: A form of a noun that indicates more than one.</p>
        
        <h3>2. Regular Plurals</h3>
        <p><strong>Formation:</strong> Add <em>-s</em> or <em>-es</em> to the singular noun.</p>
        <ul>
            <li>Dog &rarr; Dogs</li>
            <li>Box &rarr; Boxes (add <em>-es</em> after s, sh, ch, x, or z)</li>
            <li>Baby &rarr; Babies (change <em>-y</em> to <em>-ies</em> if preceded by a consonant)</li>
        </ul>
        
        <h3>3. Irregular Plurals</h3>
        <p><strong>Formation:</strong> No fixed rule; the plural form changes unpredictably.</p>
        <ul>
            <li>Man &rarr; Men</li>
            <li>Woman &rarr; Women</li>
            <li>Child &rarr; Children</li>
            <li>Tooth &rarr; Teeth</li>
            <li>Foot &rarr; Feet</li>
            <li>Mouse &rarr; Mice</li>
            <li>Cactus &rarr; Cacti (Latin origin: change <em>-us</em> to <em>-i</em>)</li>
            <li>Goose &rarr; Geese</li>
        </ul>
        
        <h3>4. Invariant Nouns</h3>
        <p><strong>Same in Singular and Plural:</strong></p>
        <ul>
            <li>Sheep &rarr; Sheep</li>
            <li>Deer &rarr; Deer</li>
            <li>Fish &rarr; Fish (though "fishes" is used to refer to different species)</li>
        </ul>
        
        <h3>5. Borrowed Words</h3>
        <p><strong>Retain Original Plural Forms:</strong></p>
        <ul>
            <li>Criterion &rarr; Criteria</li>
            <li>Phenomenon &rarr; Phenomena</li>
            <li>Datum &rarr; Data</li>
        </ul>
        
        <h3>6. Tips for Remembering</h3>
        <ul>
            <li>Study common patterns for irregular forms.</li>
            <li>Practice writing both singular and plural forms in sentences.</li>
            <li>Use flashcards or quizzes to test your understanding.</li>
        </ul>

        <h2 id="subtopic-3">Vocabulary</h2>
        
        <h3>1. Definition</h3>
        <p>Vocabulary refers to the collection of words and their meanings that a person knows and uses.</p>
        
        <h3>2. Types of Vocabulary</h3>
        <ul>
            <li>Listening Vocabulary: Words understood while listening.</li>
            <li>Speaking Vocabulary: Words actively used in speech.</li>
            <li>Reading Vocabulary: Words recognized in written text.</li>
            <li>Writing Vocabulary: Words used in writing.</li>
        </ul>
        
        <h3>3. Importance of Vocabulary</h3>
        <ul>
            <li>Enhances communication skills.</li>
            <li>Improves reading comprehension and writing quality.</li>
            <li>Boosts academic and professional success.</li>
        </ul>
        
        <h3>4. Strategies to Build Vocabulary</h3>
        <ul>
            <li>Reading: Read books, articles, and newspapers regularly.</li>
            <li>Context Clues: Infer meanings from surrounding text.</li>
            <li>Word Lists: Study high-frequency and academic word lists.</li>
            <li>Practice: Use new words in speaking and writing.</li>
            <li>Games: Play vocabulary-based games like crosswords or word puzzles.</li>
            <li>Flashcards: Use digital or physical flashcards for memorization.</li>
            <li>Roots, Prefixes, and Suffixes: Learn word-building elements (e.g., "un-" means "not").</li>
        </ul>
        
        <h3>5. Examples of Vocabulary-Building Techniques</h3>
        <ul>
            <li>Synonyms: Learn words with similar meanings (e.g., happy &rarr; joyful).</li>
            <li>Antonyms: Learn opposites (e.g., hot &rarr; cold).</li>
            <li>Collocations: Learn word pairings (e.g., "make a decision").</li>
        </ul>
        
        <h3>6. Tips for Retention</h3>
        <ul>
            <li>Review regularly to reinforce memory.</li>
            <li>Group words thematically (e.g., words related to travel).</li>
            <li>Create personal associations or mnemonics.</li>
        </ul>
        `;
        console.log(id);

        var sidebar = document.getElementById("sidebar");
        sidebar.innerHTML = `
            <a href="selector.html">
              <button id="returnbutton" class="raise"><i class="fa fa-solid fa-reply"></i>Return</button>
            </a>
            <a href="?id=1">
                <p class="bigfont selectedtopic" id="topic1">Spelling</p>
            </a>
            <a href="#subtopic-1">
                <p class="selectedsubtopic" id="subtopic1">Homophones</p>
            </a>
            <a href="#subtopic-2">
                <p id="subtopic2">Regular and Irregular Plurals</p>
            </a>
            <a href="#subtopic-3">
                <p id="subtopic3">Vocabulary</p>
            </a>
            <a href="?id=2">
                <p class="bigfont" id="topic2">Grammar</p>
            </a>
            <a href="?id=3">
                <p class="bigfont" id="topic3">Prepositions</p>
            </a>
        `;
        break;

    case "2":
        console.log(id);
        var notes = document.getElementById("notes");
        notes.innerHTML = `
        <h1>Grammar</h1>
        
        <h2 id="subtopic-1">Conjunctions</h2>
        
        <h3>1. Definition</h3>
        <p>Conjunctions are words that connect words, phrases, or clauses in a sentence.</p>
        
        <h3>2. Types of Conjunctions</h3>
        
        <h4>Coordinating Conjunctions</h4>
        <p>Join words, phrases, or clauses of equal importance.</p>
        <p>Examples: and, but, or, nor, for, so, yet.</p>
        <p>Mnemonic: FANBOYS (For, And, Nor, But, Or, Yet, So).</p>
        <p><strong>Example Sentence:</strong> I wanted to go out, but it was raining.</p>
        
        <h4>Subordinating Conjunctions</h4>
        <p>Connect dependent (subordinate) clauses to independent clauses.</p>
        <p>Examples: because, although, since, while, if, unless, until.</p>
        <p><strong>Example Sentence:</strong> She stayed home because she was tired.</p>
        
        <h4>Correlative Conjunctions</h4>
        <p>Work in pairs to join equal elements.</p>
        <p>Examples: either...or, neither...nor, not only...but also, both...and.</p>
        <p><strong>Example Sentence:</strong> Either we leave now or we miss the bus.</p>
        
        <h3>3. Importance of Conjunctions</h3>
        <p>Provide logical flow in sentences.</p>
        <p>Avoid sentence fragmentation.</p>
        <p>Show relationships like cause, contrast, and choice.</p>
        
        <h3>4. Common Mistakes</h3>
        <p>Overusing conjunctions, leading to run-on sentences.</p>
        <p>Misplacing conjunctions, causing confusion.</p>
        
        <h3>5. Tips to Master Conjunctions</h3>
        <p>Identify the relationship you want to express (e.g., addition, contrast).</p>
        <p>Use coordinating conjunctions for simple connections.</p>
        <p>Use subordinating conjunctions to add reasons, conditions, or time.</p>
        <p>Practice writing sentences with each type of conjunction.</p>
        
        <h2 id="subtopic-2">Adverbs</h2>
        
        <h3>1. Definition</h3>
        <p>Adverbs are words that modify verbs, adjectives, or other adverbs. They provide additional information about how, when, where, why, or to what extent an action is performed.</p>
        
        <h3>2. Types of Adverbs</h3>
        
        <h4>Adverbs of Manner</h4>
        <p>Describe how an action is performed.</p>
        <p>Examples: quickly, slowly, carefully, beautifully.</p>
        <p><strong>Example Sentence:</strong> She speaks softly.</p>
        
        <h4>Adverbs of Time</h4>
        <p>Indicate when an action occurs.</p>
        <p>Examples: now, yesterday, tomorrow, soon, later.</p>
        <p><strong>Example Sentence:</strong> He will visit us tomorrow.</p>
        
        <h4>Adverbs of Place</h4>
        <p>Show where an action occurs.</p>
        <p>Examples: here, there, everywhere, nearby.</p>
        <p><strong>Example Sentence:</strong> The children are playing outside.</p>
        
        <h4>Adverbs of Frequency</h4>
        <p>Indicate how often an action happens.</p>
        <p>Examples: always, often, rarely, never, sometimes.</p>
        <p><strong>Example Sentence:</strong> She always reads before bed.</p>
        
        <h4>Adverbs of Degree</h4>
        <p>Express the intensity or degree of an action, adjective, or another adverb.</p>
        <p>Examples: very, too, quite, almost, completely.</p>
        <p><strong>Example Sentence:</strong> The movie was very interesting.</p>
        
        <h4>Adverbs of Purpose</h4>
        <p>Explain why an action is done.</p>
        <p>Examples: therefore, hence, thus, so.</p>
        <p><strong>Example Sentence:</strong> He missed the bus; therefore, he was late.</p>
        
        <h3>3. Formation of Adverbs</h3>
        <p>Many adverbs are formed by adding -ly to adjectives.</p>
        <p>Examples: Quick → Quickly, Careful → Carefully</p>
        <p>Some adverbs have the same form as adjectives.</p>
        <p>Examples: fast, hard, late.</p>
        
        <h3>4. Importance of Adverbs</h3>
        <p>Add detail and precision to writing and speech.</p>
        <p>Help answer questions like how, when, where, and why.</p>
        
        <h3>5. Tips to Master Adverbs</h3>
        <p>Identify the role of the adverb in the sentence.</p>
        <p>Avoid overusing adverbs; choose precise verbs and adjectives instead.</p>
        <p>Practice forming adverbs from adjectives.</p>
        <p>Write sentences to practice different types of adverbs.</p>
        
        <h2 id="subtopic-3">Adjectives</h2>
        
        <h3>1. Definition</h3>
        <p>Adjectives are words that describe or modify nouns and pronouns, providing more information about their qualities, quantity, or identity.</p>
        
        <h3>2. Types of Adjectives</h3>
        
        <h4>Descriptive Adjectives</h4>
        <p>Describe qualities or characteristics.</p>
        <p>Examples: beautiful, tall, smart, bright.</p>
        <p><strong>Example Sentence:</strong> She wore a beautiful dress.</p>
        
        <h4>Quantitative Adjectives</h4>
        <p>Indicate quantity or amount.</p>
        <p>Examples: some, many, few, several.</p>
        <p><strong>Example Sentence:</strong> There are several books on the table.</p>
        
        <h4>Demonstrative Adjectives</h4>
        <p>Point out specific nouns.</p>
        <p>Examples: this, that, these, those.</p>
        <p><strong>Example Sentence:</strong> These flowers are lovely.</p>
        
        <h3>6. Tips to Master Adjectives</h3>
        <p>Use adjectives to make writing vivid and descriptive.</p>
        <p>Avoid overusing adjectives to prevent redundancy.</p>
        <p>Practice placing adjectives in the correct order.</p>
        <p>Write sentences to explore different types of adjectives.</p>
        `;
        console.log(id);
        var sidebar = document.getElementById("sidebar");
        sidebar.innerHTML = `
            <a href="selector.html">
              <button id="returnbutton" class="raise"><i class="fa fa-solid fa-reply"></i>Return</button>
            </a>
            <a href="?id=1">
                <p class="bigfont" id="topic1">Spelling</p>
            </a>
            <a href="?id=2">
                <p class="bigfont selectedtopic" id="topic2">Grammar</p>
            </a>
            <a href="#subtopic-1">
                <p class="selectedsubtopic" id="subtopic1">Conjunctions</p>
            </a>
            <a href="#subtopic-2">
                <p id="subtopic2">Adverbs</p>
            </a>
            <a href="#subtopic-3">
                <p id="subtopic3">Adjectives</p>
            </a>
            <a href="?id=3">
                <p class="bigfont" id="topic3">Prepositions</p>
            </a>
        
        `;
        break;


    case "3":
        console.log(id);
        var notes = document.getElementById("notes");
        notes.innerHTML = `
        <h1>Prepositions</h1>

        <h2 id="subtopic-1">Prepositions of Place</h2>

        <h3>1. Definition</h3>
        <p>Prepositions of place are words that describe the location of someone or something in relation to another object.</p>

        <h3>2. Common Prepositions of Place</h3>
        <ul>
            <li><strong>At:</strong> Refers to a specific point or location.
                <ul>
                    <li>Examples: At the door, At the bus stop, At the top of the hill</li>
                    <li>Example Sentence: She is waiting at the gate.</li>
                </ul>
            </li>
            <li><strong>In:</strong> Refers to an enclosed space or within boundaries.
                <ul>
                    <li>Examples: In the room, In the bag, In the city</li>
                    <li>Example Sentence: The keys are in the drawer.</li>
                </ul>
            </li>
            <li><strong>On:</strong> Refers to a surface or a position atop something.
                <ul>
                    <li>Examples: On the table, On the wall, On the floor</li>
                    <li>Example Sentence: The books are on the shelf.</li>
                </ul>
            </li>
        </ul>

        <h3>3. Other Prepositions of Place</h3>
        <ul>
            <li>Under</li>
            <li>Over</li>
            <li>Next to/Beside</li>
            <li>Between</li>
            <li>Behind</li>
            <li>In front of</li>
            <li>Inside</li>
            <li>Outside</li>
            <li>Above</li>
            <li>Below</li>
        </ul>

        <h3>4. Importance of Prepositions of Place</h3>
        <ul>
            <li>Specify the exact location or position of objects.</li>
            <li>Provide clarity in descriptions.</li>
        </ul>

        <h3>5. Common Mistakes</h3>
        <ul>
            <li>Confusing "in" and "on" (e.g., Correct: The pen is in the drawer. Incorrect: The pen is on the drawer.)</li>
            <li>Misusing "at" for enclosed spaces (e.g., Correct: She is in the room. Incorrect: She is at the room.)</li>
        </ul>

        <h3>6. Tips for Mastery</h3>
        <ul>
            <li>Visualize the spatial relationship to choose the correct preposition.</li>
            <li>Practice with real-life objects and scenarios.</li>
            <li>Write sentences to apply prepositions accurately.</li>
        </ul>

        <h2 id="subtopic-2">Prepositions of Time</h2>

        <h3>1. Definition</h3>
        <p>Prepositions of time are words used to show the relationship between a time reference and an action or event.</p>

        <h3>2. Common Prepositions of Time</h3>
        <ul>
            <li>At</li>
            <li>On</li>
            <li>In</li>
        </ul>

        <h3>3. Other Prepositions of Time</h3>
        <ul>
            <li>By</li>
            <li>For</li>
            <li>Since</li>
            <li>Ago</li>
            <li>Until/Till</li>
            <li>Within</li>
        </ul>

        <h3>4. Importance of Prepositions of Time</h3>
        <ul>
            <li>Help specify when an event happens.</li>
            <li>Clarify and organize time-related information.</li>
        </ul>

        <h3>5. Common Mistakes</h3>
        <ul>
            <li>Confusing "in," "on," and "at." (e.g., Correct: He was born in 1995. Incorrect: He was born on 1995.)</li>
            <li>Using "since" instead of "for" with durations (e.g., Correct: I've lived here for five years. Incorrect: I've lived here since five years.)</li>
        </ul>

        <h3>6. Tips for Mastery</h3>
        <ul>
            <li>Memorize common uses with examples.</li>
            <li>Practice filling in blanks with appropriate prepositions.</li>
            <li>Write sentences to apply what you've learned.</li>
        </ul>

        <h2 id="subtopic-3">Prepositions of Movement</h2>

        <h3>1. Definition</h3>
        <p>Prepositions of movement indicate the direction or motion from one place to another.</p>

        <h3>2. Common Prepositions of Movement</h3>
        <ul>
            <li>To</li>
            <li>Into</li>
            <li>Onto</li>
            <li>Out of</li>
            <li>Toward</li>
            <li>Across</li>
            <li>Through</li>
            <li>Over</li>
            <li>Along</li>
            <li>Up and Down</li>
            <li>Past</li>
        </ul>

        <h3>3. Importance of Prepositions of Movement</h3>
        <ul>
            <li>Describe direction and help convey dynamic action.</li>
            <li>Provide clarity in instructions and storytelling.</li>
        </ul>

        <h3>4. Common Mistakes</h3>
        <ul>
            <li>Confusing "to" with "into" (e.g., Correct: He walked into the room. Incorrect: He walked to the room.)</li>
            <li>Using "on" instead of "onto" for movement (e.g., Correct: She jumped onto the bed. Incorrect: She jumped on the bed.)</li>
        </ul>

        <h3>5. Tips for Mastery</h3>
        <ul>
            <li>Visualize the movement and relationship between objects.</li>
            <li>Practice writing and speaking sentences using different prepositions.</li>
            <li>Observe how these prepositions are used in stories and conversations.</li>
        </ul>
        `;
        console.log(id);
        
        var sidebar = document.getElementById("sidebar");
        sidebar.innerHTML = `
            <a href="selector.html">
              <button id="returnbutton" class="raise"><i class="fa fa-solid fa-reply"></i>Return</button>
            </a>
            <a href="?id=1">
                <p class="bigfont" id="topic1">Spelling</p>
            </a>
            <a href="?id=2">
                <p class="bigfont" id="topic2">Grammar</p>
            </a>
            <a href="?id=3">
                <p class="bigfont selectedtopic" id="topic3">Prepostions</p>
            </a>
            <a href="#subtopic-1">
                <p class="selectedsubtopic" id="subtopic1">Place</p>
            </a>
            <a href="#subtopic-2">
                <p id="subtopic2">Time</p>
            </a>
            <a href="#subtopic-3">
                <p id="subtopic3">Movement</p>
            </a>
            
        `;
        
        break;
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };
  
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const elements = document.querySelectorAll('.selectedsubtopic');

        elements.forEach(element => {
            element.classList.remove('selectedsubtopic');
        });
        switch(entry.target.id){
            case("subtopic-1"):
                document.getElementById('subtopic1').classList.add('selectedsubtopic')
                break
            case("subtopic-2"):
                document.getElementById('subtopic2').classList.add('selectedsubtopic')
                break
            case("subtopic-3"):
                document.getElementById('subtopic3').classList.add('selectedsubtopic')
                break
        }
            
        console.log("User is viewing:", entry.target.id);
      }
    });
  }, options);
  
  let subtopics = document.querySelectorAll("[id^='subtopic-']");
  subtopics.forEach(subtopic => {
    observer.observe(subtopic);
  });

