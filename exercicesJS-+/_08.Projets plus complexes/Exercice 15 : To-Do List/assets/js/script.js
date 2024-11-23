// Fonction pour ajouter une tâche
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');

    newTask.innerHTML = `
        <span onclick="toggleCompleted(event)">${taskText}</span>
        <button class="delete" onclick="deleteTask(event)">Supprimer</button>
    `;

    taskList.appendChild(newTask);
    taskInput.value = "";
}

// Fonction pour supprimer une tâche
function deleteTask(event) {
    const task = event.target.closest('li');
    task.remove();
}

// Fonction pour marquer une tâche comme terminée
function toggleCompleted(event) {
    const task = event.target;
    task.closest('li').classList.toggle('completed');
}
