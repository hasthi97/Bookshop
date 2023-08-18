import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

function Calender() {
  return (

    <div className='cal'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
            </LocalizationProvider>
    </div>
  )
}

export default Calender