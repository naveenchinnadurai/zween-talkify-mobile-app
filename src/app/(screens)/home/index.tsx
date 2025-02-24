import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Speech from "expo-speech";
import TextToSpeech from "@/components/textToSpeech";
import { useRouter } from "expo-router";

const categories = [
  { name: "Emotions", icon: "https://cdn-icons-png.flaticon.com/512/742/742751.png" },
  { name: "General", icon: "https://cdn-icons-png.flaticon.com/512/4105/4105445.png" },
  { name: "Needs", icon: "https://cdn-icons-png.flaticon.com/512/3342/3342137.png" },
  { name: "Food", icon: "https://cdn-icons-png.flaticon.com/512/1046/1046745.png" },
  { name: "Drink", icon: "https://cdn-icons-png.flaticon.com/512/3661/3661463.png" },
  { name: "Activities", icon: "https://cdn-icons-png.flaticon.com/512/3043/3043212.png" },
  { name: "Greetings", icon: "https://cdn-icons-png.flaticon.com/512/1057/1057101.png" },
  { name: "Weather", icon: "https://cdn-icons-png.flaticon.com/512/1163/1163764.png" },
  { name: "Transport", icon: "https://cdn-icons-png.flaticon.com/512/3050/3050525.png" },
  { name: "Emergency", icon: "https://cdn-icons-png.flaticon.com/512/2954/2954823.png" },
];

const speakCategory = (text: string) => {
  Speech.speak(text, { language: "en", pitch: 1, rate: 0.9 });
};

const App = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView>
        <View className="my-4">
          <Text className="text-3xl font-bold text-center text-purple-400">Emotion Express</Text>
          <TextToSpeech />
        </View>
        <Text className="text-lg text-center text-gray-600 mb-2">Tap a category to express yourself</Text>
        <View className="flex-row flex-wrap justify-center">
          {
            categories.map((category, index) => (
              <TouchableOpacity key={index} className="w-1/2 p-2" onPress={() => router.push('(screens)/category')}>
                <View className="bg-white rounded-lg shadow-md p-4 items-center">
                  <Image source={{ uri: category.icon }} className="w-16 h-16 mb-2" />
                  <Text className="text-lg font-semibold text-center">{category.name}</Text>
                </View>
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
