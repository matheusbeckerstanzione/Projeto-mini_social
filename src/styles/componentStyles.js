// ========================================
// styles/componentStyles.js
// Estilos dos componentes reutilizáveis
// (Logo, CustomButton, InputField, HeroCards)
// ========================================
import { StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

export const logoStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    overflow: 'hidden',
  },
  brandText: {
    color: COLORS.primary,
    fontWeight: '800',
    letterSpacing: -0.3,
  },
  brandAccent: {
    color: COLORS.cyan,
  },
});

export const buttonStyles = StyleSheet.create({
  button: {
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonPrimary: { backgroundColor: '#068CD4' },
  buttonDark: { backgroundColor: '#000000' },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#068CD4',
    elevation: 0,
    shadowOpacity: 0,
  },
  buttonDisabled: { opacity: 0.6 },
  text: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  textPrimary: { color: COLORS.white },
  textDark: { color: COLORS.white },
  textOutline: { color: '#068CD4' },
});

export const inputStyles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 8,
  },
  inputContainer: {
    height: 52,
    backgroundColor: '#F3F4F6',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  leftIconWrapper: {
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIconWrapper: {
    marginLeft: 10,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#111827',
    paddingVertical: 0,
    height: '100%',
  },
});

export const heroCardsStyles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginVertical: 12,
  },
  backdropCircle: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: '#E7F5FD',
    top: '12%',
  },
  cardsContainer: {
    width: '100%',
    height: 230,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  cardWrapper: {
    position: 'absolute',
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  leftCard: {
    left: '14%',
    transform: [{ rotate: '-14deg' }],
    zIndex: 2,
  },
  rightCard: {
    right: '14%',
    transform: [{ rotate: '14deg' }],
    zIndex: 2,
  },
  centerCard: {
    zIndex: 5,
    borderRadius: 22,
    borderWidth: 2.5,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 14,
    elevation: 8,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
});
