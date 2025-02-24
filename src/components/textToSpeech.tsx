import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import * as Speech from "expo-speech";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TextToSpeech = () => {
    const [input, setInput] = useState("");

    const handlePrint = () => {
        Speech.speak(input, { language: "en", pitch: 1, rate: 0.9 });
    };

    return (
        <View className="relative flex-row items-center justify-between p-4 bg-gray-100 w-full">
            <TextInput
                className="w-full p-3 border border-gray-400 rounded-lg bg-white"
                placeholder="Type Here to Speak..."
                value={input}
                onChangeText={setInput}
            />
            <TouchableOpacity
                className="w-fit absolute right-7"
                onPress={handlePrint}
            >
                <Icon name="account-voice" size={23} />
            </TouchableOpacity>
        </View>
    );
};

export default TextToSpeech;
