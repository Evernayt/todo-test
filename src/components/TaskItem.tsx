import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";
import { useAppDispatch } from "../hooks/redux";
import { IconTrash } from "../icons";
import { ITask } from "../models/ITask";
import { changeTask, removeTaskById } from "../store/reducers/TaskSlice";
import Checkbox from "./UI/Checkbox";
import IconButton from "./UI/IconButton";

interface TaskItemProps {
  task: ITask;
}

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  const dispatch = useAppDispatch();

  const taskCompleteToggle = () => {
    const changedTask: ITask = { ...task, isCompleted: !task.isCompleted };
    dispatch(changeTask(changedTask));
  };

  const removeTask = () => {
    dispatch(removeTaskById(task.id));
  };

  return (
    <View style={styles.container}>
      <Checkbox isChecked={task.isCompleted} onChange={taskCompleteToggle} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{task.title}</Text>
        <Text
          style={[styles.description, task.isCompleted && styles.completedText]}
        >
          {task.description}
        </Text>
      </View>
      <IconButton
        containerStyle={{ marginRight: "0", marginLeft: "auto" }}
        icon={<IconTrash color={COLORS.secondaryIcon} />}
        onPress={removeTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eef8fd",
    paddingVertical: 12,
  },
  textContainer: {
    marginLeft: 20,
    maxWidth: "60%",
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
  },
  description: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: COLORS.secondaryText,
  },
});

export default TaskItem;
