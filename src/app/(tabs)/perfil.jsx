// ========================================
// src/app/(tabs)/perfil.jsx  ← Perfil (Screen 1 do novo conjunto)
// ========================================
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { tabsStyles as styles } from '../../styles/tabsStyles';

const FOTOS_PERFIL = [
  { id: '1', imagem: require('../../assets/images/laptop_dashboard.jpg') },
  { id: '2', imagem: require('../../assets/images/plant_desk.jpg') },
  { id: '3', imagem: require('../../assets/images/sunset_skyline.jpg') },
];

export default function PerfilScreen({ onNavigateBack, onEditProfile }) {
  const [tabInterna, setTabInterna] = useState('grid'); // 'grid' | 'salvos'

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Header Perfil */}
      <View style={styles.profileHeaderNav}>
        <TouchableOpacity
          style={styles.profileHeaderIconButton}
          onPress={onNavigateBack}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={24} color="#0F172A" />
        </TouchableOpacity>

        <Text style={styles.profileHeaderNavTitle}>Perfil</Text>

        <TouchableOpacity
          style={styles.profileHeaderIconButton}
          onPress={onEditProfile}
          activeOpacity={0.7}
        >
          <Ionicons name="settings-outline" size={22} color="#0D9488" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Seção Superior do Perfil */}
        <View style={styles.profileTopSection}>
          {/* Avatar com Badge de Edição (#0D9488) */}
          <TouchableOpacity
            style={styles.profileAvatarContainer}
            onPress={onEditProfile}
            activeOpacity={0.85}
          >
            <Image
              source={require('../../assets/images/avatar_maria.jpg')}
              style={styles.profileMainAvatar}
            />
            <View style={styles.profileEditBadge}>
              <Ionicons name="pencil" size={13} color="#FFFFFF" />
            </View>
          </TouchableOpacity>

          {/* Nome e Usuário */}
          <Text style={styles.profileName}>Késsia Milena</Text>
          <Text style={styles.profileHandle}>@kessia.milena</Text>

          {/* Estatísticas (12 Publicações | 150 Seguidores | 80 Seguindo) */}
          <View style={styles.profileStatsContainer}>
            <View style={styles.profileStatBox}>
              <Text style={styles.profileStatVal}>12</Text>
              <Text style={styles.profileStatLbl}>Publicações</Text>
            </View>
            <View style={styles.profileStatBox}>
              <Text style={styles.profileStatVal}>150</Text>
              <Text style={styles.profileStatLbl}>Seguidores</Text>
            </View>
            <View style={styles.profileStatBox}>
              <Text style={styles.profileStatVal}>80</Text>
              <Text style={styles.profileStatLbl}>Seguindo</Text>
            </View>
          </View>

          {/* Bio */}
          <View style={styles.profileBioBlock}>
            <Text style={styles.profileBioLine}>
              Desenvolvedora e entusiasta de tecnologia.
            </Text>
            <Text style={styles.profileBioLine}>
              Apaixonada por compartilhar conhecimento!
            </Text>
          </View>
        </View>

        {/* Abas: Grid e Bookmark */}
        <View style={styles.profileTabsRow}>
          <TouchableOpacity
            style={styles.profileTabItem}
            onPress={() => setTabInterna('grid')}
            activeOpacity={0.7}
          >
            <Ionicons
              name="grid"
              size={22}
              color={tabInterna === 'grid' ? '#0D9488' : '#94A3B8'}
            />
            {tabInterna === 'grid' && (
              <View style={styles.profileTabActiveIndicator} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.profileTabItem}
            onPress={() => setTabInterna('salvos')}
            activeOpacity={0.7}
          >
            <Ionicons
              name="bookmark-outline"
              size={22}
              color={tabInterna === 'salvos' ? '#0D9488' : '#94A3B8'}
            />
            {tabInterna === 'salvos' && (
              <View style={styles.profileTabActiveIndicator} />
            )}
          </TouchableOpacity>
        </View>

        {/* Grid de 3 Fotos */}
        <View style={styles.profilePhotosGrid}>
          {FOTOS_PERFIL.map((foto) => (
            <TouchableOpacity
              key={foto.id}
              style={styles.profilePhotoCard}
              activeOpacity={0.85}
            >
              <Image
                source={foto.imagem}
                style={styles.profilePhotoThumb}
                resizeMode="cover"
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
