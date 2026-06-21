/*const todolist=["watch football","watches dishes","watch yutube"];
const inputElement=document.getElementById('input');
const date=document.getElementById('date');
const btn=document.getElementById('btn');
const para=document.getElementById('para');


function renderTodo(){
para.textContent=`${inputElement.value}`;
inputElement.value='';
for(let i=0; i<todolist.length;i++){
  const todo=todolsit=[i];
  const html=`
  <p>
  <button onclick="
  todo.splice(i,1);
  renderTodo();
  ">delete<button>
  </p>`;
}

}


btn.addEventListener('click',renderTodo);*/

const todolist = ["watch football", "watches dishes", "watch yutube"];
const inputElement = document.getElementById('input');
const date = document.getElementById('date');
const btn = document.getElementById('btn');
const para = document.getElementById('para');
const para2=document.getElementById('para2')

function renderTodo() {
  // 1. Add new typed text to the array
  if (inputElement.value.trim() !== '') {
    todolist.push(inputElement.value);
  }
  para2.textContent=`${date.value}`;
  
  // 2. Clear input fields
  inputElement.value = '';
  date.value = '';
  
  // 3. Reset the paragraph so it can rebuild the list
  para.innerHTML = '';

  // 4. Loop through the array to generate HTML
  for (let i = 0; i < todolist.length; i++) {
    const todoText = todolist[i];

    // Create a container for the individual todo
    const todoItemContainer = document.createElement('div');
    todoItemContainer.innerHTML = `
      <p>
        ${todoText} 
        <button onclick="deleteTodo(${i})">delete</button>
      </p>
    `;

    para.appendChild(todoItemContainer);
  }
}

// 5. Separate delete function for the onclick attribute
function deleteTodo(index) {
  todolist.splice(index, 1);
  renderTodo(); // Re-render after deleting
}

btn.addEventListener('click', renderTodo);


  