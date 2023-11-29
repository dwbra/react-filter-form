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

const categoryOptions = [
  'Libraries',
  'Waste and Recycling',
  'Kids and Family',
  'Youth',
  'Seniors',
  'Exhibitions and Workshops',
  'Festivals and Celebrations',
  'Live Performances',
  'Sports and Lifestyle',
  'Environmental',
];

const CategoriesFilter = ({ categories, setCategories }) => {
  const handleChange = event => {
    const {
      target: { value },
    } = event;
    setCategories(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="categories-multiple-checkbox-label">Categories</InputLabel>
        <Select
          labelId="categories-multiple-checkbox-label"
          id="categories-multiple-checkbox"
          multiple
          value={categories}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {categoryOptions.map(name => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={categories.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CategoriesFilter;

CategoriesFilter.propTypes = {
  categories: PropTypes.array,
  setCategories: PropTypes.func,
};
