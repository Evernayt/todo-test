import { FC, ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { COLORS } from "../../constants/theme";

interface IconButtonProps extends TouchableOpacityProps {
  icon: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

const IconButton: FC<IconButtonProps> = ({
  icon,
  containerStyle,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} {...props}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconButton;
