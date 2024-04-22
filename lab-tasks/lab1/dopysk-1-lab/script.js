const btnCheck = document.getElementById("checkButton");

let listOfWordsForChecking = document.getElementsByTagName("i");

const listOfWords = document.getElementsByTagName("ul")[0];

btnCheck.addEventListener("click", () => {
  for (let word of listOfWordsForChecking) {
    // console.log(word.innerHTML);
    addWordToList(word.innerHTML);
  }
});

function addWordToList(word) {
  const newLi = document.createElement("li");
  const newCheckbox = document.createElement("input");
  newCheckbox.setAttribute("type", "checkbox");
  newCheckbox.setAttribute("onchange", "throughLine(this.parentNode)");
  const liText = document.createElement("span");
  liText.innerHTML = word;
  newLi.appendChild(newCheckbox);
  newLi.appendChild(liText);
  listOfWords.appendChild(newLi);
}

function throughLine(obj) {
  const liCheckbox = obj.getElementsByTagName("input")[0];
  const liSpan = obj.getElementsByTagName("span")[0];
  if (liCheckbox.checked) {
    liSpan.setAttribute("style", "text-decoration: line-through");
  } else {
    liSpan.setAttribute("style", "text-decoration: none");
  }
}
