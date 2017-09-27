"use strict";

(function () {
  const mainElement = document.querySelector(`.central`);
  const greetingTemplate = document.querySelector(`#greeting`);
  const rulesTemplate = document.querySelector(`#rules`);
  const gameOneTemplate = document.querySelector(`#game-1`);
  const gameTwoTemplate = document.querySelector(`#game-2`);
  const gameThreeTemplate = document.querySelector(`#game-3`);
  const statsTemplate = document.querySelector(`#stats`);
  const KEY_CODE_ALT = `18`;
  const KEY_CODE_LEFT = `37`;
  const KEY_CODE_RIGHT = `39`;
  let templateNumber = -1;

  const arrayTemplates = [greetingTemplate, rulesTemplate, gameOneTemplate, gameTwoTemplate, gameThreeTemplate, statsTemplate];

  const showWindow = function (number) {
    const newElement = arrayTemplates[number].content.cloneNode(true);

    for (let i = mainElement.children.length - 1; i >= 0; i--) {
      mainElement.children[i].remove();
    }
    mainElement.appendChild(newElement);
  };

  const pressed = {};

  document.addEventListener(`keydown`, function (evt) {

    pressed[evt.keyCode] = true;

    const keysPressed = Object.keys(pressed);

    if (keysPressed[0] === KEY_CODE_ALT && keysPressed[1] === KEY_CODE_RIGHT) {
      if (templateNumber === -1) {
        templateNumber = 0;
        showWindow(templateNumber);
      } else if (templateNumber === arrayTemplates.length - 1) {
        return;
      } else if (templateNumber >= 0) {
        showWindow(templateNumber + 1);
        templateNumber = templateNumber + 1;
      }
    }

    if (keysPressed[0] === KEY_CODE_ALT && keysPressed[1] === KEY_CODE_LEFT) {
      if (templateNumber === -1 || templateNumber === 0) {
        templateNumber = 0;
      } else if (templateNumber > 0) {
        showWindow(templateNumber - 1);
        templateNumber--;
      }
    }

    document.onkeyup = function () {
      delete pressed[evt.keyCode];
    };
  });
})();
