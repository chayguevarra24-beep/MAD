import { View, Text, Image, StyleSheet, Pressable} from "react-native";     
import { useState } from "react"

export default function BasicComponentsDemo() {
  const [message, setMessage] = useState("Welcome!")

  function displayMessage() {
    setMessage("Hello! Welcome to my React Native application.")
  }


  return (
    <View style={styles.container}>
         <Image
          source={{uri: 'https://avatars.githubusercontent.com/u/264399143?s=400&u=26f33a345de985728bacd41c5edab1557204e5f6&v=4'}} 
          style={styles.profileImage}
        />
        
        <Text style={styles.name}>Joyce Anne J. Guevarra</Text>
        
        <Text style={styles.course}>ACT2</Text>
        
        <Text style={styles.description}>I am aspiring web app developer</Text>

        <Text style={styles.message}>{message}</Text>

        <Pressable onPress={displayMessage} style={styles.button}>
          <Text style={styles.buttonText}>Say Hello</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f2f4f7",
  },

  profileImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },

  name: {
    marginBottom: 8,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  course: {
    marginBottom: 16,
    fontSize: 17,
    textAlign: "center",
  },

  description: {
    marginBottom: 20,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },

  message: {
    marginBottom: 20,
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
  },

  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "#1d4ed8",
    borderRadius: 8,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
