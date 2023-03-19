import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import "./style.css"; 

function SearchForm() {  
  return (
    <div className="container" id="searchForm">
      <h2>Search for your favourite actor</h2>
      <InputGroup size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <Button variant="primary" id="searchFormBtn">Search</Button>{' '}

    </div>
  );
}

export default SearchForm;

