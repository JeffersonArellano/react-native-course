import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (value) => {
    setEnteredGoal(value);
  };

  return (
    <View style={styles.viewStyle}>
      <TextInput
        placeholder='Course Goals'
        style={styles.inputContainer}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button
        title='Add'
        onPress={props.onAddGoal.bind(this, enteredGoal)}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
});

export default GoalInput;
