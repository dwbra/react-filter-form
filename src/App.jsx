import { useState, useEffect } from 'react';
import './App.css';
import { FiltersProvider } from './FilterContext';
import mockData from './mock/mockData';

import Filters from './components/Filters';
import Results from './components/Results';

function App() {
  const [assetsData, setAssetsData] = useState([]);

  // Initial filter values
  const initialFilters = {
    categories: [],
    locations: [],
    dates: [],
  };

  useEffect(() => {
    setAssetsData(mockData);
  }, []);

  return (
    <FiltersProvider initialFilters={initialFilters}>
      <Filters />
      <Results assets={assetsData} maxResults={12} />
    </FiltersProvider>
  );
}

export default App;
