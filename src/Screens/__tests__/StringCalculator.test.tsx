/**
 * @format
 */

import 'react-native';
import React from 'react';
import {fireEvent, render} from "@testing-library/react-native"
import {describe,test,expect} from '@jest/globals';

describe("Unit test case for setring calculator ",()=>{
  test("String Calculator component should render ",()=>{
   const {getByTestId} = render(<StringCalculator/>);
   const stringCalculator = getByTestId("string-calculator-view");
   expect(stringCalculator).toBeTruthy();
  });
  test("String calculator view should contain user input view, add button and result text view",()=>{

    const {getByTestId} = render(<StringCalculator/>);
    const userInputView = getByTestId("user-input-view");
    const addButtonView = getByTestId("add-button-view");
    const resultTextView = getByTestId('string-calculator-result-view');

    expect(userInputView).toBeTruthy();
    expect(addButtonView).toBeTruthy();
    expect(resultTextView).toBeTruthy();
  });
  test("for empty user input, result should be display as zero value",()=>{
    const {getByTestId} = render(<StringCalculator/>);
    const userInputView = getByTestId("user-input-view");
    const addButtonView = getByTestId("add-button-view");
    const resultTextView = getByTestId('string-calculator-result-view');

    fireEvent.changeText(userInputView,"");
    fireEvent.press(addButtonView);
    expect(resultTextView.props.children).toContain("The String result is: 0");
  });
  test("displays the same value in result for single digit input",()=>{
    const {getByTestId} = render(<StringCalculator/>);
    const userInputView = getByTestId("user-input-view");
    const addButtonView = getByTestId("add-button-view");
    const resultTextView = getByTestId('string-calculator-result-view');

    fireEvent.changeText(userInputView,"1");
    fireEvent.press(addButtonView);
    expect(resultTextView.props.children).toContain("The result is: 1");
  });
  test("displays correct result for given comma-separated values",()=>{
    const {getByTestId} = render(<StringCalculator/>);
    const userInputView = getByTestId("user-input-view");
    const addButtonView = getByTestId("add-button-view");
    const resultTextView = getByTestId('string-calculator-result-view');

    fireEvent.changeText(userInputView,"1,5");
    fireEvent.press(addButtonView);
    expect(resultTextView.props.children).toContain("The result is: 6");
  });
  test("calculates the sum of n number  of values correctly",()=>{
    const {getByTestId} = render(<StringCalculator/>);
    const userInputView = getByTestId("user-input-view");
    const addButtonView = getByTestId("add-button-view");
    const resultTextView = getByTestId('string-calculator-result-view');

    fireEvent.changeText(userInputView,"1,5,3,2,4,5");
    fireEvent.press(addButtonView);
    expect(resultTextView.props.children).toContain("The result is: 20");
  });
  test("Allow user to handle new lines between numbers in user input",()=>{

    const {getByTestId} = render(<StringCalculator/>);
    const userInputView = getByTestId("user-input-view");
    const addButtonView = getByTestId("add-button-view");
    const resultTextView = getByTestId('string-calculator-result-view');

    fireEvent.changeText(userInputView,"1\n2,3");
    fireEvent.press(addButtonView);
    expect(resultTextView.props.children).toContain("The result is: 6");
  });
  test("Support different delimiters in user input",()=>{
    const {getByTestId} = render(<StringCalculator/>);
    const userInputView = getByTestId("user-input-view");
    const addButtonView = getByTestId("add-button-view");
    const resultTextView = getByTestId('string-calculator-result-view');

    fireEvent.changeText(userInputView,"//;\n1;2");
    fireEvent.press(addButtonView);
    expect(resultTextView.props.children).toContain("The result is: 3");
  });
  test("displays exception for negative numbers with negative numbers",()=>{
    const {getByTestId} = render(<StringCalculator/>);
    const userInputView = getByTestId("user-input-view");
    const addButtonView = getByTestId("add-button-view");
    const resultTextView = getByTestId('string-calculator-result-view');

    fireEvent.changeText(userInputView,"1,2,-3,-2");
    fireEvent.press(addButtonView);
    expect(resultTextView.props.children).toContain("negative numbers not allowed: -3 , -2");
  });
});
