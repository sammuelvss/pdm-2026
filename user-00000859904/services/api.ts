import { DEFAULT_BACK4APP_CONFIG } from '../config/back4app';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { appId, restApiKey, serverUrl } = DEFAULT_BACK4APP_CONFIG;

const headers = {
  'X-Parse-Application-Id': appId,
  'X-Parse-REST-API-Key': restApiKey,
  'Content-Type': 'application/json',
};

export const api = {
  async getAuthHeaders() {
    const sessionToken = await AsyncStorage.getItem('sessionToken');
    if (sessionToken) {
      return { ...headers, 'X-Parse-Session-Token': sessionToken };
    }
    return headers;
  },

  async signUp(userData: any) {
    const response = await fetch(`${serverUrl}/users`, {
      method: 'POST',
      headers,
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Erro no cadastro');
    return data;
  },

  async login(username: string, password: string) {
    // Parse Server aceita POST /login na versão mais recente, mas GET também funciona via query params
    const response = await fetch(`${serverUrl}/login`, {
      method: 'POST',
      headers: {
        ...headers,
        'X-Parse-Revocable-Session': '1',
      },
      body: JSON.stringify({ username, password }),
    });
    
    // Se POST falhar com 404, usa GET
    if (response.status === 404) {
      const getResponse = await fetch(`${serverUrl}/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`, {
        method: 'GET',
        headers: {
          ...headers,
          'X-Parse-Revocable-Session': '1',
        },
      });
      const getData = await getResponse.json();
      if (!getResponse.ok) throw new Error(getData.error || 'Erro no login');
      return getData;
    }

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Erro no login');
    return data;
  },

  async getCurrentUser() {
    const authHeaders = await this.getAuthHeaders();
    const response = await fetch(`${serverUrl}/users/me`, {
      method: 'GET',
      headers: authHeaders,
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Sessão inválida');
    return data;
  },

  async logout() {
    const authHeaders = await this.getAuthHeaders();
    const response = await fetch(`${serverUrl}/logout`, {
      method: 'POST',
      headers: authHeaders,
    });
    await AsyncStorage.removeItem('sessionToken');
    return response.json();
  }
};

