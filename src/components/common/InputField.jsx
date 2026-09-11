import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { inputStyles as styles } from '../../styles/componentStyles';

export default function InputField({
  label,
  leftIcon,
  rightIcon,
  onRightIconPress,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  containerStyle,
}) {
  return (
    <View style={[styles.wrapper, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        {leftIcon && <View style={styles.leftIconWrapper}>{leftIcon}</View>}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
        {rightIcon && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onRightIconPress}
            disabled={!onRightIconPress}
            style={styles.rightIconWrapper}
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
