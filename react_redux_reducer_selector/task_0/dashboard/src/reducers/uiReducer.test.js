import uiReducer from "./uiReducer";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/uiActionTypes";

describe("uiReducer", () => {
  it("verifies that the default state returns the expected object", () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });
  it("returns the default state when no valid actions are provided", () => {
    const SELECT_COURSE = "SELECT_COURSE";
    const state = uiReducer(undefined, { type: SELECT_COURSE });
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });
  it("returns the correct state when action 'DISPLAY_NOTIFICATION_DRAWER' is passed", () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    });
  });
});