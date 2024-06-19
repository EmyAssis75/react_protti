import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

export function TelaA() {
  const DADOS = [
    { id: "1", title: "Primeiro Item" ,},
    { id: "2", title: "Segundo Item" ,},
    { id: "3", title: "Terceiro Item" ,},
  ];

  return (
    <View style={styles.container}>
     <FlatList data={DADOS} renderItem={({item, index, separators}) => (
        <View style={styles.lista}>
          <View>
            <Text style={styles.texto}>{item.id} : {item.title}</Text>
          </View>
        </View>
       )}>
     </View>
  );
}

const styles = StylrSheet.create({
  container: {
    marginTop: 50,
    alingItens:'center'
  },
  texto:{
    fontSize: 20,
  },
  lista:{
    borderRadius: 10,
    paddingLeft: 8,
    width: 300,
    height: 70,
    marginTop: 10,
    backgroundColor:'#00008B',
    justifyContent:'center'
  }
});
