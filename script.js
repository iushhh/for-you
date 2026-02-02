let currentScreen = 0;
let lineIndex = 0;
let mood = 'hurt';

const screens = document.querySelectorAll('.screen');

function nextScreen() {
  screens[currentScreen].classList.remove('active');
  currentScreen++;
  screens[currentScreen].classList.add('active');
}

function revealLine() {
  const lines = screens[1].querySelectorAll('.line');
  if (lineIndex < lines.length) {
    lines[lineIndex].classList.remove('hidden');
    lineIndex++;
  } else {
    nextScreen();
  }
}

function chooseMood(selected) {
  mood = selected;
  nextScreen();
  startTyping();
}

function startTyping() {
  const textBox = document.getElementById('typedText');
  const finishBtn = document.getElementById('finishBtn');

  const messages = {
    hurt: `I know I hurt you.
And I won’t try to justify it.
I just want you to know I see it now.
And I’m truly sorry.

[WRITE YOUR LONG MESSAGE HERE]`,

    confused: `I know things feel unclear right now.
And that’s on me.
I didn’t show up the way you deserved.

[WRITE YOUR LONG MESSAGE HERE]`,

    here: `Thank you for still being here.
I don’t take that lightly.
I want to do better, not just say it.

[WRITE YOUR LONG MESSAGE HERE]`
  };

  typeText(messages[mood], textBox, () => {
    finishBtn.classList.remove('hidden');
  });
}

function typeText(text, element, callback) {
  let i = 0;
  element.innerHTML = '';

  const interval = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      callback();
    }
  }, 35);
}
