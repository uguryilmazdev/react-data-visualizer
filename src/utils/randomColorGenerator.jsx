// This function generates random hex colors.
export default function randomColorGenerator() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  }