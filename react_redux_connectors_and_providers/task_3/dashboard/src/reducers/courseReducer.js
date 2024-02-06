import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import { normalizeCourses } from "../schema/courses";
import { Map } from 'immutable';

export default function courseReducer(state = Map({}), action) {
	switch (action.type) {
		case FETCH_COURSE_SUCCESS:
			const newData = action.data.map(course => {
				course.isSelected = false;
				return course;
			});
			const newState = state.merge(normalizeCourses(newData));
			return newState;
		
		case SELECT_COURSE:
			return state.setIn(['entities', 'courses', action.index, 'isSelected'], true);
		
		case UNSELECT_COURSE:
			return state.setIn(['entities', 'courses', action.index, 'isSelected'], false);
		default:
			return state;
	}
}
