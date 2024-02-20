function add() {
  let newDiv = document.createElement("div");

  let textInput = document.createElement("input");
  textInput.setAttribute("type", "text");
  textInput.setAttribute("name", "itemAdd");
  textInput.setAttribute("id", "textInput");

  let btnOk = document.createElement("button");
  btnOk.textContent = "Ok";
  btnOk.setAttribute("type", "button");
  btnOk.setAttribute("id", "btnOk");
  btnOk.setAttribute("onclick", "addOk()");

  newDiv.appendChild(textInput);
  newDiv.appendChild(btnOk);

  let childEl = document.getElementById("btnAdd");
  let parentEl = childEl.parentNode;

  parentEl.appendChild(newDiv);
}

function addOk() {
  let textInput = document.getElementById("textInput").value;
  let newLi = document.createElement("li");

  let newSpan = document.createElement("span");
  newSpan.textContent = textInput;

  let newInput = document.createElement("input");
  newInput.setAttribute("type", "checkbox");
  newInput.setAttribute("name", textInput);

  newLi.appendChild(newInput);
  newLi.appendChild(newSpan);

  let childEl = document.getElementById("list-of-products");
  childEl.appendChild(newLi);
}
