import { ButtonProps } from "@/types/type";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const getBgVarientStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "primary":
      return "bg-blue-500";
    case "secondary":
      return "bg-gray-500";
    case "success":
      return "bg-green-500";
    case "danger":
      return "bg-red-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
  }
};
const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full p-2 m-2 rounded-full flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVarientStyle(bgVariant)} ${className}`}
    >
      {IconLeft && <IconLeft />}
      {IconRight && <IconRight />}
      <Text className="text-lg font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
