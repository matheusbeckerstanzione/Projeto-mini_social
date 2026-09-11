// ========================================
// styles/globalStyles.js
// Estilos globais e tokens reutilizáveis
// ========================================
import { StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

export const globalStyles = StyleSheet.create({
  flex1: { flex: 1 },
  center: { justifyContent: 'center', alignItems: 'center' },
  row: { flexDirection: 'row', alignItems: 'center' },

  // Textos comuns
  textTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.textPrimary,
    letterSpacing: -0.4,
  },
  textSubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  textBody: {
    fontSize: 14,
    color: COLORS.textPrimary,
    lineHeight: 20,
  },
  textSmall: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  textBold: {
    fontWeight: '700',
  },
  textPrimary: {
    color: COLORS.primary,
  },

  // Containers
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  paddingH: {
    paddingHorizontal: 20,
  },

  // Divisor
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
  },
});

export default globalStyles;
