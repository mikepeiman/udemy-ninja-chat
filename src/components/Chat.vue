<template>
<div class="chat container">
  <h2 class="center teal-text">{{ this.name }}'s Chat</h2>
  <div class="card">
    <div class="card-content">
      <!-- ul.messages>li*3>span.teal-text{Name}+span.grey-text.text-darken-3{Message}+span.grey-text.time{Timestamp} -->
      <ul class="messages">
        <li v-for="message in messages" :key="message.id">
          <span class="teal-text">{{ message.name }}</span>
          <span class="grey-text text-darken-3">{{ message.content }}</span>
          <span class="grey-text time">{{ message.timestamp }}</span>
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
import db from '@/firebase/init'

export default {
  name: 'Chat',
  props: ['name'],
  components: { // register other included components
    NewMessage
  },
  data() {
    return {
      messages: []
    }
  },
  created() {
    let ref = db.collection('messages').orderBy('timestamp')
    console.log('db ref: ', ref)
    ref.onSnapshot(snapshot => {
      console.log(snapshot.docChanges()) // for Firebase v5+
      snapshot.docChanges().forEach(change => {
        if(change.type == 'added') {
          let doc = change.doc
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: doc.data().timestamp
          })
        }
      })
    })
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
.messages {
  text-align: left;
}

.message>li {
  display: flex;
}
</style>
