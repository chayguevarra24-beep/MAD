import { View, Text, Image, StyleSheet } from "react-native";

export default function AboutMe() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌸 About Me 🌸</Text>

      <Image
        source={require("../assets/my-profile.jpg")}
        style={styles.image}
      />

      <View style={styles.card}>
        <Text style={styles.label}>👤 Full Name</Text>
        <Text style={styles.info}>Joyce Anne J. Guevarra</Text>

        <Text style={styles.label}>🎓 Course and Year</Text>
        <Text style={styles.info}>ACT 2</Text>

        <Text style={styles.label}>🎬 Fun Fact</Text>
        <Text style={styles.info}>I love dystopian movies.</Text>

        <Text style={styles.label}>💭 Reflection</Text>
        <Text style={styles.reflection}>
         So far, this course has taught me a lot about React Native and how mobile apps are created. Through our laboratory activities, I learned more on how to use Visual Studio Code, Git Bash, Git, and GitHub, as well as how to create React Native components, including building this About Me application for Assignment 6. There were times when I felt frustrated because my code didn't work the way I expected, but figuring out the mistakes helped me become more patient and confident little by little. Looking back, I'm happy with how much I've learned, and I'm excited to keep improving my skills because I know they will help me in my future career in the IT field.


        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEFF5",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#D63384",
    marginBottom: 20,
  },

  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: "#FF69B4",
    marginBottom: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
    elevation: 5,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D63384",
    marginTop: 10,
  },

  info: {
    fontSize: 16,
    color: "#333",
    marginTop: 4,
  },

  reflection: {
    marginTop: 8,
    fontSize: 15,
    color: "#444",
    lineHeight: 24,
    textAlign: "justify",
  },
});