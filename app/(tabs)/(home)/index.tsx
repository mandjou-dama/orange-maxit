import { LargeTitle } from "@/components/LargeTitle";
import { ThemedText as Text, ThemedTextWrapper } from "@/components/ThemedText";
import { useHeaderBackground } from "@/hooks/useHeaderBackground";
import { useThemeColor } from "@/hooks/useThemeColor";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useHeaderHeight } from "@react-navigation/elements";
import { FlashList } from "@shopify/flash-list";
import { useNavigation } from "expo-router";
import { Ghost, Menu } from "lucide-react-native";
import React, { useRef } from "react";
import {
  Insets,
  Pressable,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

const CHAT_BOX_MARGIN_V = 6;
const RADIUS = 28;

type Props = {
  offsetY: SharedValue<number>;
};

const AnimatedFlashList = Animated.createAnimatedComponent(FlashList);

export default function HomeScreen() {
  const headerHeight = useHeaderHeight();

  const scrollRef = useRef<Animated.ScrollView>(null);

  const offsetY = useSharedValue(0);

  const { targetRef, onTargetLayout } = useHeaderBackground({ offsetY });

  // Worklet-based handler for 60fps updates; minimal body to reduce GC pressure
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y } }) => {
      offsetY.value = y;
    },
  });

  const rContainerStyle = useAnimatedStyle(() => {
    return {
      // Keep outer paddingTop in sync with collapse distance to avoid layout jumps
      paddingTop: interpolate(
        offsetY.value,
        [0, -5],
        [0, -5],
        Extrapolation.CLAMP
      ),
    };
  });

  const rScrollIndicatorInsets = useDerivedValue<Insets | undefined>(() => {
    return {
      top: 0, // no inset, since no collapsing header
    };
  });

  const renderHeaderTrigger = () => (
    <Animated.View
      ref={targetRef}
      onLayout={onTargetLayout}
      style={{
        height: 28, // tailwind h-7
        width: 80, // w-[80px]
        backgroundColor: "red", // bg-neutral-900
        borderRadius: 9999, // rounded-full
        marginBottom: 24, // mb-6
        position: "absolute",
        top: 120,
        opacity: 0,
      }}
    />
  );

  const renderFakeContent = () => (
    <View
      style={{
        marginTop: 40,
      }}
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <View
          key={index}
          style={{
            height: 200,
            width: 200,
            backgroundColor: "#131344",
            opacity: 0,
            marginBottom: 30,
          }}
        ></View>
      ))}
    </View>
  );

  const renderFlaslistData = [
    {
      id: "header-trigger",
      component: renderHeaderTrigger,
    },
    {
      id: "large-title",
      component: () => (
        <LargeTitle
          title="Updates"
          offsetY={offsetY}
          // Pass collapse distance so LargeTitle cross-fades exactly when search fully clears the header
          searchBarAnimationDistance={0}
        />
      ),
    },
    {
      id: "fake-content",
      component: renderFakeContent,
    },
  ];

  return (
    <Animated.ScrollView
      ref={scrollRef}
      style={rContainerStyle}
      // Content starts below header; +16 gives breathing room before LargeTitle
      contentContainerStyle={{
        paddingTop: headerHeight + 22,
        paddingHorizontal: 22,
      }}
      indicatorStyle="white"
      scrollIndicatorInsets={rScrollIndicatorInsets}
      // ~60fps; smooth without flooding
      scrollEventThrottle={1000 / 60}
      onScroll={scrollHandler}
    >
      {renderHeaderTrigger()}
      <LargeTitle
        title="Mandjou Dama"
        offsetY={offsetY}
        // Pass collapse distance so LargeTitle cross-fades exactly when search fully clears the header
        searchBarAnimationDistance={0}
      />
      {renderFakeContent()}
    </Animated.ScrollView>
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
  screen: {},
  screenInner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
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
