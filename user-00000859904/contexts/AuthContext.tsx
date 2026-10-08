import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';

type User = {
  objectId: string;
  username: string;
  email?: string;
  createdAt: string;
  updatedAt: string;
  sessionToken: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signIn: (userData: User) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const sessionToken = await AsyncStorage.getItem('sessionToken');
      
      if (sessionToken) {
        try {
          const userData = await api.getCurrentUser();
          setUser({ ...userData, sessionToken });
        } catch (error) {
          console.error("Token inválido", error);
          await AsyncStorage.removeItem('sessionToken');
        }
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = async (userData: User) => {
    await AsyncStorage.setItem('sessionToken', userData.sessionToken);
    setUser(userData);
  };

  const signOut = async () => {
    try {
      await api.logout();
    } catch (e) {
      console.error(e);
    } finally {
      await AsyncStorage.removeItem('sessionToken');
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

