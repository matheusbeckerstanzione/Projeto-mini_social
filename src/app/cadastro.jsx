// ========================================
// src/app/cadastro.jsx — Tela de Cadastro
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
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InputField from '../components/common/InputField';
import CustomButton from '../components/common/CustomButton';
import { authStyles as styles } from '../styles/authStyles';

export default function CadastroScreen({ onNavigateBack, onNavigateTo, onRegisterSuccess }) {
  const [nome, setNome]                 = useState('');
  const [email, setEmail]               = useState('');
  const [senha, setSenha]               = useState('');
  const [confirmarSenha, setConfirmar]  = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmar, setMostrarConf] = useState(false);
  const [loading, setLoading]           = useState(false);

  const handleCadastrar = () => {
    if (!nome.trim() || !email.trim() || !senha) {
      Alert.alert('Campos incompletos', 'Preencha todos os campos para continuar.');
      return;
    }
    if (senha !== confirmarSenha) {
      Alert.alert('Senhas diferentes', 'A senha e a confirmação devem ser idênticas.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Bem-vindo!', 'Conta criada com sucesso!', [
        {
          text: 'Continuar',
          onPress: () => {
            if (onRegisterSuccess) onRegisterSuccess();
          },
        },
      ]);
    }, 500);
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

          <View style={styles.heroContent}>
            {/* Badge "Lived" */}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                Live<Text style={styles.badgeAccent}>d</Text>
              </Text>
            </View>

            <Text style={styles.heroTitle}>Crie sua conta!</Text>
            <Text style={styles.heroSubtitle}>Conecte-se com o seu mundo.</Text>
          </View>
        </ImageBackground>

        {/* ── Formulário ── */}
        <View style={styles.form}>
          <InputField
            label="Nome completo"
            placeholder="Seu nome e sobrenome"
            value={nome}
            onChangeText={setNome}
            autoCapitalize="words"
            leftIcon={<Ionicons name="person-outline" size={20} color="#9CA3AF" />}
          />

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
            placeholder="Escolha uma senha forte"
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

          <InputField
            label="Confirmar senha"
            placeholder="Repita a senha escolhida"
            value={confirmarSenha}
            onChangeText={setConfirmar}
            secureTextEntry={!mostrarConfirmar}
            leftIcon={<Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" />}
            rightIcon={
              <Ionicons
                name={mostrarConfirmar ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color="#9CA3AF"
              />
            }
            onRightIconPress={() => setMostrarConf(!mostrarConfirmar)}
          />

          {/* Botão Cadastrar */}
          <View style={styles.submitBtn}>
            <CustomButton
              title={loading ? 'Criando conta...' : 'Criar conta'}
              variant="dark"
              onPress={handleCadastrar}
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
            <Text style={styles.footerText}>Já tem uma conta? </Text>
            <TouchableOpacity
              onPress={() => onNavigateTo && onNavigateTo('login')}
              activeOpacity={0.7}
            >
              <Text style={styles.footerLink}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
