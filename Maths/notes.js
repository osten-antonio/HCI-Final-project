var urlParams = new URLSearchParams(window.location.search); 
var id = urlParams.get('id');
console.log(id);


switch(id) {
    case "1":
        console.log(id);
        var notes = document.getElementById("notes");
        notes.innerHTML = `
            <h1>Operations</h1>

            <h2 id="subtopic-1">Addition and Subtraction</h2>
            
            <h3>1. Definition</h3>
            <p><strong>Addition:</strong> Combining two or more numbers to find the total (sum). <br>Symbol: + (plus)</p>
            <p><strong>Subtraction:</strong> Finding the difference between two numbers by removing one from the other. <br>Symbol: - (minus)</p>
            
            <h3>2. Key Terms</h3>
            <h4>Addition</h4>
            <p><strong>Addends:</strong> Numbers being added. <br><strong>Sum:</strong> The result of addition.</p>
            <p>Example: 5 + 3 = 8 (5 and 3 are addends; 8 is the sum).</p>
            <h4>Subtraction</h4>
            <p><strong>Minuend:</strong> The number from which another number is subtracted. <br><strong>Subtrahend:</strong> The number being subtracted. <br><strong>Difference:</strong> The result of subtraction.</p>
            <p>Example: 9 - 4 = 5 (9 is the minuend; 4 is the subtrahend; 5 is the difference).</p>
            
            <h3>3. Properties of Addition</h3>
            <p><strong>Commutative Property:</strong> Changing the order of addends does not affect the sum.<br>Example: 4 + 5 = 5 + 4.</p>
            <p><strong>Associative Property:</strong> Changing the grouping of addends does not affect the sum.<br>Example: (2 + 3) + 4 = 2 + (3 + 4).</p>
            <p><strong>Identity Property:</strong> Adding zero to a number does not change the number.<br>Example: 6 + 0 = 6.</p>
            
            <h3>4. Rules for Subtraction</h3>
            <ul>
                <li>Subtraction is not commutative: 5 - 3 ≠ 3 - 5.</li>
                <li>Subtraction is not associative: (8 - 5) - 2 ≠ 8 - (5 - 2).</li>
                <li>When subtracting zero, the number remains the same: 7 - 0 = 7.</li>
                <li>Subtracting a number from itself results in zero: 9 - 9 = 0.</li>
            </ul>
            
            <h3>5. Steps for Performing Addition and Subtraction</h3>
            <ul>
                <li>Align numbers by place value (ones, tens, hundreds).</li>
                <li>Start with the rightmost digit (ones place) and move left.</li>
                <li>For addition: Carry over if the sum exceeds 9.<br>Example: 27 + 45 → Add ones (7+5=12, write 2, carry 1).</li>
                <li>For subtraction: Borrow if the top digit is smaller than the bottom digit.<br>Example: 42 - 19 → Borrow 1 from tens, making it 12 - 9 in ones.</li>
            </ul>
            
            <h3>6. Tips for Quick Mental Math</h3>
            <h4>Addition</h4>
            <p>Break numbers into smaller parts.<br>Example: 48 + 36 → (48 + 30) + 6 = 84.</p>
            <h4>Subtraction</h4>
            <p>Use rounding to simplify.<br>Example: 73 - 27 → (73 - 30) + 3 = 46.</p>
            
            <h3>7. Importance in Daily Life</h3>
            <p>Used for budgeting, shopping, time management, and measurements.</p>
            
            <h2 id="subtopic-2">Multiplication</h2>
            
            <h3>1. Definition</h3>
            <p>Multiplication is a mathematical operation used to find the total of one number added repeatedly.<br>Symbol: × (times) or *</p>
            
            <h3>2. Key Terms</h3>
            <p><strong>Multiplicand:</strong> The number being multiplied.<br><strong>Multiplier:</strong> The number by which another number is multiplied.<br><strong>Product:</strong> The result of multiplication.</p>
            <p>Example: In 6 × 3 = 18, 6 is the multiplicand, 3 is the multiplier, and 18 is the product.</p>
            
            <h3>3. Properties of Multiplication</h3>
            <ul>
                <li><strong>Commutative Property:</strong> 4 × 5 = 5 × 4.</li>
                <li><strong>Associative Property:</strong> (2 × 3) × 4 = 2 × (3 × 4).</li>
                <li><strong>Distributive Property:</strong> 2 × (3 + 4) = (2 × 3) + (2 × 4).</li>
                <li><strong>Identity Property:</strong> 7 × 1 = 7.</li>
                <li><strong>Zero Property:</strong> 5 × 0 = 0.</li>
            </ul>
            
            <h3>4. Steps for Multiplying Numbers</h3>
            <ul>
                <li>For small numbers: Simply multiply directly.<br>Example: 3 × 4 = 12.</li>
                <li>For larger numbers: Multiply each digit of the second number by each digit of the first.</li>
            </ul>
            
            <h3>5. Tips for Quick Mental Multiplication</h3>
            <ul>
                <li>Multiplying by 10: Add a zero to the number.</li>
                <li>Multiplying by 5: Multiply by 10, then divide by 2.</li>
                <li>Multiplying by 9: Multiply by 10, then subtract the number.</li>
            </ul>
            
            <h2 id="subtopic-3">Division</h2>
            
            <h3>1. Definition</h3>
            <p>Division is the process of splitting a number (dividend) into equal parts or groups.<br>Symbol: ÷ or /</p>
            
            <h3>2. Key Terms</h3>
            <p><strong>Dividend:</strong> The number being divided.<br><strong>Divisor:</strong> The number by which the dividend is divided.<br><strong>Quotient:</strong> The result of the division.</p>
            <p>Example: 20 ÷ 4 = 5 (dividend: 20, divisor: 4, quotient: 5).</p>
        `;

        var sidebar = document.getElementById("sidebar");
        sidebar.innerHTML = `
                    <a href="selector.html">
              <button id="returnbutton" class="raise"><i class="fa fa-solid fa-reply"></i>Return</button>
            </a>
            <a href="?id=1">
                <p class="bigfont selectedtopic" id="topic1">Operations</p>
            </a>
            <a href="#subtopic-1">
                <p class="selectedsubtopic" id="subtopic1">Addition and Subtraction</p>
            </a>
            <a href="#subtopic-2">
                <p id="subtopic2">Multiplication</p>
            </a>
            <a href="#subtopic-3">
                <p id="subtopic3">Division</p>
            </a>
            <a href="?id=2">
                <p class="bigfont" id="topic2">Geometry</p>
            </a>
            <a href="?id=3">
                <p class="bigfont" id="topic3">Fractions</p>
            </a>
        `;

        break;

    case "2":
        console.log(id);
        var notes = document.getElementById("notes");
        notes.innerHTML = `
        <h1>Geometry</h1>

        <h2 id="subtopic-1">Area</h2>

        <h3>1. Definition</h3>
        <p>Area is the amount of space inside a 2D shape or figure. It is measured in square units, such as square meters (m&sup2;), square centimeters (cm&sup2;), etc.</p>

        <h3>2. Formulae for Area of Common Shapes</h3>
        <ul>
            <li><strong>Rectangle:</strong> 
                <p>Formula: Area = Length &times; Width</p>
                <p>Example: If a rectangle has a length of 5 cm and a width of 3 cm, its area is 5 &times; 3 = 15 cm&sup2;.</p>
            </li>
            <li><strong>Square:</strong> 
                <p>Formula: Area = Side &times; Side (or Side&sup2;)</p>
                <p>Example: If a square has a side length of 4 cm, its area is 4 &times; 4 = 16 cm&sup2;.</p>
            </li>
            <li><strong>Triangle:</strong> 
                <p>Formula: Area = &frac12; &times; Base &times; Height</p>
                <p>Example: If a triangle has a base of 6 cm and a height of 4 cm, its area is &frac12; &times; 6 &times; 4 = 12 cm&sup2;.</p>
            </li>
            <li><strong>Circle:</strong> 
                <p>Formula: Area = &pi; &times; Radius&sup2; (&pi; &asymp; 3.14)</p>
                <p>Example: If a circle has a radius of 3 cm, its area is 3.14 &times; 3&sup2; = 3.14 &times; 9 = 28.26 cm&sup2;.</p>
            </li>
            <li><strong>Parallelogram:</strong> 
                <p>Formula: Area = Base &times; Height</p>
                <p>Example: If a parallelogram has a base of 8 cm and a height of 5 cm, its area is 8 &times; 5 = 40 cm&sup2;.</p>
            </li>
            <li><strong>Trapezoid (Trapezium):</strong> 
                <p>Formula: Area = &frac12; &times; (Base1 + Base2) &times; Height</p>
                <p>Example: If a trapezoid has base1 = 7 cm, base2 = 5 cm, and height = 4 cm, its area is &frac12; &times; (7 + 5) &times; 4 = &frac12; &times; 12 &times; 4 = 24 cm&sup2;.</p>
            </li>
        </ul>

        <h3>3. Units of Area</h3>
        <ul>
            <li>Square centimeters (cm&sup2;): Used for smaller objects.</li>
            <li>Square meters (m&sup2;): Used for larger areas like rooms or land.</li>
            <li>Square kilometers (km&sup2;): Used for very large areas like cities or countries.</li>
            <li>Square inches (in&sup2;): Often used for smaller objects or dimensions in the US.</li>
        </ul>

        <h3>4. Applications of Area</h3>
        <ul>
            <li>Land and Property Measurement</li>
            <li>Design and Construction</li>
            <li>Agriculture</li>
            <li>Interior Design</li>
        </ul>

        <h3>5. Important Concepts to Remember</h3>
        <ul>
            <li><strong>Area of Irregular Shapes:</strong> Divide the shape into regular shapes, calculate their areas, and sum them up.</li>
            <li><strong>Conversion of Units:</strong> Convert units when necessary (e.g., 1 m&sup2; = 10,000 cm&sup2;).</li>
            <li><strong>Area of Composite Shapes:</strong> Calculate each shape's area individually and sum them up.</li>
        </ul>

        <h2 id="subtopic-2">Perimeter</h2>

        <h3>1. Definition</h3>
        <p>Perimeter is the total length around the boundary of a 2D shape. It is measured in linear units like meters (m), centimeters (cm), or inches (in).</p>

        <h3>2. Formulae for Perimeter of Common Shapes</h3>
        <ul>
            <li><strong>Rectangle:</strong> Perimeter = 2 &times; (Length + Width)</li>
            <li><strong>Square:</strong> Perimeter = 4 &times; Side</li>
            <li><strong>Triangle:</strong> Perimeter = Side1 + Side2 + Side3</li>
            <li><strong>Circle (Circumference):</strong> Circumference = 2 &times; &pi; &times; Radius</li>
        </ul>

        <h2 id="subtopic-3">Angles</h2>

        <h3>1. Definition</h3>
        <p>An angle is formed when two rays meet at a common endpoint called the vertex. The rotation between the two rays is measured in degrees (&deg;).</p>

        <h3>2. Types of Angles</h3>
        <ul>
            <li>Acute Angle: Less than 90&deg;</li>
            <li>Right Angle: Exactly 90&deg;</li>
            <li>Obtuse Angle: Greater than 90&deg; but less than 180&deg;</li>
            <li>Straight Angle: Exactly 180&deg;</li>
            <li>Reflex Angle: Greater than 180&deg; but less than 360&deg;</li>
            <li>Full Angle: Exactly 360&deg;</li>
        </ul>

        <h3>3. Key Terms</h3>
        <ul>
            <li>Vertex: The point where two rays meet to form an angle.</li>
            <li>Arms: The rays that form the angle.</li>
            <li>Degree (&deg;): The unit used to measure angles.</li>
        </ul>

        <h3>4. Applications of Angles</h3>
        <ul>
            <li>Construction and Design</li>
            <li>Art and Architecture</li>
            <li>Navigation and Direction</li>
            <li>Sports Strategy</li>
        </ul>

        `;
        console.log(id);
        var sidebar = document.getElementById("sidebar");
        sidebar.innerHTML = `
            <a href="selector.html">
              <button id="returnbutton" class="raise"><i class="fa fa-solid fa-reply"></i>Return</button>
            </a>
            <a href="?id=1">
                <p class="bigfont" id="topic1">Operations</p>
            </a>
            <a href="?id=2">
                <p class="bigfont selectedtopic" id="topic2">Geometry</p>
            </a>
            <a href="#subtopic-1">
                <p class="selectedsubtopic" id="subtopic1">Area</p>
            </a>
            <a href="#subtopic-2">
                <p id="subtopic2">Perimeter</p>
            </a>
            <a href="#subtopic-3">
                <p id="subtopic3">Angles</p>
            </a>
            <a href="?id=3">
                <p class="bigfont" id="topic3">Fractions</p>
            </a>

        `;
        break;

    case "3":
        console.log(id);
        var notes = document.getElementById("notes");
        notes.innerHTML = `
        <h1>Fractions</h1>

        <h2 id="subtopic-1">Equivalent Fractions</h2>

        <h3>1. Definition</h3>
        <p>Equivalent fractions are fractions that represent the same value or proportion, even though they may look different.</p>
        <p><strong>Example:</strong> ½ and 2/4 are equivalent because they represent the same amount (one-half).</p>

        <h3>2. How to Find Equivalent Fractions</h3>
        <p>To create equivalent fractions, multiply or divide both the numerator (top number) and denominator (bottom number) of a fraction by the same non-zero number.</p>

        <h3>3. Key Concept: Simplification (Reducing Fractions)</h3>
        <p>Simplification (or reducing a fraction) is the process of finding the equivalent fraction with the smallest possible numbers for the numerator and denominator.</p>
        <p><strong>Steps for Simplifying:</strong></p>
        <ul>
            <li>Find the greatest common divisor (GCD) of the numerator and denominator.</li>
            <li>Divide both the numerator and denominator by the GCD.</li>
        </ul>

        <h3>4. How to Check if Two Fractions Are Equivalent</h3>
        <p>To check if two fractions are equivalent, use cross multiplication.</p>
        <p><strong>Example:</strong> Check if 3/4 and 9/12 are equivalent.</p>
        <p>Cross-multiply: 3 &times; 12 = 36 and 4 &times; 9 = 36. Since 36 = 36, 3/4 and 9/12 are equivalent fractions.</p>

        <h3>5. Visualizing Equivalent Fractions</h3>
        <p>Equivalent fractions can be visualized using fraction bars, pie charts, or number lines. These models help show how different fractions represent the same portion of a whole.</p>

        <h3>6. Examples of Equivalent Fractions</h3>
        <p>1/2 = 2/4 = 4/8 = 6/12</p>
        <p>3/5 = 6/10 = 9/15</p>
        <p>5/6 = 10/12 = 15/18</p>
        <p>7/8 = 14/16 = 21/24</p>

        <h3>7. Applications of Equivalent Fractions</h3>
        <ul>
            <li>Simplifying fractions to make them easier to work with.</li>
            <li>Finding common denominators for addition and subtraction of fractions.</li>
            <li>Adjusting measurements in cooking (e.g., 1/2 cup = 2/4 cup).</li>
            <li>Dividing items into equal parts (e.g., sharing food or dividing a pizza).</li>
        </ul>

        <h3>8. Common Mistakes with Equivalent Fractions</h3>
        <ul>
            <li>Multiplying or dividing only the numerator or denominator instead of both.</li>
            <li>Failing to simplify the fraction fully.</li>
            <li>Confusing equivalent fractions with similar-looking but unequal fractions (e.g., 1/2 and 2/3).</li>
        </ul>

        <h3>9. Tips for Mastery</h3>
        <ul>
            <li>Practice simplifying fractions regularly.</li>
            <li>Use fraction bars or visual models for better understanding.</li>
            <li>Use the cross-multiplication method to check for equivalence.</li>
        </ul>

        <h2 id="subtopic-2">Comparing Fractions</h2>

        <h3>1. Definition</h3>
        <p>Comparing fractions means determining which fraction is larger, smaller, or if they are equal.</p>

        <h3>2. Methods for Comparing Fractions</h3>
        <ul>
            <li><strong>Common Denominator Method:</strong> Find a common denominator and compare numerators.</li>
            <li><strong>Cross-Multiplication Method:</strong> Cross-multiply the numerators and denominators to compare the results.</li>
            <li><strong>Converting to Decimal Method:</strong> Convert fractions to decimals to compare them.</li>
        </ul>

        <h3>3. Visual Method (Using Fraction Bars or Models)</h3>
        <p>Use a fraction bar or pie chart to visualize the sizes of fractions.</p>

        <h3>4. Key Points to Remember</h3>
        <ul>
            <li>When denominators are the same, compare numerators.</li>
            <li>When numerators are the same, compare denominators (smaller denominator = larger fraction).</li>
        </ul>

        <h3>5. Common Mistakes</h3>
        <ul>
            <li>Assuming larger denominators mean larger fractions.</li>
            <li>Not simplifying fractions before comparing them.</li>
        </ul>

        <h3>6. Practice Tips</h3>
        <ul>
            <li>Practice cross-multiplying fractions.</li>
            <li>Use a number line for visualization.</li>
        </ul>

        <h2 id="subtopic-3">Simplifying Fractions</h2>

        <h3>1. Definition</h3>
        <p>Simplifying fractions means reducing a fraction to its simplest form, where the numerator and denominator have no common factors other than 1.</p>

        <h3>2. Steps to Simplify Fractions</h3>
        <ul>
            <li>Find the greatest common divisor (GCD) of the numerator and denominator.</li>
            <li>Divide the numerator and denominator by the GCD.</li>
        </ul>

        <h3>3. Example of Simplifying a Fraction</h3>
        <p>Simplify 24/36:</p>
        <p>GCD of 24 and 36 is 12. Divide both by 12: 24 &divide; 12 = 2, 36 &divide; 12 = 3. Therefore, 24/36 simplifies to 2/3.</p>

        <h3>4. Tips for Simplifying Fractions</h3>
        <ul>
            <li>Check for common factors.</li>
            <li>Use prime factorization if necessary.</li>
        </ul>

        <h3>5. Why Simplify Fractions?</h3>
        <ul>
            <li>To make fractions easier to work with.</li>
            <li>To standardize fractions in problem-solving.</li>
        </ul>

        <h3>6. Practice Problems</h3>
        <p>Simplify 8/12, 50/100, and 36/60 using the GCD method.</p>

        <h3>7. Tips for Mastery</h3>
        <ul>
            <li>Practice dividing by the GCD.</li>
            <li>Use a calculator or GCD tool for large numbers.</li>
        </ul>
        `;
        console.log(id);
 
        var sidebar = document.getElementById("sidebar");
        sidebar.innerHTML = `
            <a href="selector.html">
              <button id="returnbutton" class="raise"><i class="fa fa-solid fa-reply"></i>Return</button>
            </a>
            <a href="?id=1">
                <p class="bigfont" id="topic1">Operations</p>
            </a>
            <a href="?id=2">
                <p class="bigfont" id="topic2">Geometry</p>
            </a>
            <a href="?id=3">
                <p class="bigfont selectedtopic" id="topic3">Fractions</p>
            </a>
            <a href="#subtopic-1">
                <p class="selectedsubtopic" id="subtopic1">Equivalent</p>
            </a>
            <a href="#subtopic-2">
                <p id="subtopic2">Comparing</p>
            </a>
            <a href="#subtopic-3">
                <p id="subtopic3">Simplifying</p>
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

