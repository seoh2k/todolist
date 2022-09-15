<template>
  <div id="todoInput">
    <h1>{{ name }}</h1>
    <input type="text" v-model="content" @keyup.enter="addTodo"/>
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
      alert('등록하였습니다')
      this.$emit('add-to-do', this.content) // $emit(이벤트명, 전달하는 데이터명)
      this.content = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
