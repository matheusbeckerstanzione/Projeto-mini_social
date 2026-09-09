import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  Modal,
  Text,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { THEME } from '../constants/theme';

const GRID_PADDING = 16;
const GRID_GAP = 8;

const POSTS = [
  {
    id: '1',
    image: require('../assets/images/post1.jpg'),
    title: 'Setup & Analytics',
    description: 'Trabalhando no dashboard de métricas do novo app! 💻📊☕',
  },
  {
    id: '2',
    image: require('../assets/images/post2.jpg'),
    title: 'Inspiração & Foco',
    description: 'Manhã produtiva planejando as próximas features com minha companheira verde 🌿📝',
  },
  {
    id: '3',
    image: require('../assets/images/post3.jpg'),
    title: 'Golden Hour na Cidade',
    description: 'Encerrando o dia com essa vista incrível do pôr do sol na cidade 🌇✨',
  },
];

export default function PostGrid({ activeTab = 'grid' }) {
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width, 480);
  const itemWidth = Math.floor((contentWidth - (GRID_PADDING * 2) - (GRID_GAP * 2)) / 3);
  const [selectedPost, setSelectedPost] = useState(null);

  if (activeTab === 'saved') {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.emptyIconCircle}>
          <Ionicons name="bookmark-outline" size={32} color={THEME.colors.textMuted} />
        </View>
        <Text style={styles.emptyTitle}>Salvar itens</Text>
        <Text style={styles.emptySubtitle}>
          Salve fotos e publicações que você deseja ver novamente.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {POSTS.map((post) => (
          <TouchableOpacity
            key={post.id}
            style={[styles.imageCard, { width: itemWidth, height: itemWidth }]}
            onPress={() => setSelectedPost(post)}
            activeOpacity={0.85}
          >
            <Image source={post.image} style={styles.image} resizeMode="cover" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Modal de Pré-visualização ao clicar na foto */}
      <Modal
        visible={!!selectedPost}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setSelectedPost(null)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setSelectedPost(null)}>
          <Pressable style={styles.modalCard} onPress={(e) => e.stopPropagation()}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{selectedPost?.title}</Text>
              <TouchableOpacity
                onPress={() => setSelectedPost(null)}
                style={styles.closeButton}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <Ionicons name="close" size={22} color={THEME.colors.text} />
              </TouchableOpacity>
            </View>

            {selectedPost && (
              <Image
                source={selectedPost.image}
                style={styles.modalImage}
                resizeMode="cover"
              />
            )}

            <View style={styles.modalBody}>
              <Text style={styles.modalDescription}>{selectedPost?.description}</Text>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: GRID_PADDING,
    paddingTop: 12,
    paddingBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: GRID_GAP,
  },
  imageCard: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F3F4F6',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 32,
  },
  emptyIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: THEME.colors.text,
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: 13,
    color: THEME.colors.textMuted,
    textAlign: 'center',
    lineHeight: 18,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalCard: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: THEME.colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F2F5',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: THEME.colors.text,
  },
  closeButton: {
    padding: 4,
  },
  modalImage: {
    width: '100%',
    height: 320,
  },
  modalBody: {
    padding: 16,
  },
  modalDescription: {
    fontSize: 14,
    color: THEME.colors.text,
    lineHeight: 20,
  },
});
