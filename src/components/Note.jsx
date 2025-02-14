import { AiOutlineClose } from 'react-icons/ai';

function Note({ id, note, setNote }) {
  const handleDeleteCard = () => {
    setNote(note.filter(item => item !== id));
  };

  return (
    <div className="border border-black">
      <button onClick={handleDeleteCard}>
        <AiOutlineClose size={20} />
      </button>
    </div>
  );
}

export default Note;
