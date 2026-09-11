import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PostCard({
  authorAvatar,
  authorName = "João Victor Feitosa",
  time = "Hoje às 10:30",
  content = "Aprendendo React Native e Expo Router! Muito animado com o resultado do projeto.",
  postImage,
  initialLikes = 25,
  initialCommentsCount = 4,
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikes);
  const [isSaved, setIsSaved] = useState(false);

  const toggleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikesCount((prev) => prev - 1);
    } else {
      setIsLiked(true);
      setLikesCount((prev) => prev + 1);
    }
  };

  const toggleSave = () => {
    setIsSaved((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {/* Informações do Autor */}
      <View style={styles.authorRow}>
        <Image
          source={typeof authorAvatar === 'string' ? { uri: authorAvatar } : authorAvatar}
          style={styles.authorAvatar}
        />
        <View style={styles.authorInfo}>
          <Text style={styles.authorName}>{authorName}</Text>
          <Text style={styles.postTime}>{time}</Text>
        </View>
      </View>

      {/* Texto da Publicação */}
      <Text style={styles.postText}>{content}</Text>

      {/* Imagem da Publicação */}
      {postImage && (
        <View style={styles.imageWrapper}>
          <Image
            source={typeof postImage === 'string' ? { uri: postImage } : postImage}
            style={styles.postImage}
            resizeMode="cover"
          />
        </View>
      )}

      {/* Barra de Ações / Engajamento */}
      <View style={styles.actionsRow}>
        <View style={styles.leftActions}>
          <TouchableOpacity
            style={styles.actionItem}
            onPress={toggleLike}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              size={23}
              color="#EF4444"
            />
            <Text style={styles.actionCounter}>{likesCount}</Text>
          </TouchableOpacity>

          <View style={styles.actionItem}>
            <Ionicons name="chatbubble-outline" size={21} color="#64748B" />
            <Text style={styles.actionCounter}>{initialCommentsCount}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.actionItemRight}
          onPress={toggleSave}
          activeOpacity={0.7}
        >
          <Ionicons
            name={isSaved ? "bookmark" : "bookmark-outline"}
            size={22}
            color={isSaved ? "#0F172A" : "#64748B"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginBottom: 20,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  authorAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E2E8F0',
  },
  authorInfo: {
    marginLeft: 12,
    justifyContent: 'center',
  },
  authorName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  postTime: {
    fontSize: 13,
    color: '#94A3B8',
    marginTop: 2,
    fontWeight: '400',
  },
  postText: {
    fontSize: 15,
    color: '#1E293B',
    lineHeight: 22,
    marginBottom: 14,
  },
  imageWrapper: {
    width: '100%',
    height: 215,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#F1F5F9',
  },
  postImage: {
    width: '100%',
    height: '100%',
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
    paddingHorizontal: 2,
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionItemRight: {
    padding: 2,
  },
  actionCounter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#475569',
  },
});
