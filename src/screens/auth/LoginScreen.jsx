import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../constants/colors';
import InputField from '../../components/common/InputField';
import CustomButton from '../../components/common/CustomButton';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function LoginScreen({ onNavigateBack, onNavigateToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      alert('Por favor, preencha o e-mail e a senha.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Bem-vindo de volta, ${email}!`);
    }, 1000);
  };

  const handleForgotPassword = () => {
    alert('Recuperação de senha: enviamos um link para o seu e-mail.');
  };

  const handleSocialLogin = (provider) => {
    alert(`Entrar com ${provider}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header com Hero Image */}
          <ImageBackground
            source={require('../../assets/images/login_hero.jpg')}
            style={styles.heroImage}
            resizeMode="cover"
          >
            {/* Overlay sutil para legibilidade */}
            <View style={styles.imageOverlay} />

            {/* Botão de Voltar no topo */}
            {onNavigateBack && (
              <TouchableOpacity
                onPress={onNavigateBack}
                style={styles.backButton}
                activeOpacity={0.8}
              >
                <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
              </TouchableOpacity>
            )}

            {/* Conteúdo de boas-vindas sobre a foto */}
            <View style={styles.heroContent}>
              {/* Badge da marca Lived em estilo vidro/pill */}
              <View style={styles.brandBadge}>
                <Text style={styles.brandBadgeText}>Lived</Text>
              </View>

              <Text style={styles.heroTitle}>Olá de novo!</Text>
              <Text style={styles.heroSubtitle}>
                Conecte-se com o seu mundo.
              </Text>
            </View>
          </ImageBackground>

          {/* Área do Formulário Branco */}
          <View style={styles.formContainer}>
            {/* Campo de E-mail */}
            <InputField
              label="E-mail"
              placeholder="exemplo@email.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              leftIcon={
                <Ionicons name="mail-outline" size={20} color="#9CA3AF" />
              }
            />

            {/* Campo de Senha */}
            <InputField
              label="Senha"
              placeholder="Digite sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              leftIcon={
                <Ionicons name="key-outline" size={20} color="#9CA3AF" />
              }
              rightIcon={
                <Ionicons
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color="#9CA3AF"
                />
              }
              onRightIconPress={() => setShowPassword(!showPassword)}
            />

            {/* Link "Esqueceu senha ?" */}
            <TouchableOpacity
              onPress={handleForgotPassword}
              style={styles.forgotPasswordButton}
              activeOpacity={0.7}
            >
              <Text style={styles.forgotPasswordText}>Esqueceu senha ?</Text>
            </TouchableOpacity>

            {/* Botão Principal Entrar */}
            <CustomButton
              title="Entrar"
              variant="primary"
              loading={loading}
              onPress={handleLogin}
              style={styles.loginButton}
            />

            {/* Divisor "OU ENTRE COM" */}
            <View style={styles.dividerRow}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OU ENTRE COM</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Botões Sociais: Google & Apple */}
            <View style={styles.socialButtonsRow}>
              <TouchableOpacity
                style={styles.socialButton}
                activeOpacity={0.8}
                onPress={() => handleSocialLogin('Google')}
              >
                <Ionicons name="logo-google" size={18} color="#1F2937" />
                <Text style={styles.socialButtonText}>Google</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.socialButton}
                activeOpacity={0.8}
                onPress={() => handleSocialLogin('Apple')}
              >
                <Ionicons name="logo-apple" size={20} color="#1F2937" />
                <Text style={styles.socialButtonText}>Apple</Text>
              </TouchableOpacity>
            </View>

            {/* Link de Rodapé: Criar conta */}
            <View style={styles.footerRow}>
              <Text style={styles.footerText}>Não tem uma conta? </Text>
              <TouchableOpacity
                onPress={onNavigateToRegister}
                activeOpacity={0.7}
              >
                <Text style={styles.createAccountText}>Criar conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
  },
  heroImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.38,
    minHeight: 260,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.22)',
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 52 : 36,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  heroContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    zIndex: 5,
  },
  brandBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(15, 35, 30, 0.5)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.18)',
  },
  brandBadgeText: {
    color: '#0094EA',
    fontWeight: '800',
    fontSize: 18,
    letterSpacing: -0.3,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  heroSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.92)',
  },
  formContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginTop: -4,
    marginBottom: 20,
    paddingVertical: 4,
  },
  forgotPasswordText: {
    color: '#0094EA',
    fontSize: 13,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#008CE3',
    height: 52,
    borderRadius: 26,
    shadowColor: '#008CE3',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.28,
    shadowRadius: 10,
    elevation: 4,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 22,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  dividerText: {
    paddingHorizontal: 12,
    fontSize: 11,
    fontWeight: '700',
    color: '#6B7280',
    letterSpacing: 0.6,
  },
  socialButtonsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 26,
  },
  socialButton: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  footerText: {
    fontSize: 13,
    color: '#6B7280',
  },
  createAccountText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0094EA',
  },
});
