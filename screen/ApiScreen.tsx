import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';


interface Character {
    id: number;
    name: string;
    image: string;
    artist: string;
}

const ApiScreen = ({ navigation : any}) => {
]
    


    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jritsqmet.github.io/web-api/crash.json');
            setCharacters(response.data.characters);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Especifica el tipo de 'item' en la función 'renderCharacter'
    const renderCharacter = ({ item }: { item: Character }) => (
        <View style={styles.character}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.artist}>{item.artist}</Text>
        </View>
    );

    return (
        <FlatList
            data={characters}
            renderItem={renderCharacter}
            keyExtractor={item => item.id.toString()}
        />
    );
};

const styles = StyleSheet.create({
    character: {
        margin: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
        borderRadius: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    artist: {
        fontSize: 16,
        fontStyle: 'italic',
    },
});

export default ApiScreen;