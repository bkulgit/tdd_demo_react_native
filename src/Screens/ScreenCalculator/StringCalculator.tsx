import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const StringCalculator = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [resultValue, setResultValue] = useState<number>(0);

  const onAddButtonClick = () => {
   //TODO: changes for add string values
  };

  return (
    <View testID={"string-calculator-view"} style={styles.container}>
      <TextInput
       testID={"user-input-view"}
        style={styles.userInput}
        value={userInput}
        onChangeText={setUserInput}
        placeholder="Enter comma-separated numbers"
        keyboardType="numeric"
      />
      <Button testID={"add-button-view"} title="Add" onPress={onAddButtonClick} />
      <Text testID={'string-calculator-result-view'} style={styles.resultText}>{`The result is: ${resultValue}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  userInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default StringCalculator;
