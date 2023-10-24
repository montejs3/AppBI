import React, { useState } from 'react';
import axios from 'axios';
import { Form , Button, Row, Container, Col} from 'react-bootstrap';

function File() {
    const [inputText, setInputText] = useState([]); // State to store user input
    const [predictions, setPredictions] = useState([]); // State to store model predictions
  
    const handleInputChange = (event) => {
     
        setInputText(event.target.value);
    };
  
    const handlePredictClick = async () => {
        // Make a POST request to the API endpoint
        try {
          const response = await axios.post('http://127.0.0.1:8000/predict', { "Textos_espanol": [inputText] });
          console.log(response.data);
          setPredictions(response.data); // Update state with model predictions
        } catch (error) {
          console.error('Error making API request:', error);
        }
      };
  
    return (
    <Container>
     <Row className='justify-content-md-center'>
    
        <h1>Modelo de Machine Learning</h1>
      </Row>

    <Row>
        <Col>
        <Form>
        <input
          type="text"
          placeholder="Enter text in Spanish"
          value={inputText}
          onChange={handleInputChange}
        />
        </Form>
        <Button onClick={handlePredictClick}>Predict</Button>
        </Col>

        <Col>

    
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
        </Col>
    </Row>
    </Container>
     
    );
  }
  
  export default File;
  