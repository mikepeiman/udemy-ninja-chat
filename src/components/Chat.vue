<template>
<div class="chat container">
  <h2 class="center teal-text">{{ this.name }}'s Chat</h2>
  <div class="card">
    <div class="card-content">
      <!-- ul.messages>li*3>span.teal-text{Name}+span.grey-text.text-darken-3{Message}+span.grey-text.time{Timestamp} -->
      <ul class="messages" v-chat-scroll>
        <li v-for="message in messages" :key="message.id">
          <span id="message-name">{{ message.name }}:</span>
          <span id="message-body" class="grey-text text-darken-3">{{ message.content }}</span>
          <span id="message-time" class="grey-text time">{{ message.timestamp }}</span>
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
import moment from 'moment'

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
            timestamp: moment(doc.data().timestamp).format('MMMM Do YYYY, h:mm:ss a')
          })
        }
      })
    })
  }
}
</script>

<style>
.chat {
    max-width: 50vw;
}
.chat h2 {
  font-size: 2.6em;
}

.chat span {
  font-size: 1.4em;
}

#message-name {
  background: #aaccff;
  color: white;
  padding: 0.15em;
  border-radius: 0.15em;
}
#message-time {
  display: flex;
  font-size: 0.8em;
}
.messages {
  text-align: left;
  max-height: 60vh;
  overflow: auto;
}
.messages::-webkit-scrollbar {
  width: 8px;
  background: #eee;
}
.messages::-webkit-scrollcar-track {
  background: #aaa;
}
.messages::-webkit-scrollbar-thumb {
  background: #aaccff;
}

.message>li {
  display: flex;
}
</style>
