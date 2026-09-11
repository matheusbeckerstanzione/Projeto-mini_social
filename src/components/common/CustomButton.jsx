import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import COLORS from '../../constants/colors';
import { buttonStyles as styles } from '../../styles/componentStyles';

export default function CustomButton({
  title,
  onPress,
  variant = 'primary',
  style,
  textStyle,
  disabled = false,
  loading = false,
}) {
  const isPrimary = variant === 'primary';
  const isDark    = variant === 'dark';
  const isOutline = variant === 'outline';

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        isPrimary && styles.buttonPrimary,
        isDark    && styles.buttonDark,
        isOutline && styles.buttonOutline,
        (disabled || loading) && styles.buttonDisabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={isOutline ? COLORS.primary : COLORS.white} />
      ) : (
        <Text
          style={[
            styles.text,
            isPrimary && styles.textPrimary,
            isDark    && styles.textDark,
            isOutline && styles.textOutline,
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
