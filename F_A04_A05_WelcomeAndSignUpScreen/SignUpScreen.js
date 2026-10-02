import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity,} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignUpScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.card}>
        <View style={styles.avatar}>
          <View style={styles.head} />
          <View style={styles.body} />

          <View style={styles.plus}>
            <Text style={styles.plusText}>+</Text>
          </View>

        </View>
        
        <Text style={styles.title}>
          Create Account
        </Text>

        <Text style={styles.subtitle}>
          Sign up to get started with your dashboard
        </Text>

        <Text style={styles.label}>
          Full Name
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
        />

        <Text style={styles.label}>
          Email
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
        />

        <Text style={styles.label}>
          Password
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Create a password"
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Create Account pressed!')}
        >
          <Text style={styles.buttonText}>
            Create Account
          </Text>
        </TouchableOpacity>

        <View style={styles.orRow}>

          <View style={styles.line} />
          <Text style={styles.orText}>
            Or
          </Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialRow}>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => alert('Google pressed!')}
          >
            <Ionicons
              name="logo-google"
              size={17}
              color="#4285F4"
            />
          </TouchableOpacity>

          {/* Apple */}

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => alert('Apple pressed!')}
          >
            <Ionicons
              name="logo-apple"
              size={17}
              color="#000000"
            />
          </TouchableOpacity>

          {/* Facebook */}

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => alert('Facebook pressed!')}
          >
            <Ionicons
              name="logo-facebook"
              size={17}
              color="#1877F2"
            />
          </TouchableOpacity>

        </View>

        <View style={styles.footer}>

          <Text style={styles.footerText}>
            Already have an account?
          </Text>

          <TouchableOpacity
            onPress={() => alert('Sign In pressed!')}
          >
            <Text style={styles.signInText}>
              Sign In
            </Text>
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
    padding: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },

  /* Image */

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F0EDFF',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 16,
    position: 'relative',
  },

  head: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F2B08C',
    marginBottom: 2,
  },

  body: {
    width: 40,
    height: 27,
    backgroundColor: '#6C5CE7',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 6,
  },

  plus: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#6C5CE7',
    position: 'absolute',
    top:10,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  plusText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#171717',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 10,
    color: '#8A8A94',
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 15,
  },

  /* Label */

  label: {
    fontSize: 10,
    color: '#171717',
    marginTop: 14,
    marginBottom: 5,
  },

  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#D7D7E0',
    borderRadius: 7,
    paddingHorizontal: 10,
    fontSize: 11,
  },

  button: {
    height: 40,
    backgroundColor: '#6757ED',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },

  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 13,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5EA',
  },

  orText: {
    marginHorizontal: 10,
    color: '#8A8A94',
    fontSize: 9,
  },

  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  socialButton: {
    width: 38,
    height: 38,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  footerText: {
    fontSize: 9,
    color: '#888891',
  },

  signInText: {
    fontSize: 9,
    color: '#6C5CE7',
    fontWeight: 'bold',
    marginLeft: 3,
  },

});