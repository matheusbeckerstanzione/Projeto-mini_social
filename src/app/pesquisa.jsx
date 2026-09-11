// ========================================
// src/app/pesquisa.jsx  ← Tela de Pesquisa
// (Explorar pessoas, tags e tendências)
// ========================================
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { tabsStyles as styles } from '../styles/tabsStyles';
import COLORS from '../constants/colors';
import { StyleSheet } from 'react-native';

const localStyles = StyleSheet.create({
  header: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 8 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
    gap: 8,
  },
  searchInput: { flex: 1, fontSize: 14, color: '#111827', paddingVertical: 0 },
  categoryScroll: { paddingHorizontal: 16, paddingVertical: 10, gap: 8 },
  pill: {
    paddingHorizontal: 14, paddingVertical: 7, borderRadius: 20,
    backgroundColor: '#F3F4F6',
  },
  pillActive: { backgroundColor: COLORS.primary },
  pillText: { fontSize: 13, fontWeight: '600', color: '#4B5563' },
  pillTextActive: { color: COLORS.white },
  sectionTitle: {
    fontSize: 13, fontWeight: '700', color: '#6B7280',
    paddingHorizontal: 16, paddingBottom: 8, paddingTop: 12,
  },
});

const CATEGORIAS = ['Tudo', 'Fotos', 'Momentos', 'Viagens', 'Estilo', 'Músicas'];
const FOTOS = [
  require('../assets/images/friend_center.jpg'),
  require('../assets/images/friend_left.jpg'),
  require('../assets/images/friend_right.jpg'),
  require('../assets/images/login_hero.jpg'),
  require('../assets/images/friend_right.jpg'),
  require('../assets/images/friend_left.jpg'),
  require('../assets/images/friend_center.jpg'),
  require('../assets/images/login_hero.jpg'),
  require('../assets/images/friend_center.jpg'),
];

export default function PesquisaScreen() {
  const [busca, setBusca] = useState('');
  const [categoria, setCategoria] = useState('Tudo');

  return (
    <SafeAreaView style={styles.container}>
      <View style={localStyles.header}>
        <View style={localStyles.searchBar}>
          <Ionicons name="search" size={18} color="#9CA3AF" />
          <TextInput
            style={localStyles.searchInput}
            placeholder="Pesquisar amigos, fotos, tags..."
            placeholderTextColor="#9CA3AF"
            value={busca}
            onChangeText={setBusca}
          />
          {busca.length > 0 && (
            <TouchableOpacity onPress={() => setBusca('')}>
              <Ionicons name="close-circle" size={18} color="#9CA3AF" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Filtros */}
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={localStyles.categoryScroll}
        >
          {CATEGORIAS.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setCategoria(cat)}
              style={[localStyles.pill, categoria === cat && localStyles.pillActive]}
              activeOpacity={0.7}
            >
              <Text style={[localStyles.pillText, categoria === cat && localStyles.pillTextActive]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <Text style={localStyles.sectionTitle}>EM DESTAQUE</Text>

      {/* Grid */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.gridContainer}>
          {FOTOS.map((foto, i) => (
            <TouchableOpacity key={i} style={styles.gridItem} activeOpacity={0.8}>
              <Image source={foto} style={styles.gridImage} resizeMode="cover" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
