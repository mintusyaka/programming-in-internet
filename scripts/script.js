/*вікно видалення студента */
const deleteStudentDialog = $('#delete-student');

let _btn;

function deleteStudent(btn) {
  deleteStudentDialog.modal('show');
  let txtDeleteStudent = $('#delete-student .form');
  txtDeleteStudent.text("Are you sure you want to delete user " +
  btn.parentNode.parentNode.parentNode.getElementsByClassName("name")[0].innerHTML +
  "?");
  _btn = btn;
  return;
}

$('#btnOkDeleteStudent').click(function() {
  _btn.parentNode.parentNode.parentNode.remove();
  deleteStudentDialog.modal('hide');
});

$('.close-dialog').click(function () {
  deleteStudentDialog.modal('hide');
  return;
});

if("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").then(registration => {
    console.log("SW Registered!");
    console.log(registration);
  }).catch(error => {
    console.log("SW Registration Failed!");
    console.log(error);
  })
}