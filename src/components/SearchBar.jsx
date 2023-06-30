import React, {  useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { DisplaySettings } from '@mui/icons-material';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const width =window.innerWidth
  console.log(width);
  const handleFocus = () =>{
    const inputShow = document.querySelector('.search-bar')
    if(width <=650){
      inputShow.classList.remove('search-bar')
      inputShow.classList.add('mobile_input')
    } else{
      inputShow.classList.remove('mobile_input')
      inputShow.classList.add('search-bar')
    }
  }
  const onhandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: {md:20},
        border: {md:'1px solid #2a2a2a',xs:'none'},
        boxShadow: 'none',
        backgroundColor:{md:'#222222',xs:'#0f0f0f'},
        lineHeight:'36px',
        display:'flex'
        
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ color: 'white',borderLeft:{md:'1px solid #2a2a2a'},'&:hover':{backgroundColor:'#222222'},marginLeft:'0' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
