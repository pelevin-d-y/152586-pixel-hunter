const mainElement = document.querySelector(`.central`);

const showWindow = (view) => {
  const mainChildrens = mainElement.children;
  Array.from(mainChildrens).forEach((element) => element.remove());
  mainElement.appendChild(view.element);
};

export default showWindow;
