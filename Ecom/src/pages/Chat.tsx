import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Card, InputGroup, Container } from "react-bootstrap";

type Message = {
  text: string;
  isUser: boolean;
};

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const initializeChat = async () => {
      try {
        setIsLoading(true);
        const response = await axios.post("http://localhost:3001/api/chat", { 
          prompt: "" 
        });
        setMessages([{ text: response.data.response, isUser: false }]);
      } catch (error) {
        console.error("Initialization error:", error);
        setMessages([{ 
          text: "Failed to initialize chat. Please refresh the page.", 
          isUser: false 
        }]);
      } finally {
        setIsLoading(false);
      }
    };
    initializeChat();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    try {
      setIsLoading(true);
      const userMessage = { text: input, isUser: true };
      
      const response = await axios.post("http://localhost:3001/api/chat", {
        prompt: input,
      });

      setMessages(prev => [
        ...prev,
        userMessage,
        { text: response.data.response, isUser: false }
      ]);
      setInput("");
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [
        ...prev,
        { text: "Error getting response. Please try again.", isUser: false }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="chat-container shadow-lg">
        <Card.Header className="chat-header">Chat Assistant</Card.Header>
        <Card.Body className="chat-body">
          <div className="messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.isUser ? "user" : "bot"}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
          </div>
        </Card.Body>
        <Card.Footer className="chat-footer">
          <Form onSubmit={handleSubmit} className="d-flex">
            <InputGroup>
              <Form.Control
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="chat-input"
                disabled={isLoading}
              />
              <Button 
                variant="primary" 
                type="submit" 
                className="send-button"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </Button>
            </InputGroup>
          </Form>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Chat;