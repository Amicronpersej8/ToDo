const root = document.getElementById('root');
//First block
const firstBlock = document.createElement('div')
firstBlock.className = "firstBlock"
document.body.firstElementChild.append(firstBlock)

//delete All
const deleteAll = document.createElement('button');
deleteAll.className = "deleteAll"
deleteAll.innerHTML = 'Delete All';
firstBlock.append(deleteAll)

//Delete Last
const deleteLast = document.createElement('button')
deleteLast.className = "deleteLast"
deleteLast.innerHTML = 'Delete last'
firstBlock.append(deleteLast)

//Input todo
const enterTodo = document.createElement('input')
enterTodo.placeholder = 'Enter todo...'
enterTodo.className = "enterTodo"
firstBlock.append(enterTodo)

//add
const add = document.createElement('button')
add.className = "add"
firstBlock.append(add)
add.innerHTML = 'Add'


//second block
const secondBlock = document.createElement('div');
secondBlock.className = "secondBlock"
document.body.firstElementChild.append(secondBlock)

//counter All
const all = document.createElement('div')
all.className = "all"
secondBlock.append(all)
all.innerHTML = 'All:'

//counter completed
const complited = document.createElement('div')
complited.className = "complited"
secondBlock.append(complited)
complited.innerHTML = 'Completed:'


//show all
const showAll = document.createElement('button')
showAll.className = "showAll"
secondBlock.append(showAll)
showAll.innerHTML = 'Show All'

//show completed
const showCompleted = document.createElement('button')
showCompleted.className = "showCompleted"
secondBlock.append(showCompleted)
showCompleted.innerHTML = 'Show Completed'


//search
const search = document.createElement('input')
search.placeholder = 'Search...'
search.className = "search"
secondBlock.append(search)

//third block

const thirdBlock = document.createElement('div')
thirdBlock.className = 'third_block';
document.body.firstElementChild.append(thirdBlock)


//add item todo
function addTodo() {

    //todo blocks
    //if (!inputText.value) return;
    const todoBlock = document.createElement('div')
    todoBlock.className = "todoBlock"
    thirdBlock.append(todoBlock)

    //done
    const checkbox = document.createElement('button')
    checkbox.className = "checkbox"
    todoBlock.append(checkbox)
    checkbox.innerHTML = '✓'


    //todo text
    const todoText = document.createElement('div')
    todoText.className = "todoText"
    todoBlock.append(todoText)
    todoText.innerHTML = ''
    let inputText = document.querySelector('.enterTodo')
    todoText.append(inputText.value)


    //todo item
    const todoBlockItem = document.createElement('div')
    todoBlockItem.className = "todoBlockItem"
    todoBlock.append(todoBlockItem)

    //delete item
    const closeItem = document.createElement('button')
    closeItem.className = "closeItem"
    todoBlockItem.append(closeItem)
    closeItem.innerHTML = 'X'

    //date
    const date = document.createElement('div')
    date.className = "date"
    todoBlockItem.append(date)
    date.innerHTML = 'Date'

    //delete todo block
    closeItem.onclick = () => {
        todoBlock.remove();
    };

    //checkbox click
    checkbox.onclick = () => {
        todoText.className = "todoText_1"
        todoBlock.className = 'todoBlock_1'
    };
}

//function delete last todo
const addClick = document.querySelector('.add')
addClick.addEventListener('click', addTodo)
function deleteLastTodo() {
    thirdBlock.lastChild.remove()
}
const deleteClick = document.querySelector('.deleteLast')
deleteClick.addEventListener('click', deleteLastTodo)

//function delete All todo
const deleteAllclick = document.querySelector('.deleteAll')
deleteAllclick.addEventListener('click', deleteAllTodo)
function deleteAllTodo() {
    while (thirdBlock.firstChild) {
        thirdBlock.firstChild.remove()
    }
}



