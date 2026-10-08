/**
 * Configuração padrão do Back4App (Parse Server)
 * 
 * Preencha com suas credenciais obtidas no painel do Back4App:
 * Dashboard -> App Settings -> Security & Keys -> "Application ID" e "REST API Key"
 */

export interface Back4AppConfig {
  appId: string;
  restApiKey: string;
  serverUrl: string;
}

export const DEFAULT_BACK4APP_CONFIG: Back4AppConfig = {
  // Substitua pelos seus valores do Back4App ou utilize a tela de Configurações no próprio app
  appId: 'FSu5D2O2ryA4EsMQgVfGLE4xMgCu7fm5hitnjhql',
  restApiKey: 'i1XPmrWB0OVoDqeB1yC6fOqEw8yEAXvkvW6OrJsf',
  serverUrl: 'https://parseapi.back4app.com',
};

