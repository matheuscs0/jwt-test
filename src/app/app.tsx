'use client'
import { AuthProvider } from './contexts/AuthContext'; // Importe seu AuthProvider aqui
 // Seu arquivo de estilos globais

  function MyApp({children}) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}

export default MyApp;