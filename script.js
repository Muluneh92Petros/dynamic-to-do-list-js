// Wait for the DOM to load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    loadTasks(); // Load tasks from Local Storage when the page loads

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Load each task
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        if (taskText === "") {
            alert("Please enter a task."); // Alert if empty
            return; // Exit the function
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText; // Set the text for the list item

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Remove the list item when the button is clicked
        removeButton.onclick = () => {
            taskList.removeChild(listItem); // Remove the list item from the task list
            removeTaskFromStorage(taskText); // Remove the task from Local Storage
        };

        // Append the button to the list item, then add the list item to the task list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Save to Local Storage if required
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Clear the input field
        taskInput.value = '';
    }

    // Function to remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Attach event listeners
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim(); // Get and trim the input value
        addTask(taskText); // Call addTask with the trimmed text
    });

    // Allow adding tasks by pressing the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim(); // Get and trim the input value
            addTask(taskText); // Call addTask if "Enter" is pressed
        }
    });
});
