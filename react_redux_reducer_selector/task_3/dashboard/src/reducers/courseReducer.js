import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";



export default function courseReducer(state = [], action) {
	switch (action.type) {
		case FETCH_COURSE_SUCCESS:
			console.log(action)
			return action.data.map((course) => {
				return {
					...course,
					isSelected: false
				}
			});
		
		case SELECT_COURSE:
			return state.map((course, index) => {
				if (index === action.index) {
					return {
						...course,
						isSelected: true
					}
				}
				return course;
			});
		
		case UNSELECT_COURSE:
			return state.map((course, index) => {
				if (index === action.index) {
					return {
						...course,
						isSelected: false
					}
				}
				return course;
			});
		default:
			return state;
	}
}
