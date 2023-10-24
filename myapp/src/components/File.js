import React, { useState } from 'react';
import axios from 'axios';
import { Form , Button, Row, Container, Col} from 'react-bootstrap';

function File() {
    const [inputText, setInputText] = useState([]); // State to store user input
    const [predictions, setPredictions] = useState([]); // State to store model predictions
    const [selectedFile, setSelectedFile] = useState(null);
    const [response, setResponse] = useState(null);
    const [selectedFileType, setSelectedFileType] = useState();

    const handleInputChange = (event) => {
     
        setInputText(event.target.value);
    };

    const handleFileTypeChange = (event) => {
      setSelectedFileType(event.target.value);
    };
  
    const handlePredictClick = async () => {
        // Make a POST request to the API endpoint
        try {
          const response = await axios.post('http://127.0.0.1:8000/test_error', { "Textos_espanol": [inputText] });
          console.log(response.data);
          setPredictions(response.data); // Update state with model predictions
        } catch (error) {
          console.error('Error making API request:', error);
        }
      };

      const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };

      const handleUpload = () => {
        if (selectedFile) {
          const formData = new FormData();
          formData.append('file', selectedFile);
          if (selectedFileType === "csv") {
          axios.post('http://127.0.0.1:8000/uploadCsv', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((res) => {
            setResponse(res.data);
          })
          .catch((error) => {
            console.error(error);
          });
        }
        if (selectedFileType === "excel") {
          axios.post('http://127.0.0.1:8000/uploadExcel', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((res) => {
            setResponse(res.data);
          })
          .catch((error) => {
            console.error(error);
          });
        }
        }
      };
  
    return (
    <Container>
     <Row className='justify-content-md-center'>
    
        <h2>Modelo de predicciones</h2>
      </Row>

    <Row>
      <h3>Prediciones individuales</h3>
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
    <Row>
    <Form.Check
            inline
            label="CSV"
            name="group1"
            type="radio"
            value = "csv"
            onChange={handleFileTypeChange}
          />
          <Form.Check
            inline
            label="Excel"
            name="group1"
            type="radio"
            value="excel"
            onChange={handleFileTypeChange}
          />
      <h3>Predicciones teniendo como input archivos</h3>
      <input type="file" onChange={handleFileChange} />
  
      <Button onClick={handleUpload}>Upload and Send POST Request</Button>
      {response && (
        <div>
          <h2>Response Data:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>)}

      {selectedFileType === "csv" ? (
        <h1>CSV</h1>
      ) : (<h1>Excel</h1>)}
    </Row>
    </Container>
     
    );
  }
  
  export default File;
  