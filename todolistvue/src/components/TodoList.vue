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
  props: { // 부모 컴포넌트로부터 자식 컴포넌트로 전달하는 방법
    todos: []
  }
}
</script>

<style scoped></style>
