import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import Profile from "./pages/Profile";

const index = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if (route.name === "Home") {
            return null;
          }
        },
        tabBarStyle: {
          backgroundColor: "#121212",
          height: 60,
        },
        tabBarActiveTintColor: "#6552FE",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarButton: () => null,
        }}
      />
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

export default index;
