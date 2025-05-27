function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("task-list");

  const li = document.createElement("li");
  li.textContent = taskText;

  // Complete toggle
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.style.marginLeft = "10px";
  delBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(delBtn);
  taskList.appendChild(li);
  input.value = "";
}
