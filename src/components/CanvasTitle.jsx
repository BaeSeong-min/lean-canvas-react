import { FaCheck, FaEdit } from 'react-icons/fa';

function CanvasTitle() {
  return (
    <div className="flex items-center justify-center mb-10">
      {/* {
        <div className="flex items-center">
          <input
            type="text"
            className="text-4xl font-bold text-center text-blue-600 bg-transparent border-b-2 border-blue-600 focus:outline-none"
          />
          <button
            className="ml-2 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            aria-label="Save title"
          >
            <FaCheck />
          </button>
        </div>
      } */}

      <h1 className="text-4xl font-bold text-center ">Lean Canvas</h1>
      <button
        className="ml-2 p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
        aria-label="Edit title"
      >
        <FaEdit />
      </button>
    </div>
  );
}

export default CanvasTitle;
