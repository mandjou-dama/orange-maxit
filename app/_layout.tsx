import DrawerContent from "@/components/drawer/DrawerContent";
import { DarkTheme, LightTheme } from "@/constants/Theme";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Drawer } from "expo-router/drawer";
import Head from "expo-router/head";
import { StatusBar } from "expo-status-bar";
import {
  HandHeart,
  Headset,
  Heart,
  Home,
  IdCardLanyard,
  InfoIcon,
  MessageCircleQuestionMark,
  Settings,
  WalletCards,
} from "lucide-react-native";
import { Platform, useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

const isWeb = Platform.OS === "web";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {isWeb && (
        <Head>
          <meta name="color-scheme" content="light dark" />
        </Head>
      )}
      <KeyboardProvider>
        <SafeAreaProvider>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : LightTheme}
          >
            <NavigationDrawer />
            <StatusBar style="auto" />
          </ThemeProvider>
        </SafeAreaProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}

export function NavigationDrawer() {
  const { width } = useWindowDimensions();
  const text = useThemeColor("text");
  const tint = useThemeColor("tint");
  const gray = useThemeColor("slackText");
  const theme = useColorScheme();
  const isLight = theme === "light";

  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        swipeEdgeWidth: width,
        swipeMinDistance: width * 0.03,
        drawerStyle: {
          width: width * 0.85,
        },
        drawerLabelStyle: {
          fontFamily: "InterMedium",
          height: 24,
        },
        drawerItemStyle: {
          borderRadius: 50,
          borderCurve: "continuous",
        },
        drawerActiveTintColor: tint,
        drawerActiveBackgroundColor: `${text}10`,
        drawerInactiveTintColor: "#8e8e8e",
        ...(isLight && { overlayColor: "#00000030" }),
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="(tabs)"
        initialParams={{ userId: "default-user", showBio: false }}
        options={{
          drawerLabel: "Accueil",
          // drawerItemStyle: { display: "none" },
          swipeMinDistance: width * 0.025,
          drawerStyle: {
            width: width,
            backgroundColor: Platform.select({
              ios: "transparent",
              android: isLight ? "#fff" : "#121212",
            }),
          },
          overlayColor: "transparent",
          drawerIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="client-service"
        options={{
          drawerLabel: "Service client",
          swipeMinDistance: width * 0.025,
          drawerStyle: {
            width: width,
            backgroundColor: Platform.select({
              ios: "transparent",
              android: isLight ? "#fff" : "#121212",
            }),
          },
          overlayColor: "transparent",
          drawerIcon: ({ color, size }) => (
            <Headset size={size} color={color} />
          ),
        }}
        initialParams={{ noPreview: true }}
      />
      <Drawer.Screen
        name="socials"
        options={{
          drawerLabel: "Réseaux sociaux",
          swipeMinDistance: width * 0.025,
          drawerStyle: {
            width: width,
            backgroundColor: Platform.select({
              ios: "transparent",
              android: isLight ? "#fff" : "#121212",
            }),
          },
          overlayColor: "transparent",
          drawerIcon: ({ color, size }) => (
            <HandHeart size={size} color={color} />
          ),
        }}
        initialParams={{ noPreview: true }}
      />
      <Drawer.Screen
        name="favorites"
        options={{
          drawerLabel: "Gestion des favoris",
          swipeMinDistance: width * 0.025,
          drawerStyle: {
            width: width,
            backgroundColor: "transparent",
          },
          overlayColor: "transparent",
          drawerIcon: ({ color, size }) => <Heart size={size} color={color} />,
        }}
        initialParams={{ noPreview: true }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Paramètres",
          swipeMinDistance: width * 0.025,
          drawerStyle: {
            width: width,
            backgroundColor: "transparent",
          },
          overlayColor: "transparent",
          drawerIcon: ({ color, size }) => (
            <Settings size={size} color={color} />
          ),
        }}
        initialParams={{ noPreview: true }}
      />
      <Drawer.Screen
        name="about"
        options={{
          drawerLabel: "À propos",
          swipeMinDistance: width * 0.025,
          drawerStyle: {
            width: width,
            backgroundColor: "transparent",
          },
          overlayColor: "transparent",
          drawerIcon: ({ color, size }) => (
            <InfoIcon size={size} color={color} />
          ),
        }}
        initialParams={{ noPreview: true }}
      />
      <Drawer.Screen
        name="faqs"
        options={{
          drawerLabel: "FAQs",
          swipeMinDistance: width * 0.025,
          drawerStyle: {
            width: width,
            backgroundColor: "transparent",
          },
          overlayColor: "transparent",
          drawerIcon: ({ color, size }) => (
            <MessageCircleQuestionMark size={size} color={color} />
          ),
        }}
        initialParams={{ noPreview: true }}
      />
      <Drawer.Screen
        name="sarali-plus"
        options={{
          drawerLabel: "Sarali Plus",
          swipeMinDistance: width * 0.025,
          drawerStyle: {
            width: width,
            backgroundColor: "transparent",
          },
          overlayColor: "transparent",
          drawerIcon: ({ color, size }) => (
            <WalletCards size={size} color={color} />
          ),
        }}
        initialParams={{ noPreview: true }}
      />
      <Drawer.Screen
        name="nina"
        options={{
          drawerLabel: "Mettre à jour NINA",
          swipeMinDistance: width * 0.025,
          drawerStyle: {
            width: width,
            backgroundColor: "transparent",
          },
          overlayColor: "transparent",
          drawerIcon: ({ color, size }) => (
            <IdCardLanyard size={size} color={color} />
          ),
        }}
        initialParams={{ noPreview: true }}
      />

      <Drawer.Screen
        name="modal"
        options={{
          drawerLabel: "Modal",
          drawerType: "front",
          drawerItemStyle: { display: "none" },
          swipeMinDistance: width * 0.025,
        }}
      />
      <Drawer.Screen
        name="+not-found"
        options={{
          drawerLabel: "Modal",
          drawerType: "front",
          drawerItemStyle: { display: "none" },
          swipeMinDistance: width * 0.25,
        }}
      />
    </Drawer>
  );
}
