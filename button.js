
const button = document.getElementById('changeRealm');
const div = document.getElementById('opener');

const originalContent = div.innerHTML;

// Define the new content
const newContent = `
    <header id="anim">
        <canvas id="bg"></canvas>
    </header>
`;

// Track the current state (true for new content, false for original)
let isNewContent = false;

// Add an event listener to the button
button.addEventListener('click', function() {
    if (isNewContent) {
        // Revert to the original content
        div.innerHTML = originalContent;
    } else {
        // Change to the new content
        div.innerHTML = newContent;
    }
    // Toggle the state
    isNewContent = !isNewContent;
});
