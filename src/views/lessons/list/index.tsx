import { Box, ListItemButton, Typography } from "@mui/material";
import React from "react";
import Header from "../../../components/Header";
import useFetch from '../../../hooks/useFetch';
import { navigate } from '@reach/router';

import { ILessons } from '../../../types/lessons.types';

const LessonList = () => {
  const { data } = useFetch<Array<ILessons>>(`${process.env.REACT_APP_API_URL}/lessons/`)

  return (
    <Box>
      <Header title="List of Lessons" />
      {data && 
        data.map((d, i) => (
          <ListItemButton key={i} onClick={() => navigate(`/${d.id}`)}>
            <Typography>{d.title}</Typography>
          </ListItemButton>
        ))
      }
    </Box>
  )
}

export default LessonList;