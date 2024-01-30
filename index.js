// built in module in node.js that allows for interacting with the file system including reading and writing files, creating directories etc
const fs = require('fs');
// allows for prompting the user for input in a synchronous manner in a command line environment
const prompt = require('prompt-sync')();

// Function to prompt the user for input
function getUserInput(promptText) {
    return prompt(promptText);
}

// Function to generate SVG file
function generateSVG(text, textColor, shape, shapeColor) {
    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="${shapeColor}" />
            <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
        </svg>
    `;

    fs.writeFileSync('logo.svg', svgContent);
}

// Main function
function generateLogo() {
    // Prompt for text input
    const text = getUserInput('Enter up to three characters for the text: ');

    // Prompt for text color input
    const textColor = getUserInput('Enter the text color (color keyword or hexadecimal number): ');

    // Prompt for shape selection
    const shapes = ['circle', 'triangle', 'square'];
    const shape = getUserInput(`Choose a shape (${shapes.join(', ')}): `);

    // Prompt for shape color input
    const shapeColor = getUserInput('Enter the shape color (color keyword or hexadecimal number): ');

    // Generate SVG file
    generateSVG(text, textColor, shape, shapeColor);

    // Output confirmation
    console.log('Generated logo.svg');
}

// Run the application
generateLogo();
