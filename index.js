import { saveTask, getTasks, onGetTasks, deleteTask, getTask, updateTask} from './firebase.js';

const taskForm = document.getElementById('task-form');
const tasksContainer = document.getElementById('tasks-container');

let editStatus = false;
let id = '';

window.addEventListener('DOMContentLoaded', async () => {
    onGetTasks((querySnapshot) => {
        

        querySnapshot.forEach(doc => {
            const task = doc.data();
            // console.log(doc.id);
            // console.log(doc)
        tasksContainer.innerHTML += `
            <div class="card cart-body mt-2 border-primary">
                <h3 class="h5">${task.title}</h3>
                <p>${task.description}</p>
                <dic class="display-flex">
                    <button class="btn btn-primary btn-delete" data-id="${doc.id}">Delete</button>
                    <button class="btn btn-secundary btn-edit" data-id="${doc.id}">Edit</button>
                </dic>                
            </div>
            `;
        });

        const btnsDelete = tasksContainer.querySelectorAll('.btn-delete')

        btnsDelete.forEach(btn => {
            btn.addEventListener('click', ({ target: { dataset } }) => {
                // console.log(dataset.id);
                deleteTask(dataset.id)
            })
        })

        const btnsEdit = tasksContainer.querySelectorAll('.btn-edit')
        btnsEdit.forEach(btn => {
            // console.log(btn)
            btn.addEventListener('click', async (e) => {
                // console.log(e.target.dataset.id)
                const doc = await getTask(e.target.dataset.id)
                // console.log(doc.data())
                const task = doc.data()

                taskForm['task-title'].value = task.title;
                taskForm['task-description'].value = task.description;

                editStatus = true;
                id = doc.id

                taskForm['btn-task-save'].innerText = 'Update'
            })

        })

    });
});

taskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const title = taskForm['task-title']
    const description = taskForm['task-description']

    if (!editStatus) {
        // console.log('updating');
        saveTask(title.value, description.value);
    } else {
        updateTask(id,{title:title.value, description:description.value});

        editStatus = false;
    }

    saveTask(title.value, description.value)

    taskForm.reset()
})