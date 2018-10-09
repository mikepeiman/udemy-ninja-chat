<template>
<div class="chat container">
  <h2 class="center teal-text">{{ this.name }}'s Chat</h2>
  <div class="card">
    <div class="card-content">
      <!-- ul.messages>li*3>span.teal-text{Name}+span.grey-text.text-darken-3{Message}+span.grey-text.time{Timestamp} -->
      <ul class="messages">
        <li>
          <span class="teal-text">Name</span>
          <span class="grey-text text-darken-3">Message</span>
          <span class="grey-text time">Timestamp</span>
        </li>
      </ul>

    </div>
    <div class="card-action">
      <NewMessage :name="name" /> <!-- note the colon for data binding -->
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'

export default {
  name: 'Chat',
  props: ['name'],
  components: { // register other included components
    NewMessage
  },
  data() {
    return {

    }
  }
}
</script>

<style>
.chat h2 {
  font-size: 2.6em;
}

.chat span {
  font-size: 1.4em;

}

.chat .time {
  display: flex;
}

.message>li {
  display: flex;
}
</style>
