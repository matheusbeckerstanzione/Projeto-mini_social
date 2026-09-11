// ========================================
// src/styles/authStyles.js
// Estilos compartilhados para as telas de Autenticação
// (index, login, cadastro, esqueceuSenha)
// ========================================
import { StyleSheet, Platform, Dimensions } from 'react-native';
import COLORS from '../constants/colors';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
export const HERO_HEIGHT = Math.max(280, Math.round(SCREEN_HEIGHT * 0.38));

export const authStyles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
  },

  // ========================================
  // Hero Image (Login e Cadastro)
  // ========================================
  hero: {
    width: '100%',
    height: HERO_HEIGHT,
    minHeight: 280,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    backgroundColor: '#0F172A',
  },
  heroImageStyle: {
    top: 0,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
  },
  heroBackButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 48 : 24,
    left: 16,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  heroContent: {
    paddingHorizontal: 24,
    paddingBottom: 22,
    paddingTop: 16,
    zIndex: 5,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.28)',
    paddingHorizontal: 18,
    paddingVertical: 7,
    borderRadius: 22,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.45)',
  },
  badgeText: {
    color: '#068CD4',
    fontWeight: '900',
    fontSize: 22,
    letterSpacing: -0.3,
  },
  badgeAccent: {
    color: '#00B4D8',
    fontWeight: '900',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
    letterSpacing: -0.4,
  },
  heroSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.92)',
  },

  // ========================================
  // Formulário
  // ========================================
  form: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 36,
  },
  forgotBtn: {
    alignSelf: 'flex-end',
    marginTop: -4,
    marginBottom: 20,
    paddingVertical: 4,
  },
  forgotText: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '600',
  },
  submitBtn: {
    marginBottom: 22,
  },

  // Divisor "OU ENTRE COM"
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E2E8F0',
  },
  dividerText: {
    paddingHorizontal: 12,
    fontSize: 11,
    fontWeight: '700',
    color: '#94A3B8',
    letterSpacing: 0.6,
  },

  // Botões Sociais (Google e Apple)
  socialRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  socialBtn: {
    flex: 1,
    height: 48,
    backgroundColor: COLORS.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  socialBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
  },

  // Rodapé (Alternar Login / Cadastro)
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#64748B',
  },
  footerLink: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.primary,
  },
});

export default authStyles;
