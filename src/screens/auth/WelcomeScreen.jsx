import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Platform,
} from 'react-native';
import COLORS from '../../constants/colors';
import Logo from '../../components/common/Logo';
import HeroCards from '../../components/common/HeroCards';
import CustomButton from '../../components/common/CustomButton';

export default function WelcomeScreen({ navigation, onNavigate }) {
  const handleEntrar = () => {
    if (navigation?.navigate) {
      navigation.navigate('Login');
    } else if (onNavigate) {
      onNavigate('Login');
    } else {
      alert('Navegando para a tela de Login');
    }
  };

  const handleCadastrar = () => {
    if (navigation?.navigate) {
      navigation.navigate('Register');
    } else if (onNavigate) {
      onNavigate('Register');
    } else {
      alert('Navegando para a tela de Cadastro');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

      <View style={styles.container}>
        {/* Header com Logo no canto superior esquerdo */}
        <View style={styles.header}>
          <Logo size={32} />
        </View>

        {/* Área Central com Cards e Título */}
        <View style={styles.content}>
          {/* Seção dos cards fotográficos em leque */}
          <HeroCards />

          {/* Chamada principal com destaques coloridos */}
          <View style={styles.textContainer}>
            <Text style={styles.titleLine}>Vê os momentos do dia</Text>
            <Text style={styles.titleLine}>
              a dia dos teus <Text style={styles.highlightText}>amigos</Text>
            </Text>
            <Text style={styles.titleLine}>
              <Text style={styles.highlightText}>chegados</Text>
              <Text style={styles.titleLine}>.</Text>
            </Text>
          </View>
        </View>

        {/* Seção inferior de botões de ação */}
        <View style={styles.buttonSection}>
          <CustomButton
            title="Entrar"
            variant="primary"
            onPress={handleEntrar}
            style={styles.primaryButton}
          />

          <CustomButton
            title="Cadastrar"
            variant="dark"
            onPress={handleCadastrar}
            style={styles.darkButton}
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
    paddingBottom: 28,
  },
  header: {
    paddingTop: 16,
    paddingBottom: 8,
    alignItems: 'flex-start',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textContainer: {
    marginTop: 28,
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  titleLine: {
    fontSize: 27,
    fontWeight: '800',
    color: '#0D1117',
    textAlign: 'center',
    lineHeight: 38,
    letterSpacing: -0.4,
  },
  highlightText: {
    color: COLORS.primary,
    fontWeight: '800',
  },
  buttonSection: {
    width: '100%',
    gap: 14,
    paddingBottom: Platform.OS === 'ios' ? 8 : 14,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
  },
  darkButton: {
    backgroundColor: COLORS.black,
  },
});
