import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Platform,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

// Injeção da fonte Carlito sem sobrescrever a fonte dos ícones
if (Platform.OS === 'web' && typeof document !== 'undefined') {
  if (!document.getElementById('carlito-font-css')) {
    const link = document.createElement('link');
    link.id = 'carlito-font-css';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Carlito:ital,wght@0,400;0,700;1,400;1,700&display=swap';
    document.head.appendChild(link);
  }
}

export default function NewPostScreen() {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header Superior */}
      <View style={styles.header}>
        {/* Botão Fechar (X) Circular no Canto Esquerdo */}
        <TouchableOpacity style={styles.closeButton} activeOpacity={0.7}>
          <View style={styles.closeCircle}>
            <Text style={styles.closeX}>✕</Text>
          </View>
        </TouchableOpacity>

        {/* Título Centralizado */}
        <Text style={styles.headerTitle}>Nova publicação</Text>

        {/* Espaço para balancear a centralização do título */}
        <View style={styles.headerRightPlaceholder} />
      </View>

      {/* Conteúdo da Tela */}
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Subtítulo / Pergunta */}
        <Text style={styles.questionText}>O que você está pensando?</Text>

        {/* Campo de Texto (Card) */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Escreva algo..."
            placeholderTextColor="#94A3B8"
            multiline
            value={text}
            onChangeText={setText}
            maxLength={280}
            textAlignVertical="top"
          />
          <Text style={styles.charCounter}>{text.length}/280</Text>
        </View>

        {/* Linha com os 3 Chips de Ações */}
        <View style={styles.chipsRow}>
          {/* Chip Imagem */}
          <TouchableOpacity style={styles.chip} activeOpacity={0.7}>
            <Feather name="image" size={18} color="#0D9488" />
            <Text style={styles.chipText}>Imagem</Text>
          </TouchableOpacity>

          {/* Chip Localização */}
          <TouchableOpacity style={styles.chip} activeOpacity={0.7}>
            <Ionicons name="location-outline" size={19} color="#0D9488" />
            <Text style={styles.chipText}>Localização</Text>
          </TouchableOpacity>

          {/* Chip Sentimento */}
          <TouchableOpacity style={styles.chip} activeOpacity={0.7}>
            <Feather name="smile" size={18} color="#0D9488" />
            <Text style={styles.chipText}>Sentimento</Text>
          </TouchableOpacity>
        </View>

        {/* Botão Publicar */}
        <TouchableOpacity style={styles.publishButton} activeOpacity={0.85}>
          <Text style={styles.publishButtonText}>Publicar</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Barra de Navegação Inferior */}
      <View style={styles.bottomBar}>
        {/* Início */}
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Feather name="home" size={22} color="#64748B" />
          <Text style={styles.navLabel}>Início</Text>
        </TouchableOpacity>

        {/* Criar (Ativo em Azul) */}
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Ionicons name="add-circle-outline" size={26} color="#008CE3" />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Criar</Text>
        </TouchableOpacity>

        {/* Notificações */}
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Ionicons name="notifications-outline" size={23} color="#64748B" />
          <Text style={styles.navLabel}>Notificações</Text>
        </TouchableOpacity>

        {/* Perfil */}
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Feather name="user" size={22} color="#64748B" />
          <Text style={styles.navLabel}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const fontCarlito = Platform.OS === 'web' ? 'Carlito, sans-serif' : 'Carlito';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'web' ? 24 : (Platform.OS === 'android' ? 20 : 12),
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  closeButton: {
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeX: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E293B',
    textAlign: 'center',
    marginTop: Platform.OS === 'web' ? -1 : 0,
  },
  headerTitle: {
    fontFamily: fontCarlito,
    fontSize: 19,
    fontWeight: '700',
    color: '#1E293B',
    letterSpacing: -0.2,
  },
  headerRightPlaceholder: {
    width: 32,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 36,
    paddingBottom: 24,
  },
  questionText: {
    fontFamily: fontCarlito,
    fontSize: 17,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 36,
    letterSpacing: -0.2,
  },
  inputContainer: {
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    minHeight: 270,
    padding: 16,
    justifyContent: 'space-between',
  },
  textInput: {
    fontFamily: fontCarlito,
    fontSize: 16,
    color: '#1E293B',
    lineHeight: 22,
    minHeight: 180,
    padding: 0,
    margin: 0,
    outlineStyle: 'none',
    outlineWidth: 0,
    borderWidth: 0,
  },
  charCounter: {
    fontFamily: fontCarlito,
    alignSelf: 'flex-end',
    fontSize: 13,
    fontWeight: '500',
    color: '#94A3B8',
    marginTop: 8,
  },
  chipsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 999,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
  },
  chipText: {
    fontFamily: fontCarlito,
    fontSize: 13,
    fontWeight: '500',
    color: '#334155',
  },
  publishButton: {
    backgroundColor: '#008CE3',
    borderRadius: 16,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
  },
  publishButtonText: {
    fontFamily: fontCarlito,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    backgroundColor: '#FFFFFF',
    paddingTop: 8,
    paddingBottom: Platform.OS === 'ios' ? 16 : 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  navLabel: {
    fontFamily: fontCarlito,
    fontSize: 11,
    fontWeight: '500',
    color: '#64748B',
    marginTop: 4,
  },
  navLabelActive: {
    color: '#008CE3',
    fontWeight: '600',
  },
});
