import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (value) => {
    setEnteredGoal(value);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal();
  };

  return (
    <Modal visible={props.showModal} animationType='slide'>
      <View style={styles.viewStyle}>
        <TextInput
          placeholder='Course Goals'
          style={styles.inputContainer}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonGroup}>
          <View style={styles.button}>
            <Button title='cancel' color='red' onPress={props.onCancelGoal} />
          </View>
          <View style={styles.button}>
            <Button title='Add' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-around',
    width: '60%',
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;
