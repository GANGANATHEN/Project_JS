const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new <li> element
    const taskItem = document.createElement("li");

    // Add task text
    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;

    // Add 'Complete' toggle functionality
    taskTextElement.addEventListener("click", () => {
        taskTextElement.classList.toggle("completed");
    });

    // Add a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Add delete functionality
    deleteBtn.addEventListener("click", () => {
        todoList.removeChild(taskItem);
    });

    // Append task text and delete button to <li>
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteBtn);

    // Add the <li> to the <ul>
    todoList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
}

// Add event listener to the "Add" button
addTaskBtn.addEventListener("click", addTask);

// Allow adding task by pressing "Enter"
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
