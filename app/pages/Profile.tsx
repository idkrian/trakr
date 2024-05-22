import { View, Text } from "react-native";
import React from "react";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import SettingsOption from "../components/SettingsOption";
import { TextInput } from "react-native";

const Profile = () => {
  return (
    <View className="flex-1 bg-[#070707]">
      <Text className="text-white font-semibold flex flex-initial text-2xl my-10 px-6">
        Settings
      </Text>
      <View className="p-6 gap-2">
        <TextInput
          className="bg-white w-full p-2 my-10 rounded-md self-center"
          placeholder="Search settings..."
        />
        <SettingsOption
          icon={<Feather name="user" size={24} color={"#6552FE"} />}
          label={"Account"}
        />
        <SettingsOption
          icon={<Feather name="bell" size={24} color={"#6552FE"} />}
          label={"Notifications"}
        />
        <SettingsOption
          icon={<Feather name="lock" size={24} color={"#6552FE"} />}
          label={"Privacy & Security"}
        />
        <SettingsOption
          icon={
            <MaterialIcons name="support-agent" size={24} color={"#6552FE"} />
          }
          label={"Help and Support"}
        />
        <SettingsOption
          icon={<Feather name="help-circle" size={24} color={"#6552FE"} />}
          label={"About"}
        />
      </View>
    </View>
  );
};

export default Profile;
