document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo(e.target.new_task_description.value)
    form.reset()
  })
});

function addTodo(todo){
  let listItem = document.createElement('li')
  let btn = document.createElement('button')
  let select = document.querySelector('select')
  btn.addEventListener('click', deleteTask)
  btn.textContent = 'x'
  listItem.textContent = `${todo} ` 
  listItem.appendChild(btn)
  document.querySelector('#tasks').appendChild(listItem)

  if (select.value === "High"){
    listItem.style.color = 'red';
  }
else if (select.value === 'Medium'){
    listItem.style.color = 'yellow';
}
else if (select.value === 'Low'){
  listItem.style.color = 'green';
}

};

function deleteTask(e){
  e.target.parentNode.remove()
}