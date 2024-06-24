<script setup lang="ts">
/**
 * This component describes the chatbot layout: it consists of a floating button which, on click, will expand
 * into a window where it will be possible to chat with the assistant.
 */
import { ref } from 'vue';
import {Message} from "~/types/Message";

// The first message that will be displayed by the system is contained in an array of messages to be shown
const shownMessages = ref<Message[]>([
  new Message('system', 'Hello! How can I help you today?')
]);

const newMessage = ref<string>(''); // string containing the new message to be sent to the assistant
const isChatOpen = ref<boolean>(false); // boolean which tells us whether the chat is open or not
const showChatHint = ref<boolean>(false); // boolean which tells us whether the hint cloud for the floating button
                                                // is displayed

const messagesContainerRef = ref<HTMLElement | null>(null);

/**
 * This async function will be triggered when the user wants to send a message to the assistant, either by pressing
 * the 'send' key or by clicking the 'Send' button.
 */
const sendMessage = async () => {
  if (newMessage.value.trim() !== '') {
    shownMessages.value.push(new Message('user', newMessage.value)); // push the new message in shownMessages
    scrollToBottom();

    const messageToSend: string = newMessage.value;
    newMessage.value = '';

    await getResponse(messageToSend);
  }
};

/**
 * This async function fetches the answer from the chatbot and displays it in the chat.
 * @param sentMessage The last message the user sent.
 */
const getResponse = async (sentMessage: string) => {

  const newArrayLength = shownMessages.value.push(new Message('assistant', ''));

  try {
    const {
      data: receivedMessage
    } = await useFetch('/api/chatbot/apiProxy', { // Call to the api of OpenAI is done server-side.
      query: {
        context: sentMessage
      }
    });

    if(receivedMessage.value == '' || receivedMessage.value == null){
      shownMessages.value[newArrayLength - 1].role = "system";
      shownMessages.value[newArrayLength - 1].content = "Sorry, at the moment I can't answer. Please, try again later.";
    }
    else {
      shownMessages.value[newArrayLength - 1].content = receivedMessage.value;
    }
  } catch (error) {
    shownMessages.value[newArrayLength - 1].role = "system";
    shownMessages.value[newArrayLength - 1].content = "Sorry, at the moment I can't answer. Please, try again later.";
  }
  finally {
    scrollToBottom();
  }
};

/**
 * Function to toggle the chat open/close state
 */
const toggleChat = async () => {
  isChatOpen.value = !isChatOpen.value;
  showChatHint.value = false;
};

/**
 * Function to scroll to the bottom of the chat with the assistant. Called whenever a message is sent or received.
 */
const scrollToBottom = () => {
  nextTick(() => {
    const messagesContainer = messagesContainerRef.value;
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  });
};

/**
 * We want the cloud hint for the floating button to be shown on mounted, only for a certain amount of time
 */
onMounted(() => {
  const visitedBefore = localStorage.getItem('visitedBefore');
  if (!visitedBefore) {
    showChatHint.value = true;
    localStorage.setItem('visitedBefore', 'true');
    setTimeout(() => {
      showChatHint.value = false;
    }, 7000); // Adjust timeout as needed (1000ms = 1 second)
  }
});

</script>

<template>
  <div class="chatbot">
    <div v-bind:class="['chat-window', {'open': isChatOpen, 'closed': !isChatOpen}]">
      <div class="chat-header">
        <button class="close-btn" @click="toggleChat">Close</button>
        <h3 class="chat-title">SheRiseBot</h3>
      </div>
      <div class="messages" ref="messagesContainerRef">
        <div v-for="(message, index) in shownMessages" :key="index" :class="['message', message.role]">
          <div v-if="message.role==='assistant' && message.content===''" class="ticontainer">
            <div class="tiblock">
              <div class="tidot"></div>
              <div class="tidot"></div>
              <div class="tidot"></div>
            </div>
          </div>
          {{ message.content }}
        </div>
      </div>
      <div class="chat-input">
        <input
            v-model="newMessage"
            @keyup.enter="sendMessage"
            type="text"
            placeholder="Type a message..."
            aria-label="Type a message to chat with the bot"
        />
        <button @click="sendMessage" class="send-button">Send</button>
      </div>
    </div>

    <div v-if="showChatHint" class="chat-prompt">
      <div class="cloud">
        <p>If you need a safe space, </p>
        <p>I'm here for you!</p>
      </div>
    </div>
    <div v-bind:class="['floating-button', {'hidden': isChatOpen}]" @click="toggleChat">
      <Icon name="icon-park-twotone:robot-one" />
    </div>
  </div>
