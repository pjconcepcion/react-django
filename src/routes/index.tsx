import { Router } from '@reach/router'
import React from 'react'

import Lesson from '../views/lessons';
import LessonList from '../views/lessons/list';
import LessonView from '../views/lessons/view';
import LessonResults from '../views/lessons/results';

const Routes = (props) => {
  return (
    <Router>
      <Lesson path="/" {...props}>
        <LessonList path="/" {...props} />
        <LessonView path="/:id" {...props} />
        <LessonResults path="/:id/results" {...props} />
      </Lesson>
    </Router>
  )
}

export default Routes;