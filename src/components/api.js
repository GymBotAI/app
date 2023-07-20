// chatGptService.js

import axios from 'axios';

const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const chatGptEndpoint = 'https://api.openai.com/v1/chat/completions';

async function getChatGptResponse(userMessage, chatHistory = []) {
  try {
    const messages = [
      { role: 'system', content: 'You are GymBot, an AI personal trainer.' },
      ...chatHistory,
      { role: 'user', content: userMessage },
    ];

    const response = await axios.post(
      chatGptEndpoint,
      {
        model: 'gpt-3.5-turbo',
        messages: messages,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    const chatGptReply = response.data.choices[0].message.content;
    return chatGptReply;
  } catch (error) {
    console.error('Error calling ChatGPT API:', error);
    return 'Sorry, an error occurred.';
  }
}

export default getChatGptResponse;
