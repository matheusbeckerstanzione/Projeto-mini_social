import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

/**
 * Componente de Logo da Lived.
 * - Por padrão, exibe a logo vetorial estilizada fiel à imagem de referência.
 * - Quando você tiver o arquivo PNG final da logo, basta colocar em `src/assets/images/logo.png`
 *   e passar a prop `usePng={true}` ou usar `customSource`.
 */
export default function Logo({
  usePng = false,
  customSource,
  size = 36,
  showText = true,
  style,
}) {
  if (usePng || customSource) {
    return (
      <View style={[styles.container, style]}>
        <Image
          source={customSource || require('../../assets/images/logo.png')}
          style={{ width: size * 3.2, height: size, resizeMode: 'contain' }}
        />
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      {/* Ícone estilizado Lived (Círculo preto com borda ciano e detalhe interno) */}
      <View
        style={[
          styles.iconCircle,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: Math.max(2, size * 0.08),
          },
        ]}
      >
        <View style={styles.iconInner}>
          <Text style={[styles.iconLetter, { fontSize: size * 0.52 }]}>L</Text>
          <View
            style={[
              styles.iconDot,
              {
                width: size * 0.22,
                height: size * 0.22,
                borderRadius: size * 0.11,
              },
            ]}
          />
        </View>
      </View>

      {/* Texto "Lived" */}
      {showText && (
        <Text style={[styles.brandText, { fontSize: size * 0.75 }]}>
          Lived
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconCircle: {
    backgroundColor: '#0D1117',
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    elevation: 3,
  },
  iconInner: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLetter: {
    color: COLORS.primary,
    fontWeight: '900',
    fontFamily: 'System',
    transform: [{ translateY: -1 }],
  },
  iconDot: {
    backgroundColor: COLORS.primary,
    position: 'absolute',
    top: 0,
    right: -4,
  },
  brandText: {
    color: COLORS.primary,
    fontWeight: '800',
    letterSpacing: -0.3,
  },
});
