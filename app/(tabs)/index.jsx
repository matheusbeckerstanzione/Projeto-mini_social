import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import CommentItem from '../../components/CommentItem';
import PostCard from '../../components/PostCard';
import CommentInput from '../../components/CommentInput';

export default function PublicationScreen() {
  const insets = useSafeAreaInsets();

  const [comments, setComments] = useState([
    {
      id: '1',
      name: 'Maria Oliveira',
      time: 'Hoje às 11:07',
      content: 'Muito bom! Continue assim!',
      avatar: require('../../assets/images/avatar_maria.jpg'),
    },
  ]);

  const handleAddComment = (text) => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const formattedTime = `Hoje às ${hours}:${minutes}`;

    const newComment = {
      id: Date.now().toString(),
      name: 'Você',
      time: formattedTime,
      content: text,
      avatar: require('../../assets/images/avatar_joao.jpg'),
    };

    setComments((prev) => [...prev, newComment]);
  };

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      {/* Cabeçalho */}
      <Header
        title="Publicação"
        onBack={() => console.log('Voltar pressionado')}
        onShare={() => console.log('Compartilhar pressionado')}
      />

      {/* Conteúdo com Scroll e suporte a teclado */}
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Seção de Comentários */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Comentários</Text>
          </View>

          {/* Lista de Comentários com espaçamento maior até a publicação */}
          <View style={styles.commentsListContainer}>
            {comments.map((comment) => (
              <CommentItem
                key={comment.id}
                avatar={comment.avatar}
                name={comment.name}
                time={comment.time}
                content={comment.content}
              />
            ))}
          </View>

          {/* Publicação do João Victor Feitosa */}
          <PostCard
            authorAvatar={require('../../assets/images/avatar_joao.jpg')}
            authorName="João Victor Feitosa"
            time="Hoje às 10:30"
            content="Aprendendo React Native e Expo Router! Muito animado com o resultado do projeto."
            postImage={require('../../assets/images/post_laptop.jpg')}
            initialLikes={25}
            initialCommentsCount={4 + (comments.length - 1)}
          />
        </ScrollView>

        {/* Barra de Entrada de Comentários */}
        <CommentInput onSendComment={handleAddComment} />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 20,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#64748B',
    letterSpacing: -0.2,
  },
  commentsListContainer: {
    marginBottom: 36,
  },
});
