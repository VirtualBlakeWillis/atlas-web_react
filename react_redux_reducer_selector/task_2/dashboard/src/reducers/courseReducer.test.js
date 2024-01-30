import courseReducer from "./courseReducer";
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSES_SUCCESS } from "../actions/courseActionTypes";

describe("courseReducer", () => {
	it('default state returns an empty array', () => {
		const newState = courseReducer([], {});
		expect(newState).toEqual([]);
	});
	it('FETCH_COURSES_SUCCESS returns the correct state', () => {
		const action = {
			type: FETCH_COURSES_SUCCESS,
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
		const expectedState = [
			{
				id: 1,
				title: "Course 1",
				isSelected: false
			},
			{
				id: 2,
				title: "Course 2",
				isSelected: false
			},
			{
				id: 3,
				title: "Course 3",
				isSelected: false
			}
		];
		const newState = courseReducer([], action);
		expect(newState).toEqual(expectedState);
	});

	it('SELECT_COURSE returns the data with the correct course updated', () => {
		const action = {
			type: SELECT_COURSE,
			index: 1
		};
		const state = [
			{
				id: 1,
				title: "Course 1",
				isSelected: false
			},
			{
				id: 2,
				title: "Course 2",
				isSelected: false
			},
			{
				id: 3,
				title: "Course 3",
				isSelected: false
			}
		];
		const expectedState = [
			{
				id: 1,
				title: "Course 1",
				isSelected: false
			},
			{
				id: 2,
				title: "Course 2",
				isSelected: true
			},
			{
				id: 3,
				title: "Course 3",
				isSelected: false
			}
		];
		const newState = courseReducer(state, action);
		expect(newState).toEqual(expectedState);
	});

	it("UNSELECT_COURSE returns the data with the correct course updated", () => {
		const action = {
			type: UNSELECT_COURSE,
			index: 1
		};
		const state = [
			{
				id: 1,
				title: "Course 1",
				isSelected: false
			},
			{
				id: 2,
				title: "Course 2",
				isSelected: true
			},
			{
				id: 3,
				title: "Course 3",
				isSelected: false
			}
		];
		const expectedState = [
			{
				id: 1,
				title: "Course 1",
				isSelected: false
			},
			{
				id: 2,
				title: "Course 2",
				isSelected: false
			},
			{
				id: 3,
				title: "Course 3",
				isSelected: false
			}
		];
		const newState = courseReducer(state, action);
		expect(newState).toEqual(expectedState);
	});
});