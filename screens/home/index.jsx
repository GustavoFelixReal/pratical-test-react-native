import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import SearchField from "../../components/head/SearchField";

import CategoryList from "../../components/items/CategoryList";
import Subtitle from "../../components/head/Subtitle";
import { api } from "../../services/api";

export default function Home({ navigation }) {
  const [forYou, setForYou] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .all([
          api.get('overview.json'),
          api.get('names.json'),
        ])
        .then(
          axios.spread((res1, res2) => {
            const newForYou = res1.data.results.lists;
            const newCategories = res2.data.results;
            
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
    <SafeAreaView style={styles.container}>
      {/* <Head title='Bookshelf' /> */}
      <SearchField onChange={() => console.log("teste")}  placeholder="O que você gostaria de ler hoje?"/>

      <View style={styles.lists}>
        <Subtitle>Para Você</Subtitle>
        {forYou.length > 0 && 
          <CategoryList 
            categories={forYou} 
            id="forYou" 
            navigation={navigation} 
          />
        }

        <Subtitle>Categorias</Subtitle>
        {categories.length > 0 &&
          <CategoryList 
            categories={categories} 
            id="Categories"
            navigation={navigation}
          />
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
