import React, { useState } from 'react';
import axios from 'axios';
import { Form , Button, Row, Container} from 'react-bootstrap';

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
    
        <h2>Modelo de predicciones</h2>
      </Row>

     <Row id="predictions">
      <h3>Prediciones individuales</h3>

        <Form>
      
        <Form.Label>Texto a predecir</Form.Label>
        <Form.Control as="textarea" rows={3} value={inputText} onChange={handleInputChange} />
        </Form>
        <Button className='m-4' style={{backgroundColor:"#1ca7df"}} onClick={handlePredictClick}>Predict</Button>
       
      </Row>
 
    <Row>
    {predictions.length > 0 && (
          <Row>
            <h2>Predictions:</h2>
          
        
              {predictions.map((prediction, index) => (
                <h2 key={index}>{prediction.sdg}</h2>
              ))}
           
          </Row>
        
        )}
    </Row> 

    </Container>
     
    );
  }
  
  export default File;
  