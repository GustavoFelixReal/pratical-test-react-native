import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import BookFeaturedDetails from "../../components/items/BookFeaturedDetails";

export default function BookDescription({ route, navigation }) {

  const { book } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: book.title });
  }, []);

  console.log(book.description)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.lists}>
        <BookFeaturedDetails 
          title={book.title}
          author={book.author}
          image={book.book_image}
        />

        <Text style={styles.description}>{book.description}</Text>

        <Pressable style={styles.button}>
          <Text>Ler agora</Text>
        </Pressable>
      </ScrollView>

      <View>
        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
    flex: 1,
    overflow: "scroll",
  },
  lists: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20
  },
  description: {
    fontSize: 14
  },
  button: {
    width: '100%',
    backgroundColor: 'orange',
    color: '#ffffff',
    textAlign: 'center',
    padding: 20,
    borderRadius: 4,
    marginTop: 20
  }
});
