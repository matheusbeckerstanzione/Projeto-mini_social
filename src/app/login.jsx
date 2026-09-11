// ========================================
// src/app/login.jsx — Tela de Login
// ========================================
import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InputField from '../components/common/InputField';
import CustomButton from '../components/common/CustomButton';
import { authStyles as styles } from '../styles/authStyles';

export default function LoginScreen({ onNavigateBack, onNavigateTo, onLoginSuccess }) {
  const [email, setEmail]               = useState('');
  const [senha, setSenha]               = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [loading, setLoading]           = useState(false);

  const handleEntrar = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (onLoginSuccess) onLoginSuccess();
    }, 400);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.flex}
    >
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ── Imagem de Hero Oficial (login_hero.jpg) ── */}
        <ImageBackground
          source={require('../assets/images/login_hero.jpg')}
          style={styles.hero}
          imageStyle={styles.heroImageStyle}
          resizeMode="cover"
        >
          <View style={styles.heroOverlay} />

          {/* Botão de voltar */}
          {onNavigateBack && (
            <TouchableOpacity
              style={styles.heroBackButton}
              onPress={onNavigateBack}
              activeOpacity={0.7}
            >
              <Ionicons name="chevron-back" size={22} color="#FFFFFF" />
            </TouchableOpacity>
          )}

          {/* Conteúdo sobre a imagem: Badge Lived + Título + Subtítulo */}
          <View style={styles.heroContent}>
            {/* Badge "Lived" */}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                Live<Text style={styles.badgeAccent}>d</Text>
              </Text>
            </View>

            <Text style={styles.heroTitle}>Olá de novo!</Text>
            <Text style={styles.heroSubtitle}>Conecte-se com o seu mundo.</Text>
          </View>
        </ImageBackground>

        {/* ── Formulário ── */}
        <View style={styles.form}>
          <InputField
            label="E-mail"
            placeholder="exemplo@email.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            leftIcon={<Ionicons name="mail-outline" size={20} color="#9CA3AF" />}
          />

          <InputField
            label="Senha"
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!mostrarSenha}
            leftIcon={<Ionicons name="key-outline" size={20} color="#9CA3AF" />}
            rightIcon={
              <Ionicons
                name={mostrarSenha ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color="#9CA3AF"
              />
            }
            onRightIconPress={() => setMostrarSenha(!mostrarSenha)}
          />

          {/* Esqueceu a senha */}
          <TouchableOpacity
            style={styles.forgotBtn}
            onPress={() => onNavigateTo && onNavigateTo('esqueceuSenha')}
            activeOpacity={0.7}
          >
            <Text style={styles.forgotText}>Esqueceu senha ?</Text>
          </TouchableOpacity>

          {/* Botão Entrar */}
          <View style={styles.submitBtn}>
            <CustomButton
              title={loading ? 'Entrando...' : 'Entrar'}
              variant="primary"
              onPress={handleEntrar}
              disabled={loading}
            />
          </View>

          {/* Divisor "OU ENTRE COM" */}
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OU ENTRE COM</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Botões Sociais */}
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
              <Ionicons name="logo-google" size={18} color="#1F2937" />
              <Text style={styles.socialBtnText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
              <Ionicons name="logo-apple" size={20} color="#1F2937" />
              <Text style={styles.socialBtnText}>Apple</Text>
            </TouchableOpacity>
          </View>

          {/* Rodapé */}
          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Não tem uma conta? </Text>
            <TouchableOpacity
              onPress={() => onNavigateTo && onNavigateTo('cadastro')}
              activeOpacity={0.7}
            >
              <Text style={styles.footerLink}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
