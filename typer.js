
function initializeType() {
    // Ensure the canvas element is available
    const opener = document.getElementById('opener');
    if (!opener) {
        console.error('Opener not found');
        return;
    }
    else{
        if (window.typed) {
            window.typed.destroy();
            window.typed.destroy();
        }
        var typed = new Typed(".auto-type", {
            strings: ["Coder", "Builder", "Athelete", "Robotics Enthusiast", "Student"],
            typeSpeed: 200,
            backSpeed: 200,
            loop: true
        })
    }

}


function setup() {
    // Add event listener to detect when the DOM content is fully loaded
    document.addEventListener('DOMContentLoaded', () => {
        // Select the canvas element with the ID 'bg'
        const targetOpener = document.querySelector('#opener');
        
        // Check if the canvas element exists
        if (targetOpener) {
            // If it exists, initialize the animation
            initializeType();
        }
    });

    // Create a MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver((mutations) => {
        // Iterate through all observed mutations
        mutations.forEach((mutation) => {
            // Check if the mutation involves changes in child elements
            if (mutation.type === 'childList') {
                // If so, reinitialize the animation
                initializeType();
            }
        });
    });

    // Select the element with the ID 'opener'
    const targetNode = document.getElementById('opener');
    
    // Check if the target node exists
    if (targetNode) {
        // If it exists, start observing it for changes in its child elements
        observer.observe(targetNode, { childList: true });
    }
}
setup()