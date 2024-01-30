import { selectCourse, unSelectCourse } from "./courseActionCreators";

describe("courseActionCreators", () => {
  describe("selectCourse", () => {
    it("returns the correct action", () => {
      const action = selectCourse(1);
      const expected = {
        type: "SELECT_COURSE",
        index: 1
      }
      expect(action).toEqual(expected);
    });
  });
  describe("unSelectCourse", () => {
    it("returns the correct action", () => {
      const action = unSelectCourse(1);
      const expected = {
        type: "UNSELECT_COURSE",
        index: 1
      }
      expect(action).toEqual(expected);
    });
  });
});