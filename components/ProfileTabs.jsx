import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { THEME } from '../constants/theme';

export default function ProfileTabs({ activeTab = 'grid', onTabChange }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Grid Tab */}
        <TouchableOpacity
          style={[styles.tab, activeTab === 'grid' && styles.activeTab]}
          onPress={() => onTabChange && onTabChange('grid')}
          activeOpacity={0.7}
        >
          <Ionicons
            name="grid-outline"
            size={22}
            color={activeTab === 'grid' ? THEME.colors.primary : THEME.colors.inactiveTab}
          />
          {activeTab === 'grid' && <View style={styles.indicator} />}
        </TouchableOpacity>

        {/* Saved / Bookmark Tab */}
        <TouchableOpacity
          style={[styles.tab, activeTab === 'saved' && styles.activeTab]}
          onPress={() => onTabChange && onTabChange('saved')}
          activeOpacity={0.7}
        >
          <Ionicons
            name="bookmark-outline"
            size={22}
            color={activeTab === 'saved' ? THEME.colors.primary : THEME.colors.inactiveTab}
          />
          {activeTab === 'saved' && <View style={styles.indicator} />}
        </TouchableOpacity>
      </View>
      <View style={styles.bottomBorder} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: THEME.colors.background,
    marginTop: 12,
  },
  container: {
    flexDirection: 'row',
    height: 46,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2.5,
    backgroundColor: THEME.colors.primary,
    borderRadius: 1,
  },
  bottomBorder: {
    height: 1,
    backgroundColor: '#F0F2F5',
    width: '100%',
  },
});
