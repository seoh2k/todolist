<template>
  <div id="todoList">
    <div v-for="data in todos" :key="data.id">
      <input type="checkbox">
      {{ data.text }}
      <button @click="$emit('remove-todo', data.id)">X</button>
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
