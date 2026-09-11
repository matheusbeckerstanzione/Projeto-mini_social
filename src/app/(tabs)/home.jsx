// ========================================
// src/app/(tabs)/home.jsx  ← Feed Screen (Screen 1)
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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../../components/common/Logo';
import { tabsStyles as styles } from '../../styles/tabsStyles';

const STORIES = [
  { id: '1', avatar: require('../../assets/images/avatar_maria.jpg') },
  { id: '2', avatar: require('../../assets/images/avatar_maria.jpg') },
  { id: '3', avatar: require('../../assets/images/avatar_maria.jpg') },
  { id: '4', avatar: require('../../assets/images/avatar_maria.jpg') },
];

const POSTS_INICIAIS = [
  {
    id: '1',
    autor: 'Maria Oliveira',
    tempo: 'Ontem às 18:20',
    avatar: require('../../assets/images/avatar_maria.jpg'),
    imagem: require('../../assets/images/laptop_dashboard.jpg'),
    curtidas: 32,
    curtido: false,
    texto:
      'Meu primeiro projeto mobile ficou pronto! Testado no iOS e Android. Sensação maravilhosa de ver as telas funcionando em tempo real.',
    comentarios: 8,
    salvo: false,
  },
  {
    id: '2',
    autor: 'Carlos Lima',
    tempo: 'Ontem às 09:15',
    avatar: require('../../assets/images/avatar_carlos.jpg'),
    imagem: null,
    curtidas: 14,
    curtido: false,
    texto:
      'Café + Código ☕ Nada como começar o dia resolvendo bugs complexos antes da primeira reunião de sync da equipe.',
    comentarios: 2,
    salvo: false,
  },
];

export default function HomeScreen({ onOpenPost }) {
  const [posts, setPosts] = useState(POSTS_INICIAIS);

  const toggleCurtida = (id) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              curtido: !p.curtido,
              curtidas: p.curtido ? p.curtidas - 1 : p.curtidas + 1,
            }
          : p
      )
    );
  };

  const toggleSalvo = (id) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, salvo: !p.salvo } : p))
    );
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Cabeçalho Feed: Logo + Lupa (#068CD4) e Barra de Pesquisa */}
      <View style={styles.feedHeader}>
        <Logo size={28} />
        <View style={styles.feedHeaderRight}>
          <TouchableOpacity style={styles.searchIconButton} activeOpacity={0.7}>
            <Ionicons name="search-outline" size={20} color="#068CD4" />
          </TouchableOpacity>
          <TextInput
            style={styles.searchPillInput}
            placeholder=""
            placeholderTextColor="#94A3B8"
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Carrossel de Stories com Linear Gradient [#068CD4, #8B5CF6] */}
        <View style={styles.storiesContainer}>
          {STORIES.map((story) => (
            <TouchableOpacity
              key={story.id}
              style={styles.storyCircleWrapper}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#068CD4', '#8B5CF6']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.storyGradientRing}
              >
                <View style={styles.storyInnerCircle}>
                  <Image source={story.avatar} style={styles.storyAvatar} />
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>

        {/* Posts do Feed */}
        {posts.map((post) => (
          <View key={post.id} style={styles.feedCard}>
            {/* Header do Card */}
            <View style={styles.cardHeader}>
              <View style={styles.cardUserRow}>
                <Image source={post.avatar} style={styles.cardAvatar} />
                <View>
                  <Text style={styles.cardAuthorName}>{post.autor}</Text>
                  <Text style={styles.cardTimeText}>{post.tempo}</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.cardMenuButton} activeOpacity={0.7}>
                <Ionicons name="reorder-three-outline" size={20} color="#475569" />
              </TouchableOpacity>
            </View>

            {/* Texto do Post */}
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => onOpenPost && onOpenPost(post)}
            >
              <Text style={styles.cardBodyText}>{post.texto}</Text>
            </TouchableOpacity>

            {/* Imagem do Post se houver */}
            {post.imagem && (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => onOpenPost && onOpenPost(post)}
                style={styles.cardImageContainer}
              >
                <Image
                  source={post.imagem}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            )}

            {/* Linha de Ações (Curtir #F43F5E, Comentar #2563EB, Salvar #068CD4) */}
            <View style={styles.cardActionsRow}>
              <View style={styles.cardActionsLeft}>
                {/* Curtida (#F43F5E) */}
                <TouchableOpacity
                  style={styles.cardActionItem}
                  onPress={() => toggleCurtida(post.id)}
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name={post.curtido ? 'heart' : 'heart-outline'}
                    size={22}
                    color="#F43F5E"
                  />
                  <Text style={styles.cardActionTextLike}>{post.curtidas}</Text>
                </TouchableOpacity>

                {/* Comentários (#2563EB) */}
                <TouchableOpacity
                  style={styles.cardActionItem}
                  onPress={() => onOpenPost && onOpenPost(post)}
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name="chatbubble-outline"
                    size={20}
                    color="#2563EB"
                  />
                  <Text style={styles.cardActionTextComment}>{post.comentarios}</Text>
                </TouchableOpacity>
              </View>

              {/* Bookmark / Salvar */}
              <TouchableOpacity
                onPress={() => toggleSalvo(post.id)}
                activeOpacity={0.7}
              >
                <Ionicons
                  name={post.salvo ? 'bookmark' : 'bookmark-outline'}
                  size={21}
                  color={post.salvo ? '#068CD4' : '#475569'}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
