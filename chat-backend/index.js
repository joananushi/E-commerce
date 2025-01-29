const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

let isFirstInteraction = true; // Track initial interaction

app.post('/api/chat', async (req, res) => {
  try {
    let prompt = req.body.prompt;
    const isInitialRequest = !prompt?.trim();
    
    // System prompt with conversation rules
    const SYSTEM_PROMPT = `<|system|>
You are DeepSeek-R1, a helpful AI assistant that operates in an e-commerce website. You will help users to find their desired products. Follow these rules:
1. ${isInitialRequest ? 'Start with a friendly greeting' : 'Continue the conversation naturally'}
2. Never repeat previous responses
3. Keep responses relevant to user input
</s>`;


    const userPrompt = isInitialRequest ? 
      `<|user|>\nInitialize conversation</s>\n<|assistant|>` :
      `<|user|>\n${prompt}</s>\n<|assistant|>`;

    const fullPrompt = `${SYSTEM_PROMPT}${userPrompt}`;

    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'deepseek-r1:7b',
      prompt: fullPrompt,
      stream: false,
      options: {
        temperature: 0.7,
        max_tokens: 500,
        stop: ['</s>', '<|endoftext|>']
      }
    });

    let cleanResponse = response.data.response
      .replace(/<think>[\s\S]*?<\/think>/gi, '')
      .replace(/\n+/g, ' ')
      .trim();

    // Apply greeting only for first interaction if response is empty
    if (isInitialRequest && !cleanResponse) {
      cleanResponse = "Hello! How can I assist you today?";
      isFirstInteraction = false;
    }

    res.json({ response: cleanResponse });
    
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Please try your question again',
      details: isFirstInteraction ? 'Initial connection failed' : 'Response generation error'
    });
  }
});

app.listen(3001, () => console.log('Backend running on port 3001'));