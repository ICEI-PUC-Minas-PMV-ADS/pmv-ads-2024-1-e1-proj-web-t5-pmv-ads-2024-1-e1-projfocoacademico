document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('pomodoro-container');

  const pomodoroDiv = document.createElement('div');
  pomodoroDiv.className = 'pomodoro';

  pomodoroDiv.addEventListener('click', handleClickPomodoro);

  window.addEventListener('click', handleOutsideClick);

  const title = document.createElement('h1');
  title.id = 'pomodoro-title';
  title.textContent = '🍅 Relógio Pomodoro';
  pomodoroDiv.appendChild(title);

  const timerDiv = document.createElement('div');
  timerDiv.className = 'timer';
  const minutesSpan = document.createElement('span');
  minutesSpan.id = 'minutes';
  const colonSpan = document.createElement('span');
  colonSpan.textContent = ':';
  const secondsSpan = document.createElement('span');
  secondsSpan.id = 'seconds';
  secondsSpan.textContent = '00';
  timerDiv.appendChild(minutesSpan);
  timerDiv.appendChild(colonSpan);
  timerDiv.appendChild(secondsSpan);
  pomodoroDiv.appendChild(timerDiv);

  const controlsDiv = document.createElement('div');
  controlsDiv.className = 'controls';

  const startButton = createButton('start', 'fa-play');
  const pauseButton = createButton('pause', 'fa-pause');
  const stopButton = createButton('stop', 'fa-stop');
  const snoozeButton = createButton('snooze', 'fa-moon');

  pauseButton.style.display = 'none';
  stopButton.style.display = 'none';
  snoozeButton.style.display = 'none';

  controlsDiv.appendChild(startButton);
  controlsDiv.appendChild(pauseButton);
  controlsDiv.appendChild(stopButton);
  controlsDiv.appendChild(snoozeButton);
  pomodoroDiv.appendChild(controlsDiv);

  container.appendChild(pomodoroDiv);

  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.style.display = 'none';
  document.body.appendChild(overlay);

  let timer;
  let isPaused = false;
  let currentMode = 'focus';
  let remainingTime;
  let endTime;

  const focusMinutes = getSetting('focusTime', 25);
  const breakMinutes = getSetting('breakTime', 5);

  minutesSpan.textContent = focusMinutes.toString().padStart(2, '0');

  startButton.addEventListener('click', startTimer);
  pauseButton.addEventListener('click', pauseTimer);
  stopButton.addEventListener('click', stopTimer);
  snoozeButton.addEventListener('click', snoozeTimer);

  function createButton(id, iconClass) {
    const button = document.createElement('button');
    button.id = id;
    const icon = document.createElement('i');
    icon.className = `fas ${iconClass}`;
    button.appendChild(icon);
    return button;
  }

  function startTimer(e) {
    title.textContent = currentMode === 'focus' ? '🤓 Foco nos estudos!' : '🏖️ Faça uma pausa';
    if (!isPaused) {
      remainingTime = (currentMode === 'focus' ? focusMinutes : breakMinutes) * 60 * 1000;
    } else {
      isPaused = false;
    }

    endTime = new Date().getTime() + remainingTime;

    clearInterval(timer);
    timer = setInterval(updateTimer, 300);

    if (currentMode === 'focus') {
      pauseButton.style.display = 'inline';
      stopButton.style.display = 'inline';
      startButton.style.display = 'none';
      snoozeButton.style.display = 'none';
    }

    if (currentMode === 'focus') {
      setTimeout(() => pomodoroDiv.classList.add('minimal'), 3000);
    }

    e.stopPropagation();
  }

  function pauseTimer(e) {
    isPaused = true;
    remainingTime = endTime - new Date().getTime();
    clearInterval(timer);
    startButton.style.display = 'inline';
    pauseButton.style.display = 'none';

    e.stopPropagation();
  }

  function stopTimer(e) {
    clearInterval(timer);
    isPaused = false;
    currentMode = 'focus';
    resetTimer();
    startButton.style.display = 'inline';
    pauseButton.style.display = 'none';
    stopButton.style.display = 'none';

    e.stopPropagation();
  }

  function snoozeTimer(e) {
    clearInterval(timer);
    isPaused = false;
    remainingTime = 5 * 60 * 1000;
    endTime = new Date().getTime() + remainingTime;
    timer = setInterval(updateTimer, 1000);

    if (currentMode === 'break') {
      switchMode();
    }

    e.stopPropagation();
  }

  function updateTimer() {
    const now = new Date().getTime();
    remainingTime = endTime - now;

    if (remainingTime <= 0) {
      clearInterval(timer);
      switchMode();
    } else {
      displayTime(remainingTime);
    }
  }

  function displayTime(time) {
    const minutes = Math.floor(time / 1000 / 60);
    const seconds = Math.floor((time / 1000) % 60);

    minutesSpan.textContent = minutes.toString().padStart(2, '0');
    secondsSpan.textContent = seconds.toString().padStart(2, '0');
  }

  function switchMode() {
    if (currentMode === 'focus') {
      currentMode = 'break';
      title.textContent = '🏖️ Faça uma pausa';
      overlay.style.display = 'flex';
      snoozeButton.style.display = 'inline';
      startButton.style.display = 'none';
      pauseButton.style.display = 'none';
      stopButton.style.display = 'none';
      container.classList.add('centered');
      pomodoroDiv.classList.remove('minimal');
      pomodoroDiv.removeEventListener('click', handleClickPomodoro);
      window.removeEventListener('click', handleOutsideClick);
    } else {
      currentMode = 'focus';
      title.textContent = '🤓 Foco nos estudos!';
      overlay.style.display = 'none';
      container.classList.remove('centered');
      pomodoroDiv.addEventListener('click', handleClickPomodoro);
      window.addEventListener('click', handleOutsideClick);
    }
    startTimer();
  }

  function resetTimer() {
    minutesSpan.textContent = focusMinutes.toString().padStart(2, '0');
    secondsSpan.textContent = '00';
    title.textContent = '🍅 Relógio Pomodoro';
  }

  function getSetting(key, defaultValue) {
    const value = localStorage.getItem(key);
    return value ? parseInt(value) : defaultValue;
  }

  let minimalTimeout;
  function handleClickPomodoro() {
    clearTimeout(minimalTimeout);
    pomodoroDiv.classList.toggle('minimal');
    minimalTimeout = setTimeout(() => pomodoroDiv.classList.add('minimal'), 5000);
  }

  function handleOutsideClick(e) {
    if (!pomodoroDiv.contains(e.target)) {
      pomodoroDiv.classList.add('minimal');
    }
  }
});
