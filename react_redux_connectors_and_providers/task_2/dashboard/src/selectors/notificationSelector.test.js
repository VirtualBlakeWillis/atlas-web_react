import { filterTypeSelected, getNotifications, getUnreadNotifications } from "./notificationSelector";
import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';


describe('Test notificationSelector.js', () => {
  it('test filterTypeSelected', () => {
    const state = {
      filter: 'DEFAULT'
    };
    const result = filterTypeSelected(state);
    expect(result).toEqual('DEFAULT');
  });
  it('test getNotifications', () => {
    const state = {
      notifications: {
        '1': {
          guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
          isRead: false,
          type: 'urgent',
          value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
        }
      }
    };
    const result = getNotifications(state);
    expect(result).toEqual(Map(state.notifications));
  });
  it('test getUnreadNotifications', () => {
    const state = {
      notifications: {
        '1': {
          guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
          isRead: false,
          type: 'urgent',
          value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
        }
      }
    };
    const result = getUnreadNotifications(state);
    expect(result).toEqual([state.notifications['1']]);
  });
});