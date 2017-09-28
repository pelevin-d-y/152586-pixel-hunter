(function () {
  const mainElement = document.querySelector(`.central`);
  const KEY_CODE_LEFT = 37;
  const KEY_CODE_RIGHT = 39;
  let templateNumber = -1;

  const arrayTemplatesId = [`#greeting`, `#rules`, `#game-1`, `#game-2`, `#game-3`, `#stats`];
  const arrayTemplates = arrayTemplatesId.map((id) => document.querySelector(id));

  const showWindow = function (number) {
    const newElement = arrayTemplates[number].content.cloneNode(true);

    const mainChildrens = mainElement.children;
    const mainChildrensArray = [].slice.call(mainChildrens);

    mainChildrensArray.forEach(function (element) {
      element.remove();
    });

    mainElement.appendChild(newElement);
  };

  document.addEventListener(`keydown`, function (evt) {
    if (evt.altKey && evt.keyCode === KEY_CODE_RIGHT) {
      if (templateNumber >= -1 && templateNumber < arrayTemplates.length - 1) {
        templateNumber++;
        showWindow(templateNumber);
      }
    }

    if (evt.altKey && evt.keyCode === KEY_CODE_LEFT) {
      if (templateNumber === -1) {
        return;
      }

      if (templateNumber > 0) {
        templateNumber--;
        showWindow(templateNumber);
      }
    }
  });
})();
