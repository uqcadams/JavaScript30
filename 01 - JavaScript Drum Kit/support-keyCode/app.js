// Keydown event listener on window
window.addEventListener("keydown", (e) => {
  // Displays keyCode in DOM
  document.querySelector(".keyCode").innerHTML = e.keyCode;
  // Displays letter pressed in DOM
  document.querySelector(".keyPressed").innerHTML = e.key;

  if (e.keyCode === 32) {
    document.querySelector(".keyPressed").innerHTML = "spacebar";
  }
});
