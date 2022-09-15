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

// todolist 렌더링
function renderTodo(todo) {
    localStorage.setItem('todoItemsRef', JSON.stringify(todoItems));

    const list = document.querySelector('.js-todo-list');
    const item = document.querySelector(`[data-key='${todo.id}']`);

    if(todo.deleted){
        item.remove();
        if(todoItems.length === 0) {
            list.innerHTML = '';
        }
        // return
    }

    const isChecked = todo.checked ? 'done': '';
    const node = document.createElement("li"); // li 메소드를 사용하여 DOM 노드를 구성
    node.setAttribute('class', `todo-item ${isChecked}`);
    node.setAttribute('data-key', todo.id);
    node.innerHTML = `
        <input id="${todo.id}" type="checkbox"/>
        <label for="${todo.id}" class="tick js-tick"></label>
        <span>${todo.text}</span>
        <button class="delete-todo js-delete-todo">
            <svg><use href="#delete-icon"></use></svg>
        </button>
    `
    // DOM에 item이 있는지 여부
    if(item){
        list.replaceChild(node, item); // 교체
    } else {
        list.append(node); // 리스트에 append
    }    
}

// 작업을 완료한 것으로 표시
function toggleDone(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    todoItems[index].checked = !todoItems[index].checked;
    renderTodo(todoItems[index]);
}

// todo 삭제
function deleteTodo(key){
    const index = todoItems.findIndex(item => item.id === Number(key));
    const todo ={
        deleted: true,
        ...todoItems[index] // 전개연산자: 사용하여 두 배열이나 객체를 쉽게 합칠 수 있음
    };
    // filter: 요소를 걸러내어 배열로 반환
    todoItems = todoItems.filter(item => item.id !== Number(key));
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

const list = document.querySelector('.js-todo-list');
list.addEventListener('click', event => {
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }

  if(event.target.classList.contains('js-delete-todo')){
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});

