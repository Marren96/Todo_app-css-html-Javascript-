const inputValue = document.querySelector('.input-area')
const renderTodos = document.querySelector('.unordered-list-items')


const renderTodo = () =>{
    const btn = document.getElementById('btn')
    btn.addEventListener('click',e => {
        const listItem = document.createElement('li')
        listItem.className = 'list-item'
        listItem.innerText = inputValue.value;
        renderTodos.appendChild(listItem)
        inputValue.value = '';

        listItem.addEventListener('click',function(){
            listItem.style.textDecoration = 'line-through'
        })

        listItem.addEventListener('dblclick',function(){
            listItem.innerHTML = ''
        })
    })
}
renderTodo()