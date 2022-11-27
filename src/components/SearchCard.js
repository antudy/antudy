import { Text, View, StyleSheet, Pressable } from "react-native";
import { Divider } from "react-native-paper";

const SearchCard = ({ name, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "white" }}
      style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
    >
      <Divider />
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    marginTop: 15,
    marginBottom: 15,
  },
  name: {
    fontSize: 23,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

export default SearchCard;
