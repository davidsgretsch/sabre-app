import axios from 'axios';
import { API_URL } from '../constants';

export function getPlayers() {
  return axios(API_URL)
    .then(response => response.data);
}
