import { Dimensions, Platform } from 'react-native';
import COLORS from './colors';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const RADIUS = {
  sm: 8,
  md: 16,
  lg: 24,
  pill: 999,
};

export const TYPOGRAPHY = {
  hero: {
    fontSize: SCREEN_WIDTH < 380 ? 24 : 28,
    fontWeight: '800',
    lineHeight: SCREEN_WIDTH < 380 ? 32 : 38,
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  button: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  body: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
  },
};

export const LAYOUT = {
  screenWidth: SCREEN_WIDTH,
  screenHeight: SCREEN_HEIGHT,
  isSmallDevice: SCREEN_WIDTH < 380,
};

export default {
  COLORS,
  SPACING,
  RADIUS,
  TYPOGRAPHY,
  LAYOUT,
};
