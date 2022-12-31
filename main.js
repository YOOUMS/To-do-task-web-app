let tasks = [];
let addTaskButton = document.getElementById('addTask');
let taskNameInput = document.getElementById('taskName');
let tasksContainer = document.getElementById('tasksContainer');

addTaskButton.addEventListener('click', function () {

    if (taskNameInput.value == '') {
        alert("Enter Task Name");
    } else {
        tasks.push(taskNameInput.value);
        taskNameInput.value = '';
        fillTasks();
    }
});




function fillTasks() {
    tasksContainer.innerHTML = '';
    tasks.forEach(function (element) {

        tasksContainer.innerHTML += `
    <div class="task-container">
        <span class="task-name">${element}</span>
        <button id="deleteTask" class="button delete-task">Delete</button>
    </div>
    
    `;
    });

}

document.addEventListener('click', function (e) {
    console.log(e.target);

    if (e.target.className == "button delete-task") {
        e.target.parentElement.remove();
        let name = e.target.parentElement.querySelector('.task-name').innerHTML;
        delete tasks[tasks.indexOf(name)];
    }
});



document.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        addTaskButton.click();
    }

});