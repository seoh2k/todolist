<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>TO-DO</h1>
  <TodoInput @add-to-do="addTodo" />
  <TodoList :todos="todos" @remove-todo="removeTodo"/>
</template>

<script>
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

var nextTodoId = 1

export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList
  },
  data(){ // 필요한 어떤 종류의 변수라도 저장할 수 있는 각 컴포넌트의 private 메모리
    return {
      todos: [
        {
          id: nextTodoId ++,
          text: 'Vue.js 공부하기'
        }
      ]
    }
  },
  methods: {
    addTodo(content){
      this.todos.push({
        id: nextTodoId++,
        text: content
      })
    },
    removeTodo(todoId){
      this.todos = this.todos.filter(todo => todo.id != todoId)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
