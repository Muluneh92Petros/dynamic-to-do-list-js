document.addEventListener('DOMContentLoaded', () => {
    loadTasks(); 

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

   
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); 
    }

   
    function addTask(taskText, save = true) {
        if (taskText === "") {
            if (alert("Please enter a task.");
            return; 
        }

       
        const listItem = document.createElement('li');
        listItem.textContent = taskText; 
        classList.add(taskText);
        
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        
        removeButton.onclick = () => {
            taskList.removeChild(listItem); 
            removeTaskFromStorage(taskText); 
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }


        taskInput.value = '';
    }


    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        addTask(taskText); 
    });

   
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim(); 
            addTask(taskText); 
        }
    });
});
