import uiReducer from './uiReducer'
import courseReducer from './courseReducer'
import notificationReducer from './notificationReducer'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  ui: uiReducer,
  courses: courseReducer,
  notifications: notificationReducer
});

export default rootReducer;