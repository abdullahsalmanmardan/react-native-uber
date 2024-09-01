import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 item-center justify-center bg-white">
      <Text className="text-center text-red-600">Hello abdullah</Text>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
}
