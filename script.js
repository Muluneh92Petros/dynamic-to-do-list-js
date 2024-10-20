
// Wait for the DOM to load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        // Check if the input is empty
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
        };

        // Append the button to the list item, then add the list item to the task list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask); // Call addTask on button click

    // Allow adding tasks by pressing the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask if "Enter" is pressed
        }
    });
});
