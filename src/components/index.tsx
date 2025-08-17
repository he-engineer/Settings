import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, ActivityIndicator, View, TextInput, TextInputProps } from 'react-native';
import { Colors, Typography, Spacing, BorderRadius, Layout } from '../constants/tokens';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  loading = false,
  disabled,
  children,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'primary' ? styles.primaryButton : styles.secondaryButton,
        disabled && styles.disabledButton,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      accessibilityRole="button"
    >
      {loading ? (
        <ActivityIndicator size="small" color={variant === 'primary' ? Colors.neutral[0] : Colors.primary[500]} />
      ) : (
        <Text style={[
          styles.buttonText,
          variant === 'primary' ? styles.primaryButtonText : styles.secondaryButtonText,
          disabled && styles.disabledButtonText,
        ]}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({ children, style }) => {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
};

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, style, ...props }) => {
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.inputLabel}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.inputError, style]}
        placeholderTextColor={Colors.neutral[500]}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

interface StatusBadgeProps {
  status: 'forming' | 'ready' | 'full' | 'confirmed';
  children: React.ReactNode;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, children }) => {
  return (
    <View style={[styles.badge, styles[`${status}Badge`]]}>
      <Text style={[styles.badgeText, styles[`${status}BadgeText`]]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: Spacing[3],
    paddingHorizontal: Spacing[6],
    borderRadius: BorderRadius.base,
    minHeight: Layout.minTouchTarget,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  primaryButton: {
    backgroundColor: Colors.primary[500],
    borderColor: Colors.primary[500],
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderColor: Colors.primary[500],
  },
  disabledButton: {
    backgroundColor: Colors.neutral[300],
    borderColor: Colors.neutral[300],
  },
  buttonText: {
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.semibold,
    textAlign: 'center',
  },
  primaryButtonText: {
    color: Colors.neutral[0],
  },
  secondaryButtonText: {
    color: Colors.primary[500],
  },
  disabledButtonText: {
    color: Colors.neutral[500],
  },
  card: {
    backgroundColor: Colors.neutral[0],
    borderRadius: BorderRadius.lg,
    padding: Spacing[4],
    borderWidth: 1,
    borderColor: Colors.neutral[300],
    shadowColor: Colors.neutral[900],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputContainer: {
    marginBottom: Spacing[4],
  },
  inputLabel: {
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.neutral[700],
    marginBottom: Spacing[2],
  },
  input: {
    backgroundColor: Colors.neutral[0],
    borderWidth: 2,
    borderColor: Colors.neutral[300],
    borderRadius: BorderRadius.base,
    paddingVertical: Spacing[3],
    paddingHorizontal: Spacing[4],
    fontSize: Typography.fontSize.base,
    color: Colors.neutral[900],
    minHeight: Layout.minTouchTarget,
  },
  inputError: {
    borderColor: Colors.error[500],
    backgroundColor: Colors.error[50],
  },
  errorText: {
    fontSize: Typography.fontSize.sm,
    color: Colors.error[500],
    marginTop: Spacing[1],
  },
  badge: {
    paddingVertical: Spacing[1],
    paddingHorizontal: Spacing[2],
    borderRadius: BorderRadius.full,
    alignSelf: 'flex-start',
  },
  formingBadge: {
    backgroundColor: Colors.warning[100],
  },
  readyBadge: {
    backgroundColor: Colors.success[100],
  },
  fullBadge: {
    backgroundColor: Colors.primary[100],
  },
  confirmedBadge: {
    backgroundColor: Colors.success[100],
  },
  badgeText: {
    fontSize: Typography.fontSize.xs,
    fontWeight: Typography.fontWeight.medium,
  },
  formingBadgeText: {
    color: Colors.warning[900],
  },
  readyBadgeText: {
    color: Colors.success[900],
  },
  fullBadgeText: {
    color: Colors.primary[900],
  },
  confirmedBadgeText: {
    color: Colors.success[900],
  },
});