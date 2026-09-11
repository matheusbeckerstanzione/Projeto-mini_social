import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../../components/Header';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header title="Perfil" />
      <View style={styles.center}>
        <Image
          source={require('../../assets/images/avatar_joao.jpg')}
          style={styles.avatar}
        />
        <Text style={styles.name}>João Silva</Text>
        <Text style={styles.role}>Desenvolvedor Mobile React Native</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
  },
  role: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
});
