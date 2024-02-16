<template>
  <div class="appBodyPrincipal">
    <header>
      <h1>To Do List</h1>
    </header>
    <Navbar
    ></Navbar>
    
    <TaskList>
    </TaskList>
  </div>
</template>
<script>
import Navbar from './components/NavBar.vue';
import TaskList from './components/TaskList.vue';

export default {
  components: {
    Navbar,
    TaskList
  }
}
</script>

<style scoped>
.appBodyPrincipal {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
</style>
