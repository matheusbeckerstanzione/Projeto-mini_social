import React, { useState } from 'react';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

export default function AppNavigator() {
  const [currentScreen, setCurrentScreen] = useState('Welcome');

  const navigate = (screenName) => {
    setCurrentScreen(screenName);
  };

  switch (currentScreen) {
    case 'Login':
      return (
        <LoginScreen
          onNavigateBack={() => navigate('Welcome')}
          onNavigateToRegister={() => navigate('Register')}
        />
      );
    case 'Register':
      return (
        <RegisterScreen
          onNavigateBack={() => navigate('Welcome')}
          onNavigateToLogin={() => navigate('Login')}
        />
      );
    case 'Welcome':
    default:
      return <WelcomeScreen onNavigate={navigate} />;
  }
}
