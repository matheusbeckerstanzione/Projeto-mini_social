import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CommentItem({ avatar, name, time, content }) {
  return (
    <View style={styles.container}>
      <Image 
        source={typeof avatar === 'string' ? { uri: avatar } : avatar} 
        style={styles.avatar} 
      />
      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <Text style={styles.text}>{content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#E2E8F0',
  },
  contentContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
  },
  time: {
    fontSize: 12,
    color: '#94A3B8',
    marginLeft: 8,
    fontWeight: '400',
  },
  text: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 20,
  },
});
