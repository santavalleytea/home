const terminal = document.querySelectorAll('.terminal p');
const speed = 50; // The speed of the typing animation in milliseconds

terminal.forEach((element) => {
  const text = element.innerText;
  element.innerText = '';
  let i = 0;
  const interval = setInterval(() => {
    element.innerText += text.charAt(i);
    i++;
    if (i > text.length) {
      clearInterval(interval);
    }
  }, speed);
});

window.addEventListener("load", function () {
    const loader = document.querySelector("#loading");
    loader.className += " hidden"; // Add the "hidden" class to hide the loading spinner
  });