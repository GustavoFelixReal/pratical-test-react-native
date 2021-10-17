import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SearchField from "./components/head/SearchField";
import { API_KEY } from "@env";
import Head from "./components/head/Head";
import CategoryList from "./components/items/CategoryList";

export default function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      await axios
        .get("https://api.nytimes.com/svc/books/v3/lists/overview.json", {
          params: { "api-key": API_KEY },
        })
        .then((res) => {
          const newCategories = res.data.results.lists;
          setCategories([...newCategories]);

          console.log(res.data.results.lists);
        })
        .catch((err) => {
          console.log(err.data);
        });
    }

    fetchCategories();
  });

  return (
    <View style={styles.container}>
      <Head title='Bookshelf' />
      
        

        <SearchField onChange={() => console.log("teste")} />

        <Text>Categorias</Text>
          <CategoryList categories={categories} />
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style='auto' />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
