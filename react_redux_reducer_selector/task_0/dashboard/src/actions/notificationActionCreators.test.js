import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { markAsAread, setNotificationFilter } from "./notificationActionCreators";

describe("notificationActionCreators", () => {
  describe("markAsAread", () => {
    it("returns the correct action", () => {
      const action = markAsAread(1);
      const expected = {
        type: MARK_AS_READ,
        index: 1
      }
      expect(action).toEqual(expected);
    });
  });
  describe("setNotificationFilter", () => {
    it("returns the correct action", () => {
      const action = setNotificationFilter(NotificationTypeFilters.DEFAULT);
      const expected = {
        type: SET_TYPE_FILTER,
        filter: NotificationTypeFilters.DEFAULT
      }
      expect(action).toEqual(expected);
    });
  });
});
