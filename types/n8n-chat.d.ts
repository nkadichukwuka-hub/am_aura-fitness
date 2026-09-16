declare module "@n8n/chat" {
  export interface ChatOptions {
    webhookUrl: string;
    webhookConfig?: { method?: string; headers?: Record<string, string> };
    target?: string;
    mode?: "window" | "fullscreen";
    chatInputKey?: string;
    chatSessionKey?: string;
    loadPreviousSession?: boolean;
    metadata?: Record<string, unknown>;
    showWelcomeScreen?: boolean;
    defaultLanguage?: string;
    initialMessages?: string[];
    i18n?: Record<
      string,
      {
        title?: string;
        subtitle?: string;
        footer?: string;
        getStarted?: string;
        inputPlaceholder?: string;
      }
    >;
    enableStreaming?: boolean;
    allowFileUploads?: boolean;
    allowedFilesMimeTypes?: string;
  }

  export function createChat(options: ChatOptions): void;
}

declare module "@n8n/chat/style.css";
