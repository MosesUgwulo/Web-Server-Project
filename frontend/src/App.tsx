import React, { useState } from 'react';
import Button from './components/Button';
import Text from './components/Text';
import './App.css';

// Define the base URL of the server
const BASE_URL = 'http://localhost:5000'

function App() {

  // Define a state variable to store the data fetched from the server
  const [data, setData] = useState<string>('Click on the buttons below to check the status of Amazon or Google.');

  /* Render the components 
    - Pass the data state variable to the Text component
    - Pass the name, url, and setData function to the Button component
  */
  return (
    <div className="App">
      <header className="App-header">
        <pre>
          <Text data={data} />
        </pre>
        <Button name="Amazon Status" url={`${BASE_URL}/v1/amazon-status`} setData={setData}/>
        <Button name="Google Status" url={`${BASE_URL}/v1/google-status`} setData={setData}/>
        <Button name="All Status" url={`${BASE_URL}/v1/all-status`} setData={setData}/>
      </header>
    </div>
  );
}

export default App;
