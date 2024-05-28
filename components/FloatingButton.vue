<script setup lang="ts">
    import { ref } from 'vue';
    import { defineExpose } from 'vue';

    const isChatOpen = ref(false);
    const message = ref('');
    const lastMessage = ref('');

    const toggleChat = () => {
        isChatOpen.value = !isChatOpen.value;
    };

    defineExpose({ toggleChat, isChatOpen });

    const sendMessage = () => {
        if (message.value.trim() !== '') {
            lastMessage.value = message.value;
            message.value = '';
        }
    };

    const sendMessageOnEnter = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

</script>

<template>
    <div class="floating-button" @click="toggleChat">
      <Icon name="icon-park-twotone:robot-one" />
    </div>
    
    <transition name="slide-up">
      <div v-if="isChatOpen" class="chat-window">
        <!-- Chat content -->
        <div class="chat-header">
          <span class="close-btn" @click="toggleChat">&times;</span>
          <h2 class="chat-title">Chat with Bot</h2>
        </div>
        <div class="chat-messages">
          <p>{{ lastMessage }}</p>
        </div>
        <div class="chat-input">
          <input type="text" placeholder="Type your message here" @keydown.enter="sendMessageOnEnter" v-model="message" />
          <button @click="sendMessage" class="send-button">Send</button>
        </div>
      </div>
    </transition>
    

    
</template>


<style scoped>
/* Floating button styles */
.floating-button {
  position: fixed;
  bottom: 5vh;
  right: 3vw;
  width: 4vw;
  height: 4vw;
  background-color: var(--orientational-info-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 1;
  font-size: 2.3rem;
  color:var(--bg-color);
}

.floating-button:hover {
  background-color: var(--hover-color);
}

.chat-window {
  position: fixed;
  bottom: 20vh;
  right: 5vw;
  width: 300px;
  background-color: var(--bg-color);
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.3s ease;
}

.slide-up-enter, .slide-up-leave-to {
  transform: translateY(100%);
}

.slide-up-leave, .slide-up-enter-to {
  transform: translateY(0%);
}

.chat-header {
  background-color: var(--nbar-color);
  color: var(--bg-color);
  padding: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-btn {
  cursor: pointer;
  font-size: 20px;
}

.chat-title {
  margin: 0;
}

.chat-messages {
  padding: 10px;
  height: 200px;
  overflow-y: auto;
}

.chat-input {
  padding: 10px;
  margin-top: auto;
  display: flex;
  align-items: center;
}

.chat-input input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

.send-button {
  margin-left: 10px;
  padding: 8px 16px;
  background-color: var(--nbar-color);
  color: var(--bg-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.send-button:hover {
  background-color: var(--hover-color);
}
</style>