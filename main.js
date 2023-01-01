let tasks = [];
let addTaskButton = document.getElementById('addTask');
let taskNameInput = document.getElementById('taskName');
let tasksContainer = document.getElementById('tasksContainer');


if (window.localStorage['tasks'] != undefined) {
    tasks = window.localStorage['tasks'].split(",");
    fillTasks();
}



addTaskButton.addEventListener('click', function () {

    if (taskNameInput.value == '') {
        alert("Enter Task Name");
    } else {

        console.log(typeof tasks);
        tasks.push(taskNameInput.value);
        taskNameInput.value = '';
        window.localStorage['tasks'] = tasks;
        fillTasks();
    }
});




function fillTasks() {
    tasksContainer.innerHTML = '';
    tasks.forEach(function (element) {
        if (element.length != 0) {
            tasksContainer.innerHTML += `
    <div class="task-container">
        <span class="task-name">${element}</span>
        <button id="deleteTask" class="button delete-task">Delete</button>
    </div>
    
    `;
        }

    });

}

document.addEventListener('click', function (e) {
    if (e.target.className == "button delete-task") {
        let name = e.target.parentElement.querySelector('.task-name').innerHTML;
        tasks = tasks.filter(function (element) {
            return element != name;
        })

        window.localStorage['tasks'] = tasks;
        fillTasks();
    }
});



document.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        addTaskButton.click();
    }

});