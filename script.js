const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
let currentAudioElement = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const soundFile = button.getAttribute('data-sound');

    if (currentAudioElement) {
      currentAudioElement.pause();
      currentAudioElement.remove();
    }

    const audio = document.createElement('audio');
    audio.src = soundFile;
    audio.controls = true;
    audio.autoplay = true;
    document.body.appendChild(audio);

    currentAudioElement = audio;
  });
});

stopButton.addEventListener('click', () => {
  if (currentAudioElement) {
    currentAudioElement.pause();
    currentAudioElement.currentTime = 0;
  }
});
