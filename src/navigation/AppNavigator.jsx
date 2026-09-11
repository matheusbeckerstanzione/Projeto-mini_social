// ========================================
// src/navigation/AppNavigator.jsx
// Navegação manual entre telas (sem Expo Router)
// ========================================
import React, { useState } from 'react';

import IndexScreen       from '../app/index';
import LoginScreen       from '../app/login';
import CadastroScreen    from '../app/cadastro';
import EsqueceuSenha     from '../app/esqueceuSenha';

// Tabs
import TabsNavigator     from './TabsNavigator';

export default function AppNavigator() {
  const [tela, setTela]       = useState('index'); // inicia na tela de apresentação/boas-vindas
  const [historico, setHist]  = useState([]);       // pilha de navegação

  const navPush = (destino) => {
    setHist((prev) => [...prev, tela]);
    setTela(destino);
  };

  const navBack = () => {
    if (historico.length === 0) return;
    const anterior = historico[historico.length - 1];
    setHist((prev) => prev.slice(0, -1));
    setTela(anterior);
  };

  const navReplace = (destino) => {
    setHist([]);
    setTela(destino);
  };

  switch (tela) {
    case 'index':
      return (
        <IndexScreen
          onNavigate={navPush}
        />
      );

    case 'login':
      return (
        <LoginScreen
          onNavigateBack={navBack}
          onNavigateTo={navPush}
          onLoginSuccess={() => navReplace('tabs')}
        />
      );

    case 'cadastro':
      return (
        <CadastroScreen
          onNavigateBack={navBack}
          onNavigateTo={navPush}
          onRegisterSuccess={() => navReplace('tabs')}
        />
      );

    case 'esqueceuSenha':
      return (
        <EsqueceuSenha
          onNavigateBack={navBack}
        />
      );

    case 'tabs':
      return (
        <TabsNavigator
          onLogout={() => navReplace('index')}
        />
      );

    default:
      return <IndexScreen onNavigate={navPush} />;
  }
}
