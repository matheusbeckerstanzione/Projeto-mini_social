// ========================================
// src/app/(tabs)/criar.jsx  ← Create Post Screen (Screen 3: Nova publicação)
// ========================================
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { tabsStyles as styles } from '../../styles/tabsStyles';

export default function CriarScreen({ onCancel, onPublished }) {
  const [texto, setTexto] = useState('');
  const [tagAtiva, setTagAtiva] = useState(null);

  const toggleTag = (tag) => {
    setTagAtiva((prev) => (prev === tag ? null : tag));
  };

  const handlePublicar = () => {
    if (!texto.trim()) {
      Alert.alert('Atenção', 'Escreva algo para publicar!');
      return;
    }
    Alert.alert('Publicado!', 'Sua nova publicação está no ar! 🎉', [
      {
        text: 'OK',
        onPress: () => {
          setTexto('');
          setTagAtiva(null);
          if (onPublished) onPublished();
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Cabeçalho Nova publicação */}
      <View style={styles.createHeader}>
        <TouchableOpacity
          style={styles.createCloseButton}
          onPress={onCancel}
          activeOpacity={0.7}
        >
          <Ionicons name="close-circle-outline" size={26} color="#0F172A" />
        </TouchableOpacity>

        <Text style={styles.createHeaderTitle}>Nova publicação</Text>
      </View>

      <View style={styles.createBody}>
        {/* Pergunta / Subtítulo */}
        <Text style={styles.createPromptText}>O que você está pensando?</Text>

        {/* Caixa de Texto de Entrada com Contador */}
        <View style={styles.createTextAreaContainer}>
          <TextInput
            style={styles.createTextInput}
            placeholder="Escreva algo..."
            placeholderTextColor="#94A3B8"
            multiline
            maxLength={280}
            value={texto}
            onChangeText={setTexto}
          />
          <Text style={styles.createCounterText}>
            {texto.length}/280
          </Text>
        </View>

        {/* Linha de Tags / Opções */}
        <View style={styles.createTagsRow}>
          {/* Imagem */}
          <TouchableOpacity
            style={[
              styles.tagPill,
              tagAtiva === 'imagem' && styles.tagPillActive,
            ]}
            onPress={() => toggleTag('imagem')}
            activeOpacity={0.8}
          >
            <Ionicons
              name="image-outline"
              size={18}
              color={tagAtiva === 'imagem' ? '#0094EA' : '#10B981'}
            />
            <Text
              style={[
                styles.tagPillText,
                tagAtiva === 'imagem' && styles.tagPillTextActive,
              ]}
            >
              Imagem
            </Text>
          </TouchableOpacity>

          {/* Localização */}
          <TouchableOpacity
            style={[
              styles.tagPill,
              tagAtiva === 'local' && styles.tagPillActive,
            ]}
            onPress={() => toggleTag('local')}
            activeOpacity={0.8}
          >
            <Ionicons
              name="location-outline"
              size={18}
              color={tagAtiva === 'local' ? '#0094EA' : '#06B6D4'}
            />
            <Text
              style={[
                styles.tagPillText,
                tagAtiva === 'local' && styles.tagPillTextActive,
              ]}
            >
              Localização
            </Text>
          </TouchableOpacity>

          {/* Sentimento */}
          <TouchableOpacity
            style={[
              styles.tagPill,
              tagAtiva === 'sentimento' && styles.tagPillActive,
            ]}
            onPress={() => toggleTag('sentimento')}
            activeOpacity={0.8}
          >
            <Ionicons
              name="happy-outline"
              size={18}
              color={tagAtiva === 'sentimento' ? '#0094EA' : '#10B981'}
            />
            <Text
              style={[
                styles.tagPillText,
                tagAtiva === 'sentimento' && styles.tagPillTextActive,
              ]}
            >
              Sentimento
            </Text>
          </TouchableOpacity>
        </View>

        {/* Botão Principal Publicar */}
        <TouchableOpacity
          style={styles.publishLargeButton}
          onPress={handlePublicar}
          activeOpacity={0.85}
        >
          <Text style={styles.publishLargeButtonText}>Publicar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
