import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import * as Speech from "expo-speech";

const sampleTexts: { [key: string]: string[] } = {
    Emotions: ["I am happy", "I feel sad", "I am excited"],
    General: ["Hello!", "How are you?", "Goodbye!"],
    Needs: ["I need help", "Can you assist me?", "I require assistance"],
    Food: ["I am hungry", "I want some food", "Do you have snacks?"],
    Drink: ["I am thirsty", "Can I get water?", "I want juice"],
    Activities: ["I want to play", "Let's go for a walk", "I am reading"],
    Greetings: ["Good morning", "Good night", "See you later"],
    Weather: ["It is sunny", "It is raining", "It is cold today"],
    Transport: ["I need a taxi", "Where is the bus stop?", "How do I get there?"],
    Emergency: ["Call 911", "I need a doctor", "There is an accident"],
};


const CategoryDetail: React.FC<{ route: { params: { category: { name: string } } } }> = ({ route }) => {
    const { category } = route.params;
    const [customTexts, setCustomTexts] = useState<string[]>([]);
    const [inputText, setInputText] = useState("");

    const speakText = (text: string) => {
        Speech.speak(text, { language: "en", pitch: 1, rate: 0.9 });
    };

    const addCustomText = () => {
        if (inputText.trim() !== "") {
            setCustomTexts([...customTexts, inputText]);
            setInputText("");
        }
    };

    return (
        <View className="flex-1 bg-white p-4">
            <Text className="text-2xl font-bold text-center text-blue-500">{category.name}</Text>

            {/* Predefined Texts */}
            <FlatList
                data={sampleTexts[category.name] || []}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity className="mt-3 p-3 bg-gray-200 rounded-lg" onPress={() => speakText(item)}>
                        <Text className="text-lg text-center">{item}</Text>
                    </TouchableOpacity>
                )}
            />

            {/* User Defined Texts */}
            {customTexts.length > 0 && (
                <FlatList
                    data={customTexts}
                    keyExtractor={(item, index) => `custom-${index}`}
                    renderItem={({ item }) => (
                        <TouchableOpacity className="mt-3 p-3 bg-yellow-200 rounded-lg" onPress={() => speakText(item)}>
                            <Text className="text-lg text-center">{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}

            {/* Input for Custom Text */}
            <TextInput
                className="border border-gray-400 p-2 mt-4 rounded-lg"
                placeholder="Enter custom text..."
                value={inputText}
                onChangeText={setInputText}
            />

            {/* Add Button */}
            <TouchableOpacity className="mt-2 p-3 bg-green-500 rounded-lg" onPress={addCustomText}>
                <Text className="text-white text-center text-lg">Add Text</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CategoryDetail;
