import { FC } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

interface DividerProps {
  width?: number;
  color?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const Divider: FC<DividerProps> = ({
  width = 1,
  color = "#eeeeef",
  containerStyle,
}) => {
  return (
    <View
      style={[
        {
          borderBottomWidth: width,
          borderBottomColor: color,
        },
        containerStyle,
      ]}
    />
  );
};

export default Divider;
