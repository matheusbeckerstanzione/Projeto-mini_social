// ========================================
// src/app/editarPerfil.jsx  ← Editar Perfil (Screen 2 do novo conjunto)
// ========================================
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { tabsStyles as styles } from '../styles/tabsStyles';

export default function EditarPerfilScreen({ onBack, onSave }) {
  const [nome, setNome] = useState('Késsia Milana');
  const [usuario, setUsuario] = useState('kessia.milana');
  const [bio, setBio] = useState(
    'Desenvolvedora e entusiasta de tecnologia.\nApaixonada por compartilhar conhecimento!'
  );

  const handleSalvar = () => {
    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso! 🎉', [
      {
        text: 'OK',
        onPress: () => {
          if (onSave) onSave({ nome, usuario, bio });
          if (onBack) onBack();
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.safeContainer}
      >
        {/* Header Editar Perfil */}
        <View style={styles.editHeader}>
          <TouchableOpacity
            style={styles.editBackButton}
            onPress={onBack}
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-back" size={20} color="#0F172A" />
          </TouchableOpacity>

          <Text style={styles.editHeaderTitle}>Editar Perfil</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          {/* Avatar com Badge de Foto */}
          <View style={styles.editAvatarSection}>
            <View style={styles.editAvatarWrapper}>
              <Image
                source={require('../assets/images/avatar_maria.jpg')}
                style={styles.editAvatarImage}
              />
              <TouchableOpacity
                style={styles.editAvatarBadge}
                activeOpacity={0.8}
              >
                <Ionicons name="camera-outline" size={16} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Campos do Formulário */}
          <View style={styles.editFormContainer}>
            {/* NOME */}
            <View style={styles.editFieldGroup}>
              <Text style={styles.editFieldLabel}>NOME</Text>
              <TextInput
                style={styles.editInput}
                value={nome}
                onChangeText={setNome}
                placeholder="Seu nome"
                placeholderTextColor="#94A3B8"
              />
            </View>

            {/* USUÁRIO */}
            <View style={styles.editFieldGroup}>
              <Text style={styles.editFieldLabel}>USUÁRIO</Text>
              <TextInput
                style={styles.editInput}
                value={usuario}
                onChangeText={setUsuario}
                placeholder="nome.usuario"
                placeholderTextColor="#94A3B8"
                autoCapitalize="none"
              />
            </View>

            {/* BIO */}
            <View style={styles.editFieldGroup}>
              <Text style={styles.editFieldLabel}>BIO</Text>
              <TextInput
                style={styles.editTextArea}
                value={bio}
                onChangeText={setBio}
                placeholder="Escreva algo sobre você"
                placeholderTextColor="#94A3B8"
                multiline
                numberOfLines={3}
              />
            </View>

            {/* Botão Salvar alterações */}
            <TouchableOpacity
              style={styles.editSaveButton}
              onPress={handleSalvar}
              activeOpacity={0.85}
            >
              <Text style={styles.editSaveButtonText}>Salvar alterações</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
