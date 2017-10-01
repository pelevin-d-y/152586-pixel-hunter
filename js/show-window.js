const mainElement = document.querySelector(`.central`);

const showWindow = (showElement) => {
  const mainChildrens = mainElement.children;
  Array.from(mainChildrens).forEach((element) => element.remove());
  mainElement.appendChild(showElement);
};

export default showWindow;
