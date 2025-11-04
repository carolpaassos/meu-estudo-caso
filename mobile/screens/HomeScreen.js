import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const produtos = [
    { id: 1, nome: 'Notebook Dell' },
    { id: 2, nome: 'Mouse Gamer' },
    { id: 3, nome: "Monitor 27''" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛍️ Lista de Produtos</Text>

      <View style={styles.list}>
        {produtos.map((p) => (
          <TouchableOpacity
            key={p.id}
            style={styles.card}
            onPress={() => navigation.navigate('Details', { id: p.id })}
          >
            <Text style={styles.cardText}>{p.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#222',
  },
  list: {
    width: '100%',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 8,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
