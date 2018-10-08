<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>About Page</h2>
    <ul>
      <li>
        <router-link :to="{ name: 'Index' }">
          <i class="material-icons edit">Home</i>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }">
          <i class="material-icons edit">About</i>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Contact' }">
          <i class="material-icons edit">Contact</i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'You are an app developer, Michael Peiman'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
