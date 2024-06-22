<script setup lang="ts">
import { ref } from 'vue';
import {Message} from "~/types/Message";

const shownMessages = ref<Message[]>([
  new Message('system', 'Hello! How can I help you today?')
]);

const newMessage = ref<string>('');
const isChatOpen = ref<boolean>(false);

const sendMessage = async () => {
  if (newMessage.value.trim() !== '') {
    shownMessages.value.push(new Message('user', newMessage.value));
    await getResponse(newMessage.value);
    newMessage.value = '';
  }
};

const getResponse = async (sentMessage: string) => {
  try {
    const {
      data: receivedMessage
    } = await useFetch('/api/chatbot/apiProxy', {
      query: {
        context: sentMessage
      }
    });

    if (receivedMessage != null) {
      shownMessages.value.push(new Message('assistant', receivedMessage.value));
    }
  } catch (error) {
    shownMessages.value.push(new Message(
        'system',
        "Sorry, at the moment I can't answer. Please, try again later.",
    ))
  }
};

// Function to toggle the chat open/close state
const toggleChat = async () => {
  isChatOpen.value = !isChatOpen.value;
};

</script>

<template>
  <div class="chatbot">
    <div v-if="isChatOpen" class="chat-window">
      <div class="chat-header">
        <button class="close-btn" @click="toggleChat">Close</button>
        <h3 class="chat-title">SheRiseBot</h3>
      </div>
      <div class="messages">
        <div v-for="(message, index) in shownMessages" :key="index" :class="['message', message.role]">
          {{ message.content }}
        </div>
      </div>
      <div class="chat-input">
        <input
            v-model="newMessage"
            @keyup.enter="sendMessage"
            type="text"
            placeholder="Type a message..."
        />
        <button @click="sendMessage" class="send-button">Send</button>
      </div>
    </div>

    <div v-else class="floating-button" @click="toggleChat">
      <Icon name="icon-park-twotone:robot-one" />
    </div>
  </div>
</template>

<style scoped>

.chatbot {
  position: fixed;
  bottom: 1.25rem; /* 20px */
  right: 1.25rem; /* 20px */
}

.chat-window {
  width: 30vw;
  height: 80vh;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}

.chat-header {
  background-image: var(--gradient-color);
  color: #fff;
  padding: 0.625rem; /* 10px */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.0625rem solid #ddd; /* 1px */
}

.close-btn {
  background-color: #fff;
  color: var(--nbar-color);
  border: none;
  border-radius: 0.75rem; /* 12px */
  padding: 0.3125rem 0.625rem; /* 5px 10px */
  font-size: 0.75rem; /* 12px */
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.close-btn:hover {
  color: var(--hover-color);
}

.chat-title {
  margin: 0;
  font-size: 1.125rem; /* 18px */
}

.messages {
  flex: 1;
  padding: 0.625rem; /* 10px */
  overflow-y: auto;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
}

.message {
  margin: 0 0 0.625rem; /* 0 0 10px */
  padding: 0.625rem; /* 10px */
  background-color: #e0e0e0;
  border-radius: 0.3125rem; /* 5px */
  max-width: 80%;
  display: inline-block;
}

.message.bot {
  background-color: #d1c4e9;
  align-self: flex-start;
  margin-right: auto;
}

.message.user {
  background-color: #bbdefb;
  align-self: flex-end;
  margin-left: auto;
}

.chat-input {
  display: flex;
  padding: 0.625rem; /* 10px */
  border-top: 0.0625rem solid #ddd; /* 1px */
  background-color: #fff;
}

.chat-input input {
  flex: 1;
  padding: 0.625rem; /* 10px */
  border: 0.0625rem solid #ddd; /* 1px */
  border-radius: 0.3125rem; /* 5px */
  margin-right: 0.625rem; /* 10px */
}

.chat-input .send-button {
  padding: 0.625rem 0.9375rem; /* 10px 15px */
  background-image: var(--gradient-color);
  color: #fff;
  border: none;
  border-radius: 0.3125rem; /* 5px */
  cursor: pointer;
}

.chat-input .send-button:hover {
  background-color: var(--hover-color);
}

.floating-button {
  position: fixed;
  bottom: 5vh;
  right: 3vw;
  width: 3rem;
  height: 3rem;
  background-color: var(--orientational-info-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 1;
  font-size: 2.3rem;
  color: var(--bg-color);
}

.floating-button:hover {
  background-color: var(--hover-color);
}

</style>