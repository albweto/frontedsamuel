<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
          id="profile-img"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          class="profile-img-card"
          alt="avatar"
      >
        <div v-if="!successful">
          <div class="form-group">
            <label for="name">Name</label>
            <input name="name" type="text" id="name" v-model="tarea.name" class="form-control"/>
            <ErrorMessage name="name" class="error-feedback"/>
          </div>
          <div class="form-group">
            <label for="datecreate" >FechaCreacion</label>
            <Field name="datecreate" id="datecreate" type="date" v-model="tarea.datecreate" class="form-control"/>
            <ErrorMessage name="datecreate" class="error-feedback"/>
          </div>
          <div class="form-group">
            <label for="finalizado">finalizado</label>
            <input name="finalizado" id="finalizado" type="checkbox" v-model="tarea.finalizado" class="form-check-input"/>
            <ErrorMessage name="finalizado" class="error-feedback"/>
          </div>
          <div class="form-group">
            <label for="fechavencimiento">fechaVencimiento</label>
            <input name="fechavencimiento"  id="fechavencimiento" type="date" v-model="tarea.fechavencimiento" class="form-control"/>
            <ErrorMessage name="fechavencimiento" class="error-feedback"/>
          </div>
          <div class="form-group pt-3">
            <button class="btn btn-primary btn-block" :disabled="loading" @click="saveTarea">
              <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
              ></span>
              Create
            </button>
          </div>
        </div>
      <div
          v-if="message"
          class="alert"
          :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import { Field, ErrorMessage} from "vee-validate";
import  TareaService  from "../services/tarea.service"
export default {

  name: "RegisterTarea",
  components: {
    Field,
    ErrorMessage,
  },
  data() {

    return {
      successful: false,
      loading: false,
      message: "",
      tarea: {
        fechavencimiento: "",
        name: "",
        fechacreacion: "",
        finalizado: false
      }
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.loggedIn) {
      this.$router.push('/login');
    }
  },
  methods: {
    saveTarea(){
      this.message = "";
      this.successful = false;
      this.loading = true;
      var data = {
        nombre: this.tarea.name,
        finalizado: this.tarea.finalizado,
        fechaVencimiento: this.tarea.fechavencimiento,
        fechaCreacion: this.tarea.datecreate,
        nombreUsuario: this.currentUser.nombreUsuario
      };
      console.log(data)
      TareaService.registerTarea(data)
          .then(response => {
            this.message = response.data.mensaje;
            this.successful = true;
            this.loading = false;
            this.$router.push("/tarea/list");
            console.log(response.data.mensaje);
          })
          .catch(e => {
            console.log(e.message);
          });
    }
  }

}
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>
