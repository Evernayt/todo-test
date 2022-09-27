import { FlatList, StyleSheet, View } from "react-native";
import { Button, Divider, TaskItem } from "../../components";
import { ButtonVarians } from "../../components/UI/Button";
import { useAppSelector } from "../../hooks/redux";
import useModal from "../../hooks/useModal";
import AddTaskModal from "./Modals/AddTaskModal";
import TasksFilterModal from "./Modals/TasksFilterModal";

const Tasks = () => {
  const tasks = useAppSelector((state) => state.task.tasks);

  const tasksFilterModal = useModal();
  const addTaskModal = useModal();

  return (
    <View>
      <TasksFilterModal
        visible={tasksFilterModal.isShowing}
        hide={tasksFilterModal.toggle}
      />
      <AddTaskModal
        visible={addTaskModal.isShowing}
        hide={addTaskModal.toggle}
      />
      <Button
        title="Показать все задания"
        variant={ButtonVarians.outline}
        onPress={tasksFilterModal.toggle}
      />
      <Divider containerStyle={styles.separator} />
      <FlatList
        data={tasks}
        showsHorizontalScrollIndicator={true}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <TaskItem task={item} />}
        style={{ marginBottom: 40 }}
      />
      <Button title="Добавить" onPress={addTaskModal.toggle} />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    marginTop: 42,
    marginBottom: 18,
  },
});

export default Tasks;
