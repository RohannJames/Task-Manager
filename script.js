
function addTask(){
    const taskInput = document.getElementById("taskInput").value;
    const taskList = document.getElementById("taskList");

    let li= document.createElement("li");
    let checkbox = document.createElement("input");
    let span = document.createElement("span");

    checkbox.type="checkbox";
    span.textContent = taskInput;

    checkbox.addEventListener("change", function(){
        if(checkbox.checked){
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "black"; 
        }
    })

    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);

    document.getElementById("taskInput").value="";
}

function clearCheckedTasks(){
    const taskList = document.getElementById("taskList");
    const tasks = taskList.getElementsByTagName("li");

    for(let i=0;i<tasks.length;i++){
        let checkbox = tasks[i].getElementsByTagName("input")[0];
        if(checkbox.checked){
            taskList.removeChild(tasks[i]);
            i--;
        }
    }
}

function clearAllTasks(){
    const taskList = document.getElementById("taskList");
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

}