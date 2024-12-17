var urlParams = new URLSearchParams(window.location.search); 
var id = urlParams.get('id');
console.log(id);


switch(id) {
    case "1":
        console.log(id);
        var notes = document.getElementById("notes");
        notes.innerHTML = `
            <h1>Spelling</h1>
            <h1 id="subtopic-1">Homophones</h1>
            1. Definition:
        Homophones are words that sound the same but have different meanings, spellings, or both.


        2. Types:

        Same Pronunciation, Different Spellings:
        Examples:
        Pair (two things) vs. Pear (fruit)
        There (place) vs. Their (possessive) vs. They're (contraction of "they are")
        Same Pronunciation, Different Meanings and Spellings:
        Examples:
        To (direction) vs. Two (number) vs. Too (also)
        Brake (stop) vs. Break (split)


        3. Importance:

        Avoid confusion in writing and speaking.
        Common in puns and wordplay.


        4. Examples of Common Homophones:

        Here (location) vs. Hear (perceive sound)
        Sea (ocean) vs. See (vision)
        Whole (entire) vs. Hole (gap)


        5. Tips for Remembering:

        Learn meanings and contexts.
        Practice writing sentences using each word.
        Use mnemonic devices (e.g., "Sea is full of water, you can see it").
            
            <h1 id="subtopic-2">Regular and Irregular Plurals</h1>
             1. Definition

        Plural: A form of a noun that indicates more than one.


        2. Regular Plurals

        Formation: Add -s or -es to the singular noun.
        Examples:
        Dog → Dogs
        Box → Boxes (add -es after s, sh, ch, x, or z)
        Baby → Babies (change -y to -ies if preceded by a consonant)


        3. Irregular Plurals

        Formation: No fixed rule; the plural form changes unpredictably.
        Examples:
        Man → Men
        Woman → Women
        Child → Children
        Tooth → Teeth
        Foot → Feet
        Mouse → Mice
        Cactus → Cacti (Latin origin: change -us to -i)
        Goose → Geese


        4. Invariant Nouns

        Same in Singular and Plural:
        Sheep → Sheep
        Deer → Deer
        Fish → Fish (though "fishes" is used to refer to different species)


        5. Borrowed Words

        Retain Original Plural Forms:
        Criterion → Criteria
        Phenomenon → Phenomena
        Datum → Data

        6. Tips for Remembering


        Study common patterns for irregular forms.
        Practice writing both singular and plural forms in sentences.
        Use flashcards or quizzes to test your understanding.
            <h1 id="subtopic-3">Vocabulary</h1>
            1. Definition
        
        Vocabulary refers to the collection of words and their meanings that a person knows and uses.
        
        
        2. Types of Vocabulary
        
        Listening Vocabulary: Words understood while listening.
        Speaking Vocabulary: Words actively used in speech.
        Reading Vocabulary: Words recognized in written text.
        Writing Vocabulary: Words used in writing.
        
        
        3. Importance of Vocabulary
        
        Enhances communication skills.
        Improves reading comprehension and writing quality.
        Boosts academic and professional success.
        
        
        4. Strategies to Build Vocabulary
        
        Reading: Read books, articles, and newspapers regularly.
        Context Clues: Infer meanings from surrounding text.
        Word Lists: Study high-frequency and academic word lists.
        Practice: Use new words in speaking and writing.
        Games: Play vocabulary-based games like crosswords or word puzzles.
        Flashcards: Use digital or physical flashcards for memorization.
        Roots, Prefixes, and Suffixes: Learn word-building elements (e.g., "un-" means "not").
        
        
        5. Examples of Vocabulary-Building Techniques
        
        Synonyms: Learn words with similar meanings (e.g., happy → joyful).
        Antonyms: Learn opposites (e.g., hot → cold).
        Collocations: Learn word pairings (e.g., "make a decision").
        
        
        6. Tips for Retention
        
        Review regularly to reinforce memory.
        Group words thematically (e.g., words related to travel).
        Create personal associations or mnemonics.
        `;
        console.log(id);

        var sidebar = document.getElementById("sidebar");
        sidebar.innerHTML = `
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
            <h1 id="subtopic1">Conjunctions</h1>
            1. Definition
        
        Conjunctions are words that connect words, phrases, or clauses in a sentence.
        
        
        2. Types of Conjunctions
        
        Coordinating Conjunctions:

        Join words, phrases, or clauses of equal importance.
        Examples: and, but, or, nor, for, so, yet.
        Mnemonic: FANBOYS (For, And, Nor, But, Or, Yet, So).
        Example Sentence:
        I wanted to go out, but it was raining.
        
        Subordinating Conjunctions:

        Connect dependent (subordinate) clauses to independent clauses.
        Examples: because, although, since, while, if, unless, until.
        Example Sentence:
        She stayed home because she was tired.
       
        Correlative Conjunctions:

        Work in pairs to join equal elements.
        Examples: either...or, neither...nor, not only...but also, both...and.
        Example Sentence:
        Either we leave now or we miss the bus.
        

        3. Importance of Conjunctions
         
        Provide logical flow in sentences.
        Avoid sentence fragmentation.
        Show relationships like cause, contrast, and choice.
       
        
        4. Common Mistakes
        
        Overusing conjunctions, leading to run-on sentences.
        Misplacing conjunctions, causing confusion.
        
        
        5. Tips to Master Conjunctions
        
        Identify the relationship you want to express (e.g., addition, contrast).
        Use coordinating conjunctions for simple connections.
        Use subordinating conjunctions to add reasons, conditions, or time.
        Practice writing sentences with each type of conjunction.
            <h1 id="subtopic2">Adverbs</h1>
           1. Definition
        
        Adverbs are words that modify verbs, adjectives, or other adverbs. They provide additional information about how, when, where, why, or to what extent an action is performed.
        
        
        2. Types of Adverbs
        
        Adverbs of Manner:

        Describe how an action is performed.
        Examples: quickly, slowly, carefully, beautifully.
        Example Sentence: She speaks softly.
        Adverbs of Time:

        Indicate when an action occurs.
        Examples: now, yesterday, tomorrow, soon, later.
        Example Sentence: He will visit us tomorrow.
        Adverbs of Place:

        Show where an action occurs.
        Examples: here, there, everywhere, nearby.
        Example Sentence: The children are playing outside.
        Adverbs of Frequency:

        Indicate how often an action happens.
        Examples: always, often, rarely, never, sometimes.
        Example Sentence: She always reads before bed.
        Adverbs of Degree:

        Express the intensity or degree of an action, adjective, or another adverb.
        Examples: very, too, quite, almost, completely.
        Example Sentence: The movie was very interesting.
        Adverbs of Purpose:

        Explain why an action is done.
        Examples: therefore, hence, thus, so.
        Example Sentence: He missed the bus; therefore, he was late.
        
        
        3. Formation of Adverbs
        
        Many adverbs are formed by adding -ly to adjectives.
        Examples:
        Quick → Quickly
        Careful → Carefully
        Some adverbs have the same form as adjectives.
        Examples: fast, hard, late.
        

        4. Importance of Adverbs
        
        Add detail and precision to writing and speech.
        Help answer questions like how, when, where, and why.
        
        
        5. Tips to Master Adverbs
        
        Identify the role of the adverb in the sentence.
        Avoid overusing adverbs; choose precise verbs and adjectives instead.
        Practice forming adverbs from adjectives.
        Write sentences to practice different types of adverbs.
            <h1 id="subtopic3">Adjectives</h1>
            1. Definition
        
        Adjectives are words that describe or modify nouns and pronouns, providing more information about their qualities, quantity, or identity.
        
        
        2. Types of Adjectives
        
        Descriptive Adjectives:

        Describe qualities or characteristics.
        Examples: beautiful, tall, smart, bright.
        Example Sentence: She wore a beautiful dress.
        Quantitative Adjectives:

        Indicate quantity or amount.
        Examples: some, many, few, several.
        Example Sentence: There are several books on the table.
        Demonstrative Adjectives:

        Point out specific nouns.
        Examples: this, that, these, those.
        Example Sentence: These flowers are lovely.
        Possessive Adjectives:

        Show ownership or possession.
        Examples: my, your, his, her, their, its, our.
        Example Sentence: This is my notebook.
        Interrogative Adjectives:

        Used in questions to modify nouns.
        Examples: which, what, whose.
        Example Sentence: Which book do you prefer?
        Comparative Adjectives:

        Compare two nouns.
        Examples: taller, better, more beautiful.
        Example Sentence: She is taller than her sister.
        Superlative Adjectives:

        Show the highest degree of comparison.
        Examples: tallest, best, most beautiful.
        Example Sentence: He is the tallest in the class.
        
        
        3. Formation of Adjectives
        
        Adding Suffixes:
        Beauty → Beautiful
        Care → Careful
        Irregular Forms:
        Good → Better → Best
        
        
        4. Order of Adjectives
        
        Rule: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose.
        Example: A beautiful, large, old, round, brown, Italian, wooden, dining table.
        
        
        5. Importance of Adjectives
        
        Add detail and specificity to descriptions.
        Enhance the reader's understanding and imagery.
        
        
        6. Tips to Master Adjectives
        
        Use adjectives to make writing vivid and descriptive.
        Avoid overusing adjectives to prevent redundancy.
        Practice placing adjectives in the correct order.
        Write sentences to explore different types of adjectives.
        `;
        console.log(id);
        var sidebar = document.getElementById("sidebar");
        sidebar.innerHTML = `
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

        break;

    case "3":
        console.log(id);
        var notes = document.getElementById("notes");
        notes.innerHTML = `
            <h1>Prepositions</h1>
            <h1 id="subtopic1">Place</h1>
            1. Definition
        
        Prepositions of place are words that describe the location of someone or something in relation to another object.
        
        
        2. Common Prepositions of Place
        
        At:

        Refers to a specific point or location.
        Examples:
        At the door
        At the bus stop
        At the top of the hill
        Example Sentence: She is waiting at the gate.
        In:

        Refers to an enclosed space or within boundaries.
        Examples:
        In the room
        In the bag
        In the city
        Example Sentence: The keys are in the drawer.
        On:

        Refers to a surface or a position atop something.
        Examples:
        On the table
        On the wall
        On the floor
        Example Sentence: The books are on the shelf.
        
        
        3. Other Prepositions of Place
        
        Under:

        Below something.
        Example: The shoes are under the bed.
        Over:

        Directly above something, not necessarily touching.
        Example: There's a fan over the dining table.
        Next to/Beside:

        Close to or by the side of something.
        Example: The bank is next to the post office.
        Between:

        In the middle of two objects.
        Example: The park is between the school and the library.
        Behind:

        At the back of something.
        Example: The car is behind the house.
        In front of:

        Opposite or ahead of something.
        Example: He stood in front of the mirror.
        Inside:

        Within the interior of something.
        Example: The letters are inside the box.
        Outside:

        Opposite of inside; beyond a boundary.
        Example: She's waiting outside the office.
        Above:

        Higher than something, without direct contact.
        Example: The painting hangs above the fireplace.
        Below:

        Lower than something, without direct contact.
        Example: The temperature is below freezing today.
        
        
        4. Importance of Prepositions of Place
        
        Specify the exact location or position of objects.
        Provide clarity in descriptions.
        
        
        5. Common Mistakes
        
        Confusing "in" and "on."
        Correct: The pen is in the drawer.
        Incorrect: The pen is on the drawer.
        Misusing "at" for enclosed spaces.
        Correct: She is in the room.
        Incorrect: She is at the room.
        
        
        6. Tips for Mastery
        
        Visualize the spatial relationship to choose the correct preposition.
        Practice with real-life objects and scenarios.
        Write sentences to apply prepositions accurately.
            <h1 id="subtopic2">Time</h1>
            1. Definition
        
        Prepositions of time are words used to show the relationship between a time reference and an action or event.
        
        
        2. Common Prepositions of Time
        
        At:

        Used for specific points in time.
        Examples:
        At 5 PM
        At noon
        At midnight
        At the weekend (British English).
        Example Sentence: The train arrives at 6 o'clock.
        On:

        Used for specific days and dates.
        Examples:
        On Monday
        On Christmas Day
        On July 4th
        Example Sentence: We met on her birthday.
        In:

        Used for longer periods such as months, years, centuries, or parts of the day.
        Examples:
        In October
        In 1990
        In the 21st century
        In the morning/afternoon/evening
        Example Sentence: She was born in December.
        
        
        3. Other Prepositions of Time
        
        By:

        Indicates a deadline or the latest time something will happen.
        Example: You must finish the project by Monday.
        For:

        Refers to a duration of time.
        Example: We stayed in Paris for a week.
        Since:

        Refers to a specific point in the past until now.
        Example: I have lived here since 2010.
        Ago:

        Refers to a specific time in the past from the present.
        Example: He left two hours ago.
        Until/Till:

        Refers to a time up to a point.
        Example: We waited until midnight.
        Within:

        Refers to a time frame.
        Example: You must complete the task within two days.
        
        
        4. Importance of Prepositions of Time
        
        Help specify when an event happens.
        Clarify and organize time-related information.
        
        
        5. Common Mistakes
        
        Confusing "in," "on," and "at."
        Correct: He was born in 1995.
        Incorrect: He was born on 1995.
        Using "since" instead of "for" with durations.
        Correct: I've lived here for five years.
        Incorrect: I've lived here since five years.
        
        
        6. Tips for Mastery
        
        Memorize common uses with examples.
        Practice filling in blanks with appropriate prepositions.
        Write sentences to apply what you've learned.
            <h1 id="subtopic3">Movement</h1>
            1. Definition
        
        Prepositions of movement indicate the direction or motion from one place to another.
        
        
        2. Common Prepositions of Movement
        
        To:

        Indicates movement toward a specific destination.
        Examples:
        He went to the park.
        She traveled to Paris.
        Into:

        Indicates movement from the outside to the inside of something.
        Examples:
        The cat jumped into the box.
        He went into the room.
        Onto:

        Indicates movement toward a surface.
        Examples:
        The child climbed onto the table.
        She stepped onto the stage.
        Onto vs. On:

        Onto implies motion; on indicates position.
        Examples:
        Motion: He jumped onto the roof.
        Position: The book is on the table.
        Out of:

        Indicates movement from inside to outside.
        Examples:
        She ran out of the house.
        The bird flew out of the cage.
        Toward:

        Indicates movement in the direction of something.
        Examples:
        She walked toward the beach.
        The car moved toward the city.
        Across:

        Indicates movement from one side to the other.
        Examples:
        They swam across the river.
        He walked across the street.
        Through:

        Indicates movement within a space and exiting on the other side.
        Examples:
        The train passed through the tunnel.
        He walked through the forest.
        Over:

        Indicates movement above something, often crossing it.
        Examples:
        The plane flew over the mountains.
        She jumped over the fence.
        Along:

        Indicates movement following a line, path, or course.
        Examples:
        They walked along the river.
        He ran along the road.
        Up and Down:

        Up: Movement toward a higher position.
        Example: He climbed up the hill.
        Down: Movement toward a lower position.
        Example: She rolled down the slope.
        Past:

        Indicates movement beyond or by something.
        Example: He ran past the store.
        
        
        3. Importance of Prepositions of Movement
        
        Describe direction and help convey dynamic action.
        Provide clarity in instructions and storytelling.
        
        
        4. Common Mistakes
        
        Confusing "to" with "into."
        Correct: He walked into the room.
        Incorrect: He walked to the room.
        Using "on" instead of "onto" for movement.
        Correct: She jumped onto the bed.
        Incorrect: She jumped on the bed.
        

        5. Tips for Mastery
        
        Visualize the movement and relationship between objects.
        Practice writing and speaking sentences using different prepositions.
        Observe how these prepositions are used in stories and conversations.
        `;
        console.log(id);
        
        var sidebar = document.getElementById("sidebar");
        sidebar.innerHTML = `
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

