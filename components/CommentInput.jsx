import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CommentInput({ onSendComment }) {
  const [commentText, setCommentText] = useState('');

  const handleSend = () => {
    if (commentText.trim()) {
      if (onSendComment) {
        onSendComment(commentText.trim());
      }
      setCommentText('');
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.pillContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escreva um comentário..."
          placeholderTextColor="#94A3B8"
          value={commentText}
          onChangeText={setCommentText}
          onSubmitEditing={handleSend}
          returnKeyType="send"
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSend}
          activeOpacity={0.8}
        >
          <Ionicons name="paper-plane" size={17} color="#FFFFFF" style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#F1F5F9',
  },
  pillContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 24,
    height: 48,
    paddingLeft: 16,
    paddingRight: 6,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#0F172A',
    paddingVertical: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
    outlineStyle: 'none',
    outlineWidth: 0,
    outlineColor: 'transparent',
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#0084FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendIcon: {
    transform: [{ rotate: '0deg' }],
  },
});
