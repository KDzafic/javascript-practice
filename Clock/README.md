# Digital Clock

This project is a simple digital clock built with HTML, CSS, and JavaScript. The clock displays the current time in hours, minutes, and seconds, along with the day of the week.

## Features

- **Real-time Clock**: Displays the current time in the format `HH:MM:SS`.
- **Day of the Week Highlighting**: The current day of the week is highlighted.
- **Responsive Design**: The clock is centered and scales well on different screen sizes.

## Issue

The box-shadow property adds shadow effects around an element's frame. In this project, it is used to give the clock container a subtle inset shadow, creating a slight 3D effect. The shadow is defined in two parts:

    1. 0 1px 1px rgba(0,0,0,0.08) inset: This creates a subtle inset shadow inside the clock container, making it        look slightly recessed.
    2. 0 1px 1px black: This adds a faint outer shadow, giving the container a soft outline.

The `font-optical-sizing` CSS property is used to adjust the font's rendering based on the font's size. The value `auto` automatically adjusts the font's appearance for better readability and visual balance, especially at different sizes. This is particularly useful for high-contrast designs or when using specific font families like "Orbitron" in this project.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/digital-clock.git
   ```
2. Navigate to the project directory:
   ```bash
   cd digital-clock
   ```
3. Open the `index.html` file in your preferred web browser:
   ```bash
   open index.html
   ```

## Usage

1. Open the digital clock in your browser.
2. The time and day of the week will update in real-time.
