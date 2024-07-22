//generate grade function
function generateGrade(marks) {
    const numericMarks = parseFloat(marks);

    // Validate input
    if (isNaN(numericMarks) || numericMarks < 0 || numericMarks > 100) {
        return "Invalid input. Please enter a number between 0 and 100.";
    }

    // Determine grade based on marks
    if (numericMarks > 79) return "A";
    if (numericMarks >= 60) return "B";
    if (numericMarks >= 50) return "C";
    if (numericMarks >= 40) return "D";
    return "E";
}

function generateAndDisplayGrade() {
    // Get marks input
    const marks = document.getElementById('marks').value;
    const grade = generateGrade(marks);
    
    // Display grade 
    document.getElementById('grade-result').innerHTML = `<h3>Grade Result:</h3><p>${grade}</p>`;
    console.log("Grade Result:", grade);
}