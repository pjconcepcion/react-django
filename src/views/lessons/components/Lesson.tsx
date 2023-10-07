import React, { ReactNode } from 'react';
import { 
  Box, 
  Card, 
  FormControl, 
  FormControlLabel, 
  FormLabel, 
  FormGroup, 
  Radio,
  Checkbox,
  RadioGroup,
  Divider,
  Typography,
  Stack,
  Button,
  TextField
} from '@mui/material';
import { ILessons, IQuestion } from '../../../types/lessons.types';

const ChoiceWrapper = ({children, type }: {children: ReactNode, type: string }) => {
  return type === 'SINGLE'? (
    <RadioGroup>
      {children}
    </RadioGroup>
  ) : (
    <FormGroup>
      {children}
    </FormGroup>
  )
}

const Question = ({ question }: {question: IQuestion }) => {
  return (
    <Card sx={{ my: 1 }}>
      <Box p={2}>
        <FormControl fullWidth required>
          <FormLabel>{question.question_text}</FormLabel>
          <Divider sx={{ py: 1 }}/>
          <ChoiceWrapper type={question.type}>
            {question.choices.map((c, i) => (
                <FormControlLabel 
                  key={i} 
                  value={c.choice_text}
                  control={question.type === 'SINGLE'? 
                    <Radio name={`question-${question.id}`} value={c.id}/> : 
                    <Checkbox name={`question-${question.id}`} value={c.id}/>
                  }
                  label={c.choice_text}
                />
              ))
            }
          </ChoiceWrapper>
        </FormControl>
      </Box>
    </Card>
  )
}

const Lesson = ({ lesson } : { lesson: ILessons }) => {
  return (
    <Box>
      <TextField name="username" size="small" sx={{ backgroundColor: '#fff' }} label="Username"/>
      <Divider sx={{ my: 2 }}/>
      <Typography>
        {lesson.content}
      </Typography>
      <Box mt={2}>
        {lesson.question.map((q) => <Question key={q.id} question={q} />)}
        <Stack direction="row" pt={2} justifyContent="end" spacing={1}>
          <Button variant='contained' type="submit">
            Submit
          </Button>
          <Button variant='outlined'>
            Clear
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default Lesson;