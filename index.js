import { saveTask, getTasks, onGetTasks } from './firebase.js';

const taskForm = document.getElementById('task-form');
const tasksContainer = document.getElementById('tasks-container');

window.addEventListener('DOMContentLoaded', async () => {
    // console.log("hola");
    // const querySnapshot = await getTasks();
    onGetTasks((querySnapshot) => {
        let html = "";

        querySnapshot.forEach((doc) => {
            const task = doc.data();
            // console.log(doc)
            html += `
            <div>
                <h3>${task.title}</h3>
                <p>${task.description}</p>
            </div>
            `;
        });
        tasksContainer.innerHTML = html;
    });
});



taskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const title = taskForm['task-title']
    const description = taskForm['task-description']

    saveTask(title.value, description.value)

    taskForm.reset()
})