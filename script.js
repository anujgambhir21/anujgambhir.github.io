// script.js

// Example of a simple animation on button click
document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement('button');
    button.innerText = "Learn More";
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        alert("You clicked the Learn More button!");
    });
});
