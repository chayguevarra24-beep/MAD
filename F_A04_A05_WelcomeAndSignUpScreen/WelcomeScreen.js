import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>

        <View style={styles.avatar}>
          <View style={styles.head} />
          <View style={styles.body} />
        </View>

        <Text style={styles.title}>Welcome to Finora</Text>

        <Text style={styles.subtitle}>
          Explore a modern experience built for                                                   
          speed and simplicity
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <View style={styles.orRow}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-google" size={18} color="#4285F4" />
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-apple" size={18} color="#000000" />
          <Text style={styles.socialText}>Continue with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-facebook" size={18} color="#1877F2" />
          <Text style={styles.socialText}>Continue with Facebook</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account?
          </Text>

          <TouchableOpacity>
            <Text style={styles.signInText}> Sign In</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  card: {
    flex: 1,
    width: '92%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#F0EDFF',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 30,
    overflow: 'hidden',
  },

  head: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F2B08C',
    marginBottom: 4,
  },

  body: {
    width: 45,
    height: 30,
    backgroundColor: '#6C5CE7',
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
  },

  title: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#171717',
  },

  subtitle: {
    fontSize: 13,
    color: '#8A8A94',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 19,
  },

  button: {
    backgroundColor: '#6C5CE7',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 26,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5EA',
  },

  orText: {
    marginHorizontal: 15,
    color: '#8A8A94',
    fontSize: 13,
  },

  socialButton: {
    height: 44,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -10,
    marginTop: 20,
  },

  socialText: {
    marginLeft: 10,
    fontSize: 13,
    color: '#35353B',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -500,
  },

  footerText: {
    fontSize: 12,
    color: '#888891',
    marginTop: 580,
  },

  signInText: {
    textAlign: 'bottom',
    justifyContent: 'bottom',
    marginTop: 580,
    flex: '1',
    fontSize: 12,
    color: '#6C5CE7',
    fontWeight: 'bold',
  },
});