import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

it('getFullYear returns correct year', () => {
  const year = getFullYear();
  expect(year).toBe(new Date().getFullYear());
});

it('getFooterCopy returns correct string when true', () => {
  const string = getFooterCopy(true);
  expect(string).toBe('Holberton School');
});

it('getFooterCopy returns correct string when false', () => {
  const string = getFooterCopy(false);
  expect(string).toBe('Holberton School main dashboard');
});

it('getLatestNotification returns correct string', () => {
  const string = getLatestNotification();
  expect(string).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
