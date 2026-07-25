// this was example from previous lesson
// const task = {
//   name: "clean room",
//   category: "home",
//   deadline: "Fri Jul 24 2026",
//   status: "in progress",
// };

const taskList = [];

let taskForm = document.getElementById("taskForm");
const taskAdded = document.getElementById("taskAdded");

//Each task should be stored as an object with properties such as task name, category, deadline, and status.
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskName = document.getElementById("taskName").value;
  const category = document.getElementById("category").value;
  const deadline = document.getElementById("deadline").value;
  const status = document.getElementById("status").value;
  //note to self: adding .value gets what's being typed inside specific field

  //i believe this next part works because it is only being triggerd when user presses input

  const userTasks = {
    name: taskName.trim(),
    category: category.trim(),
    deadline: deadline.trim(),
    status: status.trim(),
  };

  //Add the task object to an array that holds all tasks.
  taskList.push(userTasks);

  console.log("Updated List:", taskList);

  taskForm.reset();

  renderlist();
});

function renderlist() {
  taskAdded.innerHTML = "";

  for (let i = 0; i < taskList.length; i++) {
    let taskItem = document.createElement("li");
    taskItem.innerHTML = `${taskList[i].name} - ${taskList[i].category} - ${taskList[i].deadline}  (${taskList[i].status})`;
    taskAdded.appendChild(taskItem);
  }
}
