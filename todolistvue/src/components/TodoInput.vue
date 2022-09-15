<template>
  <div id="todoInput">
    <input type="text" v-model="content" @keyup.enter="addTodo" placeholder="Add your todo"/>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  props: {
    name: String
  },
  data(){
    return {
      content: ''
    }
  },
  methods: {
    addTodo() {
      if(this.content != ''){
        alert('등록하였습니다')
        this.$emit('add-to-do', this.content) // $emit(이벤트명, 전달하는 데이터명)
        this.content = ''
      }
    }
  }
}
</script>

<style scoped></style>
