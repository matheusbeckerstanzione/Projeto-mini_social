import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { heroCardsStyles as styles } from '../../styles/componentStyles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function HeroCards() {
  const baseScale    = SCREEN_WIDTH < 380 ? 0.85 : 1;
  const centerWidth  = 148 * baseScale;
  const centerHeight = 196 * baseScale;
  const sideWidth    = 124 * baseScale;
  const sideHeight   = 168 * baseScale;

  return (
    <View style={styles.wrapper}>
      <View style={styles.backdropCircle} />
      <View style={styles.cardsContainer}>
        {/* Cartão Esquerdo */}
        <View style={[styles.cardWrapper, styles.leftCard, { width: sideWidth, height: sideHeight }]}>
          <Image source={require('../../assets/images/friend_left.jpg')} style={styles.cardImage} resizeMode="cover" />
        </View>

        {/* Cartão Direito */}
        <View style={[styles.cardWrapper, styles.rightCard, { width: sideWidth, height: sideHeight }]}>
          <Image source={require('../../assets/images/friend_right.jpg')} style={styles.cardImage} resizeMode="cover" />
        </View>

        {/* Cartão Central */}
        <View style={[styles.cardWrapper, styles.centerCard, { width: centerWidth, height: centerHeight }]}>
          <Image source={require('../../assets/images/friend_center.jpg')} style={styles.cardImage} resizeMode="cover" />
        </View>
      </View>
    </View>
  );
}
