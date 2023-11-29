import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import PropTypes from 'prop-types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const locationOptions = [
  'Anna Bay',
  'Balickera',
  'Boat Harbour',
  'Bobs Farm',
  'Brandy Hill',
  'Butterwick',
  'Campvale',
  'Corlette',
  'Duns Creek',
  'Eagleton',
  'East Seaham',
  'Fern Bay',
  'Ferodale',
  'Fingal Bay',
  'Fishermans Bay',
  'Fullerton Cove',
  'Glen Oak',
  'Heatherbrae',
  'Hinton',
  'Karuah',
  'Kings Hill',
  'Lemon Tree Passage',
  'Mallabula',
  'Medowie',
  'Nelson Bay',
  'Nelsons Plains',
  'One Mile',
  'Osterley',
  'Oyster Cove',
  'Raymond Terrace',
  'Salamander Bay',
  'Salt Ash',
  'Seaham',
  'Shoal Bay',
  'Soldiers Point',
  'Swan Bay',
  'Tanilba Bay',
  'Taylors Beach',
  'Tomago',
  'Twelve Mile Creek',
  'Walllong',
  'Williamtown',
  'Woodville',
];

const LocationFilter = ({ locations, setLocations }) => {
  const handleChange = event => {
    const {
      target: { value },
    } = event;
    setLocations(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="locations-multiple-checkbox-label">Locations</InputLabel>
        <Select
          labelId="locations-multiple-checkbox-label"
          id="locations-multiple-checkbox"
          multiple
          value={locations}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {locationOptions.map(name => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={locations.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default LocationFilter;

LocationFilter.propTypes = {
  locations: PropTypes.array,
  setLocations: PropTypes.func,
};
