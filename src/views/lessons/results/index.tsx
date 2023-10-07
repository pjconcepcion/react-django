import React from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { ILessons } from '../../../types/lessons.types';
import useFetch from '../../../hooks/useFetch';
import Header from '../../../components/Header';

const LessonResults = ({ id } : { id: number }) => {
  const { data } = useFetch<ILessons>(`${process.env.REACT_APP_API_URL}/lessons/${id}/`);
  return (
    <Box>
      <Header
        title="Results"
        backRoute={`/${id}`}
      />
      <Box component={Paper} mt={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}> User </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}> Score </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}> Result </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.results.map((r, i) => (
              <TableRow key={i}>
                <TableCell>{r.user?.username? r.user.username : <i>Anonymous</i>}</TableCell>
                <TableCell>{r.score}</TableCell>
                <TableCell>{r.is_passed? 'Passed' : 'Failed'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  )
}

export default LessonResults;