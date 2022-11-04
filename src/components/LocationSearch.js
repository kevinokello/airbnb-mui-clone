import React from 'react';

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// react icons
import { IoSearchCircleSharp } from 'react-icons/io5';
import { pink } from '@mui/material/colors';
import { IconButton, InputBase } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';

const choices = [
  { id: 1, text: 'Anywhere' },
  { id: 2, text: 'Any week' },
  { id: 3, text: 'Add guest', withIcon: true },
];

const LocationSearch = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 500,
        border: "1px solid #ccc",
        borderRadius: 20,
      }}
    >
      <IconButton sx={{ p: "10px" }}>
        <FaSearch />
      </IconButton>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Where to?" />
      <IconButton type="submit" sx={{ p: "10px" }}>
        <VscSettings />
      </IconButton>
    </Paper>
  );
};

export default LocationSearch;
