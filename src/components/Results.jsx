import { useFilters } from '../FilterContext';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/base';
import Card from './Card';

/**
 * A helper function to determine if a string value exists in both the state and data.
 * @param {Array} array1 The first array containing data
 * @param {Array} array2 The second array containing data
 * @returns {Boolean}
 */
const hasIntersection = (array1, array2) => array1?.some(item => array2.includes(item));

const Results = ({ maxResults, assets }) => {
  const { categories, locations, dates } = useFilters();
  const [currentMax, setCurrentMax] = useState(maxResults);

  const validTypes = ['calendar_event_single', 'calendar_event_recurring'];

  const dateTouched = dates[0]?.touched;
  const userStartDate = new Date(dates[0]?.startDate);
  const userEndDate = new Date(dates[0]?.endDate);
  const validDate = current => current >= userStartDate && current <= userEndDate;

  const results = assets.reduce((acc, curr) => {
    // If acc has reached maxResults number return
    if (acc.length > currentMax) return acc;

    // If type is not valid return acc
    if (!validTypes.includes(curr.type)) return acc;

    // If categories filter is set but asset does not have a category that features return acc
    if (categories.length && !hasIntersection(curr.metadata?.['event.categories'], categories)) {
      return acc;
    }

    // If locations filter is set but asset does not have a location that features return acc
    if (locations.length && !hasIntersection(curr.metadata?.['event.location'], locations)) {
      return acc;
    }

    // If validDate = true, the asset start date lies within the range of the dates that the user has entered.
    if (dateTouched && !validDate(new Date(curr.attributes?.start_date))) {
      return acc;
    }

    return [...acc, curr];
  }, []);

  results.sort((a, b) => {
    const dateA = a?.attributes?.start_date;
    const dateB = b?.attributes?.start_date;
    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }

    return 0;
  });

  return (
    <>
      <div className="cardRows">
        {results?.length > 0 &&
          results.map(({ url, thumbnail, name: title, type, id, metadata, attributes }) => (
            <Card
              url={url}
              thumbnail={thumbnail}
              startDate={attributes.start_date}
              endDate={attributes.end_date}
              title={title}
              description={metadata.description}
              key={id}
              type={type}
              frequency={attributes.frequency || null}
            />
          ))}
      </div>
      <Button
        variant="contained"
        type="button"
        className="resultsButton"
        disabled={currentMax > results?.length ? true : false}
        onClick={() => setCurrentMax(currentMax + 12)}
      >
        {results?.length > currentMax ? 'Show more results' : 'No more results'}
      </Button>
    </>
  );
};

Results.propTypes = {
  maxResults: PropTypes.number,
  assets: PropTypes.array,
};
export default Results;
