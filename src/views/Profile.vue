<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.nombreUsuario}}</strong> Profile
      </h3>
    </header>

    <strong>Authorities:</strong>
    <ul>
      <li v-for="role in currentUser.authorities" :key="role">{{role.authority}}</li>
    </ul>
  </div>
</template>

<script>
console.log(localStorage.getItem('user'));
export default {
  name: 'Profile',
  computed: {

    currentUser() {
      return this.$store.state.auth.user;
    }
  },

  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};

</script>
