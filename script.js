const video = document.querySelector('video');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const sliders = document.querySelectorAll('.player__slider');
const progressFilled = document.querySelector('.progress__filled');

// Toggle play/pause
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

// Update button icon
function updateButton() {
  const icon = video.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

// Skip forward/backward
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Handle range updates (volume, speed)
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// Update progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
sliders.forEach(slider => slider.addEventListener('input', handleRangeUpdate));
