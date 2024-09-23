import React from 'react';
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import App from './App';
import exp from 'constants';

// I've never written a test before so this is pretty much all new to me
// Here's a link to the documentation I used as reference

// https://testing-library.com/docs/react-testing-library/example-intro


  test("Looks for a button on screen and clicks it and checks for statusCode on screen", async () => {
    render(<App />); // Render the App component

    // Find the button on screen with the text "Amazon Status" and store it in a variable
    const button = screen.getByText("Amazon Status");
    // Check if the button is actually on screen
    expect(button).toBeInTheDocument();

    // Simulate a click event on the button
    fireEvent.click(button);

    // Wait for the aync function to finish and update the screen
    await waitFor(() => {
      // Check for text that contains "statusCode" on screen
      const text = screen.getByText(/statusCode/); // Using regex to match the text on screen as I had a problem with trying to find the exact text
      // Check if the text is actually on screen
      expect(text).toBeInTheDocument();
    });
  })

