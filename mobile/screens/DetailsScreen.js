import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { id } = route.params;

  const produtos = {
    1: { nome: 'Notebook Dell', descricao: 'Ideal para trabalho e estudos.' },
    2: { nome: 'Mouse Gamer', descricao: 'Alta precisão e design ergonômico.' },
    3: { nome: 'Monitor 27\'\'', descricao: 'Imagem nítida e cores vibrantes.' },
  };

  const produto = produtos[id];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{produto.nome}</Text>
      <Text style={styles.desc}>{produto.descricao}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  desc: { fontSize: 16, marginBottom: 20, textAlign: 'center' },
});
