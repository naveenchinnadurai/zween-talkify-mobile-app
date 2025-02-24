import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#4A90E2" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerShadowVisible: false,
      }}
      initialRouteName="home"
    >
      <Stack.Screen name="(screens)/home" options={{ title: "Dashboard" }} />
      <Stack.Screen name="(screens)/category" options={{ title: "Profile" }} />
    </Stack>
  );
};

export default Layout;
