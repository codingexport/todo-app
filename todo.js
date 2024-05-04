let todoList = [
    {
        item: 'akhil',
        duedate: 12 / 2 / 2003
    },
    {
        item: 'alone',
        duedate: 12 / 2 / 2003
    }
];
displayitem();
function todo() {
    let inputElement = document.getElementById('input-box');
    let inputDate = document.getElementById('input-date');
    let todoitem = inputElement.value;
    let tododate = inputDate.value;
    todoList.push({ item: todoitem, duedate: tododate });
    inputElement.value = '';
    inputDate.value = '';
    displayitem();
}
function displayitem() {
    let displayElement = document.getElementById('todo-Items');
    let newHtML = '';

    for (let i = 0; i < todoList.length; i++) {
        let { item, duedate } = todoList[i];
        newHtML += `
       
       
       <span>${item}</span>
       <span>${duedate}</span>
       <button class="btn" onclick="todoList.splice(${i},1); displayitem();">Delete</button>
      
       `
        // displayElement.innerText=displayElement.innerText+todoList[i];
    }
    displayElement.innerHTML = newHtML;
}