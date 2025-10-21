import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Mandjou Dama",
          headerTransparent: true,
          headerLargeTitle: true,
          headerBlurEffect: "regular",
          headerLargeTitleShadowVisible: true,
          headerShadowVisible: true,
          headerLargeTitleStyle: {
            color: "white",
            fontSize: 24,
          },
          headerLargeStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
    </Stack>
  );
}
