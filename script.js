const btnAddStudent = document.getElementById("btnAdd");

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
