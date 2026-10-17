import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {
  Ionicons,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.loginCard}>

            {/* Logo */}
            <View style={styles.logoContainer}>
              <View style={styles.shield}>
                <Ionicons
                  name="shield"
                  size={52}
                  color="#6254F5"
                />

                <Ionicons
                  name="checkmark"
                  size={21}
                  color="#FFFFFF"
                  style={styles.check}
                />
              </View>

              <View style={styles.logoDot} />
            </View>

            {/* Header */}
            <Text style={styles.title}>
              Welcome Back
            </Text>

            <Text style={styles.subtitle}>
              Log in to your account to continue.
            </Text>

            {/* Email */}
            <View style={styles.inputSection}>
              <Text style={styles.label}>
                Email
              </Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  placeholderTextColor="#AAA7B2"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
            </View>

            {/* Password */}
            <View style={styles.inputSection}>
              <Text style={styles.label}>
                Password
              </Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  placeholderTextColor="#AAA7B2"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                />

                <TouchableOpacity
                  style={styles.eyeButton}
                  onPress={() =>
                    setShowPassword(!showPassword)
                  }
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name={
                      showPassword
                        ? 'eye-outline'
                        : 'eye-off-outline'
                    }
                    size={16}
                    color="#AAA7B2"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Remember / Forgot */}
            <View style={styles.optionsRow}>

              <TouchableOpacity
                style={styles.remember}
                onPress={() =>
                  setRememberMe(!rememberMe)
                }
                activeOpacity={0.7}
              >
                <View
                  style={[
                    styles.checkbox,
                    rememberMe &&
                      styles.checkboxChecked,
                  ]}
                >
                  {rememberMe && (
                    <Ionicons
                      name="checkmark"
                      size={10}
                      color="#FFFFFF"
                    />
                  )}
                </View>

                <Text style={styles.rememberText}>
                  Remember me
                </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.forgotText}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>

            </View>

            {/* Sign In */}
            <TouchableOpacity
              style={styles.signInButton}
              activeOpacity={0.85}
            >
              <Text style={styles.signInText}>
                Sign In
              </Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.divider}>
              <View style={styles.line} />

              <Text style={styles.orText}>
                Or
              </Text>

              <View style={styles.line} />
            </View>

            {/* Social Buttons */}
            <View style={styles.socialRow}>

              <TouchableOpacity
                style={styles.socialButton}
                activeOpacity={0.7}
              >
                <AntDesign
                  name="google"
                  size={16}
                  color="#4285F4"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.socialButton}
                activeOpacity={0.7}
              >
                <FontAwesome
                  name="apple"
                  size={18}
                  color="#111111"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.socialButton}
                activeOpacity={0.7}
              >
                <FontAwesome
                  name="facebook"
                  size={16}
                  color="#1877F2"
                />
              </TouchableOpacity>

            </View>

            {/* Sign Up */}
            <View style={styles.signupRow}>
              <Text style={styles.signupText}>
                Don't have an account?{' '}
              </Text>

              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.signupLink}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E9E8F0',
  },

  keyboardView: {
    flex: 1,
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 18,
  },

  loginCard: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    paddingHorizontal: 28,
    paddingTop: 28,
    paddingBottom: 25,

    shadowColor: '#77718E',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 5,
  },

  /* LOGO */

  logoContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },

  shield: {
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  check: {
    position: 'absolute',
    top: 18,
  },

  logoDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#6254F5',
    marginTop: 1,
  },

  /* HEADER */

  title: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '700',
    color: '#292735',
    letterSpacing: -0.3,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 11.5,
    color: '#A6A3AE',
    marginTop: 4,
    marginBottom: 24,
  },

  /* INPUTS */

  inputSection: {
    marginBottom: 13,
  },

  label: {
    fontSize: 10.5,
    color: '#555260',
    fontWeight: '500',
    marginBottom: 6,
  },

  inputContainer: {
    height: 39,
    borderWidth: 1,
    borderColor: '#E3E0E8',
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 11,
    fontSize: 11,
    color: '#37343F',
  },

  eyeButton: {
    width: 38,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* OPTIONS */

  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  remember: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: 11,
    height: 11,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#DCD9E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },

  checkboxChecked: {
    backgroundColor: '#6254F5',
    borderColor: '#6254F5',
  },

  rememberText: {
    fontSize: 9,
    color: '#9996A1',
  },

  forgotText: {
    fontSize: 9,
    color: '#7166E8',
  },

  /* SIGN IN */

  signInButton: {
    height: 39,
    borderRadius: 20,
    backgroundColor: '#6658F5',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#6658F5',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },

  signInText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },

  /* DIVIDER */

  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#EEEEF1',
  },

  orText: {
    fontSize: 9,
    color: '#AAA7B0',
    marginHorizontal: 11,
  },

  /* SOCIAL */

  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  socialButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ECEAF0',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },

  /* SIGN UP */

  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 38,
  },

  signupText: {
    fontSize: 8.5,
    color: '#A4A1AA',
  },

  signupLink: {
    fontSize: 8.5,
    color: '#6658F5',
    fontWeight: '600',
  },
});