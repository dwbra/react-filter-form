import PropTypes from 'prop-types';
import { format, addDays } from 'date-fns';

const Card = ({ url, thumbnail, startDate, endDate, title, description, type, frequency }) => {
  const startDay = format(new Date(startDate), 'dd-MMM').toUpperCase().split('-').join(' ');
  let recurringDay = null;

  const parsedDate = new Date(startDate);

  // Need to add more recurring patterns if fleshed out.
  if (frequency !== null) {
    switch (frequency) {
      case 'WEW': {
        frequency = 'week';
        break;
      }
      default:
        return frequency;
    }
  }

  const dateIsPastStartDate = (current, frequency) => {
    const s = new Date(startDate);
    const e = new Date(endDate);
    if (current >= s && current <= e) {
      if (frequency === 'week') {
        recurringDay = addDays(parsedDate, 7);
        recurringDay = format(new Date(recurringDay), 'dd-MMM').toUpperCase().split('-').join(' ');
      }

      if (frequency === 'fortnight') {
        recurringDay = addDays(parsedDate, 14);
      }

      // Needs more work to figure out how many days in a month etc.
      if (frequency === 'monthly') {
        recurringDay = addDays(parsedDate, 30);
      }
    }
  };

  dateIsPastStartDate(new Date(), frequency);

  return (
    <div className="card ">
      <a href={url}>
        <img
          src={thumbnail.url || 'https://placehold.co/600x400?text=Placeholder+Image'}
          className="card-img-top"
          alt={thumbnail.alt || thumbnail.title}
        />
        <div className="card-body">
          <time dateTime={new Date(startDate)} className="card-date">
            {type !== 'calendar_event_recurring' ? startDay : recurringDay}
          </time>
          <h5 className="card-title">{title}</h5>
          {type === 'calendar_event_recurring' && (
            <p>{frequency !== null ? `This event occurs every ${frequency}.` : ''}</p>
          )}
          <p className="card-text">{description}</p>
          <div className="card-cta">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="24" viewBox="0 0 33 24">
              <path
                fill="currentColor"
                d="M31.8 12.8l.7-.8-.7-.8V11h-.3L20.8.3l-1.4 1.4 9.3 9.3H.5v2h28.2l-9.3 9.3 1.4 1.4L31.5 13h.3z"
              ></path>
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;

Card.propTypes = {
  url: PropTypes.string,
  thumbnail: PropTypes.object,
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.array,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  type: PropTypes.string,
  frequency: PropTypes.string,
};
