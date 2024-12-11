var urlParams = new URLSearchParams(window.location.search); 
var id = urlParams.get('id');
console.log(id);


switch(id) {
    case "1":
        console.log(id);
        var notes = document.getElementById("notes");
        notes.innerHTML = `
            <h1>Operations</h1>
            <h1 id="subtopic-1">Addition and Subtraction</h1>
            1. Definition
        
        Addition: Combining two or more numbers to find the total (sum).
        Symbol: + (plus)
        Subtraction: Finding the difference between two numbers by removing one from the other.
        Symbol: - (minus)
        
        
        2. Key Terms
        
        Addition:

        Addends: Numbers being added.
        Sum: The result of addition.
        Example: 5 + 3 = 8 (5 and 3 are addends; 8 is the sum).
        Subtraction:

        Minuend: The number from which another number is subtracted.
        Subtrahend: The number being subtracted.
        Difference: The result of subtraction.
        Example: 9 - 4 = 5 (9 is the minuend; 4 is the subtrahend; 5 is the difference).
        
        
        3. Properties of Addition
        
        Commutative Property:

        Changing the order of addends does not affect the sum.
        Example: 4 + 5 = 5 + 4.
        Associative Property:

        Changing the grouping of addends does not affect the sum.
        Example: (2 + 3) + 4 = 2 + (3 + 4).
        Identity Property:

        Adding zero to a number does not change the number.
        Example: 6 + 0 = 6.
        
        
        4. Rules for Subtraction
        
        Subtraction is not commutative: 5 - 3 ≠ 3 - 5.
        Subtraction is not associative: (8 - 5) - 2 ≠ 8 - (5 - 2).
        When subtracting zero, the number remains the same: 7 - 0 = 7.
        Subtracting a number from itself results in zero: 9 - 9 = 0.
        
        
        5. Steps for Performing Addition and Subtraction
        
        Align numbers by place value (ones, tens, hundreds).
        Start with the rightmost digit (ones place) and move left.
        For addition: Carry over if the sum exceeds 9.
        Example: 27 + 45 → Add ones (7+5=12, write 2, carry 1).
        For subtraction: Borrow if the top digit is smaller than the bottom digit.
        Example: 42 - 19 → Borrow 1 from tens, making it 12 - 9 in ones.
        
        
        6. Tips for Quick Mental Math
        
        Addition:

        Break numbers into smaller parts.
        Example: 48 + 36 → (48 + 30) + 6 = 84.
        Subtraction:

        Use rounding to simplify.
        Example: 73 - 27 → (73 - 30) + 3 = 46.
        
        
        7. Importance in Daily Life
        Used for budgeting, shopping, time management, and measurements.
            <h1 id="subtopic-2">Multiplication</h1>
            1. Definition
        
        Multiplication is a mathematical operation used to find the total of one number added repeatedly.
        Symbol: × (times) or *
        It is essentially repeated addition.
        
        
        2. Key Terms
        
        Multiplicand: The number being multiplied.
        Multiplier: The number by which another number is multiplied.
        Product: The result of multiplication.
        Example: In 6 × 3 = 18, 6 is the multiplicand, 3 is the multiplier, and 18 is the product.
        

        3. Properties of Multiplication
        
        Commutative Property:

        The order of multiplication does not affect the product.
        Example: 4 × 5 = 5 × 4.
        Associative Property:

        The grouping of numbers does not affect the product.
        Example: (2 × 3) × 4 = 2 × (3 × 4).
        Distributive Property:

        Multiplication distributes over addition.
        Example: 2 × (3 + 4) = (2 × 3) + (2 × 4).
        Identity Property:

        Multiplying any number by 1 results in the same number.
        Example: 7 × 1 = 7.
        Zero Property:

        Multiplying any number by 0 results in 0.
        Example: 5 × 0 = 0.
        
        
        4. Steps for Multiplying Numbers
        
        For small numbers (single-digit):

        Simply multiply the numbers directly.
        Example: 3 × 4 = 12.
        For larger numbers (multi-digit):

        Multiply each digit of the second number by each digit of the first number, considering place value.

        Example:
        23 × 4:

        23 × 4 = 92.
        Step-by-Step:

        Multiply 4 × 3 (ones place) = 12 (write 2, carry 1).
        Multiply 4 × 2 (tens place) = 8, add carry 1 = 9.
        Result: 92.
        For numbers with multiple digits:

        Break the numbers down and use partial products, then add them together.
        
        
        5. Tips for Quick Mental Multiplication
        
        Multiplying by 10:

        Add a zero to the number.
        Example: 7 × 10 = 70.
        Multiplying by 5:

        Multiply by 10 and then divide by 2.
        Example: 6 × 5 → (6 × 10) ÷ 2 = 60 ÷ 2 = 30.
        Multiplying by 9:

        Multiply by 10 and subtract the number.
        Example: 7 × 9 → (7 × 10) - 7 = 70 - 7 = 63.
        Use of Multiplication Tables:

        Memorize multiplication tables to speed up calculations.
        
        
        6. Real-Life Applications of Multiplication
        
        Shopping: Calculating total price (unit price × quantity).
        Time: Finding the total time when something occurs repeatedly (e.g., 3 hours × 4 days).
        Area: Calculating the area of a rectangle (length × width).
        
        
        7. Common Mistakes in Multiplication
        
        Misplacing digits while carrying over or adding partial products.
        Forgetting the place value when multiplying large numbers.
        Confusing the order of operations when using distributive property.
        

        8. Tips for Mastery
        
        Practice multiplication tables regularly.
        Break down complex problems into simpler steps.
        Use estimation techniques to check if your result makes sense.
            <h1 id="subtopic-3">Division</h1>
            1. Definition
        
        Division is the process of splitting a number (dividend) into equal parts or groups. It is the inverse operation of multiplication.
        Symbol: ÷ or /
        Result: The result of division is called the quotient.
        
        
        2. Key Terms
        
        Dividend: The number being divided.
        Divisor: The number by which the dividend is divided.
        Quotient: The result of the division.
        Remainder: If the division is not exact, the leftover part is the remainder.
        Example: In 20 ÷ 4 = 5, 20 is the dividend, 4 is the divisor, and 5 is the quotient.
        In 22 ÷ 4 = 5 R2, 22 is the dividend, 4 is the divisor, 5 is the quotient, and 2 is the remainder.
        
        
        3. Types of Division
        
        Exact Division:

        When the dividend divides evenly by the divisor, and there is no remainder.
        Example: 12 ÷ 3 = 4.
        Division with Remainder:

        When the dividend does not divide evenly, and there is a remainder.
        Example: 22 ÷ 4 = 5 R2 (the remainder is 2).
        Long Division:

        A method for dividing larger numbers that involves multiple steps.
        Example:
        Divide the first part of the dividend by the divisor.
        Multiply the divisor by the quotient.
        Subtract the result from the dividend and bring down the next digit.
        Repeat until all digits are processed.
        
        
        4. Steps for Long Division
        
        Divide: Divide the first digit of the dividend by the divisor.
        Multiply: Multiply the divisor by the quotient obtained in the previous step.
        Subtract: Subtract the result of multiplication from the dividend.
        Bring down: Bring down the next digit from the dividend.
        Repeat: Continue dividing, multiplying, subtracting, and bringing down digits until the entire dividend is divided.
        Example:
        Divide 435 by 5 using long division:

        5 into 43 goes 8 times (8 × 5 = 40).
        Subtract 40 from 43 → remainder 3.
        Bring down 5 → making it 35.
        5 into 35 goes 7 times (7 × 5 = 35).
        Subtract 35 from 35 → remainder 0.
        Answer: 435 ÷ 5 = 87.
        
        
        5. Properties of Division
        
        Division by 1:

        Any number divided by 1 remains the same.
        Example: 7 ÷ 1 = 7.
        Division by 0:

        Division by zero is undefined (you cannot divide by zero).
        Example: 5 ÷ 0 is not possible.
        Division of 0:

        Zero divided by any number is always 0.
        Example: 0 ÷ 6 = 0.
        Commutative Property:

        Division is not commutative. Changing the order of the numbers affects the result.
        Example: 10 ÷ 2 ≠ 2 ÷ 10.
        
        
        6. Tips for Division
        
        Estimate: Estimate the quotient before performing the division to help check the result.
        Use multiplication facts: Use known multiplication facts to simplify division.
        Example: To divide 36 ÷ 6, recall that 6 × 6 = 36, so the quotient is 6.
        Break down large problems: Use mental math or simplify by breaking large divisions into smaller steps.
        
        
        7. Real-Life Applications of Division
        
        Sharing equally: Dividing items (e.g., sharing candies or money equally).
        Budgeting: Dividing a budget into categories.
        Time Management: Dividing time into equal parts (e.g., dividing hours into minutes).
        Measurement: Dividing quantities for recipes, etc.
        
        
        8. Common Mistakes in Division
        
        Forgetting to check for remainders in division problems.
        Misplacing digits or making errors during long division steps.
        Confusing the divisor and dividend.
        
        
        9. Tips for Mastery
        
        Practice long division regularly.
        Use division tables and mental division techniques.
        Check your answer by multiplying the quotient by the divisor.
        `;
        console.log(id);
        var notes = document.getElementById("notes");
        notes.innerHTML = `
            <h1>First topic</h1>
            <h1 id="subtopic-1">First</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae corporis vel accusamus quos labore, delectus at. Rerum at voluptatem quae voluptatum optio aspernatur fugit eaque ea. Quam, fugit ea.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque vel quod quae, voluptatem laborum nisi placeat dolorum tenetur nemo praesentium debitis nihil impedit distinctio dolores officiis ex beatae. Laudantium, et!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, quasi voluptate soluta neque iure temporibus quaerat sequi maiores consequuntur incidunt tempore cupiditate eos commodi necessitatibus repudiandae esse deserunt doloribus sapiente?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius dolorem unde molestias magni est fugiat rem omnis, quos numquam obcaecati laudantium recusandae quia. Itaque, explicabo debitis. Beatae, alias aliquid.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius dolorem unde molestias magni est fugiat rem omnis, quos numquam obcaecati laudantium recusandae quia. Itaque, explicabo debitis. Beatae, alias aliquid.
            <h1 id="subtopic-2">Second</h1>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae corporis vel accusamus quos labore, delectus at. Rerum at voluptatem quae voluptatum optio aspernatur fugit eaque ea. Quam, fugit ea.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque vel quod quae, voluptatem laborum nisi placeat dolorum tenetur nemo praesentium debitis nihil impedit distinctio dolores officiis ex beatae. Laudantium, et!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, quasi voluptate soluta neque iure temporibus quaerat sequi maiores consequuntur incidunt tempore cupiditate eos commodi necessitatibus repudiandae esse deserunt doloribus sapiente?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius dolorem unde molestias magni est fugiat rem omnis, quos numquam obcaecati laudantium recusandae quia. Itaque, explicabo debitis. Beatae, alias aliquid.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius dolorem unde molestias magni est fugiat rem omnis, quos numquam obcaecati laudantium recusandae quia. Itaque, explicabo debitis. Beatae, alias aliquid.
            <h1 id="subtopic-3">Third</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae corporis vel accusamus quos labore, delectus at. Rerum at voluptatem quae voluptatum optio aspernatur fugit eaque ea. Quam, fugit ea.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque vel quod quae, voluptatem laborum nisi placeat dolorum tenetur nemo praesentium debitis nihil impedit distinctio dolores officiis ex beatae. Laudantium, et!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, quasi voluptate soluta neque iure temporibus quaerat sequi maiores consequuntur incidunt tempore cupiditate eos commodi necessitatibus repudiandae esse deserunt doloribus sapiente?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius dolorem unde molestias magni est fugiat rem omnis, quos numquam obcaecati laudantium recusandae quia. Itaque, explicabo debitis. Beatae, alias aliquid.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius dolorem unde molestias magni est fugiat rem omnis, quos numquam obcaecati laudantium recusandae quia. Itaque, explicabo debitis. Beatae, alias aliquid.
        `;
        var sidebar = document.getElementById("sidebar");
        sidebar.innerHTML = `
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
            <a href="?id=1">
                <p class="bigfont selectedtopic" id="topic1">Topic 1</p>
            </a>
            <a href="#subtopic-1">
                <p class="selectedsubtopic" id="subtopic1">Subtopic 1</p>
            </a>
            <a href="#subtopic-2">
                <p id="subtopic2">Subtopic 2</p>
            </a>
            <a href="#subtopic-3">
                <p id="subtopic3">Subtopic 3</p>
            </a>
            <a href="?id=2">
                <p class="bigfont" id="topic2">Topic 2</p>
            </a>
            <a href="?id=3">
                <p class="bigfont" id="topic3">Topic 3</p>
            </a>
        `;
        break;

        break;

    case "2":
        console.log(id);
        var notes = document.getElementById("notes");
        notes.innerHTML = `
            <h1>Geometry</h1>
            <h1 id="subtopic1">Area</h1>
            1. Definition
        
        Area is the amount of space inside a 2D shape or figure. It is measured in square units, such as square meters (m²), square centimeters (cm²), etc.
        
        
        2. Formulae for Area of Common Shapes
        
        Rectangle:

        Formula: Area = Length × Width
        Example: If a rectangle has a length of 5 cm and a width of 3 cm, its area is 5 × 3 = 15 cm².
        Square:

        Formula: Area = Side × Side (or Side²)
        Example: If a square has a side length of 4 cm, its area is 4 × 4 = 16 cm².
        Triangle:

        Formula: Area = ½ × Base × Height
        Example: If a triangle has a base of 6 cm and a height of 4 cm, its area is ½ × 6 × 4 = 12 cm².
        Circle:

        Formula: Area = π × Radius² (π ≈ 3.14)
        Example: If a circle has a radius of 3 cm, its area is 3.14 × 3² = 3.14 × 9 = 28.26 cm².
        Parallelogram:

        Formula: Area = Base × Height
        Example: If a parallelogram has a base of 8 cm and a height of 5 cm, its area is 8 × 5 = 40 cm².
        Trapezoid (Trapezium):

        Formula: Area = ½ × (Base1 + Base2) × Height
        Example: If a trapezoid has base1 = 7 cm, base2 = 5 cm, and height = 4 cm, its area is ½ × (7 + 5) × 4 = ½ × 12 × 4 = 24 cm².
        
        
        3. Units of Area
        
        The area is expressed in square units. The unit of area depends on the units of the length and width or radius:
        Square centimeters (cm²): Used for smaller objects.
        Square meters (m²): Used for larger areas like rooms or land.
        Square kilometers (km²): Used for very large areas like cities or countries.
        Square inches (in²): Often used for smaller objects or dimensions in the US.
        
        
        4. Applications of Area
        
        Land and Property Measurement: Determining the area of land or property for sale or purchase.
        Design and Construction: Calculating the area for flooring, painting, or landscaping.
        Agriculture: Estimating the area of fields for planting or harvesting crops.
        Interior Design: Measuring floor area for furniture and décor placement.
        
        
        5. Important Concepts to Remember
        
        Area of Irregular Shapes:

        For irregular shapes, divide the shape into regular shapes (like squares, triangles, etc.), calculate their individual areas, and then sum them up.
        Conversion of Units:

        Be aware of converting units when necessary. For example:
        1 m² = 10,000 cm²
        1 km² = 1,000,000 m²
        Area of Composite Shapes:

        Composite shapes are shapes made up of two or more simpler shapes. Calculate the area of each individual shape and then add them together.
        Example: If a shape consists of a rectangle and a triangle, find the area of each and then sum the results.
        
        
        6. Common Mistakes in Area Calculation
        
        Mixing up formulas: Make sure to use the correct formula for each shape.
        Incorrect units: Always square the unit (e.g., cm², m²) and ensure consistency in units.
        Forgetting the height: In shapes like triangles or parallelograms, the height is key and should be perpendicular to the base.
        
        
        7. Tips for Mastery
        
        Practice with different shapes: Apply the formulas to various shapes to get comfortable with area calculations.
        Draw and label: When in doubt, draw the shape and label all known dimensions (length, width, height, radius, etc.).
        Use unit conversion: Ensure that all measurements are in the same unit before applying the formula.
            <h1 id="subtopic2">Perimeter</h1>
            1. Definition
        
        Perimeter is the total length around the boundary of a 2D shape or figure. It is the sum of the lengths of all sides.
        Unit: Perimeter is measured in linear units such as meters (m), centimeters (cm), inches (in), etc.
        
        
        2. Formulae for Perimeter of Common Shapes
        
        Rectangle:

        Formula: Perimeter = 2 × (Length + Width)
        Example: If a rectangle has a length of 8 cm and a width of 4 cm, its perimeter is 2 × (8 + 4) = 2 × 12 = 24 cm.
        Square:

        Formula: Perimeter = 4 × Side
        Example: If a square has a side length of 5 cm, its perimeter is 4 × 5 = 20 cm.
        Triangle:

        Formula: Perimeter = Side1 + Side2 + Side3
        Example: If a triangle has sides of 6 cm, 4 cm, and 3 cm, its perimeter is 6 + 4 + 3 = 13 cm.
        Circle (Circumference):

        Formula: Circumference = 2 × π × Radius (π ≈ 3.14)
        Example: If a circle has a radius of 7 cm, its perimeter (circumference) is 2 × 3.14 × 7 = 43.96 cm.
        Parallelogram:

        Formula: Perimeter = 2 × (Base + Side)
        Example: If a parallelogram has a base of 10 cm and a side of 6 cm, its perimeter is 2 × (10 + 6) = 2 × 16 = 32 cm.
        Rhombus:

        Formula: Perimeter = 4 × Side
        Example: If a rhombus has a side length of 7 cm, its perimeter is 4 × 7 = 28 cm.
        Regular Polygon (e.g., pentagon, hexagon):

        Formula: Perimeter = Number of Sides × Length of One Side
        Example: If a regular hexagon has a side length of 4 cm, its perimeter is 6 × 4 = 24 cm.
        
        
        3. Properties of Perimeter
        
        Sum of All Sides: The perimeter of any polygon is simply the sum of the lengths of all its sides.
        Consistent Units: Ensure that all side lengths are in the same unit before calculating the perimeter. If they are in different units, convert them to the same unit.
        For Circles: The perimeter is called circumference.
        
        
        4. Applications of Perimeter
        
        Fencing and Boundaries: Calculating how much fencing or material is needed to enclose a garden or a field.
        Architecture and Design: Finding the boundary length of a room, wall, or property.
        Gardening: Measuring the perimeter to plan for the border or path around a garden.
        Road Construction: Calculating the perimeter of land to be paved or developed.
        
        
        5. Common Mistakes in Perimeter Calculation
        
        Forgetting to add all sides: Always ensure you add the length of each side in the shape.
        Confusing Perimeter with Area: Perimeter is a linear measurement (length), while area measures the space inside a shape.
        Incorrect unit conversion: Always use the correct unit for the perimeter. If measurements are in different units, convert them to the same unit before summing.
        
        
        6. Tips for Mastery
        
        Practice with different shapes: Apply perimeter formulas to various shapes to get comfortable.
        Label and draw shapes: Label the sides of the shape to avoid confusion.
        Check for regularity: For regular polygons (e.g., squares, equilateral triangles), simply multiply the side length by the number of sides.
            <h1 id="subtopic3">Angles</h1>
            1. Definition
        
        Angle is formed when two rays (or lines) meet at a common endpoint called the vertex. The amount of rotation between the two rays is measured in degrees (°).
        
        
        2. Types of Angles
        
        Acute Angle:

        An angle that is less than 90°.
        Example: 30°.
        Right Angle:

        An angle that is exactly 90°.
        Example: A square or the corner of a book.
        Obtuse Angle:

        An angle that is greater than 90° but less than 180°.
        Example: 120°.
        Straight Angle:

        An angle that is exactly 180° (a straight line).
        Example: A straight line.
        Reflex Angle:

        An angle that is greater than 180° but less than 360°.
        Example: 270°.
        Full Angle:

        An angle that is exactly 360°.
        Example: A full rotation (a circle).
        
        
        3. Key Terms
        
        Vertex: The common endpoint where two rays meet to form an angle.
        Arms or Sides: The two rays that form an angle.
        Degree (°): The unit of measurement for angles.
        
        4. Angle Relationships
        
        Complementary Angles:

        Two angles that add up to 90°.
        Example: 30° and 60° are complementary angles.
        Supplementary Angles:

        Two angles that add up to 180°.
        Example: 120° and 60° are supplementary angles.
        Adjacent Angles:

        Two angles that share a common vertex and side.
        Example: Two angles that form a linear pair (e.g., 90° and 90°).
        Vertical Angles:

        Two angles that are opposite each other when two lines intersect. They are always equal.
        Example: If two lines intersect and form an angle of 40°, the opposite angle is also 40°.
        
        
        5. Angle Measurement
        
        Angles are measured using a protractor.
        Step-by-step:
        Place the center of the protractor on the vertex of the angle.
        Align one side of the angle with the zero line of the protractor.
        Read the measurement where the other side intersects the protractor scale.
        
        
        6. Angle Sum Property
        
        Triangle:

        The sum of all three angles in a triangle is always 180°.
        Example: If two angles in a triangle are 40° and 60°, the third angle must be 80° (since 40° + 60° + 80° = 180°).
        Quadrilateral:

        The sum of all four angles in a quadrilateral is always 360°.
        Example: A square has four right angles, each of 90°, and 90° + 90° + 90° + 90° = 360°.
        Polygon:

        The sum of interior angles of a polygon with n sides is:
     
        Sum of interior angles=(n−2)×180°
        For example, a pentagon (5 sides):
       
        (5−2)×180°=3×180°=540°
        
        
        7. Angle Bisector
        
        An angle bisector is a ray that divides an angle into two equal parts.
        Example: If an angle is 60°, its bisector divides it into two 30° angles.
        
        
        8. Angle in Parallel Lines
        
        When two parallel lines are cut by a transversal, several angles are formed. Important angle relationships include:
        Corresponding Angles: Angles that are in the same position relative to the transversal and are equal.
        Alternate Interior Angles: Angles on opposite sides of the transversal and inside the parallel lines that are equal.
        Alternate Exterior Angles: Angles on opposite sides of the transversal and outside the parallel lines that are equal.
        Consecutive Interior Angles: Angles on the same side of the transversal and inside the parallel lines, which add up to 180°.
        
        
        9. Applications of Angles
        
        Construction and Design: Angles are crucial for making accurate measurements in building and designing structures.
        Art and Architecture: Angles are used to create symmetry and aesthetically pleasing shapes.
        Navigation and Direction: Angles help determine direction and bearings in navigation, especially with compasses.
        Sports: In games like pool, angles play a crucial role in strategy and execution.
        
        
        10. Common Mistakes in Angle Calculation
        
        Misreading the protractor: Always ensure you start from the right point and correctly align the angle's rays.
        Forgetting the angle sum property: In polygons, check if the sum of angles adds up correctly (e.g., 180° for triangles).
        Confusing types of angles: Double-check the angle’s size to identify whether it’s acute, obtuse, etc.
        
        
        11. Tips for Mastery
        
        Practice with Protractors: Get familiar with using a protractor to measure angles accurately.
        Memorize Angle Relationships: Understand and apply complementary, supplementary, and vertical angle rules.
        Solve Real-Life Problems: Use angles in daily life, such as measuring corners, ensuring straight lines, or designing layouts.
        `;
        console.log(id);
        var notes = document.getElementById("notes");
        notes.innerHTML = `
            <h1>Second topic</h1>
            <h1 id="subtopic1">First</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae corporis vel accusamus quos labore, delectus at. Rerum at voluptatem quae voluptatum optio aspernatur fugit eaque ea. Quam, fugit ea.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque vel quod quae, voluptatem laborum nisi placeat dolorum tenetur nemo praesentium debitis nihil impedit distinctio dolores officiis ex beatae. Laudantium, et!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, quasi voluptate soluta neque iure temporibus quaerat sequi maiores consequuntur incidunt tempore cupiditate eos commodi necessitatibus repudiandae esse deserunt doloribus sapiente?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius dolorem unde molestias magni est fugiat rem omnis, quos numquam obcaecati laudantium recusandae quia. Itaque, explicabo debitis. Beatae, alias aliquid.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius dolorem unde molestias magni est fugiat rem omnis, quos numquam obcaecati laudantium recusandae quia. Itaque, explicabo debitis. Beatae, alias aliquid.
            <h1 id="subtopic2">Second</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae corporis vel accusamus quos labore, delectus at. Rerum at voluptatem quae voluptatum optio aspernatur fugit eaque ea. Quam, fugit ea.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque vel quod quae, voluptatem laborum nisi placeat dolorum tenetur nemo praesentium debitis nihil impedit distinctio dolores officiis ex beatae. Laudantium, et!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, quasi voluptate soluta neque iure temporibus quaerat sequi maiores consequuntur incidunt tempore cupiditate eos commodi necessitatibus repudiandae esse deserunt doloribus sapiente?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius dolorem unde molestias magni est fugiat rem omnis, quos numquam obcaecati laudantium recusandae quia. Itaque, explicabo debitis. Beatae, alias aliquid.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius dolorem unde molestias magni est fugiat rem omnis, quos numquam obcaecati laudantium recusandae quia. Itaque, explicabo debitis. Beatae, alias aliquid.
            <h1 id="subtopic3">Third</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae corporis vel accusamus quos labore, delectus at. Rerum at voluptatem quae voluptatum optio aspernatur fugit eaque ea. Quam, fugit ea.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque vel quod quae, voluptatem laborum nisi placeat dolorum tenetur nemo praesentium debitis nihil impedit distinctio dolores officiis ex beatae. Laudantium, et!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, quasi voluptate soluta neque iure temporibus quaerat sequi maiores consequuntur incidunt tempore cupiditate eos commodi necessitatibus repudiandae esse deserunt doloribus sapiente?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius dolorem unde molestias magni est fugiat rem omnis, quos numquam obcaecati laudantium recusandae quia. Itaque, explicabo debitis. Beatae, alias aliquid.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius dolorem unde molestias magni est fugiat rem omnis, quos numquam obcaecati laudantium recusandae quia. Itaque, explicabo debitis. Beatae, alias aliquid.
        `;
        var sidebar = document.getElementById("sidebar");
        sidebar.innerHTML = `
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
            <a href="?id=1">
                <p class="bigfont" id="topic1">Topic 1</p>
            </a>
            <a href="?id=2">
                <p class="bigfont selectedtopic" id="topic2">Topic 2</p>
            </a>
            <a href="#subtopic-1">
                <p class="selectedsubtopic" id="subtopic1">Subtopic 1</p>
            </a>
            <a href="#subtopic-2">
                <p id="subtopic2">Subtopic 2</p>
            </a>
            <a href="#subtopic-3">
                <p id="subtopic3">Subtopic 3</p>
            </a>
            <a href="?id=3">
                <p class="bigfont" id="topic3">Topic 3</p>
            </a>
        `;
        break;

        break;

    case "3":
        console.log(id);
        var notes = document.getElementById("notes");
        notes.innerHTML = `
            <h1>Fractions</h1>
            <h1 id="subtopic1">Equivalent</h1>
            1. Definition
        
        Equivalent fractions are fractions that represent the same value or proportion, even though they may look different.
        Example: ½ and 2/4 are equivalent because they represent the same amount (one-half).
        
        
        2. How to Find Equivalent Fractions
        
        Multiply or Divide the Numerator and Denominator by the Same Number:
        To create equivalent fractions, multiply or divide both the numerator (top number) and denominator (bottom number) of a fraction by the same non-zero number.

        
        3. Key Concept: Simplification (Reducing Fractions)
        
        Simplification (or reducing a fraction) is the process of finding the equivalent fraction with the smallest possible numbers for the numerator and denominator.
        Steps for Simplifying:
        Find the greatest common divisor (GCD) of the numerator and denominator.
        Divide both the numerator and denominator by the GCD.


        4. How to Check if Two Fractions Are Equivalent
        
        Cross Multiply:
        To check if two fractions are equivalent, multiply the numerator of the first fraction by the denominator of the second fraction, and vice versa. If the products are equal, the fractions are equivalent.
        Example:
        Check if 3/4 and 9/12 are equivalent.
        Cross-multiply:
        3 × 12 = 36 and 4 × 9 = 36
        Since 36 = 36, 3/4 and 9/12 are equivalent fractions.
        
        
        5. Visualizing Equivalent Fractions
        
        Using a Fraction Bar or Model:
        Equivalent fractions can be visualized using fraction bars, pie charts, or number lines. These models help show how different fractions represent the same portion of a whole.
        Example:
        A fraction bar for ½ will be the same length as a fraction bar for 2/4, showing they are equal.
        
        
        6. Examples of Equivalent Fractions
        
        ½ = 2/4 = 4/8 = 6/12
        3/5 = 6/10 = 9/15
        5/6 = 10/12 = 15/18
        7/8 = 14/16 = 21/24
        
        
        7. Applications of Equivalent Fractions
        
        Simplifying Fractions: Helps simplify complex fractions to make them easier to work with, especially in mathematical operations.
        Addition and Subtraction of Fractions: Equivalent fractions help find a common denominator when adding or subtracting fractions.
        Measurement and Cooking: In recipes, equivalent fractions help in adjusting measurements (e.g., 1/2 cup = 2/4 cup).
        Sharing and Division: Equivalent fractions are used in dividing items into equal parts (e.g., sharing food, dividing a pizza).
        
        
        8. Common Mistakes with Equivalent Fractions
        
        Incorrect Multiplication/Division: Sometimes people mistakenly multiply or divide only one part of the fraction (either the numerator or the denominator), leading to incorrect results.
        Forgetting to Simplify: Not simplifying fractions when possible can lead to more complicated calculations.
        Misunderstanding the concept: Confusing equivalent fractions with fractions that look similar but are not equivalent (e.g., 1/2 and 2/3).
        
        
        9. Tips for Mastery
        
        Practice simplifying: Regularly simplify fractions to get comfortable with the process.
        Visualize with fraction bars: Use fraction bars or drawings to understand the concept of equivalent fractions better.
        Use the cross-multiplication method: To check if fractions are equivalent, cross-multiply for quick verification.
        Work with different numbers: Try finding equivalent fractions for a variety of fractions to improve understanding.
            <h1 id="subtopic2">Comparing</h1>
           1. Definition
        
        Comparing fractions means determining which fraction is larger, smaller, or if they are equal. To compare fractions, you need to look at their numerators (top number) and denominators (bottom number) and use different methods to find out their relationship.
        
        
        2. Methods for Comparing Fractions
        
        Common Denominator Method:
        Step 1: Make the denominators of both fractions the same (find the Least Common Denominator (LCD)).
        Step 2: Adjust the numerators accordingly.
        Step 3: Compare the numerators.
        If the numerators are equal, the fractions are equal.
        If one numerator is greater, that fraction is larger.
        Example:
        Compare 2/3 and 5/6.

        The least common denominator of 3 and 6 is 6.
        Convert 2/3 to 4/6 (multiply both the numerator and denominator by 2).
        Now compare 4/6 and 5/6.
        Since 5 is greater than 4, 5/6 is larger than 2/3.
        
        Cross-Multiplication Method:
        Step 1: Multiply the numerator of the first fraction by the denominator of the second fraction.
        Step 2: Multiply the numerator of the second fraction by the denominator of the first fraction.
        Step 3: Compare the results.
        If the first product is larger, the first fraction is larger.
        If the second product is larger, the second fraction is larger.
        If the products are equal, the fractions are equal.
        Example:
        Compare 3/4 and 5/8 using cross-multiplication.

        Multiply 3 × 8 = 24.
        Multiply 4 × 5 = 20.
        Since 24 > 20, 3/4 is greater than 5/8.
        
        Converting to Decimal Method:
        Step 1: Convert each fraction to a decimal by dividing the numerator by the denominator.
        Step 2: Compare the decimals.
        The fraction with the larger decimal is greater.
        Example:
        Compare 3/5 and 2/3 by converting them to decimals.

        3/5 = 0.6
        2/3 ≈ 0.6667
        Since 0.6667 > 0.6, 2/3 is greater than 3/5.
        
        
        3. Visual Method (Using Fraction Bars or Models)
        
        Use a fraction bar or pie chart to represent fractions visually.
        The larger the portion of the bar or circle filled, the larger the fraction.
        This method is useful for understanding and comparing fractions in a concrete way, especially for students.
        
        
        4. Key Points to Remember
        
        Same Denominators: If two fractions have the same denominator, compare the numerators. The fraction with the larger numerator is the larger fraction.

        Example: 3/8 and 5/8. Since 5 > 3, 5/8 is greater.
        Same Numerators: If two fractions have the same numerator, compare the denominators. The fraction with the smaller denominator is the larger fraction.

        Example: 3/4 and 3/8. Since 4 < 8, 3/4 is greater.
        Fraction Size and Denominators: For fractions with different denominators, fractions with larger denominators (when the numerators are the same) are smaller. Similarly, for fractions with the same numerators, the one with the smaller denominator is larger.

        
        5. Common Mistakes
        
        Misinterpreting denominators: Larger denominators do not always mean larger fractions. Always check the numerator as well.
        Not simplifying: Always simplify fractions when possible before comparing them.
        Forgetting to find a common denominator: When the denominators are different, make sure to find a common denominator first.
        
        
        6. Practice Tips
        
        Practice cross-multiplying: This method helps you quickly compare fractions without having to deal with denominators directly.
        Use a number line: Place the fractions on a number line to visualize which fraction is larger.
        Convert to decimals: If you are comfortable with decimals, converting fractions to decimals can make comparison easier.
        
        
        7. Examples for Practice
        
        Compare 5/8 and 7/10.
        Using cross-multiplication: 5 × 10 = 50, 8 × 7 = 56 → 50 < 56, so 5/8 < 7/10.
        Compare 3/4 and 5/6.
        Common denominator: The LCD of 4 and 6 is 12.
        3/4 = 9/12, 5/6 = 10/12.
        Since 9 < 10, 3/4 < 5/6.
            <h1 id="subtopic3">Simplifying</h1>
            1. Definition
        
        Simplifying fractions (also known as reducing fractions) means converting a fraction to its simplest form, where the numerator (top number) and denominator (bottom number) have no common factors other than 1.
        
        
        2. Steps to Simplify Fractions
        
        Find the Greatest Common Divisor (GCD):

        The GCD is the largest number that divides both the numerator and the denominator evenly.
        Example: For 12/18, the GCD of 12 and 18 is 6.
        Divide Both the Numerator and Denominator by the GCD:

        Once you have the GCD, divide both the numerator and denominator by this number to simplify the fraction.
        Example:
        12 ÷ 6 = 2
        18 ÷ 6 = 3
        Therefore, 12/18 simplifies to 2/3.
        
        
        3. Example of Simplifying a Fraction
        
        Simplify 24/36.
        The GCD of 24 and 36 is 12.
        Divide both the numerator and denominator by 12:
        24 ÷ 12 = 2
        36 ÷ 12 = 3
        Therefore, 24/36 simplifies to 2/3.
        
        
        4. Simplifying Fractions with Prime Factorization
        
        Another method for simplifying fractions is using prime factorization.
        Step 1: Find the prime factors of the numerator and denominator.
        Step 2: Cancel out any common prime factors.
        Example:
        18/24 → Prime factorization of 18 = 2 × 3 × 3, and 24 = 2 × 2 × 2 × 3.
        Cancel the common factors of 2 and 3:
        18/24 simplifies to 3/4.
        
        
        5. Tips for Simplifying Fractions
        
        Check for common factors: Always check if both the numerator and denominator have common factors that can be divided out.
        Prime Factorization: If you have difficulty finding the GCD directly, try factoring both numbers into primes.
        Stop when you can’t divide anymore: Once the numerator and denominator have no common factors (other than 1), the fraction is fully simplified.
        
        
        6. Why Simplify Fractions?
        
        Easier to Work With: Simplified fractions are easier to understand and use in calculations.
        Standardization: Most mathematical problems require fractions to be in their simplest form to avoid confusion and ensure accuracy.
        Practical Applications: In real-life situations, such as cooking or measurements, simpler fractions are often easier to manage.
        
        
        7. Common Mistakes in Simplifying Fractions
        
        Not Dividing by the GCD: Sometimes, people simplify fractions by dividing by a number other than the GCD, which can lead to incorrect results.
        Forgetting to simplify: If a fraction has common factors and is not simplified, the problem-solving process becomes more complicated.
        Mistaking improper fractions: An improper fraction can be simplified, but sometimes people miss this step or don’t convert it to a mixed number.
        
        
        8. Practice Problems
        
        Simplify 8/12.

        GCD of 8 and 12 is 4.
        8 ÷ 4 = 2, 12 ÷ 4 = 3.
        Therefore, 8/12 simplifies to 2/3.
        Simplify 50/100.

        GCD of 50 and 100 is 50.
        50 ÷ 50 = 1, 100 ÷ 50 = 2.
        Therefore, 50/100 simplifies to 1/2.
        Simplify 36/60.

        GCD of 36 and 60 is 12.
        36 ÷ 12 = 3, 60 ÷ 12 = 5.
        Therefore, 36/60 simplifies to 3/5.
        
        
        9. Tips for Mastery
        
        Practice dividing by the GCD: The more you practice simplifying fractions, the more quickly you’ll identify the greatest common divisor.
        Use a calculator: If you're unsure about finding the GCD, use a calculator or online GCD tool to help speed up the process.
        Check your work: After simplifying, check to see if the numerator and denominator share any common factors other than 1.
        `;
        console.log(id);
        var notes = document.getElementById("notes");
        notes.innerHTML = `
            <h1>Thirdtopic</h1>
            <h1 id="subtopic1">First</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae corporis vel accusamus quos labore, delectus at. Rerum at voluptatem quae voluptatum optio aspernatur fugit eaque ea. Quam, fugit ea.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque vel quod quae, voluptatem laborum nisi placeat dolorum tenetur nemo praesentium debitis nihil impedit distinctio dolores officiis ex beatae. Laudantium, et!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, quasi voluptate soluta neque iure temporibus quaerat sequi maiores consequuntur incidunt tempore cupiditate eos commodi necessitatibus repudiandae esse deserunt doloribus sapiente?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius dolorem unde molestias magni est fugiat rem omnis, quos numquam obcaecati laudantium recusandae quia. Itaque, explicabo debitis. Beatae, alias aliquid.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius dolorem unde molestias magni est fugiat rem omnis, quos numquam obcaecati laudantium recusandae quia. Itaque, explicabo debitis. Beatae, alias aliquid.
            <h1 id="subtopic2">Second</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae corporis vel accusamus quos labore, delectus at. Rerum at voluptatem quae voluptatum optio aspernatur fugit eaque ea. Quam, fugit ea.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque vel quod quae, voluptatem laborum nisi placeat dolorum tenetur nemo praesentium debitis nihil impedit distinctio dolores officiis ex beatae. Laudantium, et!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, quasi voluptate soluta neque iure temporibus quaerat sequi maiores consequuntur incidunt tempore cupiditate eos commodi necessitatibus repudiandae esse deserunt doloribus sapiente?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius dolorem unde molestias magni est fugiat rem omnis, quos numquam obcaecati laudantium recusandae quia. Itaque, explicabo debitis. Beatae, alias aliquid.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius dolorem unde molestias magni est fugiat rem omnis, quos numquam obcaecati laudantium recusandae quia. Itaque, explicabo debitis. Beatae, alias aliquid.
            <h1 id="subtopic3">Third</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae corporis vel accusamus quos labore, delectus at. Rerum at voluptatem quae voluptatum optio aspernatur fugit eaque ea. Quam, fugit ea.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque vel quod quae, voluptatem laborum nisi placeat dolorum tenetur nemo praesentium debitis nihil impedit distinctio dolores officiis ex beatae. Laudantium, et!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, quasi voluptate soluta neque iure temporibus quaerat sequi maiores consequuntur incidunt tempore cupiditate eos commodi necessitatibus repudiandae esse deserunt doloribus sapiente?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius dolorem unde molestias magni est fugiat rem omnis, quos numquam obcaecati laudantium recusandae quia. Itaque, explicabo debitis. Beatae, alias aliquid.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius dolorem unde molestias magni est fugiat rem omnis, quos numquam obcaecati laudantium recusandae quia. Itaque, explicabo debitis. Beatae, alias aliquid.
        `;
        var sidebar = document.getElementById("sidebar");
        sidebar.innerHTML = `
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
            <a href="?id=1">
                <p class="bigfont" id="topic1">Topic 1</p>
            </a>
            <a href="?id=2">
                <p class="bigfont" id="topic2">Topic 2</p>
            </a>
            <a href="?id=3">
                <p class="bigfont selectedtopic" id="topic3">Topic 3</p>
            </a>
            <a href="#subtopic-1">
                <p class="selectedsubtopic" id="subtopic1">Subtopic 1</p>
            </a>
            <a href="#subtopic-2">
                <p id="subtopic2">Subtopic 2</p>
            </a>
            <a href="#subtopic-3">
                <p id="subtopic3">Subtopic 3</p>
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

