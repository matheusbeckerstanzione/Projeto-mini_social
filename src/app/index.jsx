// ========================================
// src/app/index.jsx — Tela de Boas-vindas
// ========================================
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
} from 'react-native';
import COLORS from '../constants/colors';
import Logo from '../components/common/Logo';
import HeroCards from '../components/common/HeroCards';
import CustomButton from '../components/common/CustomButton';

export default function IndexScreen({ onNavigate }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

      <View style={styles.container}>
        {/* Logo no canto superior esquerdo */}
        <View style={styles.header}>
          <Logo size={32} />
        </View>

        {/* Cards fotográficos em leque + texto */}
        <View style={styles.content}>
          <HeroCards />

          <View style={styles.textBlock}>
            <Text style={styles.titleLine}>Vê os momentos do dia</Text>
            <Text style={styles.titleLine}>
              a dia dos teus{' '}
              <Text style={styles.highlight}>amigos</Text>
            </Text>
            <Text style={styles.titleLine}>
              <Text style={styles.highlight}>chegados</Text>
              <Text style={styles.titleLine}>.</Text>
            </Text>
          </View>
        </View>

        {/* Botões na parte inferior */}
        <View style={styles.buttons}>
          <CustomButton
            title="Entrar"
            variant="primary"
            onPress={() => onNavigate && onNavigate('login')}
          />
          <CustomButton
            title="Cadastrar"
            variant="dark"
            onPress={() => onNavigate && onNavigate('cadastro')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  header: {
    paddingTop: 16,
    paddingBottom: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textBlock: {
    marginTop: 28,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  titleLine: {
    fontSize: 27,
    fontWeight: '800',
    color: '#0D1117',
    textAlign: 'center',
    lineHeight: 38,
    letterSpacing: -0.4,
  },
  highlight: {
    color: COLORS.primary,
    fontWeight: '800',
  },
  buttons: {
    width: '100%',
    gap: 14,
  },
});
