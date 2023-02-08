import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Alert } from '@mui/material';
import {useState} from "react";
import './SelectStation.css';

function SelectStation() {
  const [station, setStation] = useState('');
  const handleChange = (event) => {
    setStation(event.target.value);
  };
  return (
    <div className='form-div'>
    <FormControl className='form' sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Station</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={station}
        label="Station"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Sain Leonard</MenuItem>
        <MenuItem value={20}>Anju</MenuItem>
        <MenuItem value={30}>Laval</MenuItem>
      </Select>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </FormControl>
    </div>
  );
}

export default SelectStation;