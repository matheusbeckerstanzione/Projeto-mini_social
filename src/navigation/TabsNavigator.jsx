// ========================================
// src/navigation/TabsNavigator.jsx
// Gerenciador de Tabs e sub-telas do Lived:
// - Início (Feed)
// - Criar (Nova Publicação)
// - Notificações
// - Perfil (com navegação para Editar Perfil)
// ========================================
import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { tabsStyles as styles } from '../styles/tabsStyles';

import HomeScreen         from '../app/(tabs)/home';
import CriarScreen        from '../app/(tabs)/criar';
import PubliScreen        from '../app/(tabs)/publi';
import NotificacoesScreen from '../app/(tabs)/notificacoes';
import PerfilScreen       from '../app/(tabs)/perfil';
import EditarPerfilScreen from '../app/editarPerfil';

const TABS = [
  { id: 'home',         label: 'Início',        icon: 'home-outline',          iconActive: 'home' },
  { id: 'criar',        label: 'Criar',         icon: 'add-circle-outline',    iconActive: 'add-circle' },
  { id: 'notificacoes', label: 'Notificações',  icon: 'notifications-outline', iconActive: 'notifications' },
  { id: 'perfil',       label: 'Perfil',        icon: 'person-outline',        iconActive: 'person' },
];

export default function TabsNavigator({ onLogout }) {
  const [tabAtiva, setTabAtiva] = useState('home'); // Inicia na aba Início (Feed)
  const [mostrarDetalhe, setMostrarDetalhe] = useState(false);
  const [mostrarEditarPerfil, setMostrarEditarPerfil] = useState(false);

  // Navegações de sub-telas
  const abrirPublicacao = () => setMostrarDetalhe(true);
  const voltarDoDetalhe = () => setMostrarDetalhe(false);

  const abrirEditarPerfil = () => setMostrarEditarPerfil(true);
  const voltarDoEditarPerfil = () => setMostrarEditarPerfil(false);

  const selecionarTab = (id) => {
    setMostrarDetalhe(false);
    setMostrarEditarPerfil(false);
    setTabAtiva(id);
  };

  // Se estiver editando perfil, exibe a tela cheia de edição (como no mockup sem tabs)
  if (mostrarEditarPerfil) {
    return (
      <EditarPerfilScreen
        onBack={voltarDoEditarPerfil}
        onSave={voltarDoEditarPerfil}
      />
    );
  }

  const renderTela = () => {
    if (mostrarDetalhe) {
      return <PubliScreen onBack={voltarDoDetalhe} />;
    }

    switch (tabAtiva) {
      case 'home':
        return <HomeScreen onOpenPost={abrirPublicacao} />;
      case 'criar':
        return (
          <CriarScreen
            onCancel={() => setTabAtiva('home')}
            onPublished={() => setTabAtiva('home')}
          />
        );
      case 'notificacoes':
        return <NotificacoesScreen />;
      case 'perfil':
        return (
          <PerfilScreen
            onNavigateBack={() => setTabAtiva('home')}
            onEditProfile={abrirEditarPerfil}
          />
        );
      default:
        return <HomeScreen onOpenPost={abrirPublicacao} />;
    }
  };

  return (
    <View style={styles.safeContainer}>
      {/* Tela ativa */}
      <View style={{ flex: 1 }}>{renderTela()}</View>

      {/* Barra de Tabs inferior (4 abas do Mockup) */}
      <SafeAreaView style={styles.tabBarWrapper}>
        <View style={styles.tabBar}>
          {TABS.map((tab) => {
            const ativa = !mostrarDetalhe && tabAtiva === tab.id;
            return (
              <TouchableOpacity
                key={tab.id}
                style={styles.tabItem}
                onPress={() => selecionarTab(tab.id)}
                activeOpacity={0.7}
              >
                <Ionicons
                  name={ativa ? tab.iconActive : tab.icon}
                  size={24}
                  color={ativa ? '#068CD4' : '#94A3B8'}
                />
                <Text style={[styles.tabLabel, ativa && styles.tabLabelActive]}>
                  {tab.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    </View>
  );
}
