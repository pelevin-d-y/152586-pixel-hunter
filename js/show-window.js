const mainElement = document.querySelector(`.central`);

const showWindow = (showElement) => {
  const mainChildrens = mainElement.children;
  Array.from(mainChildrens).forEach((element) => element.remove());
  mainElement.innerHTML = showElement;
};

export default showWindow;
