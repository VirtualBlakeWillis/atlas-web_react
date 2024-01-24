import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";

describe("uiActionCreators", () => {
  describe("login", () => {
    it("returns the correct action", () => {
      const action = login("test@test", "test");
      const expected = {
        type: "LOGIN",
        user: {
          email: "test@test",
          password: "test"
        }
      };
      expect(action).toEqual(expected);
    });
  });
  describe("logout", () => {
    it("returns the correct action", () => {
      const action = logout();
      const expected = {
        type: "LOGOUT"
      };
      expect(action).toEqual(expected);
    });
  });
  describe("displayNotificationDrawer", () => {
    it("returns the correct action", () => {
      const action = displayNotificationDrawer();
      const expected = {
        type: "DISPLAY_NOTIFICATION_DRAWER"
      };
      expect(action).toEqual(expected);
    });
  });
  describe("hideNotificationDrawer", () => {
    it("returns the correct action", () => {
      const action = hideNotificationDrawer();
      const expected = {
        type: "HIDE_NOTIFICATION_DRAWER"
      };
      expect(action).toEqual(expected);
    });
  });
});
