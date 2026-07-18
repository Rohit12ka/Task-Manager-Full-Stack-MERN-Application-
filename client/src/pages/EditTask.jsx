let tasks = [
    "Learn JavaScript",
    "Complete Project",
    "Go to Gym"
];

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        taskList.innerHTML += `
            <li>
                ${task}
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </li>
        `;
    });
}

function EditTask(index) {
    const updatedTask = prompt("Edit your task:", tasks[index]);

    if (updatedTask !== null && updatedTask.trim() !== "") {
        tasks[index] = updatedTask.trim();
        displayTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

displayTasks();
export default EditTask 