import { ListGroup, Container } from 'react-bootstrap';
import NoteShow from './NoteShow';

const NoteList = ({ notes }) => (
  <Container>
    <h1>All Notes</h1>
    <ListGroup variant="flush">
      { notes.map( n => 
        <NoteShow 
          key={n.id}
          {...n}
        /> 
      )}   
    </ListGroup>
  </Container>
)

export default NoteList;