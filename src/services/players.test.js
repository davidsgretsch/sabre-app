import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { API_URL } from '../constants';
import { getPlayers } from './players';

const mock = new MockAdapter(axios);

describe('getPlayers', () => {
  let result;

  const response = [
    { name: 'Zlatan Ibrahimovic', dateOfBirth: '1981-10-03', nationality: 'Sweden', position: 'Centre-Forward' },
    { name: 'Paul Pogba', dateOfBirth: '1993-03-15', nationality: 'France', position: 'Central Midfield' },
  ];

  beforeEach(async () => {
    mock.onGet(API_URL).reply(200, response);

    result = await getPlayers()
  });

  it('should return data response', () => {
    expect(result).toEqual(response)
  })
});
