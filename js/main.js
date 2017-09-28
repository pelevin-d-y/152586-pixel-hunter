"use strict";

(function () {
  const mainElement = document.querySelector(`.central`);
  const KEY_CODE_ALT = `18`;
  const KEY_CODE_LEFT = `37`;
  const KEY_CODE_RIGHT = `39`;
  let templateNumber = -1;

  const arrayTemplatesId = [`#greeting`, `#rules`, `#game-1`, `#game-2`, `#game-3`, `#stats`];
  const arrayTemplates = arrayTemplatesId.map(function (id) {
    return document.querySelector(id);
  });

  const showWindow = function (number) {
    const newElement = arrayTemplates[number].content.cloneNode(true);

    const mainChildrens = mainElement.children;
    const mainChildrensArray = [].slice.call(mainChildrens);

    mainChildrensArray.forEach(function (element) {
      element.remove();
    });

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
      } else if (templateNumber < arrayTemplates.length - 1) {
        showWindow(templateNumber + 1);
        templateNumber = templateNumber + 1;
      }
    }

    if (keysPressed[0] === KEY_CODE_ALT && keysPressed[1] === KEY_CODE_LEFT) {
      if (templateNumber === -1) {
        templateNumber = 0;
      } else if (templateNumber > 0) {
        showWindow(templateNumber - 1);
        templateNumber--;
      }
    }
  });

  document.addEventListener(`keyup`, function (evt) {
    delete pressed[evt.keyCode];
  });
})();
