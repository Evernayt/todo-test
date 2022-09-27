import { FC } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface TextboxProps extends TextInputProps {}

const Textbox: FC<TextboxProps> = ({ ...props }) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#e2e2e3",
    borderRadius: 8,
    padding: 12,
    marginVertical: 12
  },
});

export default Textbox;
