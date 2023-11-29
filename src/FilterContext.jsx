/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react';

const FiltersContext = createContext(null);

const FiltersDispatchContext = createContext(null);

const FiltersProvider = ({ children, initialFilters }) => {
  const [filters, dispatch] = useReducer(getFiltersReducer(initialFilters), initialFilters);

  return (
    <FiltersContext.Provider value={filters}>
      <FiltersDispatchContext.Provider value={dispatch}>{children}</FiltersDispatchContext.Provider>
    </FiltersContext.Provider>
  );
};

const useFilters = () => useContext(FiltersContext);

const useFiltersDispatch = () => useContext(FiltersDispatchContext);

const getFiltersReducer =
  initialFilters =>
  (state, { type, payload }) => {
    switch (type) {
      case 'set': {
        return payload;
      }
      case 'update': {
        return { ...state, ...payload };
      }
      case 'reset': {
        return { ...initialFilters };
      }
      default: {
        throw Error('Unknown action: ' + type);
      }
    }
  };

export { FiltersProvider, useFilters, useFiltersDispatch };
