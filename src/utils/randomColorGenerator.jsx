export default function randomColorGenerator() {
    // Generate hex color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  }