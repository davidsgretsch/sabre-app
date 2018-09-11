
import { playerListsSelector } from './playerSelector';
import mockdate from 'mockdate';
import moment from 'moment';

describe('playerListsSelector', () => {
  beforeAll(() => {
    mockdate.set(moment('2018-09-07'));  
  });

  afterAll(() => {
    mockdate.reset();
  });

  it('should return all the football players', () => {

    const store = {
      filters: { playerName: 'ROMELU LUKAKU', positionPlayer: 'Centre-Forward', agePlayer: 25 },
      players: {
        list: [{
          name: 'Romelu Lukaku',
          position: 'Centre-Forward',
          nationality: 'Belgium',
          dateOfBirth: '1993-05-13',
        },
        {
          name: 'Zlatan Ibrahimovic',
          position: 'Centre-Forward',
          nationality: 'Sweden',
          dateOfBirth: '1981-10-03',
        }]
      }
    };

    const expectedResult = [
      {
        name: 'Romelu Lukaku',
        position: 'Centre-Forward',
        nationality: 'Belgium',
        age: 25,
      }
    ];

    expect(playerListsSelector(store)).toEqual(expectedResult);
  });
});
