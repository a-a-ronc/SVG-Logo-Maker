
# SVG Logo Maker
_________________________________

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered


## Overview

Run a command in the command line to generate a simple logo for projects without paying for a graphic designer.

## Features

- Prompt user for specifications regarding logo generation
- Creates logo with said parameters and saves a .svg file  titled 'logo.svg'.
- View saved files by opening in either a live serve,  or through your preferred web browser.
- Usage of jest, and inquirer package

## How to Use

1. **Install necessary packages**: Use `npm i` to verify the necessary packages are downloaded prior to running tests
2. **Install prompt-sync**: Run `npm install prompt-sync`  on your terminal. This will allow you to use the readlineSync module without having to press enter
3. **Run Program**: Type `node index.js` into your terminal and click enter
4. **Answer the Prompt**: Follow the instructions to create your desired logo
5. **Open the Produced File**:  Open the generated `logo.svg` file using a web browser

## Technologies Used

- Jest
- Inquirer
- JavaScript


## Setup

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.



## Contributions

Contributions are welcome! If you find any issues or want to enhance the application, submit a pull request.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
