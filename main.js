
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
add.textContent = 'Add'


//second block
const secondBlock = document.createElement('div');
secondBlock.className = "secondBlock"
document.body.firstElementChild.append(secondBlock)

//counter All
const all = document.createElement('div')
all.className = "all"
secondBlock.append(all)
all.textContent = 'All:'

//counter completed
const complited = document.createElement('div')
complited.className = "complited"
secondBlock.append(complited)
complited.textContent = 'Completed:'


//show all
const showAll = document.createElement('button')
showAll.className = "showAll"
secondBlock.append(showAll)
showAll.textContent = 'Show All'

//show completed
const showCompleted = document.createElement('button')
showCompleted.className = "showCompleted"
secondBlock.append(showCompleted)
showCompleted.textContent = 'Show Completed'


//search
const search = document.createElement('input')
search.placeholder = 'Search...'
search.className = "search"
secondBlock.append(search)

//third block

const thirdBlock = document.createElement('div')
thirdBlock.className = 'third_block';
document.body.firstElementChild.append(thirdBlock)

let arrayBlocks = []


//add item todo
function addTodo() {

    //todo blocks
    const todoBlock = document.createElement('div')
    todoBlock.className = "todoBlock"
    thirdBlock.append(todoBlock)

    //count blocks
    arrayBlocks.push(todoBlock)
    all.textContent = 'All:' + arrayBlocks.length

    //done
    const checkbox = document.createElement('button')
    checkbox.className = "checkbox"
    todoBlock.append(checkbox)
    checkbox.textContent = '✓'


    //todo text
    const todoText = document.createElement('div')
    todoText.className = "todoText"
    todoBlock.append(todoText)
    let inputText = document.querySelector('.enterTodo')
    if (inputText.value === '') {
        deleteLastTodo()

    }
    todoText.append(inputText.value)
    inputText.value = ''

    //todo item
    const todoBlockItem = document.createElement('div')
    todoBlockItem.className = "todoBlockItem"
    todoBlock.append(todoBlockItem)

    //delete item
    const closeItem = document.createElement('button')
    closeItem.className = "closeItem"
    todoBlockItem.append(closeItem)
    closeItem.textContent = 'X'

    //date
    const date = document.createElement('div')
    date.className = "date"
    todoBlockItem.append(date)
    let dateText = new (Date)
    date.textContent = `${dateText.getDate()}.${(dateText.getMonth() + 1 + '').padStart(2, 0)}.${dateText.getUTCFullYear()}`

    //delete todo block
    closeItem.onclick = () => {
        todoBlock.remove();
        arrayBlocks.length--
        all.textContent = 'All:' + arrayBlocks.length
    };

    //checkbox click
    checkbox.onclick = () => {
        textLineThrough()
    };
    function textLineThrough() {
        todoText.classList.toggle('todoText_click')
        todoBlock.classList.toggle('todoBlock_click')
        completedBlocksArray.push(todoBlock)
        complited.textContent = 'Completed:' + completedBlocksArray.length
    }

    console.log("🚀 ~ file: main.js:144 ~ inputText.value", inputText.value)

}

//function delete last todo
const deleteClick = document.querySelector('.deleteLast')
deleteClick.addEventListener('click', deleteLastTodo)
const addClick = document.querySelector('.add')
addClick.addEventListener('click', addTodo)
function deleteLastTodo() {
    if (thirdBlock.firstChild)
        thirdBlock.lastChild.remove()
    arrayBlocks.length--
    all.textContent = 'All:' + arrayBlocks.length
}

//function delete All todo
const deleteAllclick = document.querySelector('.deleteAll')
deleteAllclick.addEventListener('click', deleteAllTodo)
function deleteAllTodo() {
    while (thirdBlock.firstChild) {
        thirdBlock.firstChild.remove()
    }
    arrayBlocks.length = 0
    all.textContent = 'All:' + arrayBlocks.length
}

//count completed 

