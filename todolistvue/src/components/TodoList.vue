<template>
  <div id="todoList">
    <div v-for="data in todos" :key="data.id">
      <li id="text">{{ data.text }}</li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: []
  }
}
</script>

<style scoped></style>
