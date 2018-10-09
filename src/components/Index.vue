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
        <h4 class="teal-text welcome-name flow-text">Welcome to your home page</h4>
        <label for="name">Enter your name</label>
        <input class="teal-text welcome-name center-align" type="text" name="name" v-model="name"
        v-on:focus="checkName" v-on:keyup="clearFeedback">
        
        <p id="feedback" v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn teal center-align">Enter Chat</button>
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
      name: null,
      feedback: null
    };
  },
  methods: {
    // created a method to check if any characters are entered in the input;
    // if there are, then remove the warning message from enterChat() else statement 'You must enter a name to join the chat'
    checkName() {
      console.log('input focus checkName')
      if(this.name) {
        clearFeedback()
      } else {
        console.log('no chars entered yet...')
      }
    },
    clearFeedback() {
      this.feedback = null
      document.getElementById('feedback').innerText = null
    },
    enterChat() {
      if (this.name) {
        this.$router.push({ name: 'Chat', params: { name: this.name } })
      } else {
        console.log('no characters entered')
        this.feedback = 'You must enter a name to join the chat'
        // setTimeout(function clearFeedback() {
        //   this.feedback = null
        //   document.getElementById('feedback').innerText = null
        // },  1000)  
      }
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

label {
  width: 100%;
}

#feedback {
  margin: 1em 0;
  display: block;
  width: 100%;
}

/* .welcome-name {
  display: inline-flex;
} */

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
