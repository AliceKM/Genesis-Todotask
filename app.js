// Task class:represents a task
setInterval(show, 1000);
function show() {
let  date = new Date();
	let current_date = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+ date.getDate();
	let current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
	let date_time = 'Date:  '+current_date+' '+current_time;	
	document.getElementById("show").innerHTML = date_time;
};

class Task {
    constructor(name,description,assignedto,duedate,status){
        this.name = name;
        this.description = description;
        this.assignedto = assignedto;
        this.duedate = duedate;
        this.status = status;
       
        
    }
}

// UI Class : handle UI tasks
class UI {
    static displayTask() {
        // const StorageTasks = [
        // {
        //     name: "Alice",
        //     description: "buy new tyres",
        //     assignedto:"Alice2",
        //     duedate: "2022/12/01",
        //     status: "todo"
        // },
        // {
        //     name: "John",
        //     description: "mop floor",
        //     assignedto:"John2",
        //     duedate: "2022/12/10",
        //     status: "todo"
        // }
        // ]
        const tasks = Store.getTasks();
    // const tasks = StorageTasks
    tasks.forEach((task)=> UI.addTaskToList(task));
    }

    static addTaskToList(task){
        const list = document.getElementById("task-list")
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${task.name}</td>
        <td>${task.description}</td>
        <td>${task.assignedto}</td>
        <td>${task.duedate}</td>
        <td>${task.status}</td>
        <td><a href="#" class ="btn btn-outline-danger btn-sm delete">Update</a></td>   
        <td><a href="#" class ="btn btn-outline-danger btn-sm delete">Delete</a></td>
        <td><a href="#" class ="btn btn-outline-info btn-sm edit">Edit</a></td>
        `;      
         
        list.appendChild(row)
    }
    
    
    static deleteTask(el) {
        if(el.classList.contains("delete")) {
            el.parentElement.parentElement.remove();
        }
    }
    
    static editTask(el){
        const tasks = Store.getTasks();
        if(el.classList.contains("edit")){
           console.log(tasks);
        }
       
        
   }
    static showAlert(message,className){
        const div = document.createElement("div");
        div.className =`alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const dady = document.getElementById('m-content')
        const body =document.getElementById('container')
        dady.insertBefore(div,body);
        
        setTimeout(()=>document.querySelector('.alert').remove(),3000);

    }  
    static clearFields(){
        document.getElementById("fname").value = '';
        document.getElementById("assign-input").value = '';
        document.getElementById("description").value = '';
        document.getElementById("dueDate").value = '';
        document.getElementById("status-input").value = '';
        
    }
}
// Store Class : handle Storage
class Store {
    static getTasks() {
        let tasks;
        if(localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasks
    }
    static addTask(task){
        const tasks = Store.getTasks();
        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks));

    }
    static removeTask(status){
        const tasks = Store.getTasks();
        tasks.forEach((task,index)=>{
            if(task.status === status){
                tasks.splice(index, 1)
            }
        })
    localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}
// Event: Display Task
document.addEventListener('DOMContentLoaded', UI.displayTask);
// Event: Add a Task
document.getElementById('task-input').addEventListener('submit',(e)=>{
    e.preventDefault();
    // Get form values
    const name = document.getElementById("fname").value;
    const description = document.getElementById("description").value;
    const assignedto = document.getElementById("assign-input").value;
    const duedate = document.getElementById("dueDate").value;
    const status = document.getElementById("status-input").value;

    // Validate 
    if(name === ""||description === ""||assignedto === ""||status === ""){
        UI.showAlert('Please fill in all fields','danger')
    }else{
        // Instatiate book
    const task = new Task(name,description,assignedto,duedate,status);
    
    UI.addTaskToList(task);
    Store.addTask(task)
    UI.showAlert('Task Added','success');
    UI.clearFields();
    }
 })
// Event: Remove a Task
    document.getElementById("task-list").addEventListener("click",(e) =>{
    UI.deleteTask(e.target)
    Store.removeTask(e.target.parentElement.previousElementSibling.textContent)
    UI.editTask(e.target)
    });


	
    
    
  
   