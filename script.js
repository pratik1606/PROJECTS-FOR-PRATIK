// script.js

document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get input values
    let age = document.getElementById("age").value;
    let score1 = document.getElementById("score1").value;
    let score2 = document.getElementById("score2").value;
    let score3 = document.getElementById("score3").value;

    // Validation: Check if all fields are filled
    if (!age || !score1 || !score2 || !score3) {
        alert("Please fill all the fields.");
        return;
    }

    // Calculate the average score
    let totalScore = parseInt(score1) + parseInt(score2) + parseInt(score3);
    let percentage = (totalScore / 300) * 100;  // Assuming max score for each subject is 100

    // Simple prediction logic
    let predictedGrade = predictPerformance(percentage);

    // Update the UI with results
    document.getElementById("prediction").textContent = predictedGrade;
    document.getElementById("percentage").textContent = percentage.toFixed(2);
    document.getElementById("progressBar").style.width = `${percentage}%`;

    // Show the stars based on performance
    displayStars(percentage);

    // Reveal the result container
    document.getElementById("result").classList.remove("hidden");
});

// Simple prediction logic (replace with AI-powered model prediction)
function predictPerformance(percentage) {
    if (percentage >= 90) {
        return "A";
    } else if (percentage >= 80) {
        return "B";
    } else if (percentage >= 70) {
        return "C";
    } else if (percentage >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Display stars based on percentage
function displayStars(percentage) {
    let stars = "";
    if (percentage >= 90) {
        stars = "⭐⭐⭐⭐⭐"; // 5 stars
    } else if (percentage >= 80) {
        stars = "⭐⭐⭐⭐"; // 4 stars
    } else if (percentage >= 70) {
        stars = "⭐⭐⭐"; // 3 stars
    } else if (percentage >= 60) {
        stars = "⭐⭐"; // 2 stars
    } else {
        stars = "⭐"; // 1 star
    }
    document.getElementById("stars").textContent = stars;
}
