import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet, Alert} from 'react-native';

const StringCalculator = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [resultValue, setResultValue] = useState<number>(0);
  const [negativeValues, setShowNegativeValue] = useState<string>('');

  const checkNegativeNumbers = (): string[] => {
    let negativeNumInput: string[] = userInput
      .split(',')
      .filter((num: string) => {
        let parsedValue = parseInt(num);
        if (parsedValue < 0) {
          console.log('The number is negative.');
          return true;
        } else {
          console.log('The number is non-negative.');
          return false;
        }
      });
    return negativeNumInput;
  };

  const onAddButtonClick = () => {
    if (negativeValues.length > 0) {
      setShowNegativeValue('');
    }

    const userInputListArray = userInput
      .split(/[,\n\s;]/)
      .map(value => value.trim())
      .filter(value => {
        let number = parseInt(value);
        return number ? true : false;
      });

    // check for empty input
    if (userInputListArray.length == 0) {
      setResultValue(0);
    }

    // check for negative numbers
    const noOfNegativeInputes = checkNegativeNumbers();
    if (noOfNegativeInputes.length > 0) {
      let negativeNumbers = noOfNegativeInputes.join(',');
      setShowNegativeValue(negativeNumbers);
      return;
    }

    // add user input nummbers
    let sum = 0;
    for (let i = 0; i < userInputListArray.length; i++) {
      const trimmedString = userInputListArray[i].trim();
      if (trimmedString.length > 0) {
        sum = sum + parseInt(userInputListArray[i]);
        setResultValue(sum);
      }
    }
    
  };

  return (
    <View testID={'string-calculator-view'} style={styles.container}>
      <TextInput
        testID={'user-input-view'}
        style={styles.userInput}
        value={userInput}
        onChangeText={setUserInput}
        placeholder="Enter comma-separated numbers"
        keyboardType="numeric"
      />
      <Button
        testID={'add-button-view'}
        title="Add"
        onPress={onAddButtonClick}
      />
      <Text testID={'string-calculator-result-view'} style={styles.resultText}>
        {negativeValues.length > 0
          ? `negative numbers not allowed: ${negativeValues}`
          : `The result is: ${resultValue}`}
      </Text>
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
