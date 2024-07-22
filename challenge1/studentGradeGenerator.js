function generateGrade() {
    const marks = prompt("Enter student marks (0-100):");
    const numericMarks = parseFloat(marks);

    if (isNaN(numericMarks) || numericMarks < 0 || numericMarks > 100) {
        return "Invalid input. Please enter a number between 0 and 100."
    }

    if (numericMarks >79) return "A";
    if (numericMarks >= 60) return "B";
    if (numericMarks >= 50) return "C";
    if (numericMarks >= 40) return "D";
    return "E";
}
console.log(generateGrade());
