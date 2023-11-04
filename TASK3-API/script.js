document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const pendingTasksList = document.getElementById('pendingTasks');
    const completedTasksList = document.getElementById('completedTasks');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            `;

            pendingTasksList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';

            // Add event listeners for completing and deleting tasks
            listItem.querySelector('.complete').addEventListener('click', function () {
                listItem.classList.toggle('completed');
                completedTasksList.appendChild(listItem);
            });

            listItem.querySelector('.delete').addEventListener('click', function () {
                listItem.remove();
            });
        }
    });
});
