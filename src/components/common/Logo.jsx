import React from 'react';
import { View, Text, Image } from 'react-native';
import { logoStyles as styles } from '../../styles/componentStyles';

export default function Logo({ size = 36, showText = true, style, textStyle }) {
  return (
    <View style={[styles.container, { gap: Math.max(6, Math.round(size * 0.24)) }, style]}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={[styles.logoIcon, { width: size, height: size, borderRadius: size / 2 }]}
        resizeMode="contain"
      />
      {showText && (
        <Text style={[styles.brandText, { fontSize: size * 0.75 }, textStyle]}>
          Live<Text style={styles.brandAccent}>d</Text>
        </Text>
      )}
    </View>
  );
}
