import { FC, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Button, Textbox } from "../../../components";
import { ButtonVarians } from "../../../components/UI/Button";
import { COLORS } from "../../../constants/theme";
import { useAppDispatch } from "../../../hooks/redux";
import { ITask } from "../../../models/ITask";
import { addTask } from "../../../store/reducers/TaskSlice";

interface AddTaskModalProps {
  visible: boolean;
  hide: () => void;
}

const AddTaskModal: FC<AddTaskModalProps> = ({ visible, hide }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const dispatch = useAppDispatch();

  const save = () => {
    const task: ITask = {
      id: new Date().getTime(),
      title,
      description,
      isCompleted: false,
    };
    dispatch(addTask(task));
    setTitle("");
    setDescription("");
    hide();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Добавить предмет</Text>
          <Text style={styles.secondaryText}>Укажите заголовок и задание</Text>
          <Textbox value={title} onChangeText={setTitle} />
          <Textbox value={description} onChangeText={setDescription} />
          <View style={styles.controls}>
            <Button
              title="Отмена"
              variant={ButtonVarians.secondary}
              containerStyle={{ flex: 1, marginRight: 12 }}
              onPress={hide}
            />
            <Button
              title="Сохранить"
              containerStyle={{ flex: 1 }}
              onPress={save}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.6)",
    padding: 24,
  },
  contentContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    width: "100%",
    padding: 12,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  secondaryText: {
    fontSize: 16,
    color: COLORS.secondaryText,
    textAlign: "center",
  },
  controls: {
    flexDirection: "row",
    backgroundColor: "#eee",
  },
});

export default AddTaskModal;
