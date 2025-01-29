# Frontend for E-Commerce Platform

## Overview
This is the frontend of a modern **E-Commerce Platform**, designed to be fast, scalable, and user-friendly. It includes real-time features, a multilingual interface, and a chatbot assistant for enhanced customer experience.

## Technologies Used
### **Core Technologies**
- **Vite** - Fast build tool for modern JavaScript applications.
- **React** - Component-based JavaScript library for building UIs.
- **TypeScript** - Typed superset of JavaScript for better maintainability.
- **React DOM** - Efficient UI updates using a virtual DOM.

### **State Management**
- **Redux** - Centralized state management.
- **React Redux** - React bindings for Redux.
- **Redux Saga** - Middleware for handling side effects.
- **Redux Persist** - Enables state persistence.

### **Styling & UI Frameworks**
- **Bootstrap** - Pre-built UI components.
- **React Bootstrap** - Bootstrap implementation for React.
- **Tailwind CSS** - Utility-first CSS framework for modern styling.
- **Sass** - CSS preprocessor for styling enhancements.

### **Routing & Internationalization**
- **React Router DOM** - Client-side routing for seamless navigation.
- **i18next** - Internationalization framework.
- **React i18next** - React integration for multilingual support.

### **APIs & Real-Time Features**
- **WebSockets** - Enables real-time data updates.
- **REST APIs** - Fetch and send data between frontend and backend.
- **Chat Assistant (ChatGPT AI)** - AI-powered chatbot integration for customer support.

## Features
- **Modern UI & UX** - Designed with accessibility and responsiveness in mind.
- **Real-Time Data** - WebSockets & APIs for instant updates.
- **Multilingual Support** - Seamless language switching.
- **Global State Management** - Powered by Redux and Redux Saga.
- **Optimized Performance** - Vite and TypeScript for a fast, scalable application.
- **AI Chat Assistant** - Chatbot integration using OpenAI’s API.

## Setup & Installation
### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/your-repo/ecommerce-frontend.git
cd ecommerce-frontend
```

### 2️⃣ **Install Dependencies**
```bash
yarn install  # or npm install
```

### 3️⃣ **Run the Development Server**
```bash
yarn dev  # or npm run dev
```
The application will be available at `http://localhost:5173/`

### 4️⃣ **Environment Variables**
Create a `.env` file in the root directory and configure the API keys:
```
VITE_OPENAI_API_KEY=your-api-key
VITE_BACKEND_URL=http://localhost:3001
```

### 5️⃣ **Build for Production**
```bash
yarn build  # or npm run build
```
#  Backend with AI Chat Assistant

This backend service powers an e-commerce platform with an integrated AI chat assistant using the DeepSeek-R1-7B language model.

## Overview

The backend provides:
- REST API endpoints for core e-commerce operations
- AI-powered chat assistance using DeepSeek-R1-7B model
- Secure communication between frontend and AI model
- Conversation history management
- Response processing and sanitization

## Key Technologies

### AI Components
- **DeepSeek-R1-7B Model**
  - 7 billion parameter open-source language model
  - Fine-tuned for conversational AI and task completion
  - Capabilities: Natural language understanding, contextual responses, multilingual support
  - [DeepSeek GitHub](https://github.com/deepseek-ai)

- **Ollama**
  - Local LLM management and serving
  - Used to run DeepSeek model locally
  - Provides REST API for model interactions
  - [Ollama Documentation](https://ollama.ai)

### Backend Stack
- **Node.js** (v18+) - JavaScript runtime
- **Express.js** - Web framework
- **Axios** - HTTP client for Ollama API calls
- **CORS** - Cross-Origin Resource Sharing middleware

## Architecture

```mermaid
sequenceDiagram
    Frontend->>Backend: POST /api/chat (prompt)
    Backend->>Ollama: Forward request with model params
    Ollama->>DeepSeek: Process prompt
    DeepSeek->>Ollama: Generate response
    Ollama->>Backend: Return raw response
    Backend->>Frontend: Sanitized response
