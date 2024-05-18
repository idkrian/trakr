import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Initial from "./pages/Initial";
import Home from "./pages/home";
export type RootStackParamList = {
  Home: undefined;
  Initial: undefined;
};

export default function Index() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator initialRouteName="Initial">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Initial"
        component={Initial}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
