import { saveTask } from './firebase.js'

window.addEventListener('DOMContentLoaded', () => {
// console.log("hola");

})

const taskForm = document.getElementById('task-form')

taskForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const title = taskForm['task-title']
    const description = taskForm['task-description']

    saveTask(title.value, description.value)

    taskForm.reset()
})