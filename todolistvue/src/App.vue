<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TodoInput name="TO-DO" @add-to-do="addTodo" />
  <TodoList :todos="todos"/>
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
  data(){
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
