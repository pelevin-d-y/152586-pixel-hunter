const getElementFromTemplate = (domStr) =>{
  const newDiv = document.createElement(`div`);
  newDiv.innerHTML = domStr;
  return newDiv;
};

export default getElementFromTemplate;
