document.getElementById('add-task').addEventListener('click', function() {
    const taskName = document.getElementById('task-name').value;
    const taskDesc = document.getElementById('task-desc').value;

    if (taskName === '') {
        alert('Please enter a task name');
        return;
    }

    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskName} - ${taskDesc}</span>
        <div>
            <span class="edit">✎</span>
            <span class="delete">🗑</span>
        </div>
    `;

    // Append the new task to the list
    taskList.appendChild(taskItem);

    // Clear the input fields
    document.getElementById('task-name').value = '';
    document.getElementById('task-desc').value = '';

    // Add delete functionality
    taskItem.querySelector('.delete').addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    // Add edit functionality
    taskItem.querySelector('.edit').addEventListener('click', function() {
        const currentTaskText = taskItem.querySelector('span').textContent;
        const [currentTaskName, currentTaskDesc] = currentTaskText.split(' - ');

        const newTaskName = prompt('Edit Task Name', currentTaskName);
        const newTaskDesc = prompt('Edit Task Description', currentTaskDesc);

        if (newTaskName !== null && newTaskDesc !== null) {
            taskItem.querySelector('span').textContent = `${newTaskName} - ${newTaskDesc}`;
        }
    });
});
