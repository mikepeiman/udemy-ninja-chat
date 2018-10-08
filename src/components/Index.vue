<template>
<div class="hello">
  <ul class="nav">
    <li>
      <router-link :to="{ name: 'Index' }">
        <i class="nav-menu-item">Home</i>
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'About' }">
        <i class="nav-menu-item">About</i>
      </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'Contact' }">
        <i class="nav-menu-item">Contact</i>
      </router-link>
    </li>
  </ul>
  <div class="card">
    <div class="card-content center-align">
      <form class="welcome-form" @submit.prevent="enterChat">
        <h4 class="teal-text welcome-name">Welcome,
        <input class="teal-text welcome-name" type="text" name="name" v-model="name">
        , to your home page</h4>

        <!-- <label for="name">Enter your name</label> -->

        <button class="btn teal">Enter Chat</button>
      </form>
    </div>
  </div>
  <h4>{{ msg }}</h4>
</div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      msg: "You are an app developer, Michael Peiman",
      name: null
    };
  },
  methods: {
    enterChat() {
      console.log(this.name);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.hello {
  display: flex;
  flex-direction: column;
}

.card {
  max-width: 40vw;
  min-width: 400px;
  align-self: center;
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.welcome-form {
  display: inline-flex;
  flex-wrap: wrap;
}
.welcome-name {
  display: inline-flex;
}

h1,
h2 {
  font-weight: normal;
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
