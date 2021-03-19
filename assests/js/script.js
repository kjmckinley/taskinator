var formEl = document.querySelector('#task-form');
console.log(formEl);

var listTaskEl = document.querySelector('#tasks-to-do');

var createTaskHandler = function(event){
  event.preventDefault();

  var newTaskEl = document.createElement('li');
  newTaskEl.className = "task-item";
  newTaskEl.textContent = "New Task";
  listTaskEl.appendChild(newTaskEl);
};


formEl.addEventListener("submit", createTaskHandler);



  