// ========================================
// src/app/(tabs)/publi.jsx  ← Post Detail Screen (Screen 2: Publicação)
// ========================================
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Share,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { tabsStyles as styles } from '../../styles/tabsStyles';

export default function PubliScreen({ onBack }) {
  const [curtidas, setCurtidas] = useState(25);
  const [curtido, setCurtido] = useState(false);
  const [salvo, setSalvo] = useState(false);
  const [comentarios, setComentarios] = useState([
    {
      id: '1',
      autor: 'Maria Oliveira',
      tempo: 'Hoje às 11:07',
      avatar: require('../../assets/images/avatar_maria.jpg'),
      texto: 'Muito bom! Continue assim!',
    },
  ]);
  const [novoComentario, setNovoComentario] = useState('');

  const toggleCurtida = () => {
    setCurtido(!curtido);
    setCurtidas((prev) => (curtido ? prev - 1 : prev + 1));
  };

  const handleEnviarComentario = () => {
    if (!novoComentario.trim()) return;
    setComentarios((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        autor: 'Você',
        tempo: 'Agora mesmo',
        avatar: require('../../assets/images/avatar_carlos.jpg'),
        texto: novoComentario.trim(),
      },
    ]);
    setNovoComentario('');
  };

  const handleCompartilhar = async () => {
    try {
      await Share.share({
        message:
          'Confira esta publicação no Lived: "Aprendendo React Native e Expo Router! Muito animado com o resultado do projeto."',
      });
    } catch (e) {
      // ignore
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Cabeçalho Publicação */}
      <View style={styles.detailHeader}>
        <TouchableOpacity
          style={styles.detailHeaderButton}
          onPress={onBack}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={24} color="#0F172A" />
        </TouchableOpacity>

        <Text style={styles.detailHeaderTitle}>Publicação</Text>

        <TouchableOpacity
          style={styles.detailHeaderButton}
          onPress={handleCompartilhar}
          activeOpacity={0.7}
        >
          <Ionicons name="share-social-outline" size={22} color="#0F172A" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.detailScroll}
      >
        {/* Seção Comentários */}
        <Text style={styles.commentsSectionTitle}>Comentários</Text>

        {comentarios.map((item) => (
          <View key={item.id} style={styles.commentItem}>
            <Image source={item.avatar} style={styles.commentAvatar} />
            <View style={styles.commentContent}>
              <View style={styles.commentHeaderRow}>
                <Text style={styles.commentAuthor}>{item.autor}</Text>
                <Text style={styles.commentTime}>{item.tempo}</Text>
              </View>
              <Text style={styles.commentBody}>{item.texto}</Text>
            </View>
          </View>
        ))}

        {/* Post Completo: João Victor Feitosa */}
        <View style={styles.detailPostCard}>
          {/* Header Autor */}
          <View style={styles.detailPostHeader}>
            <Image
              source={require('../../assets/images/avatar_joao.jpg')}
              style={styles.detailPostAvatar}
            />
            <View>
              <Text style={styles.detailPostAuthor}>João Victor Feitosa</Text>
              <Text style={styles.detailPostTime}>Hoje às 10:30</Text>
            </View>
          </View>

          {/* Texto da publicação */}
          <Text style={styles.detailPostText}>
            Aprendendo React Native e Expo Router! Muito animado com o resultado do projeto.
          </Text>

          {/* Imagem do Laptop */}
          <View style={styles.detailPostImageContainer}>
            <Image
              source={require('../../assets/images/laptop_dashboard.jpg')}
              style={styles.detailPostImage}
              resizeMode="cover"
            />
          </View>

          {/* Ações (Curtir #F43F5E, Comentar #2563EB, Salvar) */}
          <View style={styles.cardActionsRow}>
            <View style={styles.cardActionsLeft}>
              <TouchableOpacity
                style={styles.cardActionItem}
                onPress={toggleCurtida}
                activeOpacity={0.7}
              >
                <Ionicons
                  name={curtido ? 'heart' : 'heart-outline'}
                  size={22}
                  color="#F43F5E"
                />
                <Text style={styles.cardActionTextLike}>{curtidas}</Text>
              </TouchableOpacity>

              <View style={styles.cardActionItem}>
                <Ionicons
                  name="chatbubble-outline"
                  size={20}
                  color="#2563EB"
                />
                <Text style={styles.cardActionTextComment}>
                  {comentarios.length + 3}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => setSalvo(!salvo)}
              activeOpacity={0.7}
            >
              <Ionicons
                name={salvo ? 'bookmark' : 'bookmark-outline'}
                size={21}
                color={salvo ? '#068CD4' : '#475569'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Barra de Input de Comentário com botão postar #068CD4 */}
      <View style={styles.commentInputContainer}>
        <View style={styles.commentInputWrapper}>
          <TextInput
            style={styles.commentTextInput}
            placeholder="Escreva um comentário..."
            placeholderTextColor="#94A3B8"
            value={novoComentario}
            onChangeText={setNovoComentario}
          />
          <TouchableOpacity
            style={styles.commentSendButton}
            onPress={handleEnviarComentario}
            activeOpacity={0.8}
          >
            <Ionicons name="send" size={15} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
