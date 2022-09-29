import { NoteConsumer } from "../../providers/NoteProvider"
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NoteList from './NoteList';

const Notes = ({ notes, getAllNotes }) => {
  const { catId } = useParams();

  useEffect( () => {
    getAllNotes(catId)
  }, [])

  return (
    <>
      <NoteList 
        notes={notes}
      />
    </>
  )
}

const ConnectedNotes = (props) => (
  <NoteConsumer>
    { value => <Notes {...props} {...value} /> }
  </NoteConsumer>
)

export default ConnectedNotes;