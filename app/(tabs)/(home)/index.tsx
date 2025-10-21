import { ThemedText as Text, ThemedTextWrapper } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useHeaderHeight } from "@react-navigation/elements";
import { FlashList } from "@shopify/flash-list";
import { useNavigation } from "expo-router";
import { Ghost, Menu } from "lucide-react-native";
import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

const CHAT_BOX_MARGIN_V = 6;
const RADIUS = 28;

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Second Item",
  },
];

export default function HomeScreen() {
  const headerHeight = useHeaderHeight();
  return (
    <View style={[styles.container, { paddingTop: headerHeight }]}>
      {/* <Header /> */}
      <FlashList
        contentContainerStyle={styles.screenInner}
        style={styles.screen}
        data={DATA}
        renderItem={({ item }) => (
          <View
            style={{
              width: 200,
              height: 200,
              backgroundColor: "#131344",
            }}
          ></View>
        )}
      />
    </View>
  );
}

const Header = () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  return (
    <View style={styles.header}>
      <Pressable
        style={styles.headerLeft}
        onPress={() => navigation.toggleDrawer()}
        hitSlop={30}
      >
        <ThemedTextWrapper>
          <Menu size={21} />
        </ThemedTextWrapper>
      </Pressable>
      <View>
        <Text style={styles.headerTitle} type="defaultSemiBold">
          Grok
        </Text>
      </View>
      <View style={styles.headerRight}>
        <ThemedTextWrapper>
          <Ghost size={21} />
        </ThemedTextWrapper>
      </View>
    </View>
  );
};

const Button = ({
  children,
  onPress,
  style,
}: {
  children: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}) => {
  const text = useThemeColor("text");

  return (
    <TouchableOpacity
      style={[
        styles.chatBtn,
        {
          borderColor: text + "10",
        },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    padding: 16,
  },
  screenInner: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  round: {
    borderRadius: RADIUS,
    borderCurve: "continuous",
    borderWidth: 2,
  },
  chatBtn: {
    padding: 8,
    borderWidth: 2,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderCurve: "continuous",
    gap: 5,
  },
  suggestionCard: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 16,
    gap: 10,
    borderRadius: RADIUS,
    backgroundColor: "#f0f0f0",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {},
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
});
