import actionTypes from "./courseActionTypes";
import { useDispatch } from "react-redux";

export const selectCourse = (index) => {
  return {
    type: actionTypes.SELECT_COURSE,
    index
  }
}
export const unSelectCourse = (index) => {
  return {
    type: actionTypes.UNSELECT_COURSE,
    index
  }
}

export const boundSelectCourse = (index) => useDispatch(selectCourse(index));
export const boundUnSelectCourse = (index) => useDispatch(unSelectCourse(index));