var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);

var listTaskEl = document.querySelector('#tasks-to-do');

var createTaskHandler = function(){
  var newTaskEl = document.createElement('li');
  newTaskEl.className = "task-item";
  newTaskEl.textContent = "New Task";
  listTaskEl.appendChild(newTaskEl);
};

buttonEl.addEventListener("click", createTaskHandler);



  