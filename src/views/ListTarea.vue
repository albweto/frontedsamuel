<template>
  <div class="container pt-5">
    <table class="table table-striped table-bordered ">
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
        <td>
          <button class="btn btn-danger" :disabled="loading" @click="deleteTarea(tarea.id)" >
            eliminar
          </button>
        </td>
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
      message: "",
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
    this.retrieveTareas();
  },
  methods: {
    retrieveTareas() {
      TareaService.getAllListByUser()
          .then(response => {
            this.tareas = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    deleteTarea(id){
      TareaService.deleteTarea(id).then(response =>{
        this.message = response.data.mensaje;
        this.$toast.info(this.message);
        this.retrieveTareas()
      })
          .catch(e => {
            this.$toast.error(e.messageerror)
          });
    }

  }
}
</script>

<style scoped>

</style>
