import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { onValue, ref, push, set } from "firebase/database";
import { db } from "../Config/Config";

interface Libro {
  key: string;
  title: string;
  author: string;
  genre: string;
  description: string;
}

interface Recordatorio {
  key: string;
  id: string;
  name: string;
  email: string;
  description: string;
}

export const RegistroScreen = () => {
  const [libros, setLibros] = useState<Libro[]>([]);
  const [libroSeleccionado, setLibroSeleccionado] = useState<Libro | null>(null);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const librosRef = ref(db, "libros");
    onValue(librosRef, (snapshot) => {
      const librosData = snapshot.val();
      const librosList = librosData
        ? Object.keys(librosData).map((key) => ({
            key,
            ...librosData[key],
          }))
        : [];
      setLibros(librosList);
    });
  }, []);

  const showAlert = () => {
    Alert.alert("Registrado", "El registro se ha realizado con éxito", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  const handleRegister = () => {
    const recordatoriosRef = ref(db, "recordatorios");
    const newRecordatorioRef = push(recordatoriosRef);
    const newRecordatorio: Recordatorio = {
      key: newRecordatorioRef.key || "",
      id,
      name,
      email,
      description,
    };

    set(newRecordatorioRef, newRecordatorio)
      .then(() => {
        showAlert();
        setId("");
        setName("");
        setEmail("");
        setDescription("");
      })
      .catch((error) => {
        Alert.alert("Error", "Hubo un problema al registrar el recordatorio");
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Registro de Recordatorios</Text>
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={id}
        onChangeText={(text) => setId(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: "#222",
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#fff",
      marginBottom: 20,
      textAlign: "center",
    },
    libroListContainer: {
      flex: 1,
      marginTop: 10,
    },
    libroItem: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      padding: 15,
      marginBottom: 10,
      borderRadius: 8,
    },
    libroTitle: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
    libroDetails: {
      backgroundColor: "#333",
      padding: 20,
      borderRadius: 8,
      marginTop: 20,
    },
    libroLabel: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff",
      marginBottom: 10,
    },
    libroInfo: {
      marginBottom: 15,
    },
    libroInfoText: {
      color: "#fff",
      fontSize: 16,
      marginBottom: 5,
    },
    button: {
      backgroundColor: "#007BFF",
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    formContainer: {
      marginTop: 20,
    },
    formTitle: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#fff",
      marginBottom: 10,
      textAlign: "center",
    },
    input: {
      backgroundColor: "#444",
      color: "#fff",
      padding: 10,
      marginBottom: 10,
      borderRadius: 8,
    },
    recordatorioListContainer: {
      marginTop: 20,
    },
    recordatorioItem: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      padding: 15,
      marginBottom: 10,
      borderRadius: 8,
    },
    recordatorioText: {
      color: "#fff",
      fontSize: 16,
    },
  });



export default RegistroScreen;
