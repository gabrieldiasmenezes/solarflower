// AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';

type AuthContextType = {
  idUsuario: number | null;
  setIdUsuario: (id: number | null) => void;
};

const AuthContext = createContext<AuthContextType>({
  idUsuario: null,
  setIdUsuario: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [idUsuario, setIdUsuario] = useState<number | null>(null);

  return (
    <AuthContext.Provider value={{ idUsuario, setIdUsuario }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
