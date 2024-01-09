
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
      const newTask = document.createElement('li');
      newTask.innerHTML = `
        <input type="checkbox" onchange="toggleTaskCompletion(this)">
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Remove</button>
      `;
      taskList.appendChild(newTask);
      taskInput.value = '';
    }
  }
  
  
  function toggleTaskCompletion(checkbox) {
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
      taskText.style.textDecoration = 'line-through';
    } else {
      taskText.style.textDecoration = 'none';
    }
  }
  
  
  function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }
  