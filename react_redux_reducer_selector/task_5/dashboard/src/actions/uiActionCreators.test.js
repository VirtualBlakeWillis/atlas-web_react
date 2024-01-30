import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest } from "./uiActionCreators";
import configureMockStore from 'redux-mock-store';
import fetchMock from 'jest-fetch-mock';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);



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
  describe("loginRequest", () => {
    it("returns the correct action", () => {
      fetchMock.get('http://localhost:3000/login-success.json', 200);
      const store = mockStore({});
      store.dispatch(loginRequest("test@test", "test")).then(() => {
        expect(store.getActions()[0]).toEqual({
          type: "LOGIN",
          user: {
            email: "test@test",
            password: "test"
          }
        });
      }
      );
      fetchMock.reset();
    
    });
  });
});
