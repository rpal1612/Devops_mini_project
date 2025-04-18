function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'X';
        removeBtn.onclick = () => li.remove();

        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
