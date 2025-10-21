import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet } from "react-native";

import {
  Home,
  MyLine,
  OrangeMoney,
  Sarali,
  Sugu,
} from "@/assets/icons/tab-icons";
import { AnimatedScreenWrapper } from "@/components/drawer/AnimatedScreenWrapper";
import { BlurView } from "expo-blur";

export default function TabLayout() {
  return (
    <AnimatedScreenWrapper>
      <Tabs
        screenOptions={{
          animation: "none",
          tabBarActiveTintColor: "#FE7900",
          tabBarLabelStyle: {
            fontSize: 10,
          },
          headerShown: false,
          lazy: true,
          tabBarStyle: {
            position: "absolute",
            backgroundColor: Platform.select({
              ios: "transparent",
              android: "rgba(255, 255, 255, 1)",
            }),
            borderTopWidth: StyleSheet.hairlineWidth,
            borderTopColor: "rgba(0,0,0,0.2)",
            elevation: 0,
            zIndex: 1,
            // marginBottom: currentEpisode ? 86 : 0,
          },
          // headerStyle: {
          //   height: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          // },
          tabBarBackground: () =>
            Platform.OS === "ios" ? (
              <BlurView
                tint={"systemThickMaterialDark"}
                intensity={80}
                style={[StyleSheet.absoluteFill]}
              />
            ) : null,
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <Home
                color={focused ? "#FE7900" : color}
                width={24}
                height={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="orange-money"
          options={{
            title: "Orange Money",
            tabBarIcon: (props) => (
              <OrangeMoney
                width={24}
                height={24}
                color={props.focused ? "#FE7900" : "#656565"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="my-line"
          options={{
            title: "Ma Ligne",
            tabBarIcon: (props) => (
              <MyLine
                width={24}
                height={24}
                color={props.focused ? "#FE7900" : "#656565"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="sugu"
          options={{
            title: "Sugu",
            tabBarIcon: (props) => (
              <Sugu
                width={24}
                height={24}
                color={props.focused ? "#FE7900" : "#656565"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="sarali"
          options={{
            title: "Sarali",
            headerShown: false,
            tabBarIcon: (props) => (
              <Sarali
                width={24}
                height={24}
                color={props.focused ? "#FE7900" : "#656565"}
              />
            ),
          }}
        />
      </Tabs>
    </AnimatedScreenWrapper>
  );
}
