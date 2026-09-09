import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Alert,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileInfo from '../../components/ProfileInfo';
import ProfileTabs from '../../components/ProfileTabs';
import PostGrid from '../../components/PostGrid';
import { THEME } from '../../constants/theme';

export default function ProfileScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('grid');
  const [refreshing, setRefreshing] = useState(false);

  // Profile data
  const [profile, setProfile] = useState({
    name: 'Késsia Milena',
    handle: '@kessia.milena',
    postsCount: 12,
    followersCount: 150,
    followingCount: 80,
    bio: 'Desenvolvedora e entusiasta de tecnologia.\nApaixonada por compartilhar conhecimento! 💙',
  });

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      Alert.alert('Navegação', 'Você já está na tela inicial do perfil.');
    }
  };

  const handleSettings = () => {
    Alert.alert(
      'Configurações',
      'Opções de conta, privacidade, notificações e segurança.',
      [{ text: 'Entendi' }]
    );
  };

  const handleEditAvatar = () => {
    Alert.alert(
      'Editar Foto de Perfil',
      'Escolha uma das opções abaixo:',
      [
        { text: 'Tirar foto', onPress: () => console.log('Tirar foto') },
        { text: 'Escolher da galeria', onPress: () => console.log('Galeria') },
        { text: 'Cancelar', style: 'cancel' },
      ]
    );
  };

  const handleStatPress = (type) => {
    const titles = {
      posts: '12 Publicações',
      followers: '150 Seguidores',
      following: '80 Seguindo',
    };
    Alert.alert(titles[type] || 'Estatísticas', `Visualizando detalhes de ${titles[type] || ''}`);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <ProfileHeader onBackPress={handleBack} onSettingsPress={handleSettings} />

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[THEME.colors.primary]}
              tintColor={THEME.colors.primary}
            />
          }
        >
          <ProfileInfo
            name={profile.name}
            handle={profile.handle}
            postsCount={profile.postsCount}
            followersCount={profile.followersCount}
            followingCount={profile.followingCount}
            bio={profile.bio}
            onEditAvatarPress={handleEditAvatar}
            onStatPress={handleStatPress}
          />

          <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

          <PostGrid activeTab={activeTab} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: THEME.colors.background,
  },
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    backgroundColor: THEME.colors.background,
  },
  scrollView: {
    flex: 1,
    backgroundColor: THEME.colors.background,
  },
  scrollContent: {
    paddingBottom: 32,
  },
});
