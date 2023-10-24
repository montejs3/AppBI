import React, { useState } from 'react';
import axios from 'axios';

function File() {
    const [inputText, setInputText] = useState([]); // State to store user input
    const [predictions, setPredictions] = useState([]); // State to store model predictions
  
    const handleInputChange = (event) => {
     
        setInputText(event.target.value);
    };
  
    const handlePredictClick = async () => {
        // Make a POST request to the API endpoint
        try {
          console.log({Textos_espanol: inputText});
          const response = await axios.post('http://127.0.0.1:8000/predict', { "Textos_espanol": [inputText] });
        
          setPredictions(response.data); // Update state with model predictions
        } catch (error) {
          console.error('Error making API request:', error);
        }
      };
  
    return (
      <div>
        <h1>Modelo de Machine Learning</h1>
        <p>File component</p>
        <input
          type="text"
          placeholder="Enter text in Spanish"
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handlePredictClick}>Predict</button>
        {predictions.length > 0 && (
          <div>
            <h2>Predictions:</h2>
            <ul>
              {predictions.map((prediction, index) => (
                <li key={index}>{prediction.sdg}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
  
  export default File;
  