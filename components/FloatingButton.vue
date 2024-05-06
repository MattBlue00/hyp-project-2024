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
        <i class="icon"></i>
    </div>
    
    <div v-if="isChatOpen" class="chat-window">
        <div class="chat-header">
            <h4 class="chat-title">Chat with Bot</h4>
        </div>
        <div class="chat-messages">
            <p>{{ lastMessage }}</p>
        </div>
        <div class="chat-input">
            <input type="text" placeholder="Type your message here"  @keydown.enter="sendMessageOnEnter" v-model="message"/>
            <button @click="sendMessage" class="send-button">Send</button>
        </div>
    </div>
    

    
</template>


<style scoped>
/* Floating button styles */
.floating-button {
  position: fixed;
  bottom: 5vh;
  right: 3vw;
  width: 4vw;
  height: 4vw;
  background-color: #DA0E5F;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 1; /* Ensure the floating button is below the chat window */
}

.floating-button:hover {
  background-color: #C30753;
}

/* Chat window styles */
.chat-window {
  position: fixed;
  bottom: 20vh;
  right: 5vw;
  width: 300px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 2; /* Ensure the chat window is on top of the floating button */
  display: flex;
  flex-direction: column;
}

.chat-header {
  background-color: #DA0E5F;
  color: #fff;
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
  margin-top: auto; /* Push chat input to the bottom */
  display: flex;
  align-items: center;
}

.chat-input input {
  flex: 1; /* Expand to fill available space */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

.send-button {
  margin-left: 10px;
  padding: 8px 16px;
  background-color: #DA0E5F;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.send-button:hover {
  background-color: #C30753;
}
</style>