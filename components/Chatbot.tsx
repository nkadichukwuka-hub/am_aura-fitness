"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

export function Chatbot() {
  useEffect(() => {
    createChat({
      webhookUrl: "/api/chat", // answered by app/api/chat/route.ts (Gemini)
      mode: "window",
      showWelcomeScreen: false,
      loadPreviousSession: false,
      initialMessages: [
        "Hi there! 👋",
        "I'm the Am'aura's Fitness assistant. Ask me about classes, trainers, or membership.",
      ],
      i18n: {
        en: {
          title: "Am'aura's Fitness",
          subtitle: "Ask about classes, trainers, or membership.",
          footer: "",
          getStarted: "New Conversation",
          inputPlaceholder: "Type your question...",
        },
      },
    });
  }, []);

  return null;
}
