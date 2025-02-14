import { FaPlus } from 'react-icons/fa';
import Note from './Note';
import { useRef, useState } from 'react';

function CanvasCard({ title, isSubTitle = false }) {
  const [note, setNote] = useState([]);
  const noteKey = useRef(0);

  const toggleNote = () => {
    setNote([...note, noteKey.current++]);
  };
  return (
    <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
      <div
        className={`${isSubTitle === false && 'bg-gray-100 border-b border-b-gray-300'} flex items-start justify-between px-3 py-2`}
      >
        <h3 className={`${isSubTitle === false && 'font-bold'}`}>{title}</h3>
        <button
          className="bg-blue-400  text-white p-1.5 text-xs rounded-md"
          onClick={toggleNote}
        >
          <FaPlus />
        </button>
      </div>
      <div className="space-y-3 min-h-32 p-3">
        {note.map(id => (
          <Note key={id} id={id} note={note} setNote={setNote} />
        ))}
      </div>
    </div>
  );
}

export default CanvasCard;
