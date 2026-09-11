import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../constants/colors';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function HeroCards() {
  // Ajuste responsivo de escala para telas menores ou maiores
  const baseScale = SCREEN_WIDTH < 380 ? 0.85 : 1;
  const centerWidth = 148 * baseScale;
  const centerHeight = 196 * baseScale;
  const sideWidth = 124 * baseScale;
  const sideHeight = 168 * baseScale;

  return (
    <View style={styles.wrapper}>
      {/* Círculo suave de fundo (aurora azul celeste) */}
      <View style={styles.backdropCircle} />

      <View style={styles.cardsContainer}>
        {/* Cartão Esquerdo (Inclinado para a esquerda - amigos tirando foto) */}
        <View
          style={[
            styles.cardWrapper,
            styles.leftCard,
            { width: sideWidth, height: sideHeight },
          ]}
        >
          <Image
            source={require('../../assets/images/friend_left.jpg')}
            style={styles.cardImage}
            resizeMode="cover"
          />
        </View>

        {/* Cartão Direito (Inclinado para a direita - amiga sorrindo) */}
        <View
          style={[
            styles.cardWrapper,
            styles.rightCard,
            { width: sideWidth, height: sideHeight },
          ]}
        >
          <Image
            source={require('../../assets/images/friend_right.jpg')}
            style={styles.cardImage}
            resizeMode="cover"
          />
        </View>

        {/* Cartão Central (Em primeiro plano - mulher sorrindo com o celular) */}
        <View
          style={[
            styles.cardWrapper,
            styles.centerCard,
            { width: centerWidth, height: centerHeight },
          ]}
        >
          <Image
            source={require('../../assets/images/friend_center.jpg')}
            style={styles.cardImage}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: '#E7F5FD', // Azul celeste suave conforme imagem
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
    borderColor: '#FFFFFF',
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
