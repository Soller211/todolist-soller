<template>
  <div class="appBodyPrincipal">
    <header>
      <h3>To Do List</h3>
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
  background-color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}


header {
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid #ddd;
}

header h3 {
  margin: 0;
  font-size: 24px;
  margin-left: 10px;
}
</style>
