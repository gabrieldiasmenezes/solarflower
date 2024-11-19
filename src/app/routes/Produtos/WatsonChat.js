import { useEffect } from 'react';

export default function WatsonChat() {
  useEffect(() => {
    // Verifica se o chatbot já está carregado para evitar múltiplas instâncias
    if (!window.watsonAssistantChatOptions) {
      window.watsonAssistantChatOptions = {
        integrationID: 'c2b25180-7633-4f2e-bb43-d55d9ae75c58', // O ID da sua integração
        region: 'au-syd', // A região onde sua integração está hospedada
        serviceInstanceID: 'ee903995-e4ad-4116-9513-5f8796e5f7ce', // O ID da instância de serviço
        onLoad: async (instance) => {
          await instance.render();
        },
      };

      setTimeout(() => {
        const script = document.createElement('script');
        script.src =
          'https://web-chat.global.assistant.watson.appdomain.cloud/versions/' +
          (window.watsonAssistantChatOptions.clientVersion || 'latest') +
          '/WatsonAssistantChatEntry.js';
        document.head.appendChild(script);
      }, 0);
    }
  }, []);

  return null; // Retorna null já que não precisamos renderizar nada
}
