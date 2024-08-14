const eyesOpenPaths = document.querySelectorAll(".leftEye, .rightEye");

const eyesClosedPaths = [
    "M233.5 159.5C240.5 165.25 257.5 182.5 261 185.5C285 206.071 256.5 183 293.5 213.5C278.5 200 257.5 179 233.5 159.5Z",
    "M325.5 216C335.5 204.5 357.5 183.5 380 159.5C363.5 178.5 344 201 325.5 216Z"
];

const eyesOpenPathsData = [
    "M233.5 159.5C233.833 161.833 234.6 168.1 235 174.5C237.667 193.833 253.1 228.7 293.5 213.5C288.333 199.167 269.1 168.3 233.5 159.5Z",
    "M325.5 216C329 202.167 344.8 171.5 380 159.5C380.833 182 371.1 224.8 325.5 216Z"
];

function animateEyes() {
    const timeline = anime.timeline({
        duration: 175,
        easing: "easeOutExpo",
        autoplay: false // We'll control when to start the animation manually
    });

    // Morph both eyes to the closed state
    timeline.add({
        targets: eyesOpenPaths,
        d: (el, i) => eyesClosedPaths[i]
    });

    // Morph both eyes back to the open state
    timeline.add({
        targets: eyesOpenPaths,
        d: (el, i) => eyesOpenPathsData[i]
    }, '+=25'); // This ensures the second animation starts 25ms after the first finishes

    timeline.play(); // Play the animation timeline
}

// Function to control the loop with a cooldown
function startLoop() {
    animateEyes(); // Start the animation
    setTimeout(startLoop, 1000); // Set a 10000ms cooldown before the next blink
}

// Start the animation loop with cooldown
startLoop();
