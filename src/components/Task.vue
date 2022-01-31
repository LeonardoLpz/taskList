<template>
  <div class="task">
    <ul>
      <li v-for="(task,index) in tasks" :key=index>
        <input type="text" 
              :placeholder="task.message" 
              :v-model="task.message" 
              >
        <button @click="removeTaskByIndex(index)">delete</button>
      </li>
    </ul>
    <div>
      <label for="newtask">Nueva tarea</label>
      <input id="newTask" 
              name="newTask" 
              type="text" 
              v-model="newTask" >
      <button @click="addTask">Agregar Tarea</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Task',
  data() {
    return {
      newTask: '',
      isEditing:false
    };
  },
  computed: {
    ...mapState( 'task', ['tasks'])
  },
  methods: {
    
    addTask() {
      this.$store.dispatch('task/addTask', this.newTask);
      this.newTask = '';
    },
    removeTaskByIndex(task) {
      this.$store.dispatch('task/removeTaskByIndex', task);
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
