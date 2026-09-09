import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { THEME } from '../constants/theme';

export default function ProfileInfo({
  avatarSource,
  name = 'Késsia Milena',
  handle = '@kessia.milena',
  postsCount = 12,
  followersCount = 150,
  followingCount = 80,
  bio = 'Desenvolvedora e entusiasta de tecnologia.\nApaixonada por compartilhar conhecimento! 💙',
  onEditAvatarPress,
  onStatPress,
}) {
  return (
    <View style={styles.container}>
      {/* Avatar Container with Edit Badge */}
      <View style={styles.avatarWrapper}>
        <Image
          source={avatarSource || require('../assets/images/avatar.jpg')}
          style={styles.avatarImage}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={styles.editBadge}
          onPress={onEditAvatarPress}
          activeOpacity={0.8}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons name="pencil" size={14} color={THEME.colors.primary} />
        </TouchableOpacity>
      </View>

      {/* User Names */}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.handle}>{handle}</Text>

      {/* Stats Row */}
      <View style={styles.statsContainer}>
        <TouchableOpacity
          style={styles.statItem}
          onPress={() => onStatPress && onStatPress('posts')}
          activeOpacity={0.7}
        >
          <Text style={styles.statNumber}>{postsCount}</Text>
          <Text style={styles.statLabel}>Publicações</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.statItem}
          onPress={() => onStatPress && onStatPress('followers')}
          activeOpacity={0.7}
        >
          <Text style={styles.statNumber}>{followersCount}</Text>
          <Text style={styles.statLabel}>Seguidores</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.statItem}
          onPress={() => onStatPress && onStatPress('following')}
          activeOpacity={0.7}
        >
          <Text style={styles.statNumber}>{followingCount}</Text>
          <Text style={styles.statLabel}>Seguindo</Text>
        </TouchableOpacity>
      </View>

      {/* Bio */}
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>{bio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: THEME.colors.background,
  },
  avatarWrapper: {
    position: 'relative',
    width: 108,
    height: 108,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: '#F3F4F6',
  },
  editBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: THEME.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: THEME.colors.primary,
    shadowColor: THEME.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 3,
  },
  name: {
    fontSize: 21,
    fontWeight: '700',
    color: THEME.colors.text,
    marginTop: 14,
    textAlign: 'center',
    letterSpacing: -0.2,
  },
  handle: {
    fontSize: 14,
    fontWeight: '400',
    color: THEME.colors.textMuted,
    marginTop: 4,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '84%',
    marginTop: 22,
    paddingHorizontal: 12,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: THEME.colors.text,
  },
  statLabel: {
    fontSize: 13,
    fontWeight: '400',
    color: THEME.colors.textMuted,
    marginTop: 3,
  },
  bioContainer: {
    marginTop: 18,
    paddingHorizontal: 32,
  },
  bioText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#4B5563',
    textAlign: 'center',
    fontWeight: '400',
  },
});
