import { useEffect } from 'react';

export default function WatsonChat() {
  useEffect(() => {
    // Verifica se o chatbot já está carregado para evitar múltiplas instâncias
    if (!window.watsonAssistantChatOptions) {
      window.watsonAssistantChatOptions = {
        integrationID: "de467665-765c-4666-8cc2-917966c46e1a", // The ID of this integration.
        region: "au-syd", // The region your integration is hosted in.
        serviceInstanceID: "ee903995-e4ad-4116-9513-5f8796e5f7ce", // The ID of your service instance.
        onLoad: async (instance) => { await instance.render(); }
      };
      setTimeout(function(){
        const t=document.createElement('script');
        t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
        document.head.appendChild(t);
      });
    }
  }, []);

  return null; // Retorna null já que não precisamos renderizar nada
}
