import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Dashboard from "./Dashboard";

const Home = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Dashboard">
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: () => {
            return <MaterialIcons name="home" size={24} color="black" />;
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
