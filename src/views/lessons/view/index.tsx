import React, { useState } from 'react';
import { Alert, Box, Button, CircularProgress } from '@mui/material';
import { navigate } from '@reach/router';
import axios, { AxiosResponse } from 'axios';

import Header from '../../../components/Header';
import LessonResult from '../components/LessonResult';
import Lesson from '../components/Lesson';
import useFetch from '../../../hooks/useFetch';
import { ILessons } from '../../../types/lessons.types';


const LessonView = (props) => {
  const { data: lesson } = useFetch<ILessons>(`${process.env.REACT_APP_API_URL}/lessons/${props.id}/`);
  const [lessonResult, setLessonResult] = useState<AxiosResponse>();
  const [error, setError] = useState<string>();

  const onSubmit = async (e) => {
    e.preventDefault();

    const answers = {};
    for (const question of lesson.question) {
      if (question.type === 'MULTIPLE') {
        const checkbox = e.target[`question-${question.id}`];
        for (const check of checkbox) {
          if (check.checked) {
            if (answers[question.id]) {
              answers[question.id].push(check.value)
            } else {
              answers[question.id] = [check.value]
            }
          }
        }
      } else {
        const radioValue = e.target[`question-${question.id}`].value
        if (radioValue) {
          answers[question.id] = [radioValue]
        }
      }
    }

    if (Object.keys(answers).length !== lesson.question.length) {
      return setError('Please answer the required field.');
    }

    const result = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/lessons/${props.id}/submit/`,
      data: {
        answers,
        username: e.target.username.value
      },
      headers: {
        "Content-Type": 'application/json; charset=utf-8'
      }
    });

    if (result.data)
      setLessonResult(result.data);
    else {
      setError(result.data)
    }
  }

  return (
    <Box>
      <Header
        title={lesson ? lesson.title : ''}
        backRoute='/'
        actions={
          <Button
            onClick={() => navigate(`/${props.id}/results`)}
            variant='outlined'
            sx={{
              width: '22%'
            }}
          >
            View Results
          </Button>
        }
      />
      {error &&
        <Alert severity='error' sx={{ my: 2 }}>
          {error}
        </Alert>
      }
      <Box>
        {lesson ?
          <Box sx={{ backgroundColor: '#f2f2f2' }} p={2}>
            {lessonResult ?
              <LessonResult result={lessonResult} /> :
              <form onSubmit={onSubmit}>
                <Lesson lesson={lesson} />
              </form>
            }
          </Box>
          :
          <Box display="flex" justifyContent="center" pt={2}>
            <CircularProgress />
          </Box>
        }
      </Box>
    </Box>
  )
}

export default LessonView;