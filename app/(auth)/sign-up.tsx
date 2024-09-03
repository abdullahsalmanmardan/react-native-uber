import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";

const Sign_Up = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {
    // TODO: Implement signup logic here
    // Example: axios.post("https://api.example.com/signup", form)
    console.log("SignUp pressed", form);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaExtraBold bottom-10 left-5">
            Create your Account
          </Text>
        </View>
        <View className="p-5 ">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value: any) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder="Enter your Email Address"
            icon={icons.email}
            value={form.email}
            onChangeText={(value: any) => setForm({ ...form, email: value })}
          />

          <InputField
            label="Password"
            placeholder="Enter your Password"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value: any) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Signup"
            onPress={onSignUpPress}
            className="mt-6"
          />

          {/* oauth feature */}
          <OAuth />

          <Link href="/(auth)/sign-in" className="text-center mt-5">
            <Text>Already have an account </Text>
            <Text className="text-blue-500 font-semibold ">Sign In</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default Sign_Up;
