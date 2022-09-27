import { FC, useMemo } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Divider } from "../../../components";
import { COLORS } from "../../../constants/theme";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  filterTasksByIsCompleted,
  setActiveFilterId,
  showAllTasksFilter,
} from "../../../store/reducers/TaskSlice";

interface TasksFilterModalProps {
  visible: boolean;
  hide: () => void;
}

const TasksFilterModal: FC<TasksFilterModalProps> = ({ visible, hide }) => {
  const activeFilterId = useAppSelector(
    (state) => state.task.activeTaskFilterId
  );

  const dispatch = useAppDispatch();

  const showAllTasks = () => {
    dispatch(setActiveFilterId(1));
    dispatch(showAllTasksFilter());
    hide();
  };

  const showCompletedTasks = () => {
    dispatch(setActiveFilterId(2));
    dispatch(filterTasksByIsCompleted(true));
    hide();
  };

  const showNotCopmletedTasks = () => {
    dispatch(setActiveFilterId(3));
    dispatch(filterTasksByIsCompleted(false));
    hide();
  };

  const filters = useMemo(
    () => [
      {
        id: 1,
        text: "Показать все задания",
        onPress: showAllTasks,
      },
      {
        id: 2,
        text: "Выполненные",
        onPress: showCompletedTasks,
      },
      {
        id: 3,
        text: "Не выполненные",
        onPress: showNotCopmletedTasks,
      },
    ],
    []
  );

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <Pressable style={styles.container} onPress={hide}>
        <View style={styles.contentContainer}>
          {filters.map((filter, index) => (
            <View key={filter.id}>
              <Pressable style={styles.button} onPress={filter.onPress}>
                <Text
                  style={[
                    styles.buttonText,
                    activeFilterId === filter.id && styles.buttonTextChecked,
                  ]}
                >
                  {filter.text}
                </Text>
              </Pressable>
              {index < filters.length - 1 && <Divider color="#fff" />}
            </View>
          ))}
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.6)",
    padding: 12,
  },
  contentContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    width: "100%",
  },
  button: {
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 16,
    color: COLORS.secondaryText,
  },
  buttonTextChecked: {
    color: COLORS.primary,
  },
});

export default TasksFilterModal;
