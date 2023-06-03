const inputText = document.querySelector(".text-input");
const buttonSubmit = document.querySelector(".button-submit");
const taskListContainer = document.querySelector(".content-container");

buttonSubmit.addEventListener("click", function () {
  let input = inputText.value;
  if (!input) {
    alert("please fill out the task");
    return false;
  } else {
    document.createElement("div");
    const div = document.createElement("div");
    div.classList.add("task");

    const taskText = document.createElement("input");
    taskText.type = "text";
    taskText.setAttribute("readonly", "readonly");
    taskText.value = input;

    const buttonEdit = document.createElement("button");
    buttonEdit.type = "submit";
    buttonEdit.innerText = "edit";

    const buttonDelete = document.createElement("button");
    buttonDelete.type = "submit";
    buttonDelete.innerText = "delete";

    div.appendChild(taskText);
    div.appendChild(buttonEdit);
    div.appendChild(buttonDelete);

    taskListContainer.appendChild(div);

    buttonEdit.addEventListener("click", function () {
      if (buttonEdit.innerText.toLocaleLowerCase() == "edit") {
        console.log("is editing");
        buttonEdit.innerText = "save";
        taskText.removeAttribute("readonly");
      } else {
        console.log("is saving");
        buttonEdit.innerText = "edit";
        taskText.setAttribute("readonly", "readonly");
      }
    });
    buttonDelete.addEventListener("click", function () {
      taskListContainer.removeChild(div);
    });
  }
});
