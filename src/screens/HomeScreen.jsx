import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Feed</Text>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => navigation.navigate('Create')}
        >
          <Ionicons name="add-circle" size={28} color="#008CE3" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Banner para criar nova publicação */}
        <TouchableOpacity
          style={styles.newPostPrompt}
          onPress={() => navigation.navigate('Create')}
          activeOpacity={0.8}
        >
          <View style={styles.avatarPlaceholder}>
            <Feather name="user" size={18} color="#64748B" />
          </View>
          <Text style={styles.placeholderText}>O que você está pensando hoje?</Text>
          <Feather name="edit-3" size={18} color="#008CE3" />
        </TouchableOpacity>

        {/* Card Exemplo 1 */}
        <View style={styles.postCard}>
          <View style={styles.postHeader}>
            <View style={styles.postAvatar}>
              <Text style={styles.avatarLetter}>A</Text>
            </View>
            <View>
              <Text style={styles.postAuthor}>Ana Beatriz</Text>
              <Text style={styles.postTime}>Há 25 minutos</Text>
            </View>
          </View>
          <Text style={styles.postBody}>
            Acabei de finalizar a nova tela do meu aplicativo mobile! Ficou idêntica ao design original. 🚀✨
          </Text>
          <View style={styles.postFooter}>
            <TouchableOpacity style={styles.footerAction}>
              <Ionicons name="heart-outline" size={20} color="#64748B" />
              <Text style={styles.footerActionText}>24</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerAction}>
              <Ionicons name="chatbubble-outline" size={19} color="#64748B" />
              <Text style={styles.footerActionText}>5</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Card Exemplo 2 */}
        <View style={styles.postCard}>
          <View style={styles.postHeader}>
            <View style={[styles.postAvatar, { backgroundColor: '#E0E7FF' }]}>
              <Text style={[styles.avatarLetter, { color: '#4338CA' }]}>L</Text>
            </View>
            <View>
              <Text style={styles.postAuthor}>Lucas Mendes</Text>
              <Text style={styles.postTime}>Há 2 horas</Text>
            </View>
          </View>
          <Text style={styles.postBody}>
            Testando componentes no React Native com Expo. A interface ficou super fluida!
          </Text>
          <View style={styles.postFooter}>
            <TouchableOpacity style={styles.footerAction}>
              <Ionicons name="heart-outline" size={20} color="#64748B" />
              <Text style={styles.footerActionText}>18</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerAction}>
              <Ionicons name="chatbubble-outline" size={19} color="#64748B" />
              <Text style={styles.footerActionText}>2</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
  },
  createButton: {
    padding: 4,
  },
  content: {
    padding: 16,
    gap: 16,
  },
  newPostPrompt: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    backgroundColor: '#F8FAFC',
    gap: 12,
  },
  avatarPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    flex: 1,
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  postCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 16,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0F2FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarLetter: {
    fontSize: 16,
    fontWeight: '700',
    color: '#008CE3',
  },
  postAuthor: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1E293B',
  },
  postTime: {
    fontSize: 12,
    color: '#94A3B8',
  },
  postBody: {
    fontSize: 15,
    color: '#334155',
    lineHeight: 22,
    marginBottom: 14,
  },
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingTop: 10,
  },
  footerAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  footerActionText: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '500',
  },
});
