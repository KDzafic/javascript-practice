# Basic Image Slider

This project is a simple image slider implemented using HTML, CSS, and JavaScript. It allows users to view a series of images, either automatically cycling through them or manually navigating with "Previous" and "Next" buttons.

![Basic Image Slider](brave_aL0tkLCRj0.gif)

## Features

- **Automatic Slideshow:** The images automatically transition every 5 seconds.
- **Manual Navigation:** Users can manually cycle through images using the "Previous" and "Next" buttons.
- **Smooth Transitions:** Images fade in and out smoothly for a visually appealing experience.

## File Structure

- `index.html`: The main HTML file that structures the image slider.
- `style.css`: Contains the CSS styles for the slider, including layout and animations.
- `script.js`: Contains the JavaScript logic to handle the slideshow functionality.

## How It Works

### HTML Structure

The slider is built with a simple structure:

- A container `div` with the class `slider` houses all the images and navigation buttons.
- The images are placed inside a `div` with the class `slides`.
- Two buttons, `prev` and `next`, are positioned over the slider to allow manual navigation.

### CSS Styling

#### Key Elements

- **Slider Container (`.slider`):** Positioned relative to contain the images and buttons. It has an overflow set to hidden to keep the images within the slider area.
- **Images:** Each image is set to occupy 100% of the container's width and is initially hidden (`display: none;`).
- **Displayed Image (`.displaySlide`):** The image currently being displayed is set to `display: block;` and animates with a fade-in effect.

#### Keyframe Animation

```css
@keyframes fade {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
```

This keyframe animation defines a fade effect that gradually changes the opacity of an image from 0.5 (semi-transparent) to 1 (fully opaque).

- `animation: fade;` applies this fade effect.
- `animation-duration: 1.5s;` specifies that the fade effect should take 1.5 seconds to complete.

### JavaScript Functionality

- Initialization (init function): When the page loads, the first image is displayed, and the slideshow begins automatically with a 5-second interval.
- Image Display (showSlide function): Handles which image to display based on the current slideIndex. The previous image is hidden, and the new image fades in.
- Manual Navigation (prevSlide and nextSlide functions): These functions allow users to navigate through the images by updating the slideIndex and showing the corresponding image.
