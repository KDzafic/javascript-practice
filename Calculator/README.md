# Calculator

This is a simple calculator application built with HTML, CSS, and JavaScript. The calculator supports basic arithmetic operations such as addition, subtraction, multiplication, and division.

![brave_rpWBc7IdNS](https://github.com/user-attachments/assets/d7cb2c47-6355-40b3-8832-1f9c59d8002f)

## Features

- **Basic Arithmetic Operations**: Supports addition, subtraction, multiplication, and division.
- **Responsive Design**: The calculator is styled to look good on various screen sizes.
- **Error Handling**: Displays "Error" when an invalid operation is performed.

## Issue

`overflow: hidden;`

**Purpose**: The overflow: hidden; property is used to clip any content that exceeds the bounds of the #calculator container. This prevents any overflow content (like text or buttons) from spilling out of the rounded corners or the container itself.

**Why It's Important**: Since the calculator has rounded corners (border-radius: 15px;), using overflow: hidden; ensures that the content inside the calculator stays neatly within these bounds. Without this property, content that extends beyond the edges of the container could overlap or be partially visible, which would affect the visual design.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd calculator
   ```
3. Open the `index.html` file in your preferred web browser:
   ```bash
   open index.html
   ```

## Usage

1. Open the calculator application in your browser.
2. Click the buttons on the calculator to input numbers and operations.
3. Click the `=` button to calculate the result.
4. Click the `C` button to clear the display.
