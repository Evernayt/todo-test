import { FC } from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";
import { IconCheck } from "../../icons";

interface CheckboxProps extends PressableProps {
  isChecked: boolean;
  onChange: () => void;
}

const Checkbox: FC<CheckboxProps> = ({ isChecked, onChange, ...props }) => {
  return (
    <Pressable
      style={[styles.checkboxBase, isChecked && styles.checkboxChecked]}
      onPress={onChange}
      {...props}
    >
      <IconCheck
        color={isChecked ? COLORS.background : COLORS.secondaryIcon}
        stroke={2}
        size={20}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkboxBase: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: COLORS.background,
  },

  checkboxChecked: {
    backgroundColor: COLORS.success,
    borderWidth: 0,
  },
});

export default Checkbox;
