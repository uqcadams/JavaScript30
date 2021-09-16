window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the funtion from running if there is no associated keycode
  audio.currentTime = 0; // will restart the audio playback on event
  audio.play(); // play the audio clip
  key.classList.add("playing"); // adds the playing css animaton
});

const removeTransition = (e) => {
  if (e.propertyName !== "transform") return; // skip if it's not a transform property
  e.target.classList.remove("playing"); // remove the playing class at the end of the transition
};

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
