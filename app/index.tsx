import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Initial from "./pages/Initial";
import Home from "./pages/Home";
export type RootStackParamList = {
  Home: undefined;
  Initial: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function Index() {
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
