import { Modal } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard() {
  return (
    <div className='col-lg-4 col-md-6 col-sm-12'>
    <Card style={{ width: '18rem' ,margin:'5px',display:'flex',padding:'5px'}}>
      <Card.Title style={{display:'flex',justifyContent:'center'}}>Movie Name</Card.Title>
      <Card.Img variant="top" src="holder.js/100px180" style={{display:'flex',justifyContent:'center'}} />
      <Card.Body style={{display:'flex',flexDirection:'column'}}>
        {/* <Card.Title style={{display:'flex',justifyContent:'center'}}>Movie Name</Card.Title> */}
        <Button variant="primary" style={{margin:'1px',padding:'1px'}}>Rate Movie</Button>
        <Button variant="primary" style={{margin:'1px',padding:'1px'}}>Watch trailer</Button>        
      </Card.Body>
    </Card>
    </div>
  );
}

export default MovieCard;