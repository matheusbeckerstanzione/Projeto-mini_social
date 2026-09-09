import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { THEME } from '../constants/theme';

export default function ProfileHeader({ onBackPress, onSettingsPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onBackPress}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        activeOpacity={0.7}
        style={styles.actionButton}
      >
        <Ionicons name="chevron-back" size={24} color={THEME.colors.text} />
      </TouchableOpacity>

      <Text style={styles.title}>Perfil</Text>

      <TouchableOpacity
        onPress={onSettingsPress}
        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        activeOpacity={0.7}
        style={styles.actionButton}
      >
        <Ionicons name="settings-outline" size={22} color={THEME.colors.text} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: THEME.colors.background,
  },
  actionButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: THEME.colors.text,
  },
});
