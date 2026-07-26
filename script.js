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
    deadline: deadline,
    status: status.trim(),
  };

  //Add the task object to an array that holds all tasks.
  taskList.push(userTasks);

  console.log("Updated List:", taskList);

  taskForm.reset();

  renderlist();
});

function renderlist(listToRender = taskList) {
  taskAdded.innerHTML = "";
  const today = new Date().toISOString().split("T")[0];
  for (let i = 0; i < listToRender.length; i++) {
    let taskItem = document.createElement("li");

    let { name, category, deadline, status } = listToRender[i];
    const originalIndex = taskList.indexOf(listToRender[i]);
    if (deadline && deadline < today && status !== "Completed") {
      status = "Overdue";
      listToRender[i].status = "Overdue";
    }

    //Display date cleaer for users
    const displayDate = deadline
      ? new Date(deadline).toDateString()
      : "No Deadline";

    taskItem.innerHTML = `<strong>Name:</strong> ${name} - <strong>Category:</strong>${category} - <strong>Deadline:</strong> ${displayDate} <strong>Status:</strong> <select class="status" data-index="${originalIndex}">
    <option value="To Do" ${status === "To Do" ? "selected" : ""}>To Do</option>
        <option value="In Progress" ${status === "In Progress" ? "selected" : ""}>In Progress</option>
        <option value="Completed" ${status === "Completed" ? "selected" : ""}>Completed</option>
        <option value="Overdue" ${status === "Overdue" ? "selected" : ""}>Overdue</option>
      </select>
    
    `;
    taskAdded.appendChild(taskItem);
  }
}

// Filter
function filterTasks(selectedCategory, selectedStatus) {
  const filteredList = taskList.filter(function (task) {
    //This checks if category matches (or if filter is set to all)
    const categoryMatch =
      selectedCategory === "All" || task.category === selectedCategory;
    // this will check if status matches (or if filter is set to all)
    const statusMatch =
      selectedStatus === "All" || task.status === selectedStatus;

    return categoryMatch && statusMatch;
  });

  renderlist(filteredList);
}
