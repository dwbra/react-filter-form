import { useState } from 'react';
import CategoriesFilter from './CategoriesFilter';
import LocationFilter from './LocationFilter';
import DateFilter from './DateFilter';
import Button from '@mui/material/Button';
import { useFiltersDispatch } from '../FilterContext';

const Filters = () => {
  const dispatch = useFiltersDispatch();

  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
      touched: false,
    },
  ]);
  const [calendarVisibility, setCalendarVisibility] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

  const handleFormSubmit = e => {
    e.preventDefault();
    setCalendarVisibility(false);
    setButtonActive(false);
    dispatch({ type: 'update', payload: { categories, locations, dates } });
  };

  return (
    <div className="filterForm" style={{ flexWrap: 'wrap' }}>
      <form className="filterForm" onSubmit={handleFormSubmit}>
        <CategoriesFilter categories={categories} setCategories={setCategories} />
        <LocationFilter locations={locations} setLocations={setLocations} />
        <DateFilter
          dates={dates}
          setDates={setDates}
          buttonActive={buttonActive}
          setButtonActive={setButtonActive}
          calendarVisibility={calendarVisibility}
          setCalendarVisibility={setCalendarVisibility}
        />
        <Button variant="contained" type="submit">
          Apply Filter
        </Button>
      </form>
      <Button
        onClick={() => {
          setCalendarVisibility(false);
          setButtonActive(false);
          setCategories([]);
          setLocations([]);
          setDates([
            {
              startDate: new Date(),
              endDate: new Date(),
              key: 'selection',
              touched: false,
            },
          ]);
          dispatch({ type: 'reset' });
        }}
        variant="outlined"
        type="button"
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
