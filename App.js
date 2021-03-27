import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);

    setShowAddModal(!showAddModal);
  };

  const deleteItemHandler = (id) => {
    setCourseGoals((goalsList) => goalsList.filter((goal) => goal.id !== id));
  };

  const modalHandler = () => {
    setShowAddModal(!showAddModal);
  };

  const cancelAddItemHandler = () => {
    setShowAddModal(!showAddModal);
  };

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={modalHandler} />
      <GoalInput
        showModal={showAddModal}
        onAddGoal={addGoalHandler}
        onCancelGoal={cancelAddItemHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={deleteItemHandler}
            item={itemData.item}
          />
        )}
        style={styles.listContainer}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { paddingTop: 50, padding: 10 },
  listContainer: {
    paddingBottom: 10,
  },
});
