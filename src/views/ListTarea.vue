<template>
  <div class="container">
    <h3 class="p-3 text-center">Vue.js - Display a list of items with v-for</h3>
    <table class="table table-striped table-bordered">
      <thead>
      <tr>
        <th>Name</th>
        <th>Date Create</th>
        <th>Finalizado</th>
        <th>Date end</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="tarea in tareas" :key="tarea.id">
        <td>{{tarea.nombre}} </td>
        <td>{{tarea.fechaCreacion}}</td>
        <td>{{tarea.finalizado}}</td>
        <td>{{tarea.fechaVencimiento}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import  TareaService  from "../services/tarea.service"
export default {
  name: "ListTarea",
  data() {
    return {
      tareas: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",

    };

  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },

  },
  mounted() {
    if (!this.loggedIn) {
      this.$router.push('/login');
    }
    this.retrieveTutorials();
  },
  methods: {
    retrieveTutorials() {
      TareaService.getAllListByUser()
          .then(response => {
            this.tareas = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  }
}
</script>

<style scoped>

</style>
