const btnAddStudent = document.getElementById("btnAdd");
const btnOkAddStudent = document.getElementById("btnOkAddStudent");

const addNewStudentDialog = document.getElementById("add-new-student");
const btnNewStudentDialogExit =
  addNewStudentDialog.getElementsByClassName("close");

for (let btn of btnNewStudentDialogExit) {
  btn.addEventListener("click", () => {
    addNewStudentDialog.close();
  });
}

btnAddStudent.addEventListener("click", () => {
  addNewStudentDialog.showModal();
});

btnOkAddStudent.addEventListener("click", () => {
  const firstName = document.getElementsByName("first-name")[0];
  const secondName = document.getElementsByName("second-name")[0];

  if (
    firstName.hasAttribute("required") ||
    secondName.hasAttribute("required")
  ) {
    if (firstName.value == "" || secondName.value == "") {
      return;
    }
  }

  const dateInput = document.querySelector("input[name='birthday']").value;
  const formattedDate = dayjs(dateInput).format("DD.MM.YYYY");
  if (formattedDate == "Invalid Date") {
    return;
  }

  const table = document.getElementById("table-students");

  const newRow = document.createElement("tr");
  let newTd = document.createElement("td");
  let st = "fdsfd" + newTd + "nnjjj";
  let newEl = document.createElement("input");
  newEl.setAttribute("type", "checkbox");
  newEl.setAttribute("name", "checkbox");
  newTd.appendChild(newEl);
  newRow.appendChild(newTd);

  newTd = document.createElement("td");
  const selectedGroup = document.getElementsByName("group")[0];
  newTd.innerHTML = selectedGroup.options[selectedGroup.selectedIndex].text;
  newRow.appendChild(newTd);
  newTd = document.createElement("td");
  newTd.innerHTML = firstName.value + " " + secondName.value;
  newRow.appendChild(newTd);

  newTd = document.createElement("td");
  const selectedSex = document.getElementsByName("sex")[0];
  newTd.innerHTML = selectedSex.options[selectedSex.selectedIndex].text;
  newRow.appendChild(newTd);

  newTd = document.createElement("td");
  // newTd.innerHTML = formattedDate;

  newRow.appendChild(newTd);

  newTd = document.createElement("td");
  newTd.setAttribute("class", "status-bull");
  newTd.innerHTML = "&bull;";

  newRow.appendChild(newTd);

  newTd = document.createElement("td");
  newEl = document.createElement("div");
  let newBtn = document.createElement("button");

  newBtn.setAttribute("type", "button");
  newBtn.setAttribute("class", "btnEdit");
  newBtn.innerHTML = "&#9998;";

  newEl.appendChild(newBtn);

  newBtn = document.createElement("button");
  const newSpan = document.createElement("span");
  newSpan.innerHTML = "&times;";

  newBtn.appendChild(newSpan);
  newBtn.setAttribute("type", "button");
  newBtn.setAttribute("class", "btnDelete");
  newBtn.setAttribute("onclick", "deleteStudent(this)");
  newEl.appendChild(newBtn);

  newTd.appendChild(newEl);
  newRow.appendChild(newTd);

  table.appendChild(newRow);

  addNewStudentDialog.close();
});

function deleteStudent(btn) {
  btn.parentNode.parentNode.parentNode.remove();
}
