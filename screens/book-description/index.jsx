import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import BookFeaturedDetails from "../../components/items/BookFeaturedDetails";

export default function BookDescription({ route, navigation }) {

  const { book } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: book.title });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.lists}>
        <BookFeaturedDetails 
          title={book.title}
          author={book.author}
          image={book.book_image}
        />

        <Text style={styles.description}>{book.description}</Text>
      </View>

      <View>
        <StatusBar style='auto' />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
    flex: 1,
    color: "#fff",
    overflow: "scroll",
  },
  lists: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: 20
  },
  description: {
    fontSize: 14
  }
});
