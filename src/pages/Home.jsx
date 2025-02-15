import { useEffect, useState } from 'react';
import axios from 'axios';
import CanvasList from '../components/CanvasList';
import SearchBar from '../components/SearchBar';
import ViewToggle from '../components/ViewToggle';
import { getCanvases } from '../api/canvas';
function Home() {
  const [searchText, setSearchText] = useState('');
  const [isGridView, setIsGridView] = useState(true);
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await getCanvases(); // await은 fulfilled된 Promise 객체의 결과값을 반환한다.
    setData(response.data);
  }

  // API로 통신하기 위해서는 useEffect 훅을 사용하자.
  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteItem = id => {
    setData(data.filter(item => item.id !== id));
  };

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  );
  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
          <ViewToggle isGridView={isGridView} setIsGridView={setIsGridView} />
        </div>
        <CanvasList
          filteredData={filteredData}
          isGridView={isGridView}
          searchText={searchText}
          onDeleteItem={handleDeleteItem}
        />
      </div>
    </>
  );
}

export default Home;
