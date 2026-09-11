// ========================================
// src/app/(tabs)/notificacoes.jsx  ← Notificações (Screen 3 do novo conjunto)
// ========================================
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { tabsStyles as styles } from '../../styles/tabsStyles';

const NOTIFICACOES_LISTA = [
  {
    id: '1',
    tipo: 'curtida',
    nome: 'João Silva',
    acao: 'curtiu sua publicação.',
    tempo: '10:30',
  },
  {
    id: '2',
    tipo: 'comentario',
    nome: 'Maria Oliveira',
    acao: 'comentou sua publicação.',
    tempo: '09:45',
  },
  {
    id: '3',
    tipo: 'seguidor',
    nome: 'Carlos Lima',
    acao: 'começou a seguir você.',
    tempo: 'Ontem',
  },
  {
    id: '4',
    tipo: 'curtida',
    nome: 'Ana Paula',
    acao: 'curtiu sua publicação.',
    tempo: 'Ontem',
  },
  {
    id: '5',
    tipo: 'comentario',
    nome: 'Lucas',
    acao: 'comentou sua publicação.',
    tempo: '2 dias atrás',
  },
];

export default function NotificacoesScreen() {
  const renderBadge = (tipo) => {
    switch (tipo) {
      case 'curtida':
        return (
          <View style={[styles.notifBadgeCircle, styles.notifBadgeHeartBg]}>
            <Ionicons name="heart-outline" size={20} color="#EF4444" />
          </View>
        );
      case 'comentario':
        return (
          <View style={[styles.notifBadgeCircle, styles.notifBadgeCommentBg]}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={19}
              color="#0284C7"
            />
          </View>
        );
      case 'seguidor':
        return (
          <View style={[styles.notifBadgeCircle, styles.notifBadgeFollowBg]}>
            <Ionicons name="person-add-outline" size={19} color="#0284C7" />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Header Notificações */}
      <View style={styles.notifHeader}>
        <Text style={styles.notifHeaderTitle}>Notificações</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.notifList}
      >
        {NOTIFICACOES_LISTA.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.notifCard}
            activeOpacity={0.8}
          >
            {/* Ícone com fundo colorido */}
            {renderBadge(item.tipo)}

            {/* Texto da Notificação */}
            <View style={styles.notifTextContainer}>
              <Text style={styles.notifMessage}>
                <Text style={styles.notifUserName}>{item.nome} </Text>
                {item.acao}
              </Text>
              <Text style={styles.notifTimestamp}>{item.tempo}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
