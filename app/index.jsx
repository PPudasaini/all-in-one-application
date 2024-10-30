import { Text, TouchableOpacity, Image, ScrollView, View } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-slate-950 h-full">

      <ScrollView contentContainerStyle = {{ height: "100%"}}>

        <View className="items-center justify-center">

          <Image 
            source ={require("../assets/images/Logo.png")}
            className="w[200px] h-[100px] mt-[2vh]"
            resizeMode="contain"
          />

          <Image 
            source ={require("../assets/images/Onboarding.png")}
            className=" max-w-[380px] h-[280px] mt-[5vh]"
            resizeMode="contain"
          />


          <View className=" mt-9 text-center">

            <Text className="text-4xl  color-white mx-auto">
              Welcome to your
            </Text>

            <Text className="color-violet-500 font-extrabold text-4xl mx-auto mb-1">
              All-In-One-Application!
            </Text>

            <Text className =" color-slate-400 mx-auto text-center text-base">
              An app to track and manage your daily tasks, from sleep to exercise, work, and to-do lists!
            </Text>

          </View>

          <TouchableOpacity 
            className="bg-violet-500 p-5 mt-9 w-full rounded-xl"
            activeOpacity={0.7}
            onPress={() => router.push("/sign-in")}
          >

            <Text className="color-stone-950 font-semibold text-xl text-center">
              Click here to get started!
            </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}
