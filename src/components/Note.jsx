import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
import { useState, useRef, useEffect } from 'react';

const Note = ({ id, onRemoveNote }) => {
  const colorOptions = [
    'bg-yellow-300',
    'bg-pink-300',
    'bg-blue-300',
    'bg-green-300',
  ];
  // Math.random()은 0 이상 1 미만의 값을 반환한다.
  // Math.floor()는 인자로 받은 숫자보다 작거나 같은 정수 중 가장 큰 정수를 반환한다.
  // 따라서 0 1 2 3
  const randomIndex = Math.floor(Math.random() * colorOptions.length);

  const [color, setColor] = useState(colorOptions[randomIndex]);

  const [isEditing, setIsEditing] = useState(false);

  const textareaRef = useRef(null);
  const [content, setContent] = useState('');
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  }, [content]);

  return (
    <div
      className={`p-4 ${color} relative max-h-[32rem] overflow-hidden`}
      onClick={() => setIsEditing(true)}
    >
      <div className="absolute top-2 right-2">
        {isEditing ? (
          <button
            aria-label="Check Note"
            className="text-gray-700"
            onClick={e => {
              e.stopPropagation();
              setIsEditing(false);
            }}
          >
            <AiOutlineCheck size={20} />
          </button>
        ) : (
          <button
            aria-label="Close Note"
            className="text-gray-700"
            onClick={() => {
              onRemoveNote(id);
            }}
          >
            <AiOutlineClose size={20} />
          </button>
        )}
      </div>
      <textarea
        className={`w-full h-full bg-transparent resize-none border-none focus:outline-none text-gray-900 overflow-hidden`}
        aria-label="Edit Note"
        placeholder="메모를 작성하세요."
        style={{ height: 'auto', minHeight: '8rem' }}
        readOnly={!isEditing}
        ref={textareaRef}
        value={content}
        onChange={e => {
          setContent(e.target.value);
        }}
      />
      {isEditing && (
        <div className="flex space-x-2">
          {colorOptions.map((option, index) => (
            <button
              key={index}
              className={`w-6 h-6 rounded-full cursor-pointer outline outline-gray-50 ${option}`}
              aria-label={`Change color to ${option}`}
              onClick={() => setColor(option)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Note;
