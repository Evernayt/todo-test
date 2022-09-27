import { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { COLORS } from "../../constants/theme";

export enum ButtonVarians {
  default = "default",
  outline = "outline",
  secondary = "secondary",
}

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVarians;
  containerStyle?: StyleProp<ViewStyle>;
}

const Button: FC<ButtonProps> = ({
  title,
  variant = ButtonVarians.default,
  containerStyle,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles[variant], containerStyle]}
      {...props}
    >
      <Text style={{ ...styles.text, ...styles[`${variant}Text`] }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: COLORS.background,
  },
  default: {
    borderWidth: 0,
  },
  defaultText: {
    fontSize: 20,
  },
  outline: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.background,
    height: 36,
  },
  outlineText: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.primary,
  },
  secondary: {
    backgroundColor: COLORS.secondary,
  },
  secondaryText: {
    color: "black",
  },
});

export default Button;
