import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  Entypo,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Dashboard from "./Dashboard";
import Details from "./Details";
import Profile from "./Profile";

const Home = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#121212",
          height: 60,
        },
        tabBarActiveTintColor: "#6552FE",
        // tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="view-dashboard-outline"
                size={24}
                color={color}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarIcon: ({ color }) => {
            return <Entypo name="line-graph" size={24} color={color} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => {
            return <Feather name="user" size={24} color={color} />;
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
