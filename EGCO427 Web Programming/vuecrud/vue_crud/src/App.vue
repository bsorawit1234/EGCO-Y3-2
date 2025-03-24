<script>
export default {
  name: "App",
  methods: {
    logout() {
      alert("LOGOUT");
    },
  },
};
</script>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/users">Users</router-link> |
      <button class="btn btn-success btn-block full-width" @click="logout">
        Logout
      </button>
    </div>
  </div>
  <router-view />
</template>
