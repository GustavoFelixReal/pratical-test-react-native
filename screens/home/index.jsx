import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import SearchField from "../../components/head/SearchField";
import { API_KEY } from "@env";
import Head from "../../components/head/Head";
import CategoryList from "../../components/items/CategoryList";
import Subtitle from "../../components/head/Subtitle";

export default function Home() {
  const [forYou, setForYou] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .all([
          axios.get(
            "https://api.nytimes.com/svc/books/v3/lists/overview.json",
            {
              params: { "api-key": API_KEY },
            }
          ),
          axios.get("https://api.nytimes.com/svc/books/v3/lists/names.json", {
            params: { "api-key": API_KEY },
          }),
        ])
        .then(
          axios.spread((res1, res2) => {
            const newForYou = res1.data.results.lists;
            const newCategories = res2.data.results;

            console.log(res2.data);
            setCategories([...newCategories]);
            setForYou([...newForYou]);
          })
        )
        .catch((err) => {
          console.log(err.data);
        });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Head title='Bookshelf' />
      <SearchField onChange={() => console.log("teste")} />

      <View style={styles.lists}>
        <Subtitle>Para Você</Subtitle>
        {forYou.length > 0 && <CategoryList categories={forYou} id="forYou"/>}

        <Subtitle>Categorias</Subtitle>
        {categories.length > 0 && <CategoryList categories={categories} id="Categories"/>}
      </View>

      <View>
        <StatusBar style='auto' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
