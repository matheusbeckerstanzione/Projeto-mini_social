// ========================================
// src/app/esqueceuSenha.jsx
// ========================================
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Logo from '../components/common/Logo';
import InputField from '../components/common/InputField';
import CustomButton from '../components/common/CustomButton';
import { authStyles as styles } from '../styles/authStyles';

export default function EsqueceuSenhaScreen({ onNavigateBack }) {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEnviar = () => {
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEnviado(true);
    }, 500);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onNavigateBack} style={styles.backButton}>
              <Text style={styles.backText}>← Voltar</Text>
            </TouchableOpacity>
            <Logo size={28} />
          </View>

          {enviado ? (
            // Estado de sucesso
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 }}>
              <Ionicons name="mail-open-outline" size={64} color="#0094EA" />
              <Text style={[styles.title, { textAlign: 'center' }]}>E-mail enviado!</Text>
              <Text style={[styles.subtitle, { textAlign: 'center' }]}>
                Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.
              </Text>
              <CustomButton
                title="Voltar ao Login"
                variant="primary"
                onPress={onNavigateBack}
              />
            </View>
          ) : (
            <View style={{ paddingTop: 8 }}>
              <Text style={styles.title}>Esqueceu a senha?</Text>
              <Text style={styles.subtitle}>
                Informe seu e-mail e enviaremos um link para você redefinir sua senha.
              </Text>

              <InputField
                label="E-mail"
                placeholder="exemplo@email.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                leftIcon={<Ionicons name="mail-outline" size={20} color="#9CA3AF" />}
              />

              <CustomButton
                title="Enviar link de recuperação"
                variant="primary"
                loading={loading}
                onPress={handleEnviar}
                style={styles.submitButton}
              />
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
