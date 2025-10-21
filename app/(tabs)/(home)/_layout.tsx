import { useThemeColor } from "@/hooks/useThemeColor";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Stack, useNavigation } from "expo-router";

import { Bell, Bot, Menu } from "lucide-react-native";
import { Pressable, View } from "react-native";

export default function HomeLayout() {
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  const text = useThemeColor("text");
  const tint = useThemeColor("tint");
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: {
            fontSize: 12,
          },
          headerTintColor: "#fff",
          // headerTransparent: true,
          // headerLargeTitle: true,
          // headerBlurEffect: "prominent",
          // headerLargeTitleShadowVisible: false,
          // headerShadowVisible: true,
          // headerSearchBarOptions: {
          //   allowToolbarIntegration: true,
          //   autoCapitalize: "none",
          //   hideWhenScrolling: true,
          //   placement: "automatic",
          //   placeholder: "Rechercher un service",
          // },
          // headerLargeTitleStyle: {
          //   fontSize: 24,
          // },
          // headerLargeStyle: {
          //   backgroundColor: "transparent",
          // },
          headerLeft: () => (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
            >
              <Pressable
                onPress={() => navigation.openDrawer()}
                style={{
                  width: 30,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: 100,
                }}
              >
                <Menu stroke={"#ffffffce"} size={16} />
              </Pressable>
            </View>
          ),
          headerRight: () => (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
            >
              <Pressable
                style={{
                  width: 30,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: 100,
                }}
              >
                <Bot stroke={tint} size={16} />
              </Pressable>
              <Pressable
                style={{
                  width: 30,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: 100,
                }}
              >
                <Bell stroke={"#ffffffce"} size={16} />
              </Pressable>
            </View>
          ),
        }}
      />
    </Stack>
  );
}