</template>

<style scoped>

/* chat window styling */

.chatbot {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 15;
}

.chat-window {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  transition: all 0.5s ease-in-out;
}

.chat-window.open {
  width: min(max(30vw, 20rem), 95vw);
  height: min(max(80vh, 20rem), 95vh);
  border-radius: 1rem;
}

.chat-window.closed {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.chat-header {
  background-image: var(--gradient-color);
  color: var(--bg-color);
  padding: 0.625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.0625rem solid var(--border-color);
}

.chat-header, .messages, .chat-input {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.chat-window.open .chat-header,
.chat-window.open .messages,
.chat-window.open .chat-input {
  opacity: 1;
}

.close-btn {
  background-color: var(--bg-color);
  color: var(--magenta-color);
  border: none;
  border-radius: 0.75rem;
  padding: 0.3125rem 0.625rem;
  font-size: 0.7rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.close-btn:hover {
  color: var(--hover-color);
}

.chat-title {
  margin: 0;
  font-size: 1.125rem;
}

.messages {
  flex: 1;
  padding: 0.625rem;
  overflow-y: auto;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  color: black;
}

.message {
  margin: 0 0 0.625rem;
  padding: 0.625rem;
  background-color: #D1C4E9;
  border-radius: 0.3125rem;
  max-width: 80%;
  display: inline-block;
}

.message.bot {
  align-self: flex-start;
  margin-right: auto;
}

.message.user {
  background-color: #BBDEFB;
  align-self: flex-end;
  margin-left: auto;
}

.chat-input {
  display: flex;
  padding: 0.625rem;
  border-top: 0.0625rem solid var(--border-color);
  background-color: var(--bg-color);
}

.chat-input input {
  flex: 1;
  padding: 0.625rem;
  border: 0.0625rem solid var(--border-color);
  border-radius: 0.3125rem;
  margin-right: 0.625rem;
}

.chat-input .send-button {
  padding: 0.625rem 0.9375rem;
  background-image: var(--gradient-color);
  color: var(--bg-color);
  border: none;
  border-radius: 0.3125rem;
  cursor: pointer;
  font-weight: 600;
}

.chat-input .send-button:hover {
  background-color: var(--hover-color);
}

/* floating button styling */

.floating-button {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 3rem;
  height: 3rem;
  background-color: var(--orientational-info-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 2.3rem;
  color: var(--bg-color);
  transition: opacity 1s ease-in;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
}

.floating-button.hidden {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-out;
}

.floating-button:hover {
  background-color: var(--hover-color);
}

/* Responsive typing indicator */

.tiblock {
  align-items: center;
  display: flex;
  height: 1rem;
}

.ticontainer .tidot {
  background-color: #90949C;
}

.tidot {
  animation: mercuryTypingAnimation 1.5s infinite ease-in-out;
  -webkit-animation: mercuryTypingAnimation 1.5s infinite ease-in-out;
  border-radius: 50%;
  display: inline-block;
  height: 0.5rem;
  margin-right: 0.125rem;
  width: 0.5rem;
}

@keyframes mercuryTypingAnimation {
  0% {
    transform: translateY(0px);
  }
  28% {
    transform: translateY(-5px);
  }
  44% {
    transform: translateY(0px);
  }
}

@-webkit-keyframes mercuryTypingAnimation {
  0% {
    -webkit-transform: translateY(0px);
  }
  28% {
    -webkit-transform: translateY(-5px);
  }
  44% {
    -webkit-transform: translateY(0px);
  }
}

.tidot:nth-child(1) {
  animation-delay: 200ms;
  -webkit-animation-delay: 200ms;
}

.tidot:nth-child(2) {
  animation-delay: 300ms;
  -webkit-animation-delay: 300ms;
}

.tidot:nth-child(3) {
  animation-delay: 400ms;
  -webkit-animation-delay: 400ms;
}

@keyframes cloudFadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.cloud {
  position: absolute;
  bottom: 4rem;
  right: 0;
  width: max-content;
  background-color: var(--bg-color);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
  animation: cloudFadeIn 1s ease-out forwards;
}

.cloud::after {
  content: '';
  position: absolute;
  bottom: -10px;
  right: 15px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 11px solid var(--bg-color) ;
}

.cloud p {
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
}

.chat-prompt {
  position: relative;
}

</style>