const todoForm = document.getElementById('todoForm');
const taskList = document.getElementById('taskList');

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDetails = document.getElementById('taskDetails').value;
    addTask(taskTitle, taskDetails);
    todoForm.reset();
});


function addTask(title, details) {
    const li = document.createElement('li');
    li.innerHTML = `
    <h3>${title}</h3>
    <p>${details}</p>
    <button class = "edit-btn">Edit</button>
    <button class = "delete-btn">Delete</button>
    `;
    taskList.appendChild(li);
}


taskList.addEventListener('click', function(e) {
    const target = e.target;
    if (target.classList.contains('delete-btn')) {
        target.parentElement.remove();
    } else if (target.classList.contains('edit-btn')) {
        const spanElements = target.parentElement.querySelectorAll('span');
        const title = spanElements[0].textContent;
        const details = spanElements[1].textContent;
        const newTitle = prompt('Enter a new title:', title);
        const newDetails = prompt('Enter some new details:', details);
        if (newTitle !== null && newDetails!== null) {
            spanElements[0].textContent = newTitle;
            spanElements[1].textContent = newDetails;
        }
    }
});


