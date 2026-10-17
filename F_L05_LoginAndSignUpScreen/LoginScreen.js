import { StyleSheet, Text,View, TextInput,TouchableOpacity, StatusBar, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.card}>
        <Text style={styles.title}>Sign in</Text>
      <Text style={styles.subtitle}>Welcome back! Sign in to continue where you left off!</Text>

       <View style={ styles.socialb }>
        <TouchableOpacity style={styles.google}>
          <Ionicons name="logo-facebook" size={18} color="#4285F4" style={styles.icon} />
          <Text style={[styles.socialButtonText, { color: '#4285F4' }]}>
            Facebook
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebook}>
          <Ionicons name="logo-google" size={20} color="#000000" style={styles.icon} />
          <Text style={[styles.socialButtonText, { color: '#000000' }]}>
            Google
          </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.dividerContainer}>
          <Text style={styles.dividerText}>or</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email/Phone Number"
          placeholderTextColor="#A0A0A0"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>

        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>
            Don't have an account?{' '}
            <TouchableOpacity>
              <Text style={styles.clickableText}>Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFFFFF',
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 28,
    paddingVertical: 36,
    alignItems: 'center', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0f2f96',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginTop: -5,
  },
 socialb: {
  flexDirection: 'row',        
  justifyContent: 'space-between', 
  gap: 10,                    
  width: '100%',             
  marginBottom: 10,
},
facebook: {
  flex: 1,                   
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',       
  height: 44,
  borderWidth: 1.5,
  borderColor: '#E5E5E5',
  borderRadius: 6,
  
},
google: {
  flex: 1,                   
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',       
  height: 44,
  borderWidth: 1.5,
  borderColor: '#E5E5E5',
  borderRadius: 6,
},
  icon: {
    marginRight: 8,
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  dividerContainer: {
    marginVertical: 12,
  },
  dividerText: {
    fontSize: 13,
    color: '#666666',
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1.5,
    borderColor: '#2D323E',
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 14,
    marginBottom: 14,
  },
  loginButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#0f2f96',
    borderRadius: 8,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 6,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  linkContainer: {
    paddingVertical: 6,
  },
  linkText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333333',
    alignItems: 'left',
    justifyContent: 'left',
  },
  clickableText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2D323E',
    alignItems: 'left',
    justifyContent: 'left',
  },
});