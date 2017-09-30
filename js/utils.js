const getElementFromTemplate = (domStr) =>{
  const newDiv = document.createElement(`div`);
  newDiv.innerHTML = domStr;
  return domStr;
};

export default getElementFromTemplate;
