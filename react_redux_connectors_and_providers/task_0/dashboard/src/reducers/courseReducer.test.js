import courseReducer from "./courseReducer";
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import { Map } from 'immutable';
describe("courseReducer", () => {
	it('default state returns an empty array', () => {
		const newState = courseReducer(undefined, {});
		expect(newState.toJS()).toEqual({});
	});
	it('FETCH_COURSE_SUCCESS returns the correct state', () => {
		const action = {
			type: FETCH_COURSE_SUCCESS,
			data: [
				{
					id: 1,
					title: "Course 1",
				},
				{
					id: 2,
					title: "Course 2",
				},
				{
					id: 3,
					title: "Course 3",
				}
			]
		};
		const expectedState = {
			"entities": {
				"courses": {
					"1": {"id": 1, "title": "Course 1", "isSelected": false}, 
				"2": {"id": 2, "title": "Course 2", "isSelected": false}, 
				"3": {"id": 3, "title": "Course 3", "isSelected": false}
			}},
			"result": [1, 2, 3]
		}
		const newState = courseReducer(undefined, action);
		expect(newState.toJS()).toEqual(expectedState);
	});

	it('SELECT_COURSE returns the data with the correct course updated', () => {
		const action = {
			type: SELECT_COURSE,
			index: 1
		};
		const state = Map({
			"entities": {
				"courses": {
					"1": {"id": 1, "title": "Course 1", "isSelected": false}, 
				"2": {"id": 2, "title": "Course 2", "isSelected": false}, 
				"3": {"id": 3, "title": "Course 3", "isSelected": false}
			}},
			"result": [1, 2, 3]
		});
		const expectedState = {
			"entities": {
				"courses": {
					"1": {"id": 1, "title": "Course 1", "isSelected": true}, 
				"2": {"id": 2, "title": "Course 2", "isSelected": false}, 
				"3": {"id": 3, "title": "Course 3", "isSelected": false}
			}},
			"result": [1, 2, 3]
		}
		const newState = courseReducer(state, action);
		expect(newState.toJS()).toEqual(expectedState);
	});

	it("UNSELECT_COURSE returns the data with the correct course updated", () => {
		const action = {
			type: UNSELECT_COURSE,
			index: 1
		};
		const state = Map({
			"entities": {
				"courses": {
					"1": {"id": 1, "title": "Course 1", "isSelected": true}, 
				"2": {"id": 2, "title": "Course 2", "isSelected": false}, 
				"3": {"id": 3, "title": "Course 3", "isSelected": false}
			}},
			"result": [1, 2, 3]
		});
		const expectedState = {
			"entities": {
				"courses": {
					"1": {"id": 1, "title": "Course 1", "isSelected": false}, 
				"2": {"id": 2, "title": "Course 2", "isSelected": false}, 
				"3": {"id": 3, "title": "Course 3", "isSelected": false}
			}},
			"result": [1, 2, 3]
		}
		const newState = courseReducer(state, action);
		expect(newState.toJS()).toEqual(expectedState);
	});
});