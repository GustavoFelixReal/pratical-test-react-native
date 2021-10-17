import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import SearchField from "../../components/head/SearchField";
import Subtitle from "../../components/head/Subtitle";
import BookList from "../../components/items/BookList";
import { api } from "../../services/api";

export default function Books({ route, navigation }) {
  const [books, setBooks] = useState([]);
  const [resultsNumber, setResultsNumber] = useState(0);

  const { categoryName, categoryTitle } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: categoryTitle });

    (async () => {
      api.get(`current/${categoryName}.json`).then(res => {
        const newBooks = res.data.results.books;
        const newResultsNumber = res.data.num_results;

        setBooks([...newBooks]);
        setResultsNumber(newResultsNumber);

        console.log(newBooks)
      });  
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SearchField onChange={() => console.log("teste")} placeholder="O que você gostaria de ler hoje?" />

      <View style={styles.lists}>
        <Subtitle>{resultsNumber} resultado(s)</Subtitle>

        {books.length > 0 && 
          <BookList books={books} />
        }
      </View>

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
    color: "#fff",
    alignItems: "center",
    overflow: "scroll",
  },
  lists: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: 20
  },
});
