import PropTypes from 'prop-types';
import { DateRange } from 'react-date-range';
import { Button } from '@mui/material';
// theme css file
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';

const DateFilter = ({ dates, setDates, buttonActive, setButtonActive, calendarVisibility, setCalendarVisibility }) => {
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   console.log(counter);
  // });

  const handleOnChange = ranges => {
    const { selection } = ranges;
    const touchedSelection = { ...selection, touched: true };
    setDates([touchedSelection]);
    // setCounter(counter + 1);
    // if (counter === 1) {
    //   setCalendarVisibility(false;
    //   setCounter(0);
    // }
  };

  return (
    <div className="dateFilter">
      <Button
        variant={buttonActive ? 'outlined' : 'contained'}
        type="button"
        onClick={() => {
          setCalendarVisibility(calendarVisibility === false);
          setButtonActive(buttonActive === false);
        }}
      >
        Date
      </Button>
      {calendarVisibility && (
        <div className="dateFilterDateRange">
          <DateRange
            onChange={handleOnChange}
            months={2}
            ranges={dates}
            direction="horizontal"
            minDate={new Date()}
            showDateDisplay={false}
          />
        </div>
      )}
    </div>
  );
};

export default DateFilter;

DateFilter.propTypes = {
  dates: PropTypes.array,
  setDates: PropTypes.func,
  buttonActive: PropTypes.bool,
  setButtonActive: PropTypes.func,
  calendarVisibility: PropTypes.bool,
  setCalendarVisibility: PropTypes.func,
};
