import { getAge } from './utils';
import mockdate from 'mockdate';
import moment from 'moment';

describe('getAge', () => {
  beforeAll(() => {
    mockdate.set(moment('2018-09-07'));  
  });

  afterAll(() => {
    mockdate.reset();
  });

  it('should return the years passed since the date received as parameter', () => {
    expect(getAge('1992-10-12')).toEqual(25);
  });
});
