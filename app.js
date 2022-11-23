const tasknameEl = document.getElementById("task")
const duedateEl = document.getElementById("due-date")
const assigninputEL = document.getElementById("assign-input")
const descriptionEl = document.getElementById("floatingTextarea")

const taskformEl = document.getElementById("task-form")

taskformEl.addEventListener('submit', function(e){

    e.preventDefault()
})

const isRequired = value => value ===  '' ? false : true;
const  noLonger8 = length => length <= 8 ? false : true
const  noLonger15 = length => length <= 15 ? false : true

function validateTaskForm(){

} 