import React, { useEffect, useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Box from '@mui/joy/Box';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';



export default function Search() {
    const [alignment, setAlignment] = React.useState('web');
    const [searchTerm, setSearchTerm] = useState('');
    const [age, setAge] = React.useState('');
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setAge(event.target.value);
  };
 
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <>
    <div className='flex justify-center '>
  <div className='bg-white'>  <ToggleButtonGroup
  color="secondary"
 
  value={alignment}
  exclusive
  onChange={handleChange}
  aria-label="Platform"
>
  <ToggleButton  value="buy">Buy</ToggleButton>
  <ToggleButton  value="rent">Rent</ToggleButton>
  <ToggleButton value="sold">Sold</ToggleButton>
</ToggleButtonGroup></div>
    </div>
    <div className='bg-black p-6 '>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-around items-center gap-6'>
<div>
<Box  >
      <Select size='lg'
        defaultValue="house"
        slotProps={{
          listbox: {
            placement: 'bottom-start',
            sx: { width: 140 },
          },
        }}
      >
        <Option value="house">Houses</Option>
        <Option value="office">Offices</Option>
        <Option value="studio">
          Studio
        </Option>
        <Option value="apartments">Apartments</Option>
      </Select>
    
    </Box></div>

<div className=''><form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-[10px]  flex items-center'
        >
          <input
            type='text'
            placeholder='Search'
            className='bg-transparent focus:outline-none w-80 '
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
        </form></div>
<div className='flex justify-center'>
    <button className='gradient px-5 lg:px-8 py-[10px]  flex items-center '> <FaSearch size={20} className='text-slate-600' /><span className='px-3'>Search</span>
    </button> 
    
    </div>
</div>
    </div>
    </>
  )
}
