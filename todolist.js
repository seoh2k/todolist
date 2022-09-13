let todoItems = [];

// todo 추가
function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now()
    };

    todoItems.push(todo);
    renderTodo(todo);
}

const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
    event.preventDefault(); // 양식 제출 시 페이지 새로 고침 방지
    const input = document.querySelector('.js-todo-input');

    const text = input.value.trim();
    if(text !== ''){
        addTodo(text);
        input.value = '';
        input.focus(); //input태그를 마우스로 클릭하여 입력상태로 만든것을 포커스를 얻었다고 한다.
    }
})

// todolist 렌더링
function renderTodo(todo) {
    const list = document.querySelector('.js-todo-list');

    list.addEventListener('click', event => {
        if(event.target.classList.contains('js-tick')){
            const itemKey = event.target.parentElement.dataset.key;
            toggleDone(itemKey);
        }
    })

    const isChecked = todo.checked ? 'done': '';
    const node = document.createElement("li"); // li 메소드를 사용하여 DOM 노드를 구성
    node.setAttribute('class', `todo-item ${isChecked}`);
    node.setAttribute('date-key', todo.id);
    node.innerHTML = `
        <input id="${todo.id}" type="checkbox"/>
        <label for="${todo.id}" class="tick js-tick"></label>
        <span>${todo.text}</span>
        <button class="delete-todo js-delete-todo">X</button>
    `

    list.append(node);
}