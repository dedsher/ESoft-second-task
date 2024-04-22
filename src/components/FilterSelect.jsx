import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { filters } from "@data/filters";

const FilterSelect = ({ currentFilter, onSelectChange }) => {
  return (
    <div className="portfolio__filter">
      Показать компетенции с уровнем знания
      <FormControl sx={{ m: 1, minWidth: 80, margin: 0 }} size="small">
        <Select
          value={currentFilter}
          onChange={(event) => onSelectChange(event.target.value)}
        >
          {filters.map((filter, index) => (
            <MenuItem key={index} value={filter}>
              {filter}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterSelect;
