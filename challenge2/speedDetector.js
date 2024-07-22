// Speed Checker Functions
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

      // Check if speed is within limit
    if (speed <= speedLimit) {
        return "Ok";
    }
    // Calculate demerit points
    const points =  Math.floor((speed - speedLimit) / kmPerPoint);

     // Check if license should be suspended
    if (points >= 12) return "License suspended";
    return `Points: ${points}`;
        
}
function checkAndDisplaySpeed() {
      // Get speed input
    const speed = parseFloat(document.getElementById('speed').value);
    const result = checkSpeed(speed);
    
      // Display result 
    document.getElementById('speed-result').innerHTML = `<h3>Speed Check Result:</h3><p>${result}</p>`;
    console.log("Speed Check Result:", result);
}

