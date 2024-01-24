import actionTypes from "./courseActionTypes";

const selectCourse = (index) => {
  return {
    type: actionTypes.SELECT_COURSE,
    index
  }
}
const unSelectCourse = (index) => {
  return {
    type: actionTypes.UNSELECT_COURSE,
    index
  }
}

export { selectCourse, unSelectCourse };