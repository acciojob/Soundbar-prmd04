//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
let currentSound = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const soundFile = button.getAttribute('data-sound');

    if (currentSound) {
      currentSound.pause();
    }

    currentSound = new Audio(soundFile);
    currentSound.play();
  });
});

stopButton.addEventListener('click', () => {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
  }
});
