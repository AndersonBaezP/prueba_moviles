import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const profileImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrzAy4YwUad97Uw6LBbP36YsfunhdYtOsoiA&s'; 

export default function Bienvenida() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: profileImageUrl }} style={styles.image} />
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>Mi nombre es</Text>
      <Text style={styles.name}>Anderson Baez</Text>
      <Text style={styles.subtitle}>Carrera:</Text>
      <Text style={styles.career}>Desarrollo de Software</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222', // Cambia a un color oscuro, por ejemplo '#222'
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Texto blanco para el título
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#ccc', // Color claro para subtítulos
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff', // Texto blanco para nombre
    marginBottom: 10,
  },
  career: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#ccc', // Color claro para carrera
    marginBottom: 20,
  },
});