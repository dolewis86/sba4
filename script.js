// this was example from previous lesson
// const task = {
//   name: "clean room",
//   category: "home",
//   deadline: "Fri Jul 24 2026",
//   status: "in progress",
// };

const taskList = [];

let taskForm = document.getElementById("taskForm");


//Each task should be stored as an object with properties such as task name, category, deadline, and status.
taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskName = document.getElementById("taskName").value
    const category = document.getElementById("category").vallue
    const deadline = document.getElementById("deadline").value
    const status = document.getElementById("status").value
    //note to self: adding .value gets what's being typed inside specific field

    //i believe this next part works because it is only being triggerd when user presses input

    const userTasks = {
        name: taskName.trim(),
        category: category.trim(),
        deadline: deadline.trim(),
        status: status.trim(),
    }
    
    //Add the task object to an array that holds all tasks.
    taskList.push(userTasks);

});